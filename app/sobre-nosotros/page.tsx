import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import About from '@/components/sections/About'
import Ecological from '@/components/sections/Ecological'
import International from '@/components/sections/International'
import Stats from '@/components/sections/Stats'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Sobre nosotros · Corcho natural fabricado en España',
  description:
    'Thermocork: aislamiento de corcho natural proyectado fabricado en Cintruénigo (Navarra) y presente en más de 30 países a través de una red de aplicadores certificados.',
}

export default function SobreNosotrosPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'La empresa', en: 'The company' }}
        title={{ es: 'De Navarra', en: 'From Navarre' }}
        accent={{ es: 'al mundo.', en: 'to the world.' }}
        sub={{ es: 'Fabricamos en Cintruénigo un aislamiento de corcho natural que ya protege edificios en diez países, siempre a través de aplicadores certificados.', en: 'In Cintruénigo we manufacture a natural cork insulation that already protects buildings in ten countries, always through certified applicators.' }}
        image="/img/cork-oak.webp"
      />
      <About />
      <Stats />
      <Ecological />
      <International />
      <CtaBand />
    </main>
  )
}
