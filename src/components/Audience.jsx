import { useFadeUpAll } from '../hooks/useFadeUp'
import {
  Briefcase,
  PenTool,
  Target,
  BarChart3,
  Rocket,
  Building2,
} from 'lucide-react'

const audience = [
  { icon: Briefcase, title: 'Brand & Marketing Managers' },
  { icon: PenTool, title: 'Content & Social Media Teams' },
  { icon: Target, title: 'Agency Strategists & Creatives' },
  { icon: BarChart3, title: 'CMOs & Marketing Heads' },
  { icon: Rocket, title: 'Startup Marketing Teams' },
  { icon: Building2, title: 'L&D & HR Leaders' },
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
          <h2
            className="font-playfair font-black leading-[1.15] tracking-[-0.5px] mb-3"
            style={{ fontSize: 'clamp(28px,4vw,42px)' }}
          >
            Built for marketing<br />professionals.
          </h2>
          <p className="text-[#A09080] text-[16px] max-w-[480px]">
            Not developers. Not founders. The people who write briefs, run campaigns, and own brand every day.
          </p>
        </div>

        <div
          className="grid gap-[14px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))' }}
        >
          {audience.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="fade-up flex items-center gap-4 p-5 border border-[rgba(184,146,42,0.15)] rounded-sm bg-dark-2 transition-colors duration-200 hover:border-[rgba(184,146,42,0.4)]"
              >
                <div className="w-[34px] h-[34px] bg-[rgba(184,146,42,0.1)] rounded-sm flex items-center justify-center shrink-0">
                  <Icon className="w-[16px] h-[16px] text-gold" />
                </div>
                <h4 className="text-[14px] font-medium text-paper">{a.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}