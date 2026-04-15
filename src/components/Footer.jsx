export default function Footer() {
  return (
    <footer className="
      px-[5%] py-[22px] 
      border-t border-[rgba(184,146,42,0.1)] 
      flex flex-col md:flex-row 
      items-center 
      justify-center md:justify-between 
      gap-[10px]
    ">
      
      <p className="text-[12px] text-gold text-center md:text-left">
        © 2026 Brand Therapy Consulting · Sai Ganesh
      </p>

      <a
        href="https://www.saiganeshullas.com"
        target="_blank"
        rel="noreferrer"
        className="text-gold no-underline text-[12px] hover:text-gold-light transition-colors duration-200 text-center md:text-right"
      >
        saiganeshullas.com
      </a>

    </footer>
  )
}