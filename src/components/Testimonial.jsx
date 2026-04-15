import { useFadeUpAll } from "../hooks/useFadeUp";

const testimonials = [
  {
    text: "I generated creatives during the workshop and shared them with my CEO the same day. Never had a more productive three hours.",
    name: "Madhu Varma",
    role: "General Manager, Sales",
    company: "Asian Paints",
  },
  {
    text: "Productive and practical.",
    name: "DiptaKirti Chaudhari",
    role: "CMO",
    company: "Casagrand",
  },
  {
    text: "Super session. Genuinely useful in ways I didn't expect.",
    name: "Partha Sarathi Jha",
    role: "VP - Marketing",
    company: "Carlsberg India",
  },
];

export default function Testimonial() {
  const ref = useFadeUpAll();

  return (
    <section
      ref={ref}
      className="py-[60px] md:py-[80px] px-4 sm:px-6 md:px-[5%] bg-dark-2 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="fade-up text-center mb-8 md:mb-12">
          <span className="text-[10px] md:text-[11px] font-medium tracking-[3.5px] uppercase text-gold">
            What People Say
          </span>
        </div>

        {/* Marquee */}
        <div className="relative fade-up overflow-hidden">
          <div className="flex gap-4 md:gap-6 w-max animate-marquee-mobile md:animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="
                w-[85vw] 
                sm:w-[320px] 
                md:w-[300px] 
                lg:w-[320px]

                bg-[#181512] 
                border border-[rgba(184,146,42,0.18)] 
                rounded-sm 

                p-5 md:p-6 
                flex flex-col items-center justify-center text-center

                min-h-[180px] md:min-h-[200px]
                "
              >

                {/* MESSAGE */}
                <div className="mb-4">
                  <p className="text-[14px] md:text-[15px] text-[#EAE4DB] italic leading-[1.65] tracking-[0.2px]">
                    “{t.text}”
                  </p>
                </div>

                {/* AUTHOR */}
                <div className="mt-4 text-[12px] text-[#8E8175] leading-[1.5] border-t border-[rgba(184,146,42,0.15)] pt-3">
                  <span className="block text-paper font-medium text-[13px] md:text-[14px]">
                    {t.name}
                  </span>
                  {t.role} @ {t.company}
                </div>

              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-dark-2 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-dark-2 to-transparent" />
        </div>
      </div>
    </section>
  );
}