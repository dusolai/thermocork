'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import { CONTACT } from '@/lib/site'
import Button from '@/components/ui/Button'

// Datos de lote: solo cifras respaldadas por ficha técnica u obra real.
const LOTE = [
  { k: { es: 'Rendimiento', en: 'Rate' }, v: '≤500 m²/día' },
  { k: { es: 'Reflexión solar', en: 'Solar refl.' }, v: '86%' },
  { k: { es: 'Fuego', en: 'Fire' }, v: 'M1 · B-s1,d0' },
  { k: { es: 'Garantía', en: 'Warranty' }, v: '10 años' },
]

export default function Hero() {
  const { t: tr, lang } = useLang()
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      if (bgRef.current)
        gsap.to(bgRef.current, { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } })
      if (contentRef.current)
        gsap.to(contentRef.current, { opacity: 0, y: -40, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'center top', end: 'bottom top', scrub: true } })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative flex items-end overflow-hidden bg-ink-900" style={{ minHeight: '100svh' }}>
      {/* Obra real a sangre: el soporte sobre el que se deposita la marca */}
      <div ref={bgRef} className="absolute inset-0 -top-[8%] h-[116%] z-0">
        <video autoPlay muted loop playsInline poster={asset('/video/nave-industrial.jpg')}
          className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.42 }}>
          <source src={asset('/cork-bg.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,30,82,0.72) 0%, rgba(12,30,82,0.55) 45%, rgba(12,30,82,0.96) 100%)' }} />
      </div>

      {/* Franja de lote: el parte técnico, pegado al margen */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 z-10 w-[74px] flex-col items-center justify-center gap-9 border-r"
        style={{ borderColor: 'var(--border-soft)', background: 'rgba(0,0,0,0.22)' }}>
        <span className="lote text-gold-600" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          LOTE · NAV-ES · {lang === 'es' ? 'FABRICADO EN ESPAÑA' : 'MADE IN SPAIN'}
        </span>
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-wide mx-auto px-5 sm:px-8 lg:pl-[110px] lg:pr-10"
        style={{ paddingTop: 150, paddingBottom: 54 }}>

        <div className="tag mb-8 hero-anim" style={{ animationDelay: '0.05s' }}>
          <span className="tag-dot" /> {tr(t.hero.badge)}
        </div>

        {/* La marca: pulverizada a través de la plantilla, a escala de muro */}
        <h1 className="m-0">
          <span className="marca stencil spray-in block text-gold-600"
            style={{ fontSize: 'clamp(74px,16.5vw,250px)', animationDelay: '0.2s' }}>
            THERMOCORK
          </span>
          <span className="marca block text-sand-100 hero-anim mt-3"
            style={{ fontSize: 'clamp(24px,4.4vw,58px)', animationDelay: '0.45s', lineHeight: 0.95 }}>
            {tr(t.hero.line1)} <span className="text-gold-600">{tr(t.hero.line2)}</span>
          </span>
        </h1>

        <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="text-[16px] leading-relaxed text-sand-200 hero-anim m-0" style={{ maxWidth: 560, animationDelay: '0.55s' }}>
            {tr(t.hero.sub)}
          </p>

          {/* Acción de éxito: contacto directo. Bloques macizos, no píldoras. */}
          <div className="flex flex-wrap gap-3 hero-anim" style={{ animationDelay: '0.65s' }}>
            <Button href={CONTACT.whatsapp} variant="primary" external>WhatsApp →</Button>
            <Button href={`tel:${CONTACT.phoneIntl}`} variant="outline">{CONTACT.phone}</Button>
          </div>
        </div>

        {/* Parte de lote: datos respaldados */}
        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px hero-anim m-0"
          style={{ animationDelay: '0.75s', background: 'var(--border-soft)', border: '1px solid var(--border-soft)' }}>
          {LOTE.map((d, i) => (
            <div key={i} className="px-4 py-4" style={{ background: 'rgba(12,30,82,0.72)' }}>
              <dt className="lote text-sand-300 m-0">{tr(d.k)}</dt>
              <dd className="font-mono text-gold-600 m-0 mt-1.5 text-[15px] font-semibold">{d.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
