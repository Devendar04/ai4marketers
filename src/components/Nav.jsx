import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, FileText, Layers, MessageCircle, BookOpen } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const links = [
  { to: '/',        label: 'Home',         icon: Home      },
  { to: '/prompts', label: 'Prompts',      icon: FileText  },
  { to: '/stack',   label: 'AI Stack',     icon: Layers    },
]

const BLOG_LINK = 'https://blog.ai4marketers.co.in'

const WA_LINK = 'https://wa.me/918095978040'

// ─────────────────────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────────────────────
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [bubble,   setBubble]   = useState(false)   // WA bubble pulse
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Pulse the bubble every 5s to draw attention
  useEffect(() => {
    const id = setInterval(() => {
      setBubble(true)
      setTimeout(() => setBubble(false), 800)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <style>{`

        /* ─── shimmer sweep — runs continuously on all three buttons ─── */
        @keyframes continuousShimmer {
          0%   { transform: translateX(-120%) skewX(-18deg); }
          100% { transform: translateX(320%)  skewX(-18deg); }
        }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          width: 38%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
          animation: continuousShimmer 2.6s ease-in-out infinite;
          pointer-events: none;
          border-radius: inherit;
        }

        /* ─── glow pulse on active pill ─── */
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 6px rgba(184,146,42,0.3), 0 0 16px rgba(184,146,42,0.12); }
          50%     { box-shadow: 0 0 12px rgba(184,146,42,0.6), 0 0 28px rgba(184,146,42,0.22); }
        }
        .pill-active { animation: glowPulse 2.6s ease-in-out infinite; }

        /* ─── WA bubble ring pulse ─── */
        @keyframes waPulse {
          0%   { transform: scale(1);    opacity: 1; }
          60%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .wa-ring { animation: waPulse 0.8s ease-out forwards; }

        /* ─── bottom tab active dot ─── */
        @keyframes dotPop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .tab-dot { animation: dotPop 0.25s ease forwards; }

        /* ─── mobile tab bar safe area ─── */
        .tab-bar { padding-bottom: env(safe-area-inset-bottom, 0px); }

        /* ─── desktop pill container glow ─── */
        @keyframes pillGlow {
          0%,100% { box-shadow: 0 0 0 1px rgba(184,146,42,0.18), 0 8px 32px rgba(0,0,0,0.4); }
          50%     { box-shadow: 0 0 0 1px rgba(184,146,42,0.32), 0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(184,146,42,0.07); }
        }
        .nav-glass-pill { animation: pillGlow 3.5s ease-in-out infinite; }

        /* ─── underline traveller ─── */
        .nav-link-item { position: relative; }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 50%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #D4A832, #F0D080);
          border-radius: 2px;
          transform: translateX(-50%);
          transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-item:hover::after  { width: 60%; }
        .nav-link-item.is-active::after { width: 70%; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP NAV — hidden on mobile
      ═══════════════════════════════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center px-[5%]"
        style={{
          height:               '64px',
          background:           scrolled ? 'rgba(8,6,4,0.96)' : 'rgba(14,12,10,0.85)',
          backdropFilter:       'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom:         `1px solid ${scrolled ? 'rgba(184,146,42,0.2)' : 'rgba(184,146,42,0.08)'}`,
          boxShadow:            scrolled ? '0 2px 40px rgba(0,0,0,0.7)' : 'none',
          transition:           'background 0.35s, border-color 0.35s, box-shadow 0.35s',
        }}
      >
        {/* Logo — far left */}
        <NavLink to="/" className="no-underline flex items-center gap-[9px] shrink-0" style={{ textDecoration: 'none' }}>
          <span style={{
            display: 'block', width: '3px', height: '18px',
            background: 'linear-gradient(180deg,#D4A832,#7A5810)',
            borderRadius: '2px',
          }} />
          <span
            className="font-playfair font-bold"
            style={{
              fontSize: '15px',
              background: 'linear-gradient(90deg,#D4A832 0%,#F0D080 50%,#B8922A 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              letterSpacing: '0.4px',
            }}
          >
            AI4Marketers
          </span>
        </NavLink>

        {/* ── Frosted glass pill — centered absolutely ── */}
        <div
          className="nav-glass-pill absolute left-1/2 -translate-x-1/2 flex items-center"
          style={{
            background:   'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border:       '1px solid rgba(184,146,42,0.18)',
            borderRadius: '40px',
            padding:      '5px 6px',
            gap:          '2px',
          }}
        >
          {links.filter(l => l.to !== '/').map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className="no-underline"
              style={{ textDecoration: 'none' }}
            >
              {({ isActive }) => (
                <span
                  className={`nav-link-item${isActive ? ' is-active pill-active' : ''}`}
                  style={{
                    display:       'inline-flex',
                    alignItems:    'center',
                    gap:           '10px',
                    fontSize:      '12.5px',
                    fontWeight:    isActive ? 600 : 400,
                    letterSpacing: '0.3px',
                    padding:       '7px 25px',
                    borderRadius:  '32px',
                    background:    isActive ? 'rgba(184,146,42,0.12)' : 'transparent',
                    color:         isActive ? '#D4A832' : '#6B6457',
                    border:        isActive ? '1px solid rgba(184,146,42,0.35)' : '1px solid transparent',
                    transition:    'background 0.2s, color 0.2s, border-color 0.2s',
                    cursor:        'pointer',
                    whiteSpace:    'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color      = '#A09080'
                      e.currentTarget.style.background = 'rgba(184,146,42,0.05)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color      = '#6B6457'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {isActive && (
                    <span style={{
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: '#D4A832', boxShadow: '0 0 5px #D4A832', flexShrink: 0,
                    }} />
                  )}
                  {l.label}
                </span>
              )}
            </NavLink>
          ))}

          {/* ── Blog external link ── */}
          <a
            href={BLOG_LINK}
            target="_blank"
            rel="noreferrer"
            className="nav-link-item no-underline"
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '6px',
              fontSize:      '12.5px',
              fontWeight:    400,
              letterSpacing: '0.3px',
              padding:       '7px 18px',
              borderRadius:  '32px',
              background:    'transparent',
              color:         '#6B6457',
              border:        '1px solid transparent',
              transition:    'background 0.2s, color 0.2s',
              cursor:        'pointer',
              whiteSpace:    'nowrap',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color      = '#A09080'
              e.currentTarget.style.background = 'rgba(184,146,42,0.05)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color      = '#6B6457'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Blog
          </a>
        </div>

        {/* CTA — far right, continuous shimmer */}
        <div className="ml-auto">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer no-underline"
            style={{
              position:      'relative',
              overflow:      'hidden',
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '7px',
              fontSize:      '12.5px',
              fontWeight:    600,
              letterSpacing: '0.4px',
              padding:       '9px 20px',
              borderRadius:  '4px',
              background:    'linear-gradient(135deg,#C9A030 0%,#9A7018 100%)',
              color:         '#0A0806',
              border:        '1px solid rgba(212,168,50,0.45)',
              boxShadow:     '0 2px 14px rgba(184,146,42,0.35)',
              textDecoration: 'none',
              transition:    'box-shadow 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(184,146,42,0.55)'
              e.currentTarget.style.transform  = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 14px rgba(184,146,42,0.35)'
              e.currentTarget.style.transform  = 'translateY(0)'
            }}
          >
            <MessageCircle size={13} />
            Request a Workshop
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE — minimal top bar (logo only)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center px-[5%]"
        style={{
          height:               '54px',
          background:           'rgba(10,8,6,0.92)',
          backdropFilter:       'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom:         '1px solid rgba(184,146,42,0.1)',
        }}
      >
        <NavLink to="/" className="no-underline flex items-center gap-[8px]" style={{ textDecoration: 'none' }}>
          <span style={{
            display: 'block', width: '3px', height: '16px',
            background: 'linear-gradient(180deg,#D4A832,#7A5810)',
            borderRadius: '2px',
          }} />
          <span
            className="font-playfair font-bold"
            style={{
              fontSize: '14.5px',
              background: 'linear-gradient(90deg,#D4A832,#F0D080,#B8922A)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            AI4Marketers
          </span>
        </NavLink>

        {/* Mini CTA top-right on mobile */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn-shimmer ml-auto no-underline"
          style={{
            position:      'relative',
            overflow:      'hidden',
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '5px',
            fontSize:      '11px',
            fontWeight:    600,
            letterSpacing: '0.3px',
            padding:       '7px 13px',
            borderRadius:  '4px',
            background:    'linear-gradient(135deg,#C9A030 0%,#9A7018 100%)',
            color:         '#0A0806',
            border:        '1px solid rgba(212,168,50,0.4)',
            boxShadow:     '0 2px 10px rgba(184,146,42,0.3)',
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={11} />
          Workshop
        </a>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE BOTTOM TAB BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="tab-bar fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{
          background:           'rgba(10,8,6,0.96)',
          backdropFilter:       'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop:            '1px solid rgba(184,146,42,0.12)',
          boxShadow:            '0 -4px 32px rgba(0,0,0,0.6)',
        }}
      >
        <div className="flex items-center" style={{ height: '60px' }}>

          {/* Tab items — evenly spaced */}
          {links.map((l, i) => {
            const Icon    = l.icon
            const isActive = !l.external && (location.pathname === l.to ||
              (l.to !== '/' && location.pathname.startsWith(l.to)))
            const isMid = i === Math.floor(links.length / 2)

            const inner = (
              <div
                style={{
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  justifyContent: 'center',
                  gap:            '3px',
                  position:       'relative',
                }}
              >
                <div
                  style={{
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    width:          isMid ? '44px' : '36px',
                    height:         isMid ? '44px' : '36px',
                    borderRadius:   isMid ? '12px' : '10px',
                    background:     isActive
                      ? isMid
                        ? 'linear-gradient(135deg,#C9A030,#9A7018)'
                        : 'rgba(184,146,42,0.12)'
                      : isMid
                        ? 'rgba(184,146,42,0.08)'
                        : 'transparent',
                    border:         isActive
                      ? isMid
                        ? '1px solid rgba(212,168,50,0.5)'
                        : '1px solid rgba(184,146,42,0.3)'
                      : isMid
                        ? '1px solid rgba(184,146,42,0.2)'
                        : '1px solid transparent',
                    boxShadow:      isActive && isMid
                      ? '0 4px 16px rgba(184,146,42,0.45)'
                      : isActive
                        ? '0 0 10px rgba(184,146,42,0.2)'
                        : 'none',
                    transition:     'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                    transform:      isActive && isMid ? 'translateY(-3px)' : 'none',
                    marginBottom:   isActive && isMid ? '1px' : '0',
                  }}
                >
                  <Icon
                    size={isMid ? 18 : 17}
                    style={{
                      color:      isActive
                        ? isMid ? '#0A0806' : '#D4A832'
                        : '#3E3830',
                      transition: 'color 0.2s',
                      strokeWidth: isActive ? 2.2 : 1.6,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize:      '9.5px',
                    fontWeight:    isActive ? 600 : 400,
                    letterSpacing: '0.3px',
                    color:         isActive
                      ? isMid ? '#D4A832' : '#C9A84C'
                      : '#2E2820',
                    transition:    'color 0.2s',
                    lineHeight:    1,
                  }}
                >
                  {l.label}
                </span>
                {isActive && !isMid && (
                  <span
                    className="tab-dot"
                    style={{
                      position:     'absolute',
                      top:          '-6px',
                      left:         '50%',
                      transform:    'translateX(-50%)',
                      width:        '3px',
                      height:       '3px',
                      borderRadius: '50%',
                      background:   '#D4A832',
                      boxShadow:    '0 0 5px #D4A832',
                    }}
                  />
                )}
              </div>
            )

            return l.external ? (
              <a
                key={l.to}
                href={l.to}
                target="_blank"
                rel="noreferrer"
                className="no-underline flex-1 flex flex-col items-center justify-center"
                style={{ textDecoration: 'none', height: '100%' }}
              >
                {inner}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className="no-underline flex-1 flex flex-col items-center justify-center"
                style={{ textDecoration: 'none', height: '100%' }}
              >
                {inner}
              </NavLink>
            )
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          FLOATING WHATSAPP BUBBLE — mobile only
      ═══════════════════════════════════════════════════════════════════ */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="md:hidden fixed z-40 no-underline"
        style={{
          right:       '18px',
          bottom:      '80px',   // sits above the tab bar
          width:       '50px',
          height:      '50px',
          borderRadius: '50%',
          background:  'linear-gradient(135deg,#C9A030 0%,#9A7018 100%)',
          border:      '1px solid rgba(212,168,50,0.5)',
          boxShadow:   '0 4px 20px rgba(184,146,42,0.5)',
          display:     'flex',
          alignItems:  'center',
          justifyContent: 'center',
          textDecoration: 'none',
        }}
      >
        {/* Pulse ring */}
        {bubble && (
          <span
            className="wa-ring"
            style={{
              position:     'absolute',
              inset:        0,
              borderRadius: '50%',
              border:       '2px solid rgba(212,168,50,0.6)',
              pointerEvents: 'none',
            }}
          />
        )}
        <MessageCircle size={20} color="#0A0806" strokeWidth={2.2} />
      </a>

      {/* ── Page content offset helpers ── */}
      {/* Desktop: 64px top offset via layout. Mobile: 54px top + 60px bottom.
          Add these classes to your page wrapper:
            pt-[54px] pb-[60px] md:pt-[64px] md:pb-0             */}
    </>
  )
}