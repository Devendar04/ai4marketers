import { useFadeUpAll } from '../hooks/useFadeUp'

const phases = [
  {
    num: 'Phase 01',
    title: 'Pre-Workshop Discovery',
    items: [
      'Discovery calls with the team',
      'Assessment of current AI usage',
      'Customised workshop modules',
      'Pre-read and tool setup guide',
    ],
  },
  {
    num: 'Phase 02',
    title: 'Full-Day AI Workshop',
    items: [
      '8-hour in-person session',
      'Live exercises across 15+ AI tools',
      'Prompt frameworks and templates',
      'Real outputs built in the room',
    ],
  },
  {
    num: 'Phase 03',
    title: 'AI Champions Programme',
    items: [
      'Prompt cheat sheet per participant',
      'Ready-to-use AI workflows',
      'Office hours for Q&A',
      'Ongoing AI champion support',
    ],
    last: true,
  },
]

export default function Phases() {
  const ref = useFadeUpAll()
  return (
    <section ref={ref} id="phases" className="py-[90px] px-[5%] bg-dark">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-12 fade-up">
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
            Programme Structure
          </span>
          <h2 className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-3"
              style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            Three phases.<br />One complete system.
          </h2>
          <p className="text-[#7A7068] text-[15px]">
            Designed to move teams from learning AI to using AI to building AI systems.
          </p>
        </div>

        {/* Phase track */}
        <div className="grid gap-[2px] mb-8"
             style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))' }}>
          {phases.map((ph) => (
            <div
              key={ph.num}
              className={`fade-up bg-dark-2 px-7 py-8 relative ${ph.last ? 'phase-card-last' : 'phase-card-wrap'}`}
            >
              <span className="text-[10px] tracking-[3px] uppercase text-gold mb-3 block">{ph.num}</span>
              <h3 className="font-playfair text-[20px] font-bold mb-4">{ph.title}</h3>
              <ul className="list-none space-y-0">
                {ph.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[13.5px] text-[#7A7068] py-[5px] leading-[1.5] border-b border-[rgba(184,146,42,0.07)] last:border-0 before:content-['–  '] before:text-gold before:opacity-50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Goal bar */}
        <div className="fade-up bg-dark-2 gold-left-bar px-6 py-[18px] flex items-center gap-[14px] flex-wrap">
          <span className="text-[10px] tracking-[2.5px] uppercase text-gold">Goal</span>
          <p className="font-playfair text-[18px] italic text-[#C4BCB0]">
            <strong className="text-gold-light not-italic font-bold">Learning AI</strong>
            {' '}&nbsp;→&nbsp;{' '}
            <strong className="text-gold-light not-italic font-bold">Using AI</strong>
            {' '}&nbsp;→&nbsp;{' '}
            <strong className="text-gold-light not-italic font-bold">Building AI Systems</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
