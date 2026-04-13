export default function Footer() {
  return (
    <footer className="px-[5%] py-[22px] border-t border-[rgba(184,146,42,0.1)] flex justify-between items-center flex-wrap gap-[10px]">
      <p className="text-[12px] text-[#2A2520]">© 2026 Brand Therapy Consulting · Sai Ganesh</p>
      <a
        href="https://www.saiganeshullas.com"
        target="_blank"
        rel="noreferrer"
        className="text-gold no-underline text-[12px] hover:text-gold-light transition-colors duration-200"
      >
        saiganeshullas.com
      </a>
    </footer>
  )
}
