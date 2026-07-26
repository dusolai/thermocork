import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import MaterialMarquee from '@/components/sections/MaterialMarquee'
import About from '@/components/sections/About'
import Properties from '@/components/sections/Properties'
import FullBleedReveal from '@/components/sections/FullBleedReveal'
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
      <MaterialMarquee />
      <About />
      <Properties />

      {/* Respiro: una obra real a pantalla completa entre dos bloques densos */}
      <FullBleedReveal
        img="/img/facade-louvers.webp"
        quote={{ es: 'Una sola capa. Sin obra.', en: 'One single layer. No demolition.' }}
        credit={{ es: 'Obra real · Fachada con corcho proyectado', en: 'Real project · Sprayed cork facade' }}
      />

      <Products />
      <Applications />
      <FeaturedProjects />
      <Process />

      {/* Segundo respiro antes del cierre comercial */}
      <FullBleedReveal
        img="/img/cork-oak.webp"
        quote={{ es: 'El alcornoque no se tala. Se descorcha.', en: 'The cork oak is not felled. It is harvested.' }}
        credit={{ es: 'Alcornoque · Origen del corcho Thermocork', en: 'Cork oak · Origin of Thermocork cork' }}
      />

      <Ecological />
      <Testimonials />
      <Faq limit={5} />
      <CtaBand />
    </main>
  )
}
