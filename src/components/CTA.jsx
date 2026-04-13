import { useFadeUpAll } from "../hooks/useFadeUp";

export default function CTA() {
  const ref = useFadeUpAll();

  return (
    <section
      ref={ref}
      className="py-[100px] px-[5%] bg-dark border-t border-[rgba(184,146,42,0.25)] text-center"
    >
      <div className="fade-up max-w-[620px] mx-auto">
        <span className="text-[25px] font-playfair italic font-medium tracking-[3.5px] uppercase text-gold mb-5 block">
          Let's Talk
        </span>

        <h2
          className="font-playfair font-black leading-[1.1] mb-4"
          style={{ fontSize: "clamp(33px,5vw,57px)" }}
        >
          Bring <em className="italic text-gold-light">AI4Marketers</em>
          <br />
          to your team.
        </h2>

        <p className="text-[#fde9d6] text-[18px] mb-12 leading-relaxed">
          One session. Real outputs. A marketing team that knows how to use AI
          in their daily work — starting the next morning.
        </p>

        {/* Primary CTA — Calendly */}
        <a
          href="https://calendly.com/sai-iwtk/ai4marketersworkshop-intro-call  "
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 w-full mb-3 py-[18px] px-8 rounded-sm no-underline transition-all duration-200 hover:-translate-y-px group"
          style={{ background: "#B8922A" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0E0C0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-dark text-[16px] font-medium tracking-wide">
            Book a Free Discovery Call
          </span>
          <span className="text-dark text-[13px] opacity-60 ml-1 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

       

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[rgba(184,146,42,0.1)]" />
          <span className="text-[11px] text-[#fde9d6] tracking-[2px] uppercase">
            or reach out directly
          </span>
          <div className="flex-1 h-px bg-[rgba(184,146,42,0.1)]" />
        </div>

        {/* Secondary CTAs */}
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          <a
            href="https://wa.me/918095978040"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[rgba(184,146,42,0.4)] text-gold-light text-[14px] font-normal px-7 py-[13px] rounded-sm no-underline transition-all duration-200 hover:border-gold hover:bg-[rgba(184,146,42,0.05)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.571a.75.75 0 00.921.921l5.726-1.471A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.946-1.349l-.355-.212-3.683.945.962-3.585-.231-.368A9.705 9.705 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="mailto:sai@brandtherapy.in"
            className="flex items-center gap-2 border border-[rgba(184,146,42,0.4)] text-gold-light text-[14px] font-normal px-7 py-[13px] rounded-sm no-underline transition-all duration-200 hover:border-gold hover:bg-[rgba(184,146,42,0.05)]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            sai@brandtherapy.in
          </a>
        </div>

        <p className="text-[12px] text-[#fde9d6]">
          Brand Therapy Consulting · Available pan-India and virtually
        </p>
      </div>
    </section>
  );
}
