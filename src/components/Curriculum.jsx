import { useFadeUpAll } from '../hooks/useFadeUp'

const modules = [
  {
    num: 'Module 01',
    title: 'Text Prompt Engineering',
  },
  {
    num: 'Module 02',
    title: 'Data Analysis with AI',
  },
  {
    num: 'Module 03',
    title: 'Presentations & Studio Tools',
  },
  {
    num: 'Module 04',
    title: 'Image Generation',
  },
  {
    num: 'Module 05',
    title: 'Video Generation',
  },
  {
    num: 'Module 06',
    title: 'Vibe Coding',
  },
  {
    num: 'Module 07',
    title: 'Customisation — Custom GPTs',
  },
  {
    num: 'Module 08',
    title: 'Automation & Agentic Workflow',
  },
]

export default function Curriculum() {
  const ref = useFadeUpAll()
  return (
    <section ref={ref} id="curriculum" className="py-[90px] px-[5%] bg-dark-2">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-10 fade-up">
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
            Workshop Content
          </span>
          <h2
            className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-3"
            style={{ fontSize: 'clamp(28px,4vw,42px)' }}
          >
            What's covered<br />in the session.
          </h2>
          <p className="text-[#7A7068] text-[15px] max-w-[440px]">
            Every participant builds real outputs — not slides to read later.
          </p>
        </div>

        {/* Top pills */}
        <div className="fade-up bg-dark-3 border border-[rgba(184,146,42,0.25)] px-[22px] py-[18px] mb-[2px] flex flex-wrap gap-[10px] items-center">
          <span className="text-[10px] tracking-[2px] uppercase text-gold shrink-0 mr-2">
            Every session includes
          </span>
          {['AI Fundamentals', 'Magic Perfect Prompt Formula', 'Pro Tips & Tricks', "Marketer's AI Tool Stack — 23 tools"].map((p) => (
            <span
              key={p}
              className="bg-[rgba(184,146,42,0.1)] border border-[rgba(184,146,42,0.25)] text-[#D4C8B8] text-[12px] px-3 py-1 rounded-full"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Module grid */}
        <div
          className="grid gap-4  py-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))' }}
        >
          {modules.map((m) => (
            <div
              key={m.num}
              className="fade-up bg-dark px-6 py-[26px] transition-colors duration-200 hover:bg-dark-3 border-t border-[rgba(184,146,42,0.06)]"
            >
              <span className="text-[10px] text-gold tracking-[2px] font-medium mb-[10px] block">
                {m.num}
              </span>
              <h3 className="font-playfair text-[17px] font-bold mb-[7px] leading-[1.3]">
                {m.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}