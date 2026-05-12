import SEO           from '../components/SEO'
import MasterPrompts from '../components/MasterPrompts'
import CTA           from '../components/CTA'

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "50+ ChatGPT Prompts for Marketing Teams",
  "description": "Free library of ChatGPT prompts for social media, email marketing, brand strategy and content creation. Used in AI workshops across India.",
  "url": "https://ai4marketers.co.in/prompts",
  "author": {
    "@type": "Person",
    "name": "Sai Ganesh",
    "url": "https://ai4marketers.co.in"
  }
}

export default function PromptsPage() {
  return (
    <div>
      <SEO
        title="50+ ChatGPT Prompts for Marketing Teams — Free Library | AI4Marketers"
        description="Free collection of ChatGPT prompts for social media, email marketing, brand strategy and content creation. Used in AI workshops with Zomato, AB InBev & TVS Motors."
        url="https://ai4marketers.co.in/prompts"
        schema={schema}
      />

      {/* Page hero */}
      <div
        className="py-[80px] px-[5%] text-center"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%,
            rgba(184,146,42,0.1) 0%, transparent 60%), #0E0C0A`,
          borderBottom: '1px solid rgba(184,146,42,0.15)',
        }}
      >
        <span className="text-[10px] font-medium tracking-[3.5px] uppercase text-gold mb-4 block">
          Premium Vault
        </span>
        <h1
          className="font-playfair font-black leading-[1.1] tracking-[-1px] mb-4 text-paper"
          style={{ fontSize: 'clamp(36px,6vw,72px)' }}
        >
          Prompt Engine<span className="text-gold">.</span>
        </h1>
        <p className="text-[#7A7068] max-w-[480px] mx-auto text-[16px] leading-relaxed">
          Copy, replace <span className="text-gold-light">[brackets]</span> with
          your context, and run. Works with ChatGPT, Claude, Gemini, and any major LLM.
        </p>
      </div>

      <MasterPrompts />
      <CTA />
    </div>
  )
}