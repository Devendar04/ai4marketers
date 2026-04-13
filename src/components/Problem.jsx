import { useFadeUpAll } from '../hooks/useFadeUp'

const problems = [
  {
    num: '01',
    title: 'Tool Overload',
    body: 'Hundreds of AI tools but no clarity on what actually matters for real marketing work.',
  },
  {
    num: '02',
    title: 'Low Practical Adoption',
    body: 'Teams attend AI talks but rarely integrate AI into their daily workflows.',
  },
  {
    num: '03',
    title: 'Lack of Systems',
    body: 'AI is used occasionally instead of becoming a repeatable part of how the team works.',
  },
  {
    num: '04',
    title: 'Reduce Costs & Dependency',
    body: 'Over-reliance on agencies and freelancers for work that AI can now handle in-house.',
  },
]

export default function Problem() {
  const ref = useFadeUpAll()
  return (
    <section ref={ref} className="py-[90px] px-[5%] bg-dark-2">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="max-w-[560px] mb-12 fade-up">
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
            The Problem
          </span>
          <h2 className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-[14px]"
              style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            Most marketing teams face 4 challenges with AI
          </h2>
          <p className="text-[#A09080] text-[17px] leading-[1.65]">
            The tools exist. The training doesn't. And the gap between teams that have figured it out
            and those that haven't is widening every quarter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-[2px] mb-[2px]"
             style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))' }}>
          {problems.map((p) => (
            <div key={p.num}
                 className="problem-card-wrap bg-dark-3 px-6 py-7 relative overflow-hidden">
              <span className="font-playfair text-[44px] font-black text-[rgba(184,146,42,0.12)] leading-none mb-[14px] block">
                {p.num}
              </span>
              <h3 className="font-playfair text-[19px] font-bold leading-[1.3] mb-2">{p.title}</h3>
              <p className="text-[13.5px] text-[#7A7068] leading-[1.65]">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Outcome bar */}
        <div className="fade-up flex items-center gap-4 flex-wrap px-6 py-5
                        bg-[rgba(184,146,42,0.07)] border border-[rgba(184,146,42,0.25)] gold-left-bar">
          <span className="text-[10px] tracking-[2.5px] uppercase text-gold shrink-0">Outcome</span>
          <p className="font-playfair text-[18px] italic text-[#C4BCB0]">
            Marketing teams leave with working AI workflows they can use the very next day.
          </p>
        </div>
      </div>
    </section>
  )
}
