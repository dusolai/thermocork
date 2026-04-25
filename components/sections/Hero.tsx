'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'

export default function Hero() {
  const { t: tr } = useLang()
  const [mounted, setMounted] = useState(false)
  const layerBgRef = useRef<HTMLDivElement>(null)
  const layerGradRef = useRef<HTMLDivElement>(null)
  const layerOrbsRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
    gsap.registerPlugin(ScrollTrigger)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const layers = [
      { el: layerBgRef.current, speed: 0.3 },
      { el: layerGradRef.current, speed: 0.5 },
      { el: layerOrbsRef.current, speed: 0.7 },
    ]
    layers.forEach(({ el, speed }) => {
      if (!el) return
      gsap.to(el, {
        yPercent: -50 * (1 - speed), ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
      })
    })
    if (heroContentRef.current) {
      gsap.to(heroContentRef.current, {
        opacity: 0, y: -60,
        scrollTrigger: { trigger: '#hero', start: 'center top', end: 'bottom top', scrub: true },
      })
    }
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section id="hero" className="relative flex items-center overflow-hidden z-[1]"
      style={{ minHeight: '100vh', background: '#2C1E12' }}>

      {/* Video background */}
      <div ref={layerBgRef} className="hero-layer" style={{ zIndex: 0 }}>
        <video autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25, filter: 'brightness(0.6)' }}>
          <source src="/cork-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient fog */}
      <div ref={layerGradRef} className="hero-layer" style={{ zIndex: 1,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,94,60,0.5) 0%, transparent 70%),
          linear-gradient(180deg, rgba(10,8,6,0.25) 0%, rgba(10,8,6,0.8) 100%)
        ` }} />

      {/* Ambient orbs */}
      <div ref={layerOrbsRef} className="hero-layer" style={{ zIndex: 2 }}>
        <span className="absolute rounded-full" style={{ width: 600, height: 600, top: '-10%', left: '-15%', background: 'radial-gradient(circle, rgba(201,160,69,0.2), transparent 65%)', filter: 'blur(80px)' }} />
        <span className="absolute rounded-full" style={{ width: 500, height: 500, bottom: '-5%', right: '-10%', background: 'radial-gradient(circle, rgba(139,94,60,0.25), transparent 65%)', filter: 'blur(70px)' }} />
        <span className="absolute rounded-full" style={{ width: 300, height: 300, top: '30%', right: '20%', background: 'radial-gradient(circle, rgba(240,208,128,0.12), transparent 60%)', filter: 'blur(50px)' }} />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{
        opacity: 0.07, mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        backgroundSize: '200px 200px',
      }} />

      {/* Content — two column layout */}
      <div ref={heroContentRef} className="relative z-[4] w-full max-w-6xl mx-auto"
        style={{ padding: '140px clamp(24px,5vw,64px) 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 60, alignItems: 'center' }}>

        {/* Text column */}
        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s cubic-bezier(.4,0,.2,1) 0.2s' }}>
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
            style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)', color: 'var(--gold)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold)', animation: 'pulseDot 2s infinite' }} />
            <span className="text-xs font-bold tracking-widest uppercase">{tr(t.hero.badge)}</span>
          </div>

          <h1 className="font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(40px,6.5vw,82px)', letterSpacing: '-0.03em' }}>
            <span className="block" style={{ color: '#F8F2E8' }}>{tr(t.hero.line1)}</span>
            <span className="block text-cork-gradient">{tr(t.hero.line2)}</span>
          </h1>

          <p className="mb-10 leading-relaxed" style={{ fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--white2)', maxWidth: 520 }}>
            {tr(t.hero.sub)}
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="btn-primary">{tr(t.hero.cta1)} →</a>
            <a href="#products" className="btn-outline">{tr(t.hero.cta2)}</a>
          </div>
        </div>

        {/* Visual column — decorative cork circle */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: mounted ? 1 : 0, transform: mounted ? 'scale(1)' : 'scale(0.85)', transition: 'all 1.2s cubic-bezier(.4,0,.2,1) 0.5s' }}>
          <div style={{ position: 'relative', width: 'clamp(260px, 30vw, 380px)', aspectRatio: '1' }}>
            {/* Rotating rings */}
            <div className="spin-slow" style={{ position: 'absolute', inset: -20, borderRadius: '50%', border: '1px solid rgba(201,160,69,0.12)', borderTopColor: 'rgba(201,160,69,0.4)' }} />
            <div className="spin-slow-reverse" style={{ position: 'absolute', inset: -40, borderRadius: '50%', border: '1px solid rgba(201,160,69,0.06)', borderBottomColor: 'rgba(201,160,69,0.2)' }} />

            {/* Cork circle */}
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(145deg, #3d2a18, #5a3d24, #7a5535)', boxShadow: '0 40px 100px rgba(139,94,60,0.3), inset 0 0 60px rgba(0,0,0,0.4)', position: 'relative' }}>
              {/* Cork texture overlay */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E")`,
                mixBlendMode: 'multiply', opacity: 0.5,
              }} />
              {/* Center stat */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="text-gold-gradient" style={{ fontWeight: 800, fontSize: 'clamp(52px,6vw,72px)', lineHeight: 1 }}>70%</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(240,208,128,0.8)', marginTop: 6 }}>
                  {tr({ es: 'Ahorro Energético', en: 'Energy Savings' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[4]"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1.5s ease 1.5s' }}>
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--white3)' }}>{tr(t.hero.scroll)}</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom,var(--gold),transparent)', animation: 'scrollLine 2s infinite' }} />
      </div>
    </section>
  )
}
