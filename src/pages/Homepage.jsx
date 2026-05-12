import Hero        from '../components/Hero'
import Problem     from '../components/Problem'
import Phases      from '../components/Phases'
import Curriculum  from '../components/Curriculum'
import Audience    from '../components/Audience'
import About       from '../components/About'
import Brands      from '../components/Brands'
import Testimonial from '../components/Testimonial'
import CTA         from '../components/CTA'
import SEO from '../components/SEO'

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "AI4Marketers — AI Workshop for Marketing Teams",
  "description": "A 1-day hands-on corporate AI workshop covering 25+ AI tools for marketing teams. Available in-person and virtually across India.",
  "url": "https://ai4marketers.co.in/",
  "provider": {
    "@type": "Person",
    "name": "Sai Ganesh",
    "url": "https://ai4marketers.co.in/",
    "sameAs": [
      "https://x.com/sai_ganesh",
      "https://www.linkedin.com/in/sai-ganesh-ullas/",
      "https://www.instagram.com/brandtherapyworks/"
    ]
  },
  "courseMode": ["onsite", "online"],
  "educationalLevel": "Professional",
  "audience": {
    "@type": "Audience",
    "audienceType": "Marketing Professionals, Brand Managers, Growth Marketers, CMOs"
  },
  "inLanguage": "en-IN"
}
export default function Home() {
  return (
    <>
     <SEO
        title="AI4Marketers — AI Workshop for Marketing Teams | Sai Ganesh"
        description="A 1-day hands-on AI workshop for marketing teams. Learn 25+ AI tools, build real outputs, and stay ahead. Trusted by Zomato, AB InBev, TVS Motors & IIM Indore."
        url="https://ai4marketers.co.in/"
        schema={schema}
      />
      <Hero />
      <Problem />
      <Phases />
      <Curriculum />
      <Audience />
      <About />
      <Brands />
      <Testimonial />
      <CTA />
    </>
  )
}