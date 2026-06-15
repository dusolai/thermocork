import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Applications from '@/components/sections/Applications'
import ApplicationsGrid from '@/components/sections/ApplicationsGrid'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Aplicaciones · Fachadas, cubiertas, interiores e industria',
  description:
    'Dónde se aplica Thermocork: fachadas, cubiertas y tejados, interiores, espacios comerciales e industriales, vehículos camper y más. Una solución para cada superficie.',
}

export default function AplicacionesPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'Dónde se aplica', en: 'Where it is applied' }}
        title={{ es: 'Cada superficie,', en: 'Every surface,' }}
        accent={{ es: 'una solución.', en: 'one solution.' }}
        sub={{ es: 'Del tejado a la fachada, del restaurante a la nave industrial: el corcho proyectado se adapta a cualquier soporte y geometría.', en: 'From roof to facade, from restaurant to industrial unit: projected cork adapts to any substrate and geometry.' }}
        image="/img/roof-slats.webp"
      />
      <Applications />
      <ApplicationsGrid />
      <CtaBand />
    </main>
  )
}
