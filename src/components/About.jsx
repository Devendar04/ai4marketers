import { useFadeUpAll } from '../hooks/useFadeUp'

const career = [
  { co: 'Dunzo',            role: 'Head of Brand · 2018 – 2022' },
  { co: 'Zomato',           role: 'AVP Marketing — Zomato Gold · 2017 – 2018' },
  { co: 'AB InBev',         role: 'Senior Brand Manager — Haywards 5000 · 2014 – 2017' },
  { co: 'TVS Motor Company',role: 'Brand Manager — TVS Sport · 2011 – 2013' },
  { co: 'IIM Indore',       role: 'PGDBM — Marketing · Class of 2010' },
]

const socials = [
  { num: '116K', label: 'Instagram' },
  { num: '50K',  label: 'Twitter / X' },
  { num: '7K',   label: 'Substack' },
]

export default function About() {
  const ref = useFadeUpAll()
  return (
    <section ref={ref} className="py-[90px] px-[5%] bg-dark-2 border-t border-[rgba(184,146,42,0.25)]">
      <div className="max-w-[1100px] mx-auto grid gap-[80px] items-start md:grid-cols-[1fr_1.3fr] grid-cols-1">

        {/* Left */}
        <div className="fade-up">
          <span className="text-[11px] tracking-[2.5px] uppercase text-gold mb-6 block">
            Your Workshop Host
          </span>
          <h2 className="font-playfair text-[38px] font-black leading-[1.1] mb-1">
            Sai<br /><em className="italic text-gold-light">Ganesh</em>
          </h2>
          <p className="text-[14.5px] text-[#A09080] leading-[1.75] mb-6">
            15 years in brand marketing — in rooms where campaigns get made, teams get built, and budgets get
            spent. Head of Brand at Dunzo. AVP Marketing at Zomato Gold. Senior Brand Manager at AB InBev and
            TVS Motors.
            <br /><br />
            This workshop is built from real experience, not research. The frameworks, tools, and workflows here
            are the ones that work inside actual marketing teams — not the ones that look good in a deck.
          </p>
          <a
            href="https://www.saiganeshullas.com"
            target="_blank"
            rel="noreferrer"
            className="text-gold-light no-underline text-[13px] border-b border-[rgba(184,146,42,0.3)] pb-px transition-colors duration-200 hover:border-gold-light"
          >
            saiganeshullas.com ↗
          </a>

          <div className="flex gap-7 mt-7 flex-wrap">
            {socials.map((s) => (
              <div key={s.label}>
                <span className="font-playfair text-[22px] font-bold text-gold-light block leading-none mb-[3px]">{s.num}</span>
                <span className="text-[10px] text-[#3A3530] tracking-[1px] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — career */}
        <div className="fade-up flex flex-col">
          {career.map((c, i) => (
            <div
              key={c.co}
              className={`grid items-center gap-x-[18px] py-4 ${i < career.length - 1 ? 'border-b border-[rgba(184,146,42,0.08)]' : ''}`}
              style={{ gridTemplateColumns: '8px 1fr' }}
            >
              <div className="w-2 h-2 rounded-full bg-gold opacity-40" />
              <div>
                <div className="font-playfair text-[16px] font-bold text-paper">{c.co}</div>
                <div className="text-[12px] text-[#4A4540] mt-[2px]">{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
