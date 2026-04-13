import { useFadeUpAll } from '../hooks/useFadeUp'

const audience = [
  {
    icon: '🏢',
    title: 'Brand & Marketing Managers',
    body: 'Mid-level marketers who need to produce more, brief better, and move faster — without more headcount.',
  },
  {
    icon: '✍️',
    title: 'Content & Social Media Teams',
    body: 'Writers and creators who want to scale output without losing brand voice.',
  },
  {
    icon: '🎯',
    title: 'Agency Strategists & Creatives',
    body: 'Planners and creative leads who need to stay ahead of what their clients are already experimenting with.',
  },
  {
    icon: '📊',
    title: 'CMOs & Marketing Heads',
    body: 'Senior leaders who want to build a team that is ahead of the curve — not chasing it.',
  },
  {
    icon: '🚀',
    title: 'Startup Marketing Teams',
    body: 'Lean teams expected to move fast. AI literacy is the multiplier that makes that possible.',
  },
  {
    icon: '🏛️',
    title: 'L&D & HR Leaders',
    body: 'People heads at large organisations looking for structured AI upskilling for their marketing function.',
  },
]

export default function Audience() {
  const ref = useFadeUpAll()
  return (
    <section ref={ref} className="py-[90px] px-[5%] bg-dark">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12 fade-up">
          <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
            Who Is This For
          </span>
          <h2 className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-3"
              style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            Built for marketing<br />professionals.
          </h2>
          <p className="text-[#A09080] text-[16px] max-w-[480px]">
            Not developers. Not founders. The people who write briefs, run campaigns, and own brand every day.
          </p>
        </div>

        <div className="grid gap-[14px]"
             style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))' }}>
          {audience.map((a) => (
            <div
              key={a.title}
              className="fade-up flex items-start gap-4 p-5 border border-[rgba(184,146,42,0.15)] rounded-sm bg-dark-2 transition-colors duration-200 hover:border-[rgba(184,146,42,0.4)]"
            >
              <div className="w-[34px] h-[34px] bg-[rgba(184,146,42,0.1)] rounded-sm flex items-center justify-center shrink-0 text-[15px]">
                {a.icon}
              </div>
              <div>
                <h4 className="text-[14px] font-medium mb-1 text-paper">{a.title}</h4>
                <p className="text-[12.5px] text-[#7A7068] leading-[1.55]">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
