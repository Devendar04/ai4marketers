import { useFadeUpAll } from '../hooks/useFadeUp'

export default function Testimonial() {
  const ref = useFadeUpAll()
  return (
    <section ref={ref} className="py-[90px] px-[5%] bg-dark-2">
      <div className="fade-up max-w-[680px] mx-auto text-center">
        <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-10 block">
          What People Say
        </span>
        <div className="bg-dark-3 border border-dashed border-[rgba(184,146,42,0.2)] p-9 w-full">
          <span className="font-playfair text-[80px] leading-[0.5] text-[rgba(184,146,42,0.2)] mb-6 block">"</span>
          <p className="text-[#eda053] text-[13px] italic">
            Testimonial coming soon.
          </p>
          <p className="text-[#2A2520] mt-4 text-[12px]">Your name · Company · Role</p>
        </div>
      </div>
    </section>
  )
}
