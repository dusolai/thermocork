'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'

const HERO_IMG = 'https://image.pollinations.ai/prompt/macro+cork+oak+bark+texture+warm+golden+dramatic+light+cinematic+moody+premium+editorial+photography+dark+background+8k?width=1920&height=1080&seed=1001&nologo=true&model=flux'

const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 3,
  left: Math.random() * 100,
  color: ['#C9A045', '#8B5E3C', '#F0D080', '#C4956A', '#6B4020'][Math.floor(Math.random() * 5)],
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 15,
}))

export default function Hero() {
  const { t: tr } = useLang()
  const layerBgRef = useRef<HTMLDivElement>(null)
  const layerGradRef = useRef<HTMLDivElement>(null)
  const layerOrbsRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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
        yPercent: -50 * (1 - speed),
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
      })
    })

    // Content fades out as user scrolls
    if (heroContentRef.current) {
      gsap.to(heroContentRef.current, {
        opacity: 0, y: -60,
        scrollTrigger: { trigger: '#hero', start: 'center top', end: 'bottom top', scrub: true },
      })
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center justify-center text-center overflow-hidden z-[1]"
      style={{ height: '100vh', minHeight: '720px' }}
    >
      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {PARTICLES.map(p => (
          <div key={p.id} className="particle absolute rounded-full"
            style={{
              width: p.size, height: p.size, left: `${p.left}%`,
              background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }} />
        ))}
      </div>

      {/* Layer 1 — AI photograph background */}
      <div ref={layerBgRef} className="hero-layer" style={{ zIndex: 0 }}>
        <Image
          src={HERO_IMG} alt="" fill priority fetchPriority="high"
          className="object-cover"
          style={{ filter: 'brightness(0.42) contrast(1.15) saturate(1.1)' }}
          sizes="100vw"
        />
      </div>

      {/* Layer 2 — gradient fog */}
      <div ref={layerGradRef} className="hero-layer" style={{ zIndex: 1,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,94,60,0.5) 0%, transparent 70%),
          radial-gradient(ellipse 70% 50% at 30% 30%, rgba(201,160,69,0.15) 0%, transparent 60%),
          linear-gradient(180deg, rgba(10,8,6,0.25) 0%, rgba(10,8,6,0.8) 100%)
        ` }} />

      {/* Layer 3 — orbs */}
      <div ref={layerOrbsRef} className="hero-layer" style={{ zIndex: 2 }}>
        <span className="absolute rounded-full" style={{ width: 440, height: 440, top: '10%', left: '-8%', background: 'radial-gradient(circle, rgba(201,160,69,0.55), transparent 70%)', filter: 'blur(65px)', opacity: 0.7 }} />
        <span className="absolute rounded-full" style={{ width: 340, height: 340, bottom: '8%', right: '-5%', background: 'radial-gradient(circle, rgba(196,149,106,0.5), transparent 70%)', filter: 'blur(60px)', opacity: 0.65 }} />
        <span className="absolute rounded-full" style={{ width: 280, height: 280, top: '38%', left: '60%', background: 'radial-gradient(circle, rgba(240,208,128,0.35), transparent 70%)', filter: 'blur(55px)', opacity: 0.55 }} />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{
        opacity: 0.07, mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        backgroundSize: '200px 200px',
      }} />

      {/* Content */}
      <div ref={heroContentRef} className="relative z-[4] max-w-4xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 text-xs font-bold tracking-widest uppercase"
          style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)', color: 'var(--gold)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold)', animation: 'pulseDot 2s infinite' }} />
          {tr(t.hero.badge)}
        </div>

        <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(44px,7vw,92px)', letterSpacing: '-2px' }}>
          <span className="block" style={{ background: 'linear-gradient(135deg,var(--white),var(--white2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {tr(t.hero.line1)}
          </span>
          <span className="block text-cork-gradient">
            {tr(t.hero.line2)}
          </span>
        </h1>

        <p className="mb-10 leading-relaxed mx-auto" style={{ fontSize: 'clamp(16px,2vw,20px)', color: 'var(--white2)', maxWidth: 640 }}>
          {tr(t.hero.sub)}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary">{tr(t.hero.cta1)}</a>
          <a href="#products" className="btn-outline">{tr(t.hero.cta2)}</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[4]"
        style={{ animation: 'fadeIn 2s ease 1s both' }}>
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--white3)' }}>{tr(t.hero.scroll)}</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom,var(--gold),transparent)', animation: 'scrollLine 2s infinite' }} />
      </div>
    </section>
  )
}
