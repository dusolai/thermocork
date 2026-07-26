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
        gsap.to(bgRef.current, { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } })
      if (contentRef.current)
        gsap.to(contentRef.current, { opacity: 0, y: -50, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'center top', end: 'bottom top', scrub: true } })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative flex items-center overflow-hidden bg-ink-900" style={{ minHeight: '100svh' }}>
      {/* Video background */}
      <div ref={bgRef} className="absolute inset-0 -top-[10%] h-[120%] z-0">
        <video autoPlay muted loop playsInline poster={asset('/video/nave-industrial.jpg')}
          className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.5 }}>
          <source src={asset('/cork-bg.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.6) 0%, rgba(10,8,6,0.4) 40%, rgba(10,8,6,0.92) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,160,69,0.12), transparent 70%)' }} />
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-content mx-auto px-5 sm:px-8 lg:px-10 grid items-center gap-12 lg:gap-16"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,440px),1fr))', paddingTop: 140, paddingBottom: 80 }}>

        {/* Text */}
        <div>
          <div className="tag mb-7 hero-anim" style={{ animationDelay: '0.05s' }}>
            <span className="tag-dot animate-pulse-dot" /> {tr(t.hero.badge)}
          </div>
          <h1 className="font-display font-semibold tracking-tightest hero-anim" style={{ fontSize: 'clamp(42px,6.4vw,84px)', lineHeight: 1.02, animationDelay: '0.15s' }}>
            <span className="block text-sand-100">{tr(t.hero.line1)}</span>
            <span className="block text-cork">{tr(t.hero.line2)}</span>
          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-sand-200 hero-anim" style={{ maxWidth: 540, animationDelay: '0.3s' }}>
            {tr(t.hero.sub)}
          </p>
          <div className="mt-10 flex gap-4 flex-wrap hero-anim" style={{ animationDelay: '0.45s' }}>
            <Button href="/contacto" variant="primary">{tr(t.hero.cta1)} →</Button>
            <Button href="/productos" variant="outline">{tr(t.hero.cta2)}</Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 hero-anim" style={{ animationDelay: '0.6s' }}>
            {[
              { n: '70%', l: { es: 'Ahorro energético', en: 'Energy savings' } },
              { n: '25+', l: { es: 'Años de duración', en: 'Years durability' } },
              { n: '10', l: { es: 'Países', en: 'Countries' } },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-2xl font-semibold text-gold-400 leading-none">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-sand-300">{tr(s.l)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="hidden md:flex justify-center items-center hero-anim" style={{ animationDelay: '0.5s' }}>
          <div className="relative" style={{ width: 'clamp(300px,32vw,420px)', aspectRatio: '4/5' }}>
            <div className="absolute -inset-5 rounded-[28px] border animate-spin-slow opacity-40" style={{ borderColor: 'transparent', borderTopColor: 'var(--gold-600)' }} />
            <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-lift" style={{ border: '1px solid var(--border)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/img/villa-pool.webp')} alt="Proyecto Thermocork" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,8,6,0.7) 100%)' }} />
              <div className="absolute left-5 bottom-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ background: 'rgba(10,8,6,0.6)', border: '1px solid var(--border)', color: 'var(--gold-400)', backdropFilter: 'blur(8px)' }}>
                  Obra real · Thermocork
                </div>
              </div>
            </div>
            <div className="absolute -left-6 top-10 rounded-2xl px-4 py-3 shadow-soft" style={{ background: 'var(--ink-800)', border: '1px solid var(--border)' }}>
              <div className="font-display text-xl font-semibold text-gold-400 leading-none">38 dB</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-sand-300 mt-1">{tr({ es: 'Absorción de ruido', en: 'Noise absorption' })}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hero-anim" style={{ animationDelay: '1.2s' }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-sand-300">{tr(t.hero.scroll)}</span>
        <div className="w-px h-9 animate-scroll-line" style={{ background: 'linear-gradient(to bottom,var(--gold-600),transparent)' }} />
      </div>
    </section>
  )
}
