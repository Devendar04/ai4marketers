import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Phases from './components/Phases'
import Curriculum from './components/Curriculum'
import Audience from './components/Audience'
import About from './components/About'
import Brands from './components/Brands'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CompetencyGap from './components/CompetencyGap'
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Brands />

      <CompetencyGap/>
      <Problem />
      <Phases />
      <Curriculum />
      <Audience />
      <About />
      <Testimonial /> 
      <CTA />
      <Footer />
    </>
  )
}
