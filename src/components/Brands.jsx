import { useEffect, useState } from 'react'

import AP_LOGO from '/assets/asian-paints-seeklogo.png'
import CB_LOGO from '/assets/Carlsberg.png'
import CG_LOGO from '/assets/Casa_grand.png'

import AP1 from '/assets/A_P1.jpg'
import AP2 from '/assets/A_P2.jpg'
import AP3 from '/assets/A_P3.jpg'
import AP4 from '/assets/A_P4.jpg'

import CB1 from '/assets/carlsberg1.jpg'
import CB2 from '/assets/carlsberg2.jpg'
import CB4 from '/assets/carlsberg4.jpg'

import CG from '/assets/Casa_Grande.jpg'

const brands = [
  {
    name: 'Asian Paints',
    logo: AP_LOGO,
    photos: [AP1, AP2, AP3, AP4],
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

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    let alive = true

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const run = async () => {
      let brandIndex = 0

      while (alive) {
        const brand = brands[brandIndex]

        setCurrent(brandIndex)
        setPhotoIdx(0)

        await sleep(isMobile ? 2200 : 2600)
        if (!alive) return

        for (let p = 1; p < brand.photos.length; p++) {
          setPhotoIdx(p)
          await sleep(isMobile ? 2200 : 2400)
          if (!alive) return
        }

        await sleep(isMobile ? 500 : 700)
        brandIndex = (brandIndex + 1) % brands.length
      }
    }

    run()

    return () => {
      alive = false
    }
  }, [isMobile])

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
          {brands.map((brand, i) => {
            const isActive = i === current

            return (
              <div
                key={brand.name}
                className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[0.95fr_1.55fr] transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left bg-[#1A1714] px-5 py-5 md:px-10 md:py-10">
                  <div className="w-full">
                    <div className="mb-2 flex w-full items-center justify-center md:justify-start">
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
                      className="mx-auto max-w-[280px] font-playfair font-black leading-tight text-paper md:mx-0 md:max-w-[320px] md:mb-3"
                      style={{ fontSize: 'clamp(24px,3vw,38px)' }}
                    >
                      {brand.name}
                    </h3>

                    <div className="mb-4 mt-4 flex w-full justify-center gap-2 md:justify-start">
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
                      <div className="mb-[-100px] flex w-full justify-center gap-2 md:justify-start">
                        {brand.photos.map((_, pi) => (
                          <div
                            key={pi}
                            className="h-[6px] w-[6px] rounded-full transition-all duration-300"
                            style={{
                              background:
                                pi === (isActive ? photoIdx : 0)
                                  ? 'rgba(184,146,42,0.85)'
                                  : '#252118',
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-end justify-between">
                    <p className="hidden text-[10px] uppercase tracking-[2px] text-[#6B6258] md:block">
                      Selected work
                    </p>
                  </div>
                </div>

                <div className="relative h-[300px] overflow-hidden md:h-auto">
                  {brand.photos.map((src, pi) => {
                    const showPhoto = isActive && photoIdx === pi

                    return (
                      <img
                        key={pi}
                        src={src}
                        alt={`${brand.name} ${pi + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                          showPhoto ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
                        }`}
                      />
                    )
                  })}

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
            )
          })}
        </div>
      </div>
    </section>
  )
}