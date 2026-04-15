import { useEffect, useRef } from "react";

export default function CompetencyGap() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateCount = (
      id,
      target,
      duration,
      suffix = "",
      isFloat = false,
    ) => {
      const el = document.getElementById(id);
      if (!el) return;

      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = isFloat
          ? (ease * target).toFixed(1)
          : Math.round(ease * target);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    };

    const runAnimations = () => {
      const b1 = document.getElementById("bar1");
      const b2 = document.getElementById("bar2");
      if (b1) b1.style.height = "69%";
      if (b2) b2.style.height = "28%";

      setTimeout(() => {
        animateCount("c1", 3.5, 1400, "x", true);
        animateCount("c2", 41, 1400, "pt");
        animateCount("c3", 87, 1400, "%");
      }, 300);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimations();
        } else {
          const b1 = document.getElementById("bar1");
          const b2 = document.getElementById("bar2");
          if (b1) b1.style.height = "0%";
          if (b2) b2.style.height = "0%";
          ["c1", "c3"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.textContent = "0";
          });
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bars = [
    { id: "bar1", pct: 69, label: "Using AI", color: "#B8922A" },
    { id: "bar2", pct: 28, label: "Actually Know How", color: "#D4AA4A" },
  ];

  const stats = [
    { id: "c1", label: "Output multiplier for AI-fluent teams" },
    { id: "c3", label: "Of trained teams saw immediate ROI" },
  ];

  return (
    <div
      ref={sectionRef}
      className="rounded-xl bg-[#0E0C0A] p-4 pb-5 sm:p-6 sm:pb-6 md:p-8 md:pb-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <p className="mb-1 text-[10px] font-medium uppercase tracking-[3px] text-gold">
        The Competency Gap
      </p>

      <h2 className="mb-1 font-playfair text-[20px] font-black leading-tight text-paper sm:text-[22px]">
        The gap is widening — every quarter.
      </h2>

      <p className="mb-8 text-[12px] text-muted sm:mb-10 sm:text-[13px]">
        AI adoption vs. actual proficiency across marketing teams
      </p>

      {/* Vertical Bars */}
      <div
        className="flex items-end justify-between gap-4 mb-6 sm:justify-center sm:gap-6 md:gap-10"
        style={{ height: "220px" }}
      >
        {bars.map(({ id, pct, label, color }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-3 h-full w-full max-w-[200px]  sm:max-w-40"
          >
            {/* Percentage */}
            <span
              className="font-playfair font-black text-[24px] leading-none sm:text-[28px]"
              style={{ color }}
            >
              {pct}%
            </span>

            {/* Bar */}
            <div
              className="w-full max-w-[75px]    sm:w-16 rounded-sm flex-1 flex items-end overflow-hidden relative"
              style={{ background: "#1A1714" }}
            >
              {[25, 50, 75].map((line) => (
                <div
                  key={line}
                  className="absolute w-full"
                  style={{
                    bottom: `${line}%`,
                    borderTop: "1px dashed rgba(184,146,42,0.08)",
                  }}
                />
              ))}

              <div
                id={id}
                className="w-full rounded-sm"
                style={{
                  background: color,
                  height: "0%",
                  transition: "height 1.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>

            {/* Label */}
            <p className="text-[11px] text-center font-medium text-paper sm:text-[13px] leading-tight">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-5 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {stats.map(({ id, label }) => (
            <div
              key={id}
              className="w-[280px] rounded-md border border-[rgba(184,146,42,0.12)] bg-[#1A1714] p-3 text-center sm:p-[14px]"
            >
              <span
                id={id}
                className="mb-1 block font-playfair text-[22px] font-black leading-none text-[#D4AA4A] sm:text-[24px]"
              >
                0
              </span>
              <span className="text-[10px] uppercase leading-snug tracking-wide text-[#ffedd8] sm:text-[10px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="rounded-r-md px-4 py-3 sm:px-4 sm:py-3"
        style={{
          background: "rgba(184,146,42,0.06)",
          borderLeft: "3px solid #B8922A",
        }}
      >
        <p className="m-0 text-[12px] leading-relaxed text-[#7A7068] sm:text-[12.5px]">
          Your competitors are hiring for AI skills. Teams with hands-on AI
          systems outpace competitors by{" "}
          <span className="font-medium text-gold-light">3–4×</span>. The gap is
          the opportunity — and it closes{" "}
          <span className="font-medium text-gold-light">in one day</span>.
        </p>
      </div>
    </div>
  );
}
