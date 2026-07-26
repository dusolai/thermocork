'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import type { Bi } from '@/lib/site'

/**
 * 2 · Plano a sangre. Una obra real ocupa la pantalla entera y se revela al
 * entrar, con parallax lento. Es el respiro entre bloques densos: el ritmo
 * que separa una web premium de una sucesión de secciones iguales.
 */
export default function FullBleedReveal({
  img,
  quote,
  credit,
}: {
  img: string
  quote: Bi
  credit: Bi
}) {
  const { t: tr } = useLang()
  const wrap = useRef<HTMLElement>(null)
  const media = useRef<HTMLDivElement>(null)
  const veil = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      if (media.current)
        gsap.fromTo(media.current, { yPercent: -9 }, {
          yPercent: 9, ease: 'none',
          scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      // Cortina que se retira: la obra aparece, no "hace fade"
      if (veil.current)
        gsap.to(veil.current, {
          scaleY: 0, transformOrigin: 'bottom center', ease: 'power2.inOut', duration: 1.15,
          scrollTrigger: { trigger: wrap.current, start: 'top 78%' },
        })
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={wrap}
      className="relative overflow-hidden bg-ink-900"
      style={{ height: 'clamp(440px,78vh,760px)' }}
    >
      <div ref={media} className="absolute inset-0 -top-[10%] h-[120%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(img)} alt={tr(credit)} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.5) 0%, rgba(10,8,6,0.15) 45%, rgba(10,8,6,0.88) 100%)' }} />
      <div ref={veil} aria-hidden className="absolute inset-0 z-10" style={{ background: 'var(--ink-900)' }} />

      <div className="relative z-20 h-full w-full max-w-wide mx-auto px-5 sm:px-8 lg:px-14 flex flex-col justify-end pb-14 sm:pb-20">
        <blockquote className="font-display text-sand-100 m-0" style={{ fontSize: 'clamp(26px,4.2vw,56px)', lineHeight: 1.04, maxWidth: '18ch' }}>
          {tr(quote)}
        </blockquote>
        <span className="mt-6 text-[11px] uppercase tracking-[0.26em] text-gold-600">{tr(credit)}</span>
      </div>
    </section>
  )
}
