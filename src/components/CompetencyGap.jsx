import { useEffect, useRef } from 'react'

export default function CompetencyGap() {
 
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimations()
        } else {
          // Reset when out of view so it replays on next scroll
          const b1 = document.getElementById('bar1')
          const b2 = document.getElementById('bar2')
          if (b1) b1.style.height = '0%'
          if (b2) b2.style.height = '0%'
          const ids = ['c1', 'c2', 'c3']
          ids.forEach(id => {
            const el = document.getElementById(id)
            if (el) el.textContent = '0'
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  function animateCount(id, target, duration, suffix = '', isFloat = false) {
    const el = document.getElementById(id)
    if (!el) return
    let start = null
    function step(ts) {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      const val = isFloat ? (ease * target).toFixed(1) : Math.round(ease * target)
      el.textContent = val + suffix
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  function runAnimations() {
    const b1 = document.getElementById('bar1')
    const b2 = document.getElementById('bar2')
    if (b1) b1.style.height = '69%'
    if (b2) b2.style.height = '28%'

    setTimeout(() => {
      animateCount('c1', 3.5, 1400, 'x', true)
      animateCount('c2', 41,  1400, 'pt')
      animateCount('c3', 87,  1400, '%')
    }, 300)
  }

  const bars = [
    { id: 'bar1', pct: 69,  label: 'Using AI',        sublabel: 'in some capacity',       color: '#B8922A' },
    { id: 'bar2', pct: 28,  label: 'Actually Know How', sublabel: 'using it effectively',  color: '#D4AA4A' },
  ]

  const stats = [
    { id: 'c1', label: 'Output multiplier for AI-fluent teams' },
    { id: 'c2', label: 'Points separate users from the proficient' },
    { id: 'c3', label: 'Of trained teams saw immediate ROI' },
  ]

  return (
    <div
      ref={sectionRef}
      className="rounded-xl p-8 pb-6"
      style={{ background: '#0E0C0A', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Header */}
      <p className="text-[10px] tracking-[3px] uppercase text-gold font-medium mb-1">
        The Competency Gap
      </p>
      <h2 className="font-playfair text-[22px] font-black text-paper leading-tight mb-1">
        The gap is widening — every quarter.
      </h2>
      <p className="text-[13px] text-muted mb-10">
        AI adoption vs. actual proficiency across marketing teams
      </p>

      {/* Vertical Bars */}
      <div className="flex items-end justify-center gap-10 mb-10" style={{ height: '220px' }}>
        {bars.map(({ id, pct, label, sublabel, color }) => (
          <div key={id} className="flex flex-col items-center gap-3 h-full">
            {/* Percentage label on top */}
            <span
              className="font-playfair font-black text-[28px] leading-none"
              style={{ color }}
            >
              {pct}%
            </span>

            {/* Bar track */}
            <div
              className="w-16 rounded-sm flex-1 flex items-end overflow-hidden relative"
              style={{ background: '#1A1714' }}
            >
              {/* Grid lines */}
              {[25, 50, 75].map((line) => (
                <div
                  key={line}
                  className="absolute w-full"
                  style={{
                    bottom: `${line}%`,
                    borderTop: '1px dashed rgba(184,146,42,0.08)',
                  }}
                />
              ))}
              <div
                id={id}
                className="w-full rounded-sm"
                style={{
                  background: color,
                  height: '0%',
                  transition: 'height 1.4s cubic-bezier(0.22,1,0.36,1)',
                }}
              />
            </div>

            {/* Label below */}
            <div className="text-center">
              <p className="text-[13px] font-medium text-paper leading-tight">{label}</p>
              {/* <p className="text-[11px] text-[#fcf9f6] mt-[2px]">{sublabel}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-[10px] mb-6">
        {stats.map(({ id, label }) => (
          <div
            key={id}
            className="rounded-md p-[14px] text-center border border-[rgba(184,146,42,0.12)]"
            style={{ background: '#1A1714' }}
          >
            <span
              id={id}
              className="font-playfair text-[24px] font-black block leading-none mb-1"
              style={{ color: '#D4AA4A' }}
            >
              0
            </span>
            <span className="text-[10px] text-[#ffedd8] tracking-wide uppercase leading-snug">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Insight bar */}
      <div
        className="px-4 py-3 rounded-r-md"
        style={{ background: 'rgba(184,146,42,0.06)', borderLeft: '3px solid #B8922A' }}
      >
        <p className="text-[12.5px] text-[#7A7068] leading-relaxed m-0">
          Your competitors are hiring for AI skills. Teams with hands-on AI systems outpace
          competitors by{' '}
          <span className="text-gold-light font-medium">3–4×</span>. The gap is the
          opportunity — and it closes{' '}
          <span className="text-gold-light font-medium">in one day</span>.
        </p>
      </div>
    </div>
  )
}