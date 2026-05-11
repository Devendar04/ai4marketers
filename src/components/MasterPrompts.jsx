import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useFadeUpAll } from "../hooks/useFadeUp";
import { useScrollFocus } from "../hooks/useScrollFocus";
import { supabase } from "../lib/supabaseClient";

import {
  Search, Copy, Check, X, ChevronRight, ExternalLink,
  TrendingUp, PenTool, Target, Globe, Palette, Sparkles,
  Code2, Play, Film, Layout, FileText, BookOpen,
  FileBarChart, Mail, Loader2,
} from "lucide-react";

import { categoriesData } from "../data/promptsData";

// ── isMobile: read ONCE at module load, not on every card render ──────────────
// Previously every PromptCard read window.innerWidth → forced layout read × N cards
const IS_MOBILE = typeof window !== "undefined" && window.innerWidth < 1024;

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP = {
  TrendingUp:   <TrendingUp   size={18} />,
  PenTool:      <PenTool      size={18} />,
  Globe:        <Globe        size={18} />,
  Target:       <Target       size={18} />,
  Palette:      <Palette      size={18} />,
  Sparkles:     <Sparkles     size={18} />,
  Code2:        <Code2        size={18} />,
  Play:         <Play         size={18} />,
  Film:         <Film         size={18} />,
  Layout:       <Layout       size={18} />,
  FileText:     <FileText     size={18} />,
  BookOpen:     <BookOpen     size={18} />,
  FileBarChart: <FileBarChart size={18} />,
  Mail:         <Mail         size={18} />,
};
const resolveIcon = n => ICON_MAP[n] ?? <Sparkles size={18} />;

// ─── Tool map ─────────────────────────────────────────────────────────────────
const RUN_MAP = {
  marketing:   { url:"https://chatgpt.com",        label:"ChatGPT",    qParam:"q"   },
  copywriting: { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  social:      { url:"https://chatgpt.com",        label:"ChatGPT",    qParam:"q"   },
  strategy:    { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  image:       { url:"https://www.midjourney.com", label:"Midjourney", qParam:null  },
  ai:          { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  youtube:     { url:"https://chatgpt.com",        label:"ChatGPT",    qParam:"q"   },
  reels:       { url:"https://chatgpt.com",        label:"ChatGPT",    qParam:"q"   },
  website:     { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  ppt:         { url:"https://gamma.app",           label:"Gamma",      qParam:null  },
  notes:       { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  assignments: { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  reports:     { url:"https://claude.ai/new",       label:"Claude",     qParam:null  },
  email:       { url:"https://chatgpt.com",        label:"ChatGPT",    qParam:"q"   },
};

// ─── Data builders ────────────────────────────────────────────────────────────
const buildFromSupabase = (rawCats, rawPrompts) =>
  rawCats.map(cat => ({
    ...cat,
    iconName: cat.icon_name,
    icon:     resolveIcon(cat.icon_name),
    prompts:  rawPrompts
      .filter(p => p.category_id === cat.id)
      .sort((a, b) => a.sort_order - b.sort_order),
  }));

const staticCategories = categoriesData.map(cat => ({
  ...cat,
  icon: resolveIcon(cat.iconName),
}));

// ─────────────────────────────────────────────────────────────────────────────
export default function MasterPrompts() {
  const ref = useFadeUpAll();

  const [categories,   setCategories]   = useState(staticCategories);
  const [dbLoading,    setDbLoading]    = useState(true);
  const [isLive,       setIsLive]       = useState(false);
  const [activeId,     setActiveId]     = useState(staticCategories[0]?.id ?? "marketing");
  const [copied,       setCopied]       = useState(null);
  const [search,       setSearch]       = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [toast,        setToast]        = useState(null);

  const drawerScrollRef = useRef(null);

  const showToast = useCallback(msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  }, []);

  // ── Supabase ──────────────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    const [catRes, proRes] = await Promise.all([
      supabase.from("categories").select("*").order("sort_order"),
      supabase.from("prompts").select("*").order("sort_order"),
    ]);
    setDbLoading(false);
    if (catRes.error || proRes.error) { setIsLive(false); return; }
    const built = buildFromSupabase(catRes.data ?? [], proRes.data ?? []);
    if (built.length === 0) { setIsLive(false); return; }
    setCategories(built);
    setActiveId(prev => built.some(c => c.id === prev) ? prev : built[0].id);
    setIsLive(true);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  useEffect(() => {
    const ch = supabase
      .channel("public_realtime")
      .on("postgres_changes", { event:"*", schema:"public", table:"categories" }, fetchData)
      .on("postgres_changes", { event:"*", schema:"public", table:"prompts" },    fetchData)
      .subscribe();
    return () => supabase.removeChannel(ch);
  }, [fetchData]);

  // ── Search ────────────────────────────────────────────────────────────────
  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return categories.flatMap(cat => {
      const catMatch = cat.id.includes(q) || cat.label.toLowerCase().includes(q);
      return cat.prompts
        .filter(p => catMatch ||
          p.title.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.text.toLowerCase().includes(q))
        .map(p => ({ ...p, categoryLabel: cat.label, catId: cat.id }));
    });
  }, [search, categories]);

  const isSearching    = search.length > 0;
  const activeCategory = categories.find(c => c.id === activeId);

  const { refs: cardRefs, focused } = useScrollFocus(
    activeCategory?.prompts.length ?? 0,
    drawerScrollRef,
    isMobileOpen,
  );

  useEffect(() => {
    document.body.style.overflow = IS_MOBILE && isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleCopy = (text, title) => {
    navigator.clipboard.writeText(text);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleRun = useCallback((text, catId) => {
    const run = RUN_MAP[catId];
    if (!run) return;
    if (run.qParam) {
      window.open(`${run.url}/?${run.qParam}=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard.writeText(text).catch(() => {});
      window.open(run.url, "_blank", "noopener,noreferrer");
      showToast(`Prompt copied! Paste with Ctrl+V (or ⌘V) in ${run.label}.`);
    }
  }, [showToast]);

  const sidebarVisible = cat => {
    if (!isSearching) return true;
    const q = search.toLowerCase();
    return cat.id.includes(q) || cat.label.toLowerCase().includes(q) ||
      cat.prompts.some(p =>
        p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q));
  };

  return (
    <section ref={ref} className="py-8 lg:py-20 px-[5%] bg-dark relative">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-6 lg:mb-10 max-w-[600px] fade-up">
          <span className="text-[10px] font-bold tracking-[4px] uppercase text-gold mb-3 block">
            Premium Vault
          </span>
          <h2 className="font-playfair font-black leading-[1.15] tracking-[-0.5px]"
            style={{ fontSize:"clamp(28px,4vw,42px)" }}>
            Prompt Engine<span className="text-gold">.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color:"#8A7E72" }}>
            Copy, replace{" "}
            <span style={{
              color:"#B8922A", fontWeight:700, fontStyle:"italic",
              background:"rgba(184,146,42,0.08)", padding:"1px 6px", borderRadius:3,
            }}>[brackets]</span>
            {" "}with your context, and run.{" "}
            <span style={{ color:"#6B6457" }}>
              Works with ChatGPT, Claude, Gemini, and any major LLM.
            </span>
          </p>
        </div>

        {/* DB loading */}
        {dbLoading && (
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20,
            color:"#6B6457", fontSize:13 }}>
            <Loader2 size={15} style={{ animation:"spin 0.8s linear infinite" }}/>
            Checking database…
          </div>
        )}

        {/* Search */}
        <div className="relative w-full max-w-2xl mb-8 lg:mb-16 z-50 fade-up">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18}/>
          <input type="text"
            placeholder="Search prompts (e.g. 'YouTube hook', 'landing page', 'SOP')..."
            className="w-full p-4 pl-12 rounded-sm text-paper text-sm outline-none transition-all"
            style={{ background:"#1A1714", border:"1px solid rgba(184,146,42,0.15)",
              boxShadow:"0 8px 32px rgba(0,0,0,0.3)" }}
            onFocus={e => (e.target.style.borderColor = "rgba(184,146,42,0.5)")}
            onBlur={e  => (e.target.style.borderColor = "rgba(184,146,42,0.15)")}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {isSearching && (
            <button onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-gold transition-colors">
              <X size={16}/>
            </button>
          )}
        </div>

        {/* Main grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">

          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0 lg:sticky lg:self-start" style={{ top:"100px" }}>
            <p className="text-[10px] tracking-[3px] uppercase text-muted font-black mb-6 ml-1">
              Collections
            </p>
            <div className="space-y-1">
              {categories.filter(sidebarVisible).map(cat => (
                <button key={cat.id}
                  onClick={() => {
                    setActiveId(cat.id);
                    setSearch("");
                    if (IS_MOBILE) setIsMobileOpen(true);
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-sm transition-all"
                  style={{
                    background: activeId === cat.id ? "rgba(184,146,42,0.08)" : "transparent",
                    borderLeft: activeId === cat.id ? "2px solid #B8922A" : "2px solid transparent",
                    color:      activeId === cat.id ? "#F5F0E8" : "#6B6457",
                  }}>
                  <div className="flex items-center gap-3">
                    <span style={{ color: activeId === cat.id ? "#B8922A" : "#3A3530" }}>
                      {cat.icon}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-[1px]">
                      {cat.label}
                    </span>
                  </div>
                  <ChevronRight size={12} className="opacity-20"/>
                </button>
              ))}
            </div>
          </div>

          {/* Prompts — Desktop only */}
          <div className="hidden lg:block flex-1 w-full min-w-0">
            {!isSearching && (
              <h3 className="font-playfair text-[28px] font-bold text-paper mb-10 uppercase tracking-tighter">
                {activeCategory?.label}
              </h3>
            )}
            <div className="space-y-6">
              {isSearching
                ? searchResults.map((p, i) => (
                    <PromptCard key={p.id ?? i} p={p}
                      copy={handleCopy} copied={copied}
                      onRun={handleRun} catId={p.catId}
                      isMobile={false} showCategory />
                  ))
                : activeCategory?.prompts.map((p, i) => (
                    <PromptCard key={p.id ?? i} p={p}
                      copy={handleCopy} copied={copied}
                      onRun={handleRun} catId={activeCategory.id}
                      isMobile={false} />
                  ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
        isMobileOpen && !isSearching ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 backdrop-blur-sm transition-opacity ${
          isMobileOpen ? "opacity-100" : "opacity-0"}`}
          style={{ background:"rgba(14,12,10,0.92)" }}
          onClick={() => setIsMobileOpen(false)}/>

        {/* Drawer shell */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[88vh] flex flex-col transition-transform duration-500 ${
            isMobileOpen ? "translate-y-0" : "translate-y-full"}`}
          style={{ background:"#1A1714", borderTop:"1px solid rgba(184,146,42,0.25)",
            borderRadius:"20px 20px 0 0" }}>

          {/* Sticky header — never scrolls away */}
          <div className="flex-shrink-0 px-5 pt-4 pb-3"
            style={{ borderBottom:"1px solid rgba(184,146,42,0.08)" }}>
            <div className="w-10 h-1 mx-auto mb-3 rounded-full bg-[#3A3530]"/>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-playfair text-[20px] font-bold text-paper leading-tight">
                {activeCategory?.label}
              </h3>
              <button onClick={() => setIsMobileOpen(false)}
                className="flex-shrink-0 p-2 rounded-full transition-colors"
                style={{ background:"rgba(184,146,42,0.08)", color:"#B8922A" }}>
                <X size={18}/>
              </button>
            </div>
          </div>

          {/* Scrollable cards — drawerScrollRef here for IntersectionObserver */}
          <div ref={drawerScrollRef}
            className="flex-1 overflow-y-auto px-4 py-4"
            style={{ WebkitOverflowScrolling:"touch" }}>
            <div className="space-y-4 pb-6">
              {activeCategory?.prompts.map((p, i) => (
                <div key={p.id ?? i} ref={el => (cardRefs.current[i] = el)}>
                  <PromptCard p={p}
                    copy={handleCopy} copied={copied}
                    onRun={handleRun} catId={activeCategory.id}
                    isMobile={true} isFocused={focused === i}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Paste toast */}
      <div aria-live="polite" style={{
        position:"fixed", bottom: toast ? 32 : -100,
        left:"50%", transform:"translateX(-50%)",
        zIndex:9999, transition:"bottom 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        pointerEvents: toast ? "auto" : "none",
      }}>
        {toast && (
          <div style={{
            display:"flex", alignItems:"center", gap:10, padding:"12px 20px",
            borderRadius:6, background:"#252118", border:"1px solid rgba(184,146,42,0.35)",
            boxShadow:"0 8px 32px rgba(0,0,0,0.5)", color:"#D4AA4A",
            fontSize:13, fontWeight:600, whiteSpace:"nowrap", maxWidth:"90vw",
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            {toast}
            <button onClick={() => setToast(null)}
              style={{ marginLeft:6, color:"#6B6457", background:"none", cursor:"pointer" }}>
              <X size={13}/>
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin     { to { transform:rotate(360deg); } }
        @keyframes livepulse{ 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.8)} }
      `}</style>
    </section>
  );
}

// ─── Prompt Card ──────────────────────────────────────────────────────────────
// isMobile is now a PROP (passed from parent) — not read via window.innerWidth
// here, which previously caused N forced layout reads per render cycle.
function PromptCard({ p, copy, copied, onRun, catId, isMobile, showCategory, isFocused }) {
  const isCopied = copied === p.title;
  const dimmed   = isMobile && isFocused === false;
  const run      = catId ? RUN_MAP[catId] : null;

  return (
    <div className="p-5 lg:p-8 transition-all duration-300 group"
      style={{
        background:"#1A1714", border:"1px solid rgba(184,146,42,0.08)",
        borderRadius:"8px", opacity: dimmed ? 0.45 : 1,
        transform: isMobile && isFocused ? "scale(1.01)" : "scale(1)",
        boxShadow: isMobile && isFocused ? "0 8px 32px rgba(184,146,42,0.1)" : "none",
        transition:"opacity 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        if (isMobile) return;
        Object.assign(e.currentTarget.style, {
          borderColor:"rgba(184,146,42,0.4)", background:"#252118",
          boxShadow:"0 8px 32px rgba(184,146,42,0.08)",
        });
      }}
      onMouseLeave={e => {
        if (isMobile) return;
        Object.assign(e.currentTarget.style, {
          borderColor:"rgba(184,146,42,0.08)", background:"#1A1714", boxShadow:"none",
        });
      }}>

      {/* Title + tag */}
      <div className="text-center lg:text-left mb-3">
        {showCategory && (
          <span className="text-[9px] text-gold font-black uppercase tracking-[2px] block mb-2">
            {p.categoryLabel}
          </span>
        )}
        <h4 className="text-[17px] lg:text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-gold-light"
          style={{ color: isMobile && isFocused ? "#D4AA4A" : "#F5F0E8" }}>
          {p.title}
        </h4>
        <div className="flex justify-center lg:justify-start mt-2">
          <span className="inline-block text-[9px] px-2 py-1 font-black uppercase tracking-[1px]"
            style={{ background:"rgba(184,146,42,0.1)", color:"#B8922A", borderRadius:"2px" }}>
            {p.tag}
          </span>
        </div>
      </div>

      {/* Buttons — centred on mobile, right on desktop */}
      <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
        <button onClick={() => copy(p.text, p.title)} title="Copy prompt"
          className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-black tracking-[1px] transition-all duration-200 whitespace-nowrap"
          style={{
            background:   isCopied ? "#B8922A" : "rgba(184,146,42,0.08)",
            color:        isCopied ? "#0E0C0A" : "#B8922A",
            borderRadius: "4px", border:"1px solid transparent",
          }}>
          {isCopied ? <Check size={13}/> : <Copy size={13}/>}
          {isCopied ? "COPIED" : "COPY"}
        </button>

        {run && (
          <button onClick={() => onRun(p.text, catId)}
            title={run.qParam
              ? `Open ${run.label} with prompt pre-filled`
              : `Copy & open ${run.label} (then paste)`}
            className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-black tracking-[1px] whitespace-nowrap transition-all duration-200"
            style={{
              background:"transparent", color:"#D4AA4A",
              borderRadius:"4px", border:"1px solid rgba(184,146,42,0.35)",
            }}
            onMouseEnter={e => Object.assign(e.currentTarget.style,
              { background:"#B8922A", color:"#0E0C0A", borderColor:"#B8922A" })}
            onMouseLeave={e => Object.assign(e.currentTarget.style,
              { background:"transparent", color:"#D4AA4A", borderColor:"rgba(184,146,42,0.35)" })}>
            <ExternalLink size={12}/>
            {`RUN IN ${run.label.toUpperCase()}`}
          </button>
        )}
      </div>

      {/* Prompt text */}
      <div className="p-4 lg:p-5 font-mono text-[12px] lg:text-[13px] leading-relaxed"
        style={{
          background:"#0E0C0A", border:"1px solid rgba(184,146,42,0.06)",
          borderRadius:"6px", color: isMobile && isFocused ? "#D4C4A8" : "#C8B99A",
        }}>
        {p.text.split(/(\[.*?\])/).map((part, i) =>
          part.startsWith("[")
            ? <span key={i} style={{ color:"#B8922A", fontWeight:700, fontStyle:"italic" }}>{part}</span>
            : <span key={i}>{part}</span>
        )}
      </div>
    </div>
  );
}