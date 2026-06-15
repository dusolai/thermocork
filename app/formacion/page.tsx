import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Training from '@/components/sections/Training'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Formación · Conviértete en aplicador certificado',
  description:
    'Fórmate y certifícate como aplicador Thermocork. Formación teórica y práctica, certificación oficial y alta en la red nacional e internacional con demanda creciente.',
}

export default function FormacionPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'Red de aplicadores', en: 'Applicator network' }}
        title={{ es: 'Certifícate.', en: 'Get certified.' }}
        accent={{ es: 'Empieza a crecer.', en: 'Start growing.' }}
        sub={{ es: 'Únete a la red de aplicadores certificados Thermocork y accede a un mercado de rehabilitación energética en plena expansión.', en: 'Join the Thermocork certified applicator network and access a fast-growing energy-rehabilitation market.' }}
        image="/img/team.webp"
      />
      <Training />
      <CtaBand />
    </main>
  )
}
