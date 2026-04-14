import { useFadeUpAll } from "../hooks/useFadeUp";
import saiPhoto from "/assets/sai.png";
import AB from "/assets/AB.png";
import Dunzo from "/assets/dunzo.png";
import TVS from "/assets/TVS_.png";
import Zomato from "/assets/zomato.png";
import IIM from "/assets/iim.jpeg";
const companies = [
  {
    name: "Dunzo",
    logo: Dunzo,
  },
  {
    name: "Zomato",
    logo: Zomato,
  },
  {
    name: "AB InBev",
    logo: AB,
  },
  {
    name: "TVS Motors",
    logo: TVS,
  },
  {
    name: "IIM Indore",
    logo: IIM,
  },
];

export default function About() {
  const ref = useFadeUpAll();

  return (
    <section
      ref={ref}
      className="py-[80px] px-[5%] bg-dark-2 border-t border-[rgba(184,146,42,0.25)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Left — photo */}
          <div className="fade-up flex justify-center md:justify-start">
            <div className="relative">
              {/* Gold accent border */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-sm"
                style={{ border: "2px solid rgba(184,146,42,0.3)" }}
              />
              <img
                src={saiPhoto}
                alt="Sai Ganesh"
                className="relative w-full max-w-[320px] object-cover rounded-sm"
                style={{ aspectRatio: "4/5", filter: "brightness(0.95)" }}
              />
            </div>
          </div>

          {/* Right — bio + logos */}
          <div className="fade-up flex flex-col gap-8">
            {/* Name + bio */}
            <div>
              <span className="text-[10px] tracking-[2.5px] uppercase text-gold mb-4 block">
                Your Workshop Host
              </span>
              <h2
                className="font-playfair font-black leading-[1.1] mb-5"
                style={{ fontSize: "clamp(32px,4vw,48px)" }}
              >
                Sai <em className="italic text-gold-light">Ganesh</em>
              </h2>
              <p className="text-[15px] text-[#A09080] leading-[1.75] max-w-[480px]">
                15 years in brand marketing — in rooms where campaigns get made,
                teams get built, and budgets get spent. Head of Brand at Dunzo.
                AVP Marketing at Zomato Gold. Senior Brand Manager at AB InBev
                and TVS Motors.
              </p>
              <a
                href="https://www.saiganeshullas.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 text-gold-light no-underline text-[13px] border-b border-[rgba(184,146,42,0.3)] pb-px transition-colors duration-200 hover:border-gold-light"
              >
                saiganeshullas.com ↗
              </a>
            </div>

            {/* Company logos */}
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-[#d5c1ac] mb-4 block">
                Previously at
              </span>

              <div className="bg-[#1A1816] px-6 py-5 rounded-md ">
                <div className="bg-[#1A1816] py-5 rounded-md border border-[rgba(184,146,42,0.15)]">
                  {/* UPDATED: responsive flex */}
                  <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-6 md:gap-4">
                    {companies.map((c) => (
                      <div
                        key={c.name}
                        className="h-[36px] w-[80px] md:h-[44px] md:w-[105px] flex items-center justify-center"
                      >
                        <img
                          src={c.logo}
                          alt={c.name}
                          className={`
              object-contain transition-all duration-300 ease-out
              hover:-translate-y-1
              
              ${c.name === "TVS Motors" ? "scale-105" : ""}
              ${c.name === "IIM Indore" ? "scale-75 md:scale-50" : ""}
            `}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
