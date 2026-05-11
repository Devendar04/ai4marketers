/**
 * AdminPrompts.jsx
 * ─────────────────────────────────────────────────────────────
 * Mobile-first admin panel for Prompt Vault — Supabase powered.
 *
 * Fixes:
 *  ✅ Fully mobile responsive (320px → desktop)
 *  ✅ "Seed Database" button → populates Supabase from promptsData.js
 *  ✅ Real-time CRUD (categories + prompts)
 *  ✅ Bottom-sheet modals on mobile
 *  ✅ Horizontal category pills on mobile
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import { categoriesData } from "../data/promptsData"; // for seeding

import {
  LogOut, Plus, Pencil, Trash2, X, Check,
  Eye, EyeOff, Sparkles, Shield, RefreshCw,
  AlertTriangle, Loader2, Database, ChevronDown,
  TrendingUp, PenTool, Globe, Target, Palette,
  Play, Film, Layout, FileText, BookOpen,
  FileBarChart, Mail, Code2, Menu,
} from "lucide-react";

// ─── Design tokens ────────────────────────────────────────────
const C = {
  bg:       "#0E0C0A",
  card:     "#1A1714",
  elevated: "#252118",
  border:   "rgba(184,146,42,0.15)",
  borderHi: "rgba(184,146,42,0.45)",
  gold:     "#B8922A",
  goldLight:"#D4AA4A",
  paper:    "#F5F0E8",
  muted:    "#6B6457",
  error:    "#D95F5F",
  success:  "#52A882",
};

const ICON_OPTIONS = [
  "TrendingUp","PenTool","Globe","Target","Palette","Sparkles",
  "Play","Film","Layout","FileText","BookOpen","FileBarChart","Mail","Code2",
];

const ICON_MAP = {
  TrendingUp:   <TrendingUp   size={14} />,
  PenTool:      <PenTool      size={14} />,
  Globe:        <Globe        size={14} />,
  Target:       <Target       size={14} />,
  Palette:      <Palette      size={14} />,
  Sparkles:     <Sparkles     size={14} />,
  Play:         <Play         size={14} />,
  Film:         <Film         size={14} />,
  Layout:       <Layout       size={14} />,
  FileText:     <FileText     size={14} />,
  BookOpen:     <BookOpen     size={14} />,
  FileBarChart: <FileBarChart size={14} />,
  Mail:         <Mail         size={14} />,
  Code2:        <Code2        size={14} />,
};

const slugify = s =>
  s.toLowerCase().trim().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");

// ─── Hook: responsive breakpoint ──────────────────────────────
function useIsMobile(bp = 768) {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < bp : false
  );
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < bp);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [bp]);
  return mobile;
}

// ═════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═════════════════════════════════════════════════════════════
export default function AdminPrompts() {
  const isMobile = useIsMobile();

  // ── Auth ──────────────────────────────────────────────────
  const [session,      setSession]      = useState(null);
  const [authLoading,  setAuthLoading]  = useState(true);
  const [loginForm,    setLoginForm]    = useState({ email:"", password:"" });
  const [loginError,   setLoginError]   = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [showPw,       setShowPw]       = useState(false);

  // ── Data ──────────────────────────────────────────────────
  const [categories, setCategories] = useState([]);
  const [prompts,    setPrompts]    = useState([]);
  const [loading,    setLoading]    = useState(false);
  const [seedLoading,setSeedLoading]= useState(false);

  // ── UI ────────────────────────────────────────────────────
  const [activeCatId, setActiveCatId] = useState(null);
  const [toast,       setToast]       = useState(null);
  const [showSidebar, setShowSidebar] = useState(false); // mobile drawer

  // ── Modals ────────────────────────────────────────────────
  const [promptModal, setPromptModal] = useState(null);
  const [catModal,    setCatModal]    = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  // ── Forms ────────────────────────────────────────────────
  const [pForm, setPForm] = useState({ title:"", tag:"", description:"", text:"" });
  const [cForm, setCForm] = useState({ id:"", label:"", icon_name:"Sparkles" });
  const [saving,   setSaving]   = useState(false);
  const [deleting, setDeleting] = useState(false);

  // ── Auth listener ─────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e,s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  // ── Fetch all data ────────────────────────────────────────
  const fetchAll = useCallback(async () => {
    setLoading(true);
    const [cR, pR] = await Promise.all([
      supabase.from("categories").select("*").order("sort_order"),
      supabase.from("prompts").select("*").order("sort_order"),
    ]);
    if (!cR.error) setCategories(cR.data ?? []);
    if (!pR.error) setPrompts(pR.data ?? []);
    setLoading(false);
    if (cR.data?.length && !activeCatId) setActiveCatId(cR.data[0].id);
  }, [activeCatId]);

  useEffect(() => { if (session) fetchAll(); }, [session]);

  // ── Real-time ─────────────────────────────────────────────
  useEffect(() => {
    if (!session) return;
    const ch = supabase.channel("admin_rt")
      .on("postgres_changes",{ event:"*", schema:"public", table:"categories" }, fetchAll)
      .on("postgres_changes",{ event:"*", schema:"public", table:"prompts" },    fetchAll)
      .subscribe();
    return () => supabase.removeChannel(ch);
  }, [session, fetchAll]);

  // ── Toast ─────────────────────────────────────────────────
  const showToast = (msg, type="success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Login ─────────────────────────────────────────────────
  const handleLogin = async e => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword(loginForm);
    if (error) setLoginError(error.message);
    setLoginLoading(false);
  };

  // ── Logout ────────────────────────────────────────────────
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCategories([]); setPrompts([]);
  };

  // ── SEED DATABASE ─────────────────────────────────────────
  // Inserts all prompts from promptsData.js into Supabase.
  // Uses INSERT ... ON CONFLICT DO NOTHING so duplicates are skipped.
  const handleSeedDatabase = async () => {
    const ok = window.confirm(
      `This will insert ${categoriesData.length} categories and all their prompts into Supabase.\n\nExisting entries (same ID) will be skipped.\n\nContinue?`
    );
    if (!ok) return;

    setSeedLoading(true);
    let catOk = 0, proOk = 0, errs = [];

    for (let i = 0; i < categoriesData.length; i++) {
      const cat = categoriesData[i];

      // Upsert category (skip if id already exists)
      const { error: cErr } = await supabase.from("categories").upsert(
        { id: cat.id, label: cat.label, icon_name: cat.iconName, sort_order: i },
        { onConflict: "id", ignoreDuplicates: true }
      );
      if (cErr) { errs.push(`Cat "${cat.label}": ${cErr.message}`); continue; }
      catOk++;

      // Insert prompts (skip duplicates by checking title + category_id)
      for (let j = 0; j < (cat.prompts ?? []).length; j++) {
        const p = cat.prompts[j];

        // Check if this prompt already exists
        const { data: existing } = await supabase
          .from("prompts")
          .select("id")
          .eq("category_id", cat.id)
          .eq("title", p.title)
          .maybeSingle();

        if (existing) { proOk++; continue; } // already there

        const { error: pErr } = await supabase.from("prompts").insert({
          category_id: cat.id,
          title:       p.title,
          tag:         p.tag ?? "",
          description: p.description ?? "",
          text:        p.text,
          sort_order:  j,
        });
        if (pErr) errs.push(`Prompt "${p.title}": ${pErr.message}`);
        else proOk++;
      }
    }

    setSeedLoading(false);
    if (errs.length) {
      showToast(`Seeded ${catOk} cats, ${proOk} prompts. ${errs.length} error(s) — check console.`, "error");
      console.error("Seed errors:", errs);
    } else {
      showToast(`✓ Seeded ${catOk} categories and ${proOk} prompts into Supabase!`);
    }
    fetchAll();
  };

  // ── Category CRUD ─────────────────────────────────────────
  const openAddCat = () => {
    setCForm({ id:"", label:"", icon_name:"Sparkles" });
    setCatModal({ mode:"add" });
  };
  const openEditCat = cat => {
    setCForm({ id: cat.id, label: cat.label, icon_name: cat.icon_name });
    setCatModal({ mode:"edit", cat });
  };
  const saveCategory = async () => {
    if (!cForm.label.trim()) return;
    setSaving(true);
    const slug    = cForm.id.trim() || slugify(cForm.label);
    const payload = { id: slug, label: cForm.label.trim(), icon_name: cForm.icon_name,
                      sort_order: catModal.mode==="add" ? categories.length : catModal.cat.sort_order };
    const { error } = catModal.mode === "add"
      ? await supabase.from("categories").insert(payload)
      : await supabase.from("categories")
          .update({ label: payload.label, icon_name: payload.icon_name })
          .eq("id", catModal.cat.id);
    setSaving(false);
    if (error) { showToast(error.message,"error"); return; }
    showToast(catModal.mode==="add" ? "Category created!" : "Category updated!");
    if (catModal.mode==="add") setActiveCatId(slug);
    setCatModal(null);
  };

  // ── Prompt CRUD ───────────────────────────────────────────
  const openAddPrompt = () => {
    setPForm({ title:"", tag:"", description:"", text:"" });
    setPromptModal({ mode:"add" });
  };
  const openEditPrompt = p => {
    setPForm({ title:p.title, tag:p.tag, description:p.description??'', text:p.text });
    setPromptModal({ mode:"edit", prompt:p });
  };
  const savePrompt = async () => {
    if (!pForm.title.trim() || !pForm.text.trim()) return;
    setSaving(true);
    const catPrompts = prompts.filter(p => p.category_id === activeCatId);
    const payload = {
      category_id: activeCatId,
      title:       pForm.title.trim(),
      tag:         pForm.tag.trim(),
      description: pForm.description.trim(),
      text:        pForm.text.trim(),
      sort_order:  promptModal.mode==="add" ? catPrompts.length : promptModal.prompt.sort_order,
    };
    const { error } = promptModal.mode === "add"
      ? await supabase.from("prompts").insert(payload)
      : await supabase.from("prompts").update(payload).eq("id", promptModal.prompt.id);
    setSaving(false);
    if (error) { showToast(error.message,"error"); return; }
    showToast(promptModal.mode==="add" ? "Prompt added!" : "Prompt saved!");
    setPromptModal(null);
  };

  // ── Delete ────────────────────────────────────────────────
  const handleDelete = async () => {
    setDeleting(true);
    const table = deleteModal.type === "category" ? "categories" : "prompts";
    const { error } = await supabase.from(table).delete().eq("id", deleteModal.id);
    setDeleting(false);
    if (error) { showToast(error.message,"error"); setDeleteModal(null); return; }
    showToast(`${deleteModal.type === "category" ? "Category" : "Prompt"} deleted.`);
    if (deleteModal.type === "category")
      setActiveCatId(categories.find(c => c.id !== deleteModal.id)?.id ?? null);
    setDeleteModal(null);
  };

  // ── Derived ───────────────────────────────────────────────
  const activeCategory = categories.find(c => c.id === activeCatId);
  const activePrompts  = prompts.filter(p => p.category_id === activeCatId);

  // ─────────────────────────────────────────────────────────
  // RENDER GUARDS
  // ─────────────────────────────────────────────────────────
  if (authLoading) return <FullLoader />;
  if (!session)    return (
    <LoginScreen form={loginForm} setForm={setLoginForm}
      error={loginError} loading={loginLoading}
      showPw={showPw} setShowPw={setShowPw}
      onSubmit={handleLogin} />
  );

  // ─────────────────────────────────────────────────────────
  // ADMIN DASHBOARD
  // ─────────────────────────────────────────────────────────
  return (
    <div style={{ background:C.bg, minHeight:"100vh", display:"flex", flexDirection:"column",
      fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>

      {/* ══ TOP BAR ══════════════════════════════════════════ */}
      <header style={{
        background: C.card,
        borderBottom: `1px solid ${C.border}`,
        padding: "0 20px",
        height: 58,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        gap: 12,
        boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
      }}>

        {/* ── LEFT: Logo ──────────────────────────────────── */}
        <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          {/* Mobile hamburger */}
          {isMobile && (
            <button onClick={() => setShowSidebar(s=>!s)}
              style={{ background:"none", cursor:"pointer", color:C.muted,
                padding:4, marginRight:2, display:"flex", alignItems:"center" }}>
              <Menu size={18} />
            </button>
          )}

          {/* Logo mark */}
          <div style={{
            width:32, height:32, borderRadius:6,
            background:"linear-gradient(135deg,#2A2118,#1A1410)",
            border:`1px solid rgba(184,146,42,0.35)`,
            display:"flex", alignItems:"center", justifyContent:"center",
            flexShrink:0,
          }}>
            <Shield size={16} color={C.gold} />
          </div>

          {/* Logo text */}
          
          <div style={{ lineHeight:1.1 }}>
            <div style={{
              fontWeight:900, letterSpacing:2,
              fontSize: isMobile ? 13 : 15,
              color: C.paper,
            }}>
              PROMPT<span style={{ color:C.gold }}>VAULT</span>
            </div>
            {!isMobile && (
              
              <div style={{ fontSize:8, letterSpacing:3, color:C.muted,
                fontWeight:700, textTransform:"uppercase", marginTop:1 }}>
                Management System
              </div>
            )}
          </div>
        </div>

        {/* ── CENTER: Stats (desktop only) ─────────────────── */}
        {!isMobile && (
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div style={{
              display:"flex", alignItems:"center", gap:14,
              background:"rgba(184,146,42,0.06)",
              border:`1px solid ${C.border}`,
              borderRadius:6, padding:"6px 16px",
            }}>
              <StatBadge label="Categories" value={categories.length} />
              <div style={{ width:1, height:24, background:C.border }} />
              <StatBadge label="Prompts" value={prompts.length} />
            </div>
          </div>
        )}

        {/* ── RIGHT: Actions + "Admin Panel" label ─────────── */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>

          {/* Seed DB */}
          <button onClick={handleSeedDatabase} disabled={seedLoading}
            title="Populate Supabase from promptsData.js"
            style={{
              display:"flex", alignItems:"center", gap:5,
              padding: isMobile ? "5px 8px" : "6px 12px",
              borderRadius:5, cursor:"pointer", fontWeight:800,
              fontSize:11, letterSpacing:0.5,
              background:"rgba(82,168,130,0.1)",
              border:"1px solid rgba(82,168,130,0.3)",
              color:C.success, opacity: seedLoading ? 0.6 : 1,
              transition:"all 0.2s",
            }}>
            {seedLoading
              ? <Loader2 size={13} style={{ animation:"spin 0.8s linear infinite" }} />
              : <Database size={13} />}
            {!isMobile && (seedLoading ? "Seeding…" : "Seed DB")}
          </button>

          {/* Refresh */}
          <button onClick={fetchAll} title="Refresh data"
            style={{ padding:6, background:"none", cursor:"pointer",
              color:C.muted, borderRadius:4, display:"flex", alignItems:"center",
              transition:"color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = C.gold}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>
            <RefreshCw size={14} />
          </button>

          {/* Divider */}
          <div style={{ width:1, height:22, background:C.border }} />

          {/* "ADMIN PANEL" label — the key request */}
          <div style={{
            display:"flex", flexDirection:"column", alignItems:"flex-end", lineHeight:1.1,
          }}>
              {!isMobile && (
            <span style={{
              fontSize: isMobile ? 11 : 13,
              fontWeight:900, letterSpacing: isMobile ? 1 : 2,
              color:C.gold, textTransform:"uppercase",
            }}>
              Admin Panel
            </span>
              )}
            {!isMobile && (
              <span style={{ fontSize:9, color:C.muted, letterSpacing:0.5 }}>
                {session.user.email}
              </span>
            )}
          </div>

          {/* Logout */}
          <button onClick={handleLogout} title="Sign out"
            style={{
              display:"flex", alignItems:"center", gap:5,
              padding: isMobile ? "6px 8px" : "6px 10px",
              borderRadius:5, cursor:"pointer",
              background:"rgba(217,95,95,0.08)",
              border:"1px solid rgba(217,95,95,0.25)",
              color:C.error, fontSize:11, fontWeight:800,
              transition:"all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(217,95,95,0.18)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(217,95,95,0.08)"}>
            <LogOut size={12} />
            {!isMobile && "Logout"}
          </button>
        </div>
      </header>

      {/* ══ MOBILE STATS BAR ════════════════════════════════ */}
      {isMobile && (
        <div style={{
          background:C.card, borderBottom:`1px solid ${C.border}`,
          display:"flex", overflow:"hidden",
        }}>
          <div style={{
            flex:1, textAlign:"center", padding:"7px 0",
            borderRight:`1px solid ${C.border}`,
          }}>
            <div style={{ color:C.gold, fontWeight:900, fontSize:17, lineHeight:1 }}>
              {categories.length}
            </div>
            <div style={{ color:C.muted, fontSize:8, letterSpacing:2,
              textTransform:"uppercase", marginTop:2 }}>Categories</div>
          </div>
          <div style={{ flex:1, textAlign:"center", padding:"7px 0" }}>
            <div style={{ color:C.gold, fontWeight:900, fontSize:17, lineHeight:1 }}>
              {prompts.length}
            </div>
            <div style={{ color:C.muted, fontSize:8, letterSpacing:2,
              textTransform:"uppercase", marginTop:2 }}>Prompts</div>
          </div>
        </div>
      )}

      {/* ══ BODY ═════════════════════════════════════════════ */}
      <div style={{ display:"flex", flex:1, overflow:"hidden", position:"relative" }}>

        {/* ── DESKTOP SIDEBAR ──────────────────────────────── */}
        {!isMobile && (
          <Sidebar
            categories={categories} prompts={prompts}
            activeCatId={activeCatId} setActiveCatId={setActiveCatId}
            onEditCat={openEditCat}
            onDeleteCat={cat => setDeleteModal({ type:"category", id:cat.id, name:cat.label })}
            onAddCat={openAddCat}
          />
        )}

        {/* ── MOBILE SIDEBAR DRAWER ────────────────────────── */}
        {isMobile && showSidebar && (
          <>
            <div onClick={() => setShowSidebar(false)}
              style={{ position:"fixed", inset:0, zIndex:50,
                background:"rgba(14,12,10,0.8)", backdropFilter:"blur(4px)" }} />
            <div style={{
              position:"fixed", left:0, top:0, bottom:0, zIndex:60,
              width:260, background:C.card, borderRight:`1px solid ${C.border}`,
              overflowY:"auto", paddingTop:52,
            }}>
              <Sidebar
                categories={categories} prompts={prompts}
                activeCatId={activeCatId}
                setActiveCatId={id => { setActiveCatId(id); setShowSidebar(false); }}
                onEditCat={openEditCat}
                onDeleteCat={cat => { setDeleteModal({ type:"category", id:cat.id, name:cat.label }); setShowSidebar(false); }}
                onAddCat={() => { openAddCat(); setShowSidebar(false); }}
              />
            </div>
          </>
        )}

        {/* ── MAIN CONTENT ─────────────────────────────────── */}
        <main style={{
          flex:1, overflowY:"auto", overflowX:"hidden",  // ← hidden stops pills leaking sideways
          padding: isMobile ? "16px 12px 80px" : "32px",
          minWidth:0,  // ← lets flex shrink properly on mobile
        }}>

          {/* Mobile: horizontal category pills */}
          {isMobile && (
            <div style={{
              marginBottom:16, paddingBottom:6,
              overflowX:"auto", overflowY:"hidden",
              // extend to edge to avoid clipping pill shadow
              marginLeft:-12, marginRight:-12,
              paddingLeft:12, paddingRight:12,
              // hide scrollbar visually but keep it scrollable
              msOverflowStyle:"none", scrollbarWidth:"none",
            }}>
              <div style={{ display:"flex", gap:8, flexWrap:"nowrap" }}>
                {categories.map(cat => (
                  <button key={cat.id}
                    onClick={() => setActiveCatId(cat.id)}
                    style={{
                      display:"flex", alignItems:"center", gap:5,
                      padding:"6px 11px", borderRadius:99, cursor:"pointer",
                      whiteSpace:"nowrap", fontSize:11, fontWeight:800,
                      flexShrink:0,
                      background: activeCatId===cat.id ? C.gold : C.elevated,
                      color:      activeCatId===cat.id ? "#0E0C0A" : C.muted,
                      border:     activeCatId===cat.id ? "none" : `1px solid ${C.border}`,
                    }}>
                    <span style={{ color: activeCatId===cat.id ? "#0E0C0A" : C.muted }}>
                      {ICON_MAP[cat.icon_name] ?? <Sparkles size={13} />}
                    </span>
                    {cat.label}
                  </button>
                ))}
                <button onClick={openAddCat} style={{
                  display:"flex", alignItems:"center", gap:5,
                  padding:"6px 11px", borderRadius:99, cursor:"pointer",
                  background:"transparent", border:`1px dashed ${C.border}`,
                  color:C.gold, fontSize:11, fontWeight:800, flexShrink:0,
                }}>
                  <Plus size={12} /> Add
                </button>
              </div>
            </div>
          )}

          {/* No category selected */}
          {!activeCatId ? (
            <EmptyState icon={<Sparkles size={32} color={C.gold} />}
              message="Select or create a category to get started." />
          ) : (
            <>
              {/* Category header */}
              <div style={{
                display:"flex", alignItems:"center",
                justifyContent:"space-between", marginBottom:20, gap:12,
                flexWrap: isMobile ? "wrap" : "nowrap",
              }}>
                <div>
                  <h2 style={{
                    color:C.paper, fontWeight:900,
                    fontSize: isMobile ? 18 : 22,
                    fontFamily:"'Playfair Display',serif",
                  }}>
                    {activeCategory?.label}
                  </h2>
                  <p style={{ color:C.muted, fontSize:12, marginTop:3 }}>
                    {activePrompts.length} prompt{activePrompts.length!==1?"s":""}
                    {loading && " · refreshing…"}
                  </p>
                </div>
                <button onClick={openAddPrompt} style={{
                  display:"flex", alignItems:"center", gap:7,
                  padding:"9px 16px", borderRadius:4, cursor:"pointer",
                  fontWeight:800, fontSize:12, background:C.gold, color:"#0E0C0A",
                  letterSpacing:0.5, whiteSpace:"nowrap",
                }}>
                  <Plus size={14} /> Add Prompt
                </button>
              </div>

              {/* Prompt list */}
              {activePrompts.length === 0 ? (
                <EmptyState icon={<FileText size={28} color={C.muted} />}
                  message={loading ? "Loading…" : "No prompts yet. Click 'Add Prompt' to create the first one."} />
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {activePrompts.map(p => (
                    <PromptRow key={p.id} prompt={p}
                      onEdit={() => openEditPrompt(p)}
                      onDelete={() => setDeleteModal({ type:"prompt", id:p.id, name:p.title })}
                      isMobile={isMobile} />
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* ══ MODALS ═══════════════════════════════════════════ */}

      {/* Prompt modal */}
      {promptModal && (
        <Sheet onClose={() => setPromptModal(null)}
          title={promptModal.mode==="add" ? "Add Prompt" : "Edit Prompt"}
          isMobile={isMobile}>
          <Field label="Title *">
            <Inp value={pForm.title}
              onChange={v => setPForm(f=>({...f,title:v}))}
              placeholder="Semantic Topic Cluster Builder" />
          </Field>
          <Field label="Tag *">
            <Inp value={pForm.tag}
              onChange={v => setPForm(f=>({...f,tag:v}))}
              placeholder="SEO / Growth" />
          </Field>
          <Field label="Description">
            <Inp value={pForm.description}
              onChange={v => setPForm(f=>({...f,description:v}))}
              placeholder="Short description for tooltips (optional)" />
          </Field>
          <Field label="Prompt Text *">
            <TArea value={pForm.text}
              onChange={v => setPForm(f=>({...f,text:v}))}
              placeholder="Write your prompt here. Use [PLACEHOLDER] for variables."
              rows={isMobile ? 10 : 14} />
          </Field>
          <SheetFooter onCancel={() => setPromptModal(null)} onSave={savePrompt}
            saving={saving} disabled={!pForm.title.trim()||!pForm.text.trim()} />
        </Sheet>
      )}

      {/* Category modal */}
      {catModal && (
        <Sheet onClose={() => setCatModal(null)}
          title={catModal.mode==="add" ? "Add Category" : "Edit Category"}
          isMobile={isMobile} maxWidth={480}>
          <Field label="Label *">
            <Inp value={cForm.label}
              onChange={v => setCForm(f=>({
                ...f, label:v,
                id: catModal.mode==="add" ? slugify(v) : f.id,
              }))}
              placeholder="YouTube Creation" />
          </Field>
          {catModal.mode === "add" && (
            <Field label="ID (auto-generated)">
              <Inp value={cForm.id}
                onChange={v => setCForm(f=>({...f,id:slugify(v)}))}
                placeholder="youtube_creation" mono />
            </Field>
          )}
          <Field label="Icon">
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:4 }}>
              {ICON_OPTIONS.map(name => (
                <button key={name} onClick={() => setCForm(f=>({...f,icon_name:name}))} title={name}
                  style={{
                    width:36, height:36, borderRadius:4, cursor:"pointer",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    background: cForm.icon_name===name ? "rgba(184,146,42,0.2)" : C.elevated,
                    border: cForm.icon_name===name ? `1px solid ${C.gold}` : `1px solid ${C.border}`,
                    color: cForm.icon_name===name ? C.gold : C.muted,
                  }}>
                  {ICON_MAP[name]}
                </button>
              ))}
            </div>
          </Field>
          <SheetFooter onCancel={() => setCatModal(null)} onSave={saveCategory}
            saving={saving} disabled={!cForm.label.trim()} />
        </Sheet>
      )}

      {/* Delete confirm */}
      {deleteModal && (
        <Sheet onClose={() => setDeleteModal(null)} title="Confirm Delete"
          isMobile={isMobile} maxWidth={420}>
          <div style={{ textAlign:"center", padding:"8px 0 24px" }}>
            <AlertTriangle size={36} color={C.error} style={{ margin:"0 auto 16px" }} />
            <p style={{ color:C.paper, fontSize:14, marginBottom:8 }}>
              Delete <strong>"{deleteModal.name}"</strong>?
            </p>
            <p style={{ color:C.muted, fontSize:12 }}>
              {deleteModal.type==="category"
                ? "This permanently deletes the category and ALL its prompts."
                : "This prompt will be permanently removed."}
            </p>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={() => setDeleteModal(null)} style={{
              flex:1, padding:"10px 0", borderRadius:4, cursor:"pointer",
              background:C.elevated, color:C.muted, fontWeight:700, fontSize:13,
            }}>Cancel</button>
            <button onClick={handleDelete} disabled={deleting} style={{
              flex:1, padding:"10px 0", borderRadius:4, cursor:"pointer",
              background:"rgba(217,95,95,0.12)", border:`1px solid ${C.error}`,
              color:C.error, fontWeight:800, fontSize:13,
              display:"flex", alignItems:"center", justifyContent:"center", gap:6,
            }}>
              {deleting ? <Loader2 size={13} style={{ animation:"spin 0.8s linear infinite" }} /> : <Trash2 size={13} />}
              {deleting ? "Deleting…" : "Delete"}
            </button>
          </div>
        </Sheet>
      )}

      {/* ══ TOAST ════════════════════════════════════════════ */}
      {toast && (
        <div style={{
          position:"fixed",
          bottom: isMobile ? 24 : 24,
          left: isMobile ? "50%" : "auto",
          right: isMobile ? "auto" : 24,
          transform: isMobile ? "translateX(-50%)" : "none",
          zIndex:9999, padding:"12px 18px", borderRadius:6,
          background: toast.type==="error" ? "rgba(217,95,95,0.15)" : "rgba(82,168,130,0.15)",
          border:`1px solid ${toast.type==="error" ? C.error : C.success}`,
          color: toast.type==="error" ? C.error : C.success,
          fontSize:12, fontWeight:700,
          boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
          display:"flex", alignItems:"center", gap:8,
          whiteSpace:"nowrap", maxWidth:"90vw",
          animation:"fadeUp 0.25s ease",
        }}>
          {toast.type==="error" ? <AlertTriangle size={14}/> : <Check size={14}/>}
          <span style={{ overflow:"hidden", textOverflow:"ellipsis" }}>{toast.msg}</span>
        </div>
      )}

      <GlobalStyles />
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
//  SUB-COMPONENTS
// ═════════════════════════════════════════════════════════════

// ── Sidebar (shared desktop + mobile drawer) ──────────────────
function Sidebar({ categories, prompts, activeCatId, setActiveCatId, onEditCat, onDeleteCat, onAddCat }) {
  return (
    <div style={{
      width:240, background:C.card, borderRight:`1px solid ${C.border}`,
      display:"flex", flexDirection:"column", overflowY:"auto",
      height:"100%",
    }}>
      <div style={{ padding:"20px 14px 8px", flex:1 }}>
        <p style={{ color:C.muted, fontSize:9, fontWeight:900, letterSpacing:3,
          textTransform:"uppercase", marginBottom:14 }}>Collections</p>

        {categories.map(cat => (
          <div key={cat.id} style={{
            display:"flex", alignItems:"center", marginBottom:2,
            overflow:"hidden",   // ← clips any overflow so both icons always stay visible
          }}>
            <button onClick={() => setActiveCatId(cat.id)} style={{
              flex:1, minWidth:0, // ← minWidth:0 lets flex shrink the text, not push icons out
              display:"flex", alignItems:"center", gap:8,
              padding:"8px 10px", borderRadius:4, cursor:"pointer",
              background: activeCatId===cat.id ? "rgba(184,146,42,0.1)" : "transparent",
              borderLeft: activeCatId===cat.id ? `2px solid ${C.gold}` : "2px solid transparent",
              color: activeCatId===cat.id ? C.paper : C.muted,
              fontSize:11, fontWeight:700, textAlign:"left",
            }}>
              <span style={{ color: activeCatId===cat.id ? C.gold : "#3A3530" }}>
                {ICON_MAP[cat.icon_name] ?? <Sparkles size={14}/>}
              </span>
              <span style={{ flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                {cat.label}
              </span>
              <span style={{
                fontSize:9, background:"rgba(184,146,42,0.12)", color:C.gold,
                borderRadius:99, padding:"1px 6px", fontWeight:900, flexShrink:0,
              }}>
                {prompts.filter(p => p.category_id===cat.id).length}
              </span>
            </button>
            <button onClick={() => onEditCat(cat)} title="Edit"
              style={{ padding:5, cursor:"pointer", color:C.muted, background:"none",
                borderRadius:3, opacity:0.5, flexShrink:0 }}
              onMouseEnter={e=>e.currentTarget.style.opacity=1}
              onMouseLeave={e=>e.currentTarget.style.opacity=0.5}>
              <Pencil size={11}/>
            </button>
            <button onClick={() => onDeleteCat(cat)} title="Delete"
              style={{ padding:5, cursor:"pointer", color:C.error, background:"none",
                borderRadius:3, opacity:0.4, marginRight:2, flexShrink:0 }}
              onMouseEnter={e=>e.currentTarget.style.opacity=1}
              onMouseLeave={e=>e.currentTarget.style.opacity=0.4}>
              <Trash2 size={11}/>
            </button>
          </div>
        ))}
      </div>

      <div style={{ padding:"10px 14px 20px" }}>
        <button onClick={onAddCat} style={{
          width:"100%", display:"flex", alignItems:"center", justifyContent:"center",
          gap:6, padding:"9px 0", borderRadius:4, cursor:"pointer",
          background:"rgba(184,146,42,0.07)", border:`1px dashed ${C.border}`,
          color:C.gold, fontSize:11, fontWeight:800,
        }}>
          <Plus size={13}/> Add Category
        </button>
      </div>
    </div>
  );
}

// ── Prompt Row ────────────────────────────────────────────────
function PromptRow({ prompt, onEdit, onDelete, isMobile }) {
  const [expanded, setExpanded] = useState(false);
  const preview = prompt.text.replace(/\n/g," ").slice(0, isMobile ? 100 : 160);
  const long    = prompt.text.length > (isMobile ? 100 : 160);

  return (
    <div style={{
      background:C.card, border:`1px solid ${C.border}`, borderRadius:4,
      overflow:"hidden", transition:"border-color 0.2s",
    }}
      onMouseEnter={e => !isMobile && (e.currentTarget.style.borderColor=C.borderHi)}
      onMouseLeave={e => !isMobile && (e.currentTarget.style.borderColor=C.border)}>

      <div style={{ padding: isMobile ? "12px 14px" : "14px 16px",
        display:"flex", alignItems:"flex-start", gap:10 }}>
        <div style={{ flex:1, minWidth:0 }}>

          {/* Title + tag */}
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:8, marginBottom:6 }}>
            <span style={{ color:C.paper, fontWeight:700, fontSize: isMobile ? 13 : 14 }}>
              {prompt.title}
            </span>
            <span style={{
              fontSize:9, padding:"2px 8px", borderRadius:99, fontWeight:900,
              background:"rgba(184,146,42,0.12)", color:C.gold,
            }}>{prompt.tag}</span>
          </div>

          {/* Preview */}
          <p style={{ color:C.muted, fontSize:12, lineHeight:1.55 }}>
            {expanded ? prompt.text : `${preview}${long?"…":""}`}
          </p>
          {long && (
            <button onClick={() => setExpanded(p=>!p)} style={{
              background:"none", cursor:"pointer", color:C.gold,
              fontSize:11, fontWeight:700, marginTop:4,
            }}>
              {expanded ? "Show less ↑" : "Show full prompt ↓"}
            </button>
          )}
        </div>

        {/* Actions */}
        <div style={{ display:"flex", gap:6, flexShrink:0 }}>
          <ActBtn onClick={onEdit}   color={C.gold}  tip="Edit">  <Pencil size={12}/> </ActBtn>
          <ActBtn onClick={onDelete} color={C.error} tip="Delete"><Trash2 size={12}/> </ActBtn>
        </div>
      </div>
    </div>
  );
}

// ── Bottom Sheet / Modal ──────────────────────────────────────
function Sheet({ children, onClose, title, isMobile, maxWidth=640 }) {
  if (isMobile) {
    return (
      <div style={{
        position:"fixed", inset:0, zIndex:200,
        background:"rgba(14,12,10,0.88)", backdropFilter:"blur(4px)",
        display:"flex", alignItems:"flex-end",
      }} onClick={e => e.target===e.currentTarget && onClose()}>
        <div style={{
          width:"100%", background:C.card,
          borderTop:`1px solid ${C.borderHi}`,
          borderRadius:"20px 20px 0 0",
          maxHeight:"92vh", overflowY:"auto",
          padding:"0 20px 40px",
        }}>
          {/* Drag handle */}
          <div style={{ width:40, height:4, background:"#3A3530", borderRadius:2,
            margin:"14px auto 20px" }} />
          <div style={{ display:"flex", justifyContent:"space-between",
            alignItems:"center", marginBottom:24 }}>
            <h3 style={{ color:C.paper, fontWeight:900, fontSize:16 }}>{title}</h3>
            <button onClick={onClose} style={{ background:"none", cursor:"pointer", color:C.muted }}>
              <X size={18}/>
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:200,
      background:"rgba(14,12,10,0.85)", backdropFilter:"blur(4px)",
      display:"flex", alignItems:"center", justifyContent:"center", padding:16,
    }} onClick={e => e.target===e.currentTarget && onClose()}>
      <div style={{
        width:"100%", maxWidth, background:C.card,
        border:`1px solid ${C.borderHi}`, borderRadius:8,
        padding:28, maxHeight:"90vh", overflowY:"auto",
      }}>
        <div style={{ display:"flex", justifyContent:"space-between",
          alignItems:"center", marginBottom:24 }}>
          <h3 style={{ color:C.paper, fontWeight:900, fontSize:17 }}>{title}</h3>
          <button onClick={onClose} style={{ background:"none", cursor:"pointer", color:C.muted }}>
            <X size={18}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function SheetFooter({ onCancel, onSave, saving, disabled }) {
  return (
    <div style={{ display:"flex", gap:10, marginTop:24 }}>
      <button onClick={onCancel} style={{
        flex:1, padding:"11px 0", borderRadius:4, cursor:"pointer",
        background:C.elevated, color:C.muted, fontWeight:700, fontSize:13,
      }}>Cancel</button>
      <button onClick={onSave} disabled={saving||disabled} style={{
        flex:2, padding:"11px 0", borderRadius:4,
        cursor: disabled ? "not-allowed" : "pointer",
        background: disabled ? "rgba(184,146,42,0.2)" : C.gold,
        color: disabled ? C.muted : "#0E0C0A",
        fontWeight:900, fontSize:13, display:"flex",
        alignItems:"center", justifyContent:"center", gap:7,
        opacity: saving ? 0.7 : 1,
      }}>
        {saving ? <Loader2 size={14} style={{ animation:"spin 0.8s linear infinite" }}/> : <Check size={14}/>}
        {saving ? "Saving…" : "Save Changes"}
      </button>
    </div>
  );
}

// ── Form primitives ───────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div style={{ marginBottom:16 }}>
      <label style={{ display:"block", color:C.muted, fontSize:10,
        fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:6 }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Inp({ value, onChange, placeholder, type="text", mono, autoComplete }) {
  return (
    <input type={type} value={value} placeholder={placeholder} autoComplete={autoComplete}
      onChange={e => onChange(e.target.value)}
      style={{
        width:"100%", padding:"9px 12px", borderRadius:4,
        background:C.elevated, color:C.paper,
        fontSize: mono ? 12 : 13,
        fontFamily: mono ? "monospace" : "inherit",
        border:`1px solid ${C.border}`, transition:"border-color 0.2s",
      }}
      onFocus={e => e.target.style.borderColor=C.gold}
      onBlur={e  => e.target.style.borderColor=C.border}
    />
  );
}

function TArea({ value, onChange, placeholder, rows=6 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, [value]);
  return (
    <textarea ref={ref} value={value} placeholder={placeholder} rows={rows}
      onChange={e => onChange(e.target.value)}
      style={{
        width:"100%", padding:"10px 12px", borderRadius:4, resize:"vertical",
        background:C.elevated, color:C.paper, fontSize:12, lineHeight:1.7,
        fontFamily:"monospace", border:`1px solid ${C.border}`,
        transition:"border-color 0.2s", minHeight:rows*22,
      }}
      onFocus={e => e.target.style.borderColor=C.gold}
      onBlur={e  => e.target.style.borderColor=C.border}
    />
  );
}

// ── Tiny helpers ──────────────────────────────────────────────
function StatBadge({ label, value }) {
  return (
    <div style={{ textAlign:"center" }}>
      <div style={{ color:C.gold, fontWeight:900, fontSize:15 }}>{value}</div>
      <div style={{ color:C.muted, fontSize:9, letterSpacing:1, textTransform:"uppercase" }}>{label}</div>
    </div>
  );
}

function ActBtn({ children, onClick, color, tip }) {
  return (
    <button onClick={onClick} title={tip} style={{
      padding:"5px 7px", borderRadius:4, cursor:"pointer",
      background:`${color}15`, border:`1px solid ${color}25`,
      color, display:"flex", alignItems:"center", transition:"all 0.15s",
    }}
      onMouseEnter={e => e.currentTarget.style.background=`${color}28`}
      onMouseLeave={e => e.currentTarget.style.background=`${color}15`}>
      {children}
    </button>
  );
}

function EmptyState({ icon, message }) {
  return (
    <div style={{ textAlign:"center", padding:"48px 0", color:C.muted }}>
      <div style={{ marginBottom:12 }}>{icon}</div>
      <p style={{ fontSize:13 }}>{message}</p>
    </div>
  );
}

function FullLoader() {
  return (
    <div style={{ minHeight:"100vh", background:C.bg,
      display:"flex", alignItems:"center", justifyContent:"center" }}>
      <Loader2 size={28} color={C.gold} style={{ animation:"spin 0.8s linear infinite" }}/>
      <GlobalStyles />
    </div>
  );
}

// ── Login Screen ──────────────────────────────────────────────
function LoginScreen({ form, setForm, error, loading, showPw, setShowPw, onSubmit }) {
  return (
    <div style={{ minHeight:"100vh", background:C.bg,
      display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      <div style={{
        width:"100%", maxWidth:380, background:C.card,
        border:`1px solid ${C.border}`, borderRadius:10, padding:32,
      }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <Shield size={32} color={C.gold} style={{ margin:"0 auto 12px" }}/>
          <h1 style={{ color:C.paper, fontSize:20, fontWeight:900, letterSpacing:1 }}>
            PROMPT VAULT
          </h1>
          <p style={{ color:C.muted, fontSize:12, marginTop:4 }}>Admin Access</p>
        </div>

        <form onSubmit={onSubmit}>
          <Field label="Email">
            <Inp type="email" value={form.email}
              onChange={v => setForm(f=>({...f,email:v}))}
              placeholder="admin@example.com" autoComplete="email"/>
          </Field>
          <Field label="Password">
            <div style={{ position:"relative" }}>
              <Inp type={showPw?"text":"password"} value={form.password}
                onChange={v => setForm(f=>({...f,password:v}))}
                placeholder="••••••••" autoComplete="current-password"/>
              <button type="button" onClick={() => setShowPw(p=>!p)} style={{
                position:"absolute", right:10, top:"50%",
                transform:"translateY(-50%)", background:"none",
                cursor:"pointer", color:C.muted, padding:4,
              }}>
                {showPw ? <EyeOff size={14}/> : <Eye size={14}/>}
              </button>
            </div>
          </Field>

          {error && (
            <p style={{ color:C.error, fontSize:12, marginBottom:16, textAlign:"center" }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} style={{
            width:"100%", padding:"12px 0", borderRadius:4, cursor:"pointer",
            background:C.gold, color:"#0E0C0A", fontWeight:900,
            fontSize:13, letterSpacing:1,
            display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            opacity: loading ? 0.7 : 1, marginTop:8,
          }}>
            {loading ? <Loader2 size={15} style={{ animation:"spin 0.8s linear infinite" }}/> : <Shield size={15}/>}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
      <GlobalStyles/>
    </div>
  );
}

// ── Global CSS ────────────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; border:none; outline:none; }
      body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; }
      ::-webkit-scrollbar { width:5px; height:5px; }
      ::-webkit-scrollbar-track { background:#0E0C0A; }
      ::-webkit-scrollbar-thumb { background:#2A2520; border-radius:3px; }
      @keyframes spin   { to { transform:rotate(360deg); } }
      @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    `}</style>
  );
}