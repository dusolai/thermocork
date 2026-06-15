import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Subsidies from '@/components/sections/Subsidies'
import SavingsCalculator from '@/components/sections/SavingsCalculator'
import Faq from '@/components/sections/Faq'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Ayudas y subvenciones · Next Generation, PREE e IRPF',
  description:
    'Thermocork es subvencionable a través de los fondos Next Generation, el programa PREE y deducciones de IRPF de hasta el 60%. Calcula tu ahorro energético.',
}

export default function AyudasPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'Ayudas y subvenciones', en: 'Grants & subsidies' }}
        title={{ es: 'Tu proyecto puede ser', en: 'Your project may be' }}
        accent={{ es: 'subvencionado.', en: 'subsidised.' }}
        sub={{ es: 'Aislar con corcho ecológico no solo ahorra energía: también puede financiarse con fondos europeos y deducciones fiscales.', en: 'Insulating with ecological cork not only saves energy: it can also be funded with European grants and tax deductions.' }}
        image="/img/building-modern.webp"
      />
      <Subsidies />
      <SavingsCalculator />
      <Faq limit={4} />
      <CtaBand />
    </main>
  )
}
