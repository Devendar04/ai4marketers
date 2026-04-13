import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import AP1 from '/assets/A_P1.jpg'
import AP2 from '/assets/A_P2.jpg'
import CB1 from '/assets/carlsberg1.jpg'
import CB2 from '/assets/carlsberg2.jpg'
import CB4 from '/assets/carlsberg4.jpg'
import CG  from '/assets/Casa_Grande.jpg'

const brands = [
  {
    name: 'Asian Paints',
    logo: './assets/asian-paints-seeklogo.png',
    photos: [AP1, AP2],
    tag: 'Paint & Décor',
  },
  {
    name: 'Carlsberg',
    logo: './assets/Carlsberg.png',
    photos: [CB1, CB2, CB4],
    tag: 'Beverages',
  },
  {
    name: 'Casagrand',
    logo: './assets/Casa_grand.png',
    photos: [CG],
    tag: 'Real Estate',
  },
]

export default function Brands() {
  const [current, setCurrent]   = useState(0)
  const [photoIdx, setPhotoIdx] = useState(0)
  const slideRefs = useRef([])
  const photoRefs = useRef([])
  const tlRef     = useRef(null)

  // Main brand crossfade
  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 })
    })

    let idx = 0

    function crossfade() {
      const next = (idx + 1) % brands.length
      const tl = gsap.timeline({
        onComplete: () => {
          idx = next
          setCurrent(next)
          setPhotoIdx(0)
          crossfade()
        },
      })
      tl.to(slideRefs.current[idx], { opacity: 0, y: -20, duration: 0.8, ease: 'power2.in' })
      tl.fromTo(
        slideRefs.current[next],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.2'
      )
      tl.to({}, { duration: 4 })
      tlRef.current = tl
    }

    const init = gsap.delayedCall(4, crossfade)
    return () => { init.kill(); tlRef.current?.kill() }
  }, [])

  // Photo sub-cycle within each brand
  useEffect(() => {
    const photos = brands[current].photos
    if (photos.length <= 1) return

    let pIdx = 0
    const els = photoRefs.current

    const cycle = () => {
      const next = (pIdx + 1) % photos.length
      if (!els[pIdx] || !els[next]) return

      gsap.to(els[pIdx], { opacity: 0, duration: 0.6, ease: 'power2.in' })
      gsap.fromTo(
        els[next],
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.5 }
      )
      pIdx = next
      setPhotoIdx(next)
    }

    const interval = setInterval(cycle, 2000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="py-[90px] px-[5%] bg-dark border-t border-[rgba(184,146,42,0.25)]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
            Brands Worked With
          </span>
          <h2
            className="font-playfair font-black leading-[1.15] tracking-[-0.5px]"
            style={{ fontSize: 'clamp(28px,4vw,42px)' }}
          >
            Across categories,<br />sizes, and stages.
          </h2>
        </div>

        {/* Stage */}
        <div className="relative overflow-hidden rounded-sm" style={{ height: '480px' }}>
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              ref={el => (slideRefs.current[i] = el)}
              className="absolute inset-0 grid overflow-hidden"
              style={{ gridTemplateColumns: '1fr 2fr' }}
            >
              {/* Left — info */}
              <div
                className="flex flex-col justify-between px-10 py-10"
                style={{ background: '#1A1714' }}
              >
                {/* Logo */}
                <div className="flex items-center" style={{ height: '60px' }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[44px] max-w-[160px] object-fill"
                    style={{ opacity: 0.9 }}
                  />
                </div>

                {/* Name + tag */}
                <div>
                  <span className="text-[10px] tracking-[2.5px] uppercase text-gold mb-3 block">
                    {brand.tag}
                  </span>
                  <h3
                    className="font-playfair font-black text-paper leading-tight mb-6"
                    style={{ fontSize: 'clamp(24px,3vw,36px)' }}
                  >
                    {brand.name}
                  </h3>

                  {/* Brand dots */}
                  <div className="flex gap-2 mb-3">
                    {brands.map((_, di) => (
                      <div
                        key={di}
                        className="h-[2px] rounded-full transition-all duration-500"
                        style={{
                          width: di === current ? '28px' : '8px',
                          background: di === current ? '#B8922A' : '#252118',
                        }}
                      />
                    ))}
                  </div>

                  {/* Photo dots (only if multiple) */}
                  {brand.photos.length > 1 && (
                    <div className="flex gap-[6px]">
                      {brand.photos.map((_, pi) => (
                        <div
                          key={pi}
                          className="w-[6px] h-[6px] rounded-full transition-all duration-400"
                          style={{
                            background: pi === (i === current ? photoIdx : 0)
                              ? 'rgba(184,146,42,0.8)'
                              : '#252118',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Counter */}
                <p className="font-playfair italic text-[13px] text-[#3A3530]">
                  {i + 1} / {brands.length}
                </p>
              </div>

              {/* Right — photos stacked, fade between them */}
              <div className="relative overflow-hidden">
                {brand.photos.map((src, pi) => (
                  <img
                    key={pi}
                    ref={el => {
                      if (i === current) photoRefs.current[pi] = el
                    }}
                    src={src}
                    alt={`${brand.name} ${pi + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity: pi === 0 ? 1 : 0,
                      
                    }}
                  />
                ))}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(14,12,10,0.65) 0%, rgba(184,146,42,0.03) 100%)',
                  }}
                />

                {/* Watermark */}
                <span
                  className="absolute bottom-6 right-8 font-playfair font-black italic select-none pointer-events-none"
                  style={{
                    fontSize: 'clamp(36px,5vw,64px)',
                    color: 'rgba(184,146,42,0.12)',
                    lineHeight: 1,
                  }}
                >
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}