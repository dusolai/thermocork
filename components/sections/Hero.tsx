'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import Button from '@/components/ui/Button'

export default function Hero() {
  const { t: tr } = useLang()
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      if (bgRef.current)
        gsap.to(bgRef.current, { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } })
      if (contentRef.current)
        gsap.to(contentRef.current, { opacity: 0, y: -30, ease: 'none', scrollTrigger: { trigger: '#hero', start: '55% top', end: 'bottom top', scrub: true } })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative flex flex-col justify-end overflow-hidden bg-ink-900" style={{ minHeight: '100svh' }}>
      {/* La obra ocupa la pantalla entera: la fotografía es el argumento */}
      <div ref={bgRef} className="absolute inset-0 -top-[8%] h-[116%] z-0">
        <video autoPlay muted loop playsInline poster={asset('/video/nave-industrial.jpg')}
          className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.62 }}>
          <source src={asset('/cork-bg.mp4')} type="video/mp4" />
        </video>
        {/* Velo en dos tiempos: deja ver la obra arriba, sostiene el texto abajo */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.34) 34%, rgba(10,8,6,0.86) 76%, var(--ink-900) 100%)' }} />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-wide mx-auto px-5 sm:px-8 lg:px-14"
        style={{ paddingTop: 'clamp(150px,22vh,240px)', paddingBottom: 'clamp(52px,9vh,96px)' }}
      >
        <div className="tag mb-8 sm:mb-10 hero-anim" style={{ animationDelay: '0.05s' }}>
          <span className="tag-dot" /> {tr(t.hero.badge)}
        </div>

        {/* Titular dominante: ocupa la pantalla, no una columna */}
        <h1 className="font-display m-0 hero-anim" style={{ fontSize: 'clamp(46px,9.2vw,148px)', lineHeight: 0.93, animationDelay: '0.15s' }}>
          <span className="block text-sand-100">{tr(t.hero.line1)}</span>
          <span className="block text-cork">{tr(t.hero.line2)}</span>
        </h1>

        {/* El texto y la acción se retiran a un lado: el vacío es parte del diseño */}
        <div className="mt-12 sm:mt-16 grid gap-10 lg:gap-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-end">
          <p className="text-[17px] leading-[1.75] text-sand-200 m-0 hero-anim" style={{ maxWidth: '46ch', animationDelay: '0.3s' }}>
            {tr(t.hero.sub)}
          </p>

          <div className="flex flex-wrap items-center gap-4 lg:justify-end hero-anim" style={{ animationDelay: '0.42s' }}>
            <Button href="/contacto" variant="primary">{tr(t.hero.cta1)}</Button>
            <Button href="/productos" variant="outline">{tr(t.hero.cta2)}</Button>
          </div>
        </div>
      </div>

      {/* Filete de cierre: ancla el bloque contra la banda de cifras */}
      <div aria-hidden className="relative z-10 h-px w-full" style={{ background: 'var(--border-soft)' }} />
    </section>
  )
}
