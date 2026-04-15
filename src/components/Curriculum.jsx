import { useEffect, useRef, useState } from 'react'
import { useFadeUpAll } from '../hooks/useFadeUp'

const modules = [
  { num: 'Module 01', title: 'Text Prompt Engineering' },
  { num: 'Module 02', title: 'Data Analysis with AI' },
  { num: 'Module 03', title: 'Presentations & Studio Tools' },
  { num: 'Module 04', title: 'Image Generation' },
  { num: 'Module 05', title: 'Video Generation' },
  { num: 'Module 06', title: 'Vibe Coding' },
  { num: 'Module 07', title: 'Customisation — Custom GPTs' },
  { num: 'Module 08', title: 'Automation & Agentic Workflow' },
]

export default function Curriculum() {
  const ref = useFadeUpAll()
  const [isMobile, setIsMobile] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])

  const itemRefs = useRef([])

  // detect screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // scroll animation (down + up)
  useEffect(() => {
    if (!isMobile) {
      setVisibleItems(modules.map((_, i) => i))
      return
    }

    const observers = []

    itemRefs.current.forEach((el, index) => {
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            )
          } else {
            setVisibleItems((prev) =>
              prev.filter((i) => i !== index)
            )
          }
        },
        {
          threshold: 0.4,
          rootMargin: '0px 0px -10% 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isMobile])

  return (
    <section
      ref={ref}
      id="curriculum"
      className="bg-dark-2 px-4 py-[60px] sm:px-6 md:px-[5%] md:py-[90px]"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Header */}
        <div className="fade-up mb-10 text-center md:text-left">
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-[3.5px] text-gold">
            Workshop Content
          </span>

          <h2
            className="mb-3 font-playfair font-black leading-[1.15] tracking-[-0.5px]"
            style={{ fontSize: 'clamp(26px,5vw,42px)' }}
          >
            What's covered
            <br className="hidden md:block" />
            in the session.
          </h2>

          <p className="mx-auto max-w-[440px] text-[14px] text-[#7A7068] md:mx-0 md:text-[15px]">
            Every participant builds real outputs — not slides to read later.
          </p>
        </div>

        {/* Pills */}
        <div className="fade-up mb-4 border border-[rgba(184,146,42,0.25)] bg-dark-3 px-4 py-4 md:px-[22px] md:py-[18px]">
          <div className="flex flex-col gap-4">
            <span className="text-center text-[10px] uppercase tracking-[2px] text-gold md:text-left">
              Every session includes
            </span>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start md:gap-3">
              {[
                'AI Fundamentals',
                'Magic Perfect Prompt Formula',
                'Pro Tips & Tricks',
                "Marketer's AI Tool Stack — 23 tools",
              ].map((p) => (
                <span
                  key={p}
                  className="inline-flex w-fit max-w-full items-center whitespace-nowrap rounded-full border border-[rgba(184,146,42,0.25)] bg-[rgba(184,146,42,0.1)] px-3 py-2 text-[12px] leading-none text-[#D4C8B8]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modules */}
        <div
          className={`grid gap-3 md:gap-4 py-2 md:py-4 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {modules.map((m, index) => {
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={m.num}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`
                  bg-dark border border-[rgba(184,146,42,0.08)]
                  px-5 py-5 md:px-6 md:py-[26px]

                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  will-change-transform

                  ${
                    isMobile
                      ? isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-10 scale-[0.96]'
                      : 'opacity-100 translate-y-0 scale-100'
                  }
                `}
                style={
                  !isMobile
                    ? { transitionDelay: `${index * 70}ms` }
                    : undefined
                }
              >
                <span className="mb-[8px] block text-[10px] font-medium tracking-[2px] text-gold">
                  {m.num}
                </span>

                <h3 className="font-playfair text-[16px] font-bold leading-[1.3] md:text-[17px]">
                  {m.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}