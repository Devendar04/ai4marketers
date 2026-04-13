import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const brands = [
  {
    name: 'Asian Paints',
    logo: '/assets/asian-paints-seeklogo.png',
    photos: ['/assets/A_P1.jpg', '/assets/A_P2.jpg'],
    tag: 'Paint & Décor',
  },
  {
    name: 'Carlsberg',
    logo: '/assets/Carlsberg.png',
    photos: ['/assets/carlsberg1.jpg', '/assets/carlsberg2.jpg', '/assets/carlsberg4.jpg'],
    tag: 'Beverages',
  },
  {
    name: 'Casagrand',
    logo: '/assets/Casa_grand.png',
    photos: ['/assets/Casa_Grande.jpg'],
    tag: 'Real Estate',
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
      })
    })

    let idx = 0
    let alive = true

    const crossfade = () => {
      if (!alive) return

      const next = (idx + 1) % brands.length
      const duration = isMobile ? 0.55 : 0.9
      const hold = isMobile ? 2.5 : 4

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
      })

      tl.fromTo(
        slideRefs.current[next],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration, ease: 'power2.out' },
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

    const els = photoRefs.current.filter(Boolean)
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

        <div className="relative overflow-hidden rounded-sm min-h-[480px] md:min-h-[480px]">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              ref={(el) => (slideRefs.current[i] = el)}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-[1fr_2fr]"
            >
              <div
                className="flex flex-col justify-items-start bg-[#1A1714] px-5 py-5 md:px-10 md:py-10"
                style={{ minHeight: isMobile ? '180px' : 'auto' }}
              >
                <div className="flex items-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[32px] max-w-[120px] object-contain opacity-90 md:max-h-[44px] md:max-w-[160px]"
                  />
                </div>

                <div className="mt-6">
                  <span className="mb-2 block text-[10px] uppercase tracking-[2.5px] text-gold">
                    {brand.tag}
                  </span>

                  <h3
                    className="mb-3 font-playfair font-black leading-tight text-paper md:mb-6"
                    style={{ fontSize: 'clamp(24px,3vw,36px)' }}
                  >
                    {brand.name}
                  </h3>

                  <div className="mb-3 flex gap-2">
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
                    <div className="flex gap-[6px] rounded-sm">
                      {brand.photos.map((_, pi) => (
                        <div
                          key={pi}
                          className="h-[6px] w-[6px] rounded-full transition-all duration-400"
                          style={{
                            background:
                              pi === (i === current ? photoIdx : 0)
                                ? 'rgba(184,146,42,0.8)'
                                : '#252118',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <p className="font-playfair italic text-[13px] text-[#3A3530]">
                  {i + 1} / {brands.length}
                </p>
              </div>

              <div className="relative h-[240px] overflow-hidden md:h-auto rounded-sm">
                {brand.photos.map((src, pi) => (
                  <img
                    key={pi}
                    ref={(el) => {
                      if (i === current) photoRefs.current[pi] = el
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
                      'linear-gradient(120deg, rgba(14,12,10,0.65) 0%, rgba(184,146,42,0.03) 100%)',
                  }}
                />

                <span
                  className="pointer-events-none absolute bottom-4 right-4 hidden select-none font-playfair font-black italic md:block md:bottom-6 md:right-8"
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