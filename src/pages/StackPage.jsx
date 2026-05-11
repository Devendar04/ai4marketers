import { useState, useEffect, useRef } from 'react'
import { useFadeUpAll } from '../hooks/useFadeUp'
import { Zap, X, ArrowUpRight, Clock, DollarSign, Lightbulb } from 'lucide-react'
import { stack, categories, categoryColor, levelColor } from '../data/toolsData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// SmartIcon — priority chain:
//   1. tool.icon  → local SVG in /public/icons/  (self-hosted, instant, no blocking)
//   2. Google S2  → favicon from the tool's domain (reliable, not adblocked)
//   3. LogoAvatar → generated letter + category colour (always works)
//
// SETUP: copy the 6 SVG files from outputs/icons/ → your project's /public/icons/
// ─────────────────────────────────────────────────────────────────────────────
function SmartIcon({ tool, size = 36 }) {
  const cat = categoryColor[tool.category] ?? '#B8922A'

  // Derive Google favicon URL from the tool's link
  const faviconUrl = (() => {
    try {
      const host = new URL(tool.link).hostname
      return `https://www.google.com/s2/favicons?domain=${host}&sz=64`
    } catch { return null }
  })()

  // Track which fallback level we're on: 'local' | 'favicon' | 'avatar'
  const [stage, setStage] = useState(tool.icon ? 'local' : faviconUrl ? 'favicon' : 'avatar')

  function onError() {
    if (stage === 'local')   setStage(faviconUrl ? 'favicon' : 'avatar')
    if (stage === 'favicon') setStage('avatar')
  }

  const imgStyle = {
    width:        size,
    height:       size,
    minWidth:     size,
    borderRadius: Math.round(size * 0.28) + 'px',
    objectFit:    'contain',
    background:   `${cat}12`,
    border:       `1px solid ${cat}30`,
    padding:      stage === 'favicon' ? Math.round(size * 0.14) + 'px' : '0',
    flexShrink:   0,
    display:      'block',
  }

  if (stage === 'local') {
    return (
      <img
        src={tool.icon}
        alt={tool.name}
        style={{ ...imgStyle, padding: '0' }}
        onError={onError}
        loading="lazy"
      />
    )
  }

  if (stage === 'favicon') {
    return (
      <img
        src={faviconUrl}
        alt={tool.name}
        style={imgStyle}
        onError={onError}
        loading="lazy"
      />
    )
  }

  // ── Letter avatar fallback ────────────────────────────────────────────────
  return (
    <div
      aria-hidden
      style={{
        width:          size,
        height:         size,
        minWidth:       size,
        borderRadius:   Math.round(size * 0.28) + 'px',
        background:     `linear-gradient(135deg, ${cat}28, ${cat}10)`,
        border:         `1px solid ${cat}40`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontFamily:     'Playfair Display, serif',
        fontWeight:     700,
        fontSize:       Math.round(size * 0.42) + 'px',
        color:          cat,
        flexShrink:     0,
        boxShadow:      `0 0 10px ${cat}18`,
      }}
    >
      {tool.name.trim()[0].toUpperCase()}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// useZigzag — GSAP ScrollTrigger zig-zag on mobile
// ─────────────────────────────────────────────────────────────────────────────
function useZigzag(deps) {
  const gridRef = useRef(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return
    const grid = gridRef.current
    if (!grid) return

    const rafId = requestAnimationFrame(() => {
      const cards = grid.querySelectorAll('[data-card]')
      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0
        ScrollTrigger.getById(`card-${i}`)?.kill()
        gsap.fromTo(card,
          { opacity: 0, x: fromLeft ? -48 : 48, y: 18, scale: 0.94, rotation: fromLeft ? -2 : 2 },
          {
            opacity: 1, x: 0, y: 0, scale: 1, rotation: 0,
            duration: 0.55, ease: 'power3.out',
            scrollTrigger: { id: `card-${i}`, trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
          }
        )
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      ScrollTrigger.getAll().filter(t => t.vars?.id?.startsWith('card-')).forEach(t => t.kill())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return gridRef
}

// ─────────────────────────────────────────────────────────────────────────────
// AnimatedGrid
// ─────────────────────────────────────────────────────────────────────────────
function AnimatedGrid({ tools, onCardClick }) {
  const [visibleKeys, setVisibleKeys] = useState(new Set())
  const [renderKey,   setRenderKey]   = useState(0)

  useEffect(() => {
    setVisibleKeys(new Set())
    setRenderKey(k => k + 1)
    const timers = tools.map((t, i) =>
      setTimeout(() => setVisibleKeys(prev => new Set([...prev, t.name + t.category])), i * 55)
    )
    return () => timers.forEach(clearTimeout)
  }, [tools])

  const gridRef = useZigzag([renderKey])

  return (
    <div
      ref={gridRef}
      key={renderKey}
      className="grid gap-3 md:gap-4"
      style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
      
    >
      <style>{`
        @media (min-width: 768px)  { .stack-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (min-width: 1024px) { .stack-grid { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 767px)  { [data-card] { opacity: 0; } }
      `}</style>
      {tools.map((tool, i) => (
        <ToolCard
          key={tool.name + tool.category}
          tool={tool}
          index={i}
          visible={visibleKeys.has(tool.name + tool.category)}
          onClick={onCardClick}
        />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ToolCard
// ─────────────────────────────────────────────────────────────────────────────
function ToolCard({ tool, visible, onClick }) {
  const [hovered, setHovered] = useState(false)
  const cat = categoryColor[tool.category]
  const lvl = levelColor[tool.level]

  return (
    <button
      data-card
      onClick={() => onClick(tool)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-left w-full relative overflow-hidden flex flex-col"
      style={{
        background:   '#141210',
        border:       `1px solid rgba(255,255,255,0.06)`,
        borderTop:    `2px solid ${hovered ? cat : cat + '44'}`,
        minHeight:    '162px',
        padding:      '16px 15px 14px',
        borderRadius: '3px',
        opacity:      visible ? 1 : 0,
        transform:    visible ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.97)',
        transition:   'opacity 0.32s ease, transform 0.32s cubic-bezier(0.22,1,0.36,1), border-color 0.2s, box-shadow 0.25s',
        boxShadow:    hovered
          ? `0 10px 36px rgba(0,0,0,0.55), 0 0 0 1px ${cat}44`
          : '0 2px 6px rgba(0,0,0,0.35)',
      }}
    >
      {/* Desktop hover glow */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{
        background: `radial-gradient(ellipse 90% 55% at 50% -10%, ${cat}1E 0%, transparent 65%)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
      }} />
      {/* Desktop shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] hidden md:block" style={{
        background: `linear-gradient(90deg, transparent, ${cat}, transparent)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease',
      }} />

      <div className="relative z-10 flex flex-col h-full gap-[10px]">
        {/* Top: icon + name + badge */}
        <div className="flex items-center gap-[10px]">
          <SmartIcon tool={tool} size={34} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-[6px] flex-wrap">
              <span
                className="font-playfair font-bold leading-tight"
                style={{ fontSize: 'clamp(13px,2vw,15px)', color: '#F2EBE2', transition: 'color 0.2s' }}
              >
                {tool.name}
              </span>
              {tool.badge && <Zap size={10} style={{ color: '#D4A832', flexShrink: 0 }} />}
            </div>
            <span className="text-[9px] uppercase tracking-[1px] font-semibold" style={{ color: cat }}>
              {tool.category}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[11.5px] leading-snug flex-1" style={{ color: '#B0A090' }}>
          {tool.tagline}
        </p>

        {/* Bottom: level + desktop hint */}
        <div className="flex items-center justify-between mt-auto">
          <span
            className="text-[8.5px] tracking-[0.5px] uppercase px-[7px] py-[3px] rounded-sm border font-semibold"
            style={{ background: lvl.bg, borderColor: lvl.border, color: lvl.text }}
          >
            {tool.level}
          </span>
          <div
            className="hidden md:flex items-center gap-1"
            style={{
              opacity:    hovered ? 1 : 0,
              transform:  hovered ? 'translateX(0)' : 'translateX(4px)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
          >
            <ArrowUpRight size={9} style={{ color: cat }} />
            <span className="text-[9px] uppercase tracking-[1px]" style={{ color: cat }}>Details</span>
          </div>
        </div>
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ToolModal
// ─────────────────────────────────────────────────────────────────────────────
function ToolModal({ tool, onClose }) {
  const cat = categoryColor[tool.category]
  const lvl = levelColor[tool.level]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-40" style={{
        background: 'rgba(0,0,0,0.76)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        animation: 'bdIn 0.22s ease forwards',
      }} onClick={onClose} />

      <div
        className="fixed z-50 bottom-0 left-0 right-0 rounded-t-[20px] md:bottom-auto md:top-1/2 md:left-1/2 md:w-[520px] md:rounded-[6px]"
        style={{
          background: '#1C1916',
          border:     `1px solid ${cat}30`,
          boxShadow:  `0 0 100px ${cat}1A, 0 40px 100px rgba(0,0,0,0.85)`,
          animation:  'mdIn 0.28s cubic-bezier(0.32,0.72,0,1) forwards',
          maxHeight:  '92vh', overflowY: 'auto',
        }}
      >
        <style>{`
          @keyframes bdIn { from{opacity:0} to{opacity:1} }
          @keyframes mdIn { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
          @media (min-width:768px){@keyframes mdIn{
            from{opacity:0;transform:translate(-50%,calc(-50% + 20px))}
            to{opacity:1;transform:translate(-50%,-50%)}
          }}
        `}</style>

        <div className="h-[3px] w-full rounded-t-[20px] md:rounded-t-[6px]"
          style={{ background: `linear-gradient(90deg, ${cat}, ${cat}44, transparent)` }} />
        <div className="flex justify-center pt-3 md:hidden">
          <div className="w-10 h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <div className="px-6 pt-5 pb-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-1">
            <div className="flex items-center gap-3 flex-1">
              <SmartIcon tool={tool} size={48} />
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-[4px]">
                  <h3 className="font-playfair text-[22px] font-black" style={{ color: '#F5EFE8' }}>
                    {tool.name}
                  </h3>
                  {tool.badge && (
                    <span className="text-[9px] tracking-[1.5px] uppercase px-[9px] py-[4px] rounded-sm font-bold flex items-center gap-[4px]"
                      style={{ background: 'rgba(184,146,42,0.12)', color: '#D4A832', border: '1px solid rgba(184,146,42,0.3)' }}>
                      <Zap size={8} /> {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-[12px] italic" style={{ color: cat + 'CC' }}>{tool.tagline}</p>
              </div>
            </div>
            <button onClick={onClose}
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-150 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#7A7268' }}>
              <X size={15} />
            </button>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2 mt-4 mb-5">
            {[
              { icon: <DollarSign size={10} />, val: tool.pricing   },
              { icon: <Clock size={10} />,      val: tool.learnTime  },
              { icon: null, val: tool.level, style: { background: lvl.bg, borderColor: lvl.border, color: lvl.text } },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-[6px] px-3 py-[5px] rounded-sm border text-[11px]"
                style={m.style || { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#C0B8B0' }}>
                {m.icon && <span style={{ color: cat }}>{m.icon}</span>}
                <span className="font-semibold">{m.val}</span>
              </div>
            ))}
          </div>

          <div className="h-px mb-5" style={{ background: `${cat}1A` }} />

          <div className="mb-5">
            <span className="text-[9px] tracking-[2.5px] uppercase font-semibold block mb-[7px]" style={{ color: cat + 'AA' }}>Best for</span>
            <p className="text-[14.5px] font-medium leading-snug" style={{ color: '#D8D0C8' }}>{tool.use}</p>
          </div>

          <div className="mb-5">
            <span className="text-[9px] tracking-[2.5px] uppercase font-semibold block mb-[7px]" style={{ color: cat + 'AA' }}>Why it works</span>
            <p className="text-[13.5px] leading-[1.75]" style={{ color: '#A89E94' }}>{tool.why}</p>
          </div>

          {tool.proTip && (
            <div className="mb-6 px-4 py-4 rounded-sm"
              style={{ background: `${cat}0D`, border: `1px solid ${cat}22`, borderLeft: `3px solid ${cat}` }}>
              <div className="flex items-center gap-2 mb-[7px]">
                <Lightbulb size={11} style={{ color: cat }} />
                <span className="text-[9px] tracking-[2px] uppercase font-bold" style={{ color: cat }}>Workshop Pro Tip</span>
              </div>
              <p className="text-[12.5px] leading-[1.72]" style={{ color: '#A89E94' }}>{tool.proTip}</p>
            </div>
          )}

          <a href={tool.link} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-[13px] rounded-sm text-[13px] font-bold no-underline tracking-[0.5px] transition-opacity duration-150 hover:opacity-90"
            style={{ background: cat, color: '#fff' }}>
            Try {tool.name} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Stack — main section
// ─────────────────────────────────────────────────────────────────────────────
export default function Stack() {
  const ref = useFadeUpAll()
  const [active,   setActive]   = useState('General')
  const [selected, setSelected] = useState(null)

  const displayed =
    active === 'General'
      ? stack.filter(t => t.General).slice(0, 6)
      : stack.filter(t => t.category === active)

  function handleFilter(cat) {
    if (cat === active) return
    ScrollTrigger.getAll().filter(t => t.vars?.id?.startsWith('card-')).forEach(t => t.kill())
    setActive(cat)
  }

  return (
    <section ref={ref} style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%,
            rgba(184,146,42,0.1) 0%, transparent 60%), #0E0C0A`,
          borderBottom: '1px solid rgba(184,146,42,0.15)',
        }} className="py-[90px] px-[5%] bg-dark border-t border-[rgba(184,146,42,0.25)]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="fade-up mb-4 max-w-[600px]">
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
            The AI Marketing Stack
          </span>
          <h2 className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-3"
            style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            Every tool your team<br />actually needs.
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: '#A09088' }}>
            Organised by use case. Rated by difficulty. No fluff — only tools
            that work inside real marketing teams.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-up flex flex-wrap gap-8 mb-12 mt-8">
          {[
            { num: `${stack.length}+`, label: 'Tools curated' },
            { num: `${categories.length - 1}`, label: 'Use cases' },
            { num: '100%', label: 'Marketer-tested' },
          ].map(s => (
            <div key={s.label}>
              <span className="font-playfair text-[28px] font-black text-gold-light block leading-none mb-1">{s.num}</span>
              <span className="text-[11px] tracking-[1.5px] uppercase" style={{ color: '#786E64' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Filter scrollbar */}
        <div className="fade-up flex gap-[7px] overflow-x-auto pb-[10px] mb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.stack-bar::-webkit-scrollbar{display:none}`}</style>
          {categories.map(cat => {
            const isActive = active === cat
            const color    = categoryColor[cat]
            return (
              <button key={cat} onClick={() => handleFilter(cat)}
                className="stack-bar flex-shrink-0 text-[10.5px] tracking-[1px] uppercase px-[14px] py-[9px] rounded-sm border font-bold flex items-center gap-[5px] transition-all duration-200"
                style={{
                  background:  isActive ? color : 'transparent',
                  color:       isActive ? '#0E0C0A' : '#807468',
                  borderColor: isActive ? color    : 'rgba(184,146,42,0.18)',
                  boxShadow:   isActive ? `0 4px 14px ${color}44` : 'none',
                  transform:   isActive ? 'translateY(-1px)' : 'translateY(0)',
                }}>
                {cat === 'General' && <Zap size={9} style={{ opacity: isActive ? 1 : 0.5 }} />}
                {cat}
                {cat !== 'General' && (
                  <span style={{ opacity: isActive ? 0.6 : 0.4, fontSize: '9px' }}>
                    {stack.filter(t => t.category === cat).length}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Active label */}
        <div className="fade-up mb-5 flex items-center gap-[8px]">
          {active === 'General' ? (
            <>
              <Zap size={11} style={{ color: '#D4A832' }} />
              <span className="text-[10px] tracking-[2px] uppercase" style={{ color: '#786E64' }}>
                Essential tools for every marketer
              </span>
            </>
          ) : (
            <>
              <span className="w-[7px] h-[7px] rounded-full"
                style={{ background: categoryColor[active], boxShadow: `0 0 6px ${categoryColor[active]}` }} />
              <span className="text-[10px] tracking-[2px] uppercase font-bold" style={{ color: categoryColor[active] }}>
                {active}
              </span>
              <span className="text-[10px]" style={{ color: '#5A5248' }}>· {displayed.length} tools</span>
            </>
          )}
        </div>

        {/* Grid */}
        <AnimatedGrid tools={displayed} onCardClick={setSelected} />

        {/* Footer */}
        <div className="fade-up mt-10 px-5 py-4 text-[12.5px] italic"
          style={{ borderLeft: '3px solid rgba(184,146,42,0.14)', color: '#5A5248' }}>
          All tools in this stack are covered hands-on during the AI4Marketers workshop.
        </div>
      </div>

      {selected && <ToolModal tool={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}