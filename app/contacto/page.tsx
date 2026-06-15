import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contacto · Solicita tu presupuesto gratis',
  description:
    'Solicita un presupuesto gratuito de aislamiento de corcho proyectado Thermocork. Respuesta en menos de 24 horas. Cintruénigo, Navarra.',
}

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'Contacto', en: 'Contact' }}
        title={{ es: 'Solicita tu', en: 'Request your' }}
        accent={{ es: 'presupuesto gratis.', en: 'free quote.' }}
        sub={{ es: 'Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una solución a medida.', en: 'Tell us about your project and we will reply within 24 hours with a tailored solution.' }}
      />
      <Contact />
    </main>
  )
}
