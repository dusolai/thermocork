import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Products from '@/components/sections/Products'
import Benefits from '@/components/sections/Benefits'
import Applications from '@/components/sections/Applications'
import Process from '@/components/sections/Process'
import Ecological from '@/components/sections/Ecological'
import International from '@/components/sections/International'
import Subsidies from '@/components/sections/Subsidies'
import Training from '@/components/sections/Training'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Products />
      <Benefits />
      <Applications />
      <Process />
      <Ecological />
      <International />
      <Subsidies />
      <Training />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
