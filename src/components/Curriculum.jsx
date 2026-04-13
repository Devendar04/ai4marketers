import { useFadeUpAll } from '../hooks/useFadeUp'

const modules = [
  {
    num: 'Module 01',
    title: 'Text Prompt Engineering',
    body: 'CRAFT and DIG frameworks applied to brief writing, consumer research, persona mapping, and sentiment analysis.',
  },
  {
    num: 'Module 02',
    title: 'Data Analysis with AI',
    body: 'Campaign performance analysis, customer insights, and market research summaries — using the C.R.A.F.T. and D.I.G frameworks.',
  },
  {
    num: 'Module 03',
    title: 'Presentations & Studio Tools',
    body: 'Using AI to build faster, better presentations and creative assets — from brief to deck in a fraction of the usual time.',
  },
  {
    num: 'Module 04',
    title: 'Image Generation',
    body: 'Ad creative, brand visuals, and campaign imagery — generated, refined, and production-ready.',
    levels: ['beginner', 'mid', 'expert'],
  },
  {
    num: 'Module 05',
    title: 'Video Generation',
    body: 'From scripts to short-form video — tools, workflows, and prompting techniques for brand and campaign video at scale.',
    levels: ['beginner', 'mid', 'expert'],
  },
  {
    num: 'Module 06',
    title: 'Vibe Coding',
    body: 'Building simple marketing apps and tools with AI — no coding experience needed. Campaign trackers, content generators, and more.',
  },
  {
    num: 'Module 07',
    title: 'Customisation — Custom GPTs',
    body: 'Building brand-specific AI assistants that know your tone of voice, formats, and guidelines.',
  },
  {
    num: 'Module 08',
    title: 'Automation & Agentic Workflow',
    body: 'Setting up agentic AI workflows that run marketing tasks autonomously — from content pipelines to reporting automation.',
  },
]

const levelStyles = {
  beginner: 'text-[#639922] border-[rgba(99,153,34,0.3)] bg-[rgba(99,153,34,0.08)]',
  mid:      'text-gold border-[rgba(184,146,42,0.3)] bg-[rgba(184,146,42,0.08)]',
  expert:   'text-[#D85A30] border-[rgba(216,90,48,0.3)] bg-[rgba(216,90,48,0.08)]',
}

const levelLabel = { beginner: 'Beginner', mid: 'Mid', expert: 'Expert' }

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
          <h2 className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-3"
              style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            What's covered<br />in the session.
          </h2>
          <p className="text-[#7A7068] text-[15px] max-w-[440px]">
            Every participant builds real outputs — not slides to read later.
          </p>
        </div>

        {/* Top pills */}
        <div className="fade-up bg-dark-3 border border-[rgba(184,146,42,0.25)] px-[22px] py-[18px] mb-[2px] flex flex-wrap gap-[10px] items-center">
          <span className="text-[10px] tracking-[2px] uppercase text-gold shrink-0 mr-2">Every session includes</span>
          {['AI Fundamentals', 'Magic Perfect Prompt Formula', "Pro Tips & Tricks", "Marketer's AI Tool Stack — 23 tools"].map(p => (
            <span key={p} className="bg-[rgba(184,146,42,0.1)] border border-[rgba(184,146,42,0.25)] text-[#D4C8B8] text-[12px] px-3 py-1 rounded-full">
              {p}
            </span>
          ))}
        </div>

        {/* Module grid */}
        <div className="grid gap-[2px]"
             style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))' }}>
          {modules.map((m) => (
            <div
              key={m.num}
              className="fade-up bg-dark px-6 py-[26px] transition-colors duration-200 hover:bg-dark-3 border-t border-[rgba(184,146,42,0.06)]"
            >
              <span className="text-[10px] text-gold tracking-[2px] font-medium mb-[10px] block">{m.num}</span>
              <h3 className="font-playfair text-[17px] font-bold mb-[7px] leading-[1.3]">{m.title}</h3>
              <p className="text-[13px] text-[#7A7068] leading-[1.6]">{m.body}</p>
              {m.levels && (
                <div className="flex gap-[6px] mt-[10px] flex-wrap">
                  {m.levels.map((lv) => (
                    <span key={lv}
                          className={`text-[10px] tracking-[1px] uppercase px-2 py-[3px] rounded-sm border ${levelStyles[lv]}`}>
                      {levelLabel[lv]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
