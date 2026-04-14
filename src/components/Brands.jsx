import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import AP_LOGO from '/assets/asian-paints-seeklogo.png'
import CB_LOGO from '/assets/Carlsberg.png'
import CG_LOGO from '/assets/Casa_grand.png'

import AP1 from '/assets/A_P1.jpg'
import AP2 from '/assets/A_P2.jpg'

import CB1 from '/assets/carlsberg1.jpg'
import CB2 from '/assets/carlsberg2.jpg'
import CB4 from '/assets/carlsberg4.jpg'

import CG from '/assets/Casa_Grande.jpg'

const brands = [
  {
    name: 'Asian Paints',
    logo: AP_LOGO,
    photos: [AP1, AP2],
  },
  {
    name: 'Carlsberg',
    logo: CB_LOGO,
    photos: [CB1, CB2, CB4],
  },
  {
    name: 'Casagrand',
    logo: CG_LOGO,
    photos: [CG],
  },
]

export default function Brands() {
  const [current, setCurrent] = useState(0)
  const [photoIdx, setPhotoIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const slideRefs = useRef([])
  const photoRefs = useRef([])
  const tlRef = useRef(null)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.set(el, {
        opacity: i === 0 ? 1 : 0,
        y: i === 0 ? 0 : 24,
        pointerEvents: i === 0 ? 'auto' : 'none',
      })
    })

    let idx = 0
    let alive = true

    const crossfade = () => {
      if (!alive) return

      const next = (idx + 1) % brands.length
      const duration = isMobile ? 0.55 : 0.85
      const hold = isMobile ? 2.6 : 4

      const tl = gsap.timeline({
        onComplete: () => {
          idx = next
          setCurrent(next)
          setPhotoIdx(0)
          crossfade()
        },
      })

      tl.to(slideRefs.current[idx], {
        opacity: 0,
        y: -14,
        duration: duration * 0.7,
        ease: 'power2.in',
        pointerEvents: 'none',
      })

      tl.fromTo(
        slideRefs.current[next],
        { opacity: 0, y: 24, pointerEvents: 'none' },
        { opacity: 1, y: 0, duration, ease: 'power2.out', pointerEvents: 'auto' },
        '-=0.15'
      )

      tl.to({}, { duration: hold })
      tlRef.current = tl
    }

    const start = gsap.delayedCall(isMobile ? 2.5 : 4, crossfade)

    return () => {
      alive = false
      start.kill()
      tlRef.current?.kill()
    }
  }, [isMobile])

  useEffect(() => {
    const photos = brands[current].photos
    if (photos.length <= 1) return

    const els = photoRefs.current[current] || []
    if (!els.length) return

    let pIdx = 0
    const intervalMs = isMobile ? 2600 : 2000

    gsap.set(els, { opacity: 0 })
    gsap.set(els[0], { opacity: 1 })

    const cycle = () => {
      const next = (pIdx + 1) % photos.length
      if (!els[pIdx] || !els[next]) return

      gsap.to(els[pIdx], {
        opacity: 0,
        duration: 0.55,
        ease: 'power2.in',
      })

      gsap.fromTo(
        els[next],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        }
      )

      pIdx = next
      setPhotoIdx(next)
    }

    const interval = setInterval(cycle, intervalMs)
    return () => clearInterval(interval)
  }, [current, isMobile])

  return (
    <section className="bg-dark border-t border-[rgba(184,146,42,0.25)] px-4 py-16 sm:px-6 md:px-[5%] md:py-[90px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 md:mb-14">
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-[3.5px] text-gold">
            Brands Worked With
          </span>
          <h2
            className="font-playfair font-black leading-[1.12] tracking-[-0.5px] text-paper"
            style={{ fontSize: 'clamp(28px,4vw,42px)' }}
          >
            Across categories,
            <br />
            sizes, and stages.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-sm min-h-[560px] md:min-h-[520px]">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              ref={(el) => (slideRefs.current[i] = el)}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-[0.95fr_1.55fr]"
            >
             <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left bg-[#1A1714] px-5 py-5 md:px-10 md:py-10">
                <div>
                  <div className="mb-2 flex items-center justify-center md:justify-start w-full">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-[34px] max-w-[140px] object-contain opacity-95 md:max-h-[44px] md:max-w-[170px]"
                    />
                  </div>

                  <span className="mb-2 block text-[10px] uppercase tracking-[2.5px] text-gold text-center md:text-left">
                    Brand Story
                  </span>

                  <h3
                    className="max-w-[280px] md:max-w-[320px]  mx-auto md:mx-0 font-playfair font-black leading-tight text-paper md:mb-3"
                    style={{ fontSize: 'clamp(24px,3vw,38px)' }}
                  >
                    {brand.name}
                  </h3>

                 <div className="mb-4 mt-4 flex gap-2 justify-center md:justify-start w-full">
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

                  {brand.photos.length > 1 && (
                    <div className="mb-[-100px] flex gap-2 justify-center md:justify-start w-full">
                      {brand.photos.map((_, pi) => (
                        <div
                          key={pi}
                          className="h-[6px] w-[6px] rounded-full transition-all duration-400"
                          style={{
                            background:
                              pi === (i === current ? photoIdx : 0)
                                ? 'rgba(184,146,42,0.85)'
                                : '#252118',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className=" flex items-end justify-between">
                  
                  <p className="hidden text-[10px] uppercase tracking-[2px] text-[#6B6258] md:block">
                    Selected work
                  </p>
                </div>
              </div>

              <div className="relative h-[300px] overflow-hidden md:h-auto">
                {brand.photos.map((src, pi) => (
                  <img
                    key={pi}
                    ref={(el) => {
                      if (!photoRefs.current[i]) photoRefs.current[i] = []
                      photoRefs.current[i][pi] = el
                    }}
                    src={src}
                    alt={`${brand.name} ${pi + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ opacity: pi === 0 ? 1 : 0 }}
                  />
                ))}

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(14,12,10,0.70) 0%, rgba(184,146,42,0.04) 100%)',
                  }}
                />

                <span
                  className="pointer-events-none absolute bottom-4 right-4 hidden select-none font-playfair font-black italic md:block md:bottom-6 md:right-8"
                  style={{
                    fontSize: 'clamp(34px,5vw,64px)',
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