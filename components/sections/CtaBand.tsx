'use client'

import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateIn from '@/components/ui/AnimateIn'
import { CONTACT } from '@/lib/site'

export default function CtaBand() {
  const { t: tr } = useLang()
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset('/img/interior-atrium.webp')} alt="" aria-hidden loading="lazy" decoding="async" className="w-full h-full object-cover" style={{ opacity: 0.28 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,30,82,0.85), rgba(12,30,82,0.92))' }} />
      </div>
      <Container className="relative z-10 py-24 text-center">
        <AnimateIn className="mx-auto">
          <h2 className="font-display font-semibold tracking-tightest mx-auto" style={{ fontSize: 'clamp(30px,4.6vw,56px)', lineHeight: 1.05, maxWidth: '16ch' }}>
            <span className="text-sand-100">{tr({ es: '¿Listo para aislar', en: 'Ready to insulate' })}</span>{' '}
            <span className="text-cork">{tr({ es: 'con corcho natural?', en: 'with natural cork?' })}</span>
          </h2>
          <p className="mt-6 text-[17px] text-sand-200 mx-auto" style={{ maxWidth: '48ch' }}>
            {tr({ es: 'Solicita un presupuesto sin compromiso. Te respondemos en menos de 24 horas con una solución a medida de tu proyecto.', en: 'Request a no-obligation quote. We reply within 24 hours with a solution tailored to your project.' })}
          </p>
          <div className="mt-9 flex gap-4 flex-wrap justify-center">
            <Button href="/contacto" variant="primary">{tr({ es: 'Solicitar presupuesto gratis', en: 'Request a free quote' })} →</Button>
            <Button href={CONTACT.whatsapp} variant="outline" external>WhatsApp</Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}
