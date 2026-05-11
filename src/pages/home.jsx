import Hero        from '../components/Hero'
import Problem     from '../components/Problem'
import Phases      from '../components/Phases'
import Curriculum  from '../components/Curriculum'
import Audience    from '../components/Audience'
import About       from '../components/About'
import Brands      from '../components/Brands'
import Testimonial from '../components/Testimonial'
import CTA         from '../components/CTA'

export default function Home() {
  return (
    <>
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