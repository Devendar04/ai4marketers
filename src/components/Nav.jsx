export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[5%] py-[18px] bg-[rgba(14,12,10,0.9)] backdrop-blur-md border-b border-[rgba(184,146,42,0.15)]">
      <span className="font-playfair text-[15px] font-bold text-gold-light tracking-[0.5px]">
        AI4Marketers
      </span>
      <a
        href="https://wa.me/918095978040"
        target="_blank"
        rel="noreferrer"
        className="bg-gold text-dark text-[13px] font-medium px-[22px] py-[9px] rounded-sm no-underline transition-colors duration-200 hover:bg-gold-light"
      >
        Request a Workshop
      </a>
    </nav>
  )
}
