import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Properties from '@/components/sections/Properties'
import Products from '@/components/sections/Products'
import Applications from '@/components/sections/Applications'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Process from '@/components/sections/Process'
import Ecological from '@/components/sections/Ecological'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import CtaBand from '@/components/sections/CtaBand'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Properties />
      <Products />
      <Applications />
      <FeaturedProjects />
      <Process />
      <Ecological />
      <Testimonials />
      <Faq limit={5} />
      <CtaBand />
    </main>
  )
}
