import { useFadeUpAll } from "../hooks/useFadeUp";

const phases = [
  {
    num: "Phase 01",
    title: "Pre-Workshop Discovery",
    items: [
      "Discovery calls with the team",
      "Assessment of current AI usage",
      "Customised workshop modules",
      "Pre-read and tool setup guide",
    ],
  },
  {
    num: "Phase 02",
    title: "Full-Day AI Workshop",
    items: [
      "8-hour in-person session",
      "Live exercises across 15+ AI tools",
      "Prompt frameworks and templates",
      "Real outputs built in the room",
    ],
  },
  {
    num: "Phase 03",
    title: "AI Champions Programme",
    items: [
      "Prompt cheat sheet per participant",
      "Ready-to-use AI workflows",
      "Office hours for Q&A",
      "Ongoing AI champion support",
    ],
    last: true,
  },
];

export default function Phases() {
  const ref = useFadeUpAll();

  return (
    <section
      ref={ref}
      id="phases"
      className="bg-dark px-4 py-16 sm:px-6 md:px-[5%] md:py-[90px]"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="fade-up mb-10 md:mb-12">
          <span className="mb-3 block text-[10px] font-medium uppercase tracking-[3.5px] text-gold">
            Programme Structure
          </span>
          <h2
            className="mb-3 font-playfair font-black leading-[1.12] tracking-[-0.5px] text-paper"
            style={{ fontSize: "clamp(28px,4vw,42px)" }}
          >
            Three phases.
            <br />
            One complete system.
          </h2>
          <p className="max-w-[620px] text-[14px] leading-[1.6] text-[#7A7068] sm:text-[15px]">
            Designed to move teams from learning AI to using AI to building AI
            systems.
          </p>
        </div>

        {/* Cards */}
        <div className="mb-8 grid gap-5 md:gap-[18px] md:grid-cols-3 ">
          {phases.map((ph) => (
            <div
              key={ph.num}
              className={`fade-up relative rounded-sm bg-dark-2 px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 ${
                ph.last ? "phase-card-last" : "phase-card-wrap"
              }`}
            >
              <span className="mb-2 block text-[10px] uppercase tracking-[3px] text-gold">
                {ph.num}
              </span>

              <h3 className="mb-4 font-playfair text-[18px] font-bold leading-[1.2] text-paper sm:text-[20px]">
                {ph.title}
              </h3>

              <ul>
                {ph.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-[rgba(184,146,42,0.07)] py-[8px] text-[13px] leading-[1.5] text-[#7A7068] last:border-0 sm:text-[13.5px]"
                  >
                    <span className="text-gold/60">– </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="fade-up gold-left-bar flex flex-col gap-3 bg-dark-2 px-4 py-4 sm:flex-row sm:items-center sm:gap-[14px] sm:px-6 sm:py-[18px]">
          <span className="text-[10px] uppercase tracking-[2.5px] text-gold">
            Goal
          </span>

          <p className="font-playfair text-[15px] italic text-[#C4BCB0] sm:text-[18px] text-center sm:text-left">
            <span className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start gap-2 sm:gap-2">
              <span className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-2">
                <strong className="not-italic font-bold text-gold-light">
                  Learning AI
                </strong>

                <span className="block sm:hidden text-gold-light leading-none">
                  ↓
                </span>
                <span className="hidden sm:inline text-gold-light">→</span>
              </span>

              <span className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-2">
                <strong className="not-italic font-bold text-gold-light">
                  Using AI
                </strong>

                <span className="block sm:hidden text-gold-light leading-none">
                  ↓
                </span>
                <span className="hidden sm:inline text-gold-light">→</span>
              </span>

              <strong className="not-italic font-bold text-gold-light">
                Building AI Systems
              </strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
