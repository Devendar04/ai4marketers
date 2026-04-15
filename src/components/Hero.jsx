export default function Hero() {
  return (
    <section
      className="min-h-screen grid place-items-center pt-[120px] pb-[80px] px-[5%] relative overflow-hidden text-center"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,146,42,0.12) 0%, transparent 60%),
                     radial-gradient(ellipse 60% 40% at 80% 80%, rgba(184,146,42,0.06) 0%, transparent 50%),
                     #0E0C0A`,
      }}
    >
      <div>
        {/* Eyebrow */}
        <div className="inline-block text-[11px] font-medium tracking-[3.5px] uppercase text-gold border border-[rgba(184,146,42,0.25)] px-[18px] py-[6px] rounded-full mb-7">
          Corporate Workshop · 1-Day · In-Person &amp; Virtual
        </div>

        {/* Headline */}
        <h1
          className="font-playfair font-black leading-none tracking-[-2px] mb-4"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          <em className="italic text-gold-light">AI4</em>MARKETERS
        </h1>

        {/* Sub */}
        <div className="max-w-[680px] mx-auto mb-11 space-y-3">
          <p
            className="font-playfair italic text-[#C4BCB0] leading-snug"
            style={{ fontSize: "clamp(20px, 2.5vw, 24px)" }}
          >
            "AI won't replace you. 
            <br />
            <span className="text-gold-light not-italic font-bold">
              Someone using AI will.
            </span>
            "
          </p>
          <p
            className="text-[#756d5e] font-light"
            style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
          >
            <span className="text-[#A09080] ">
              69% of marketers already use AI.
            72% still don't know how to make it work.{" "}
            </span>
            
          </p>
        </div>

        {/* CTAs */}
        <div className="flex gap-[14px] justify-center flex-wrap mb-16">
          <a
            href="https://wa.me/918095978040"
            target="_blank"
            rel="noreferrer"
            className="bg-gold text-dark text-[15px] font-medium px-9 py-[14px] rounded-sm no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-px"
          >
            Request a Workshop
          </a>
          <a
            href="#phases"
            className="border border-[rgba(184,146,42,0.4)] text-gold-light text-[15px] font-normal px-9 py-[14px] rounded-sm no-underline transition-colors duration-200 hover:border-gold"
          >
            See how it works
          </a>
        </div>

        {/* Meta stats */}
        <div className="flex gap-9 justify-center flex-wrap">
          <MetaItem num="8 hrs" label="Full-day format" />
          <div className="w-px h-10 self-center bg-[rgba(184,146,42,0.25)] hidden sm:block" />
          <MetaItem num="25+" label="AI tools covered" />
          <div className="w-px h-10 self-center bg-[rgba(184,146,42,0.25)] hidden sm:block" />
          <MetaItem num="100%" label="Hands-on outputs" />
        </div>
      </div>
    </section>
  );
}

function MetaItem({ num, label }) {
  return (
    <div className="text-center">
      <span className="font-playfair text-[28px] font-bold text-gold-light block leading-none mb-1">
        {num}
      </span>
      <span className="text-[11px] tracking-[1.5px] uppercase text-[#d2c4b3]">
        {label}
      </span>
    </div>
  );
}
