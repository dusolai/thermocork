'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<{ lenis: unknown } | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let lenis: { raf: (t: number) => void; scrollTo: (target: string | number, opts?: { offset?: number; duration?: number }) => void; on: (event: string, cb: () => void) => void; destroy: () => void } | null = null

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      })

      // Connect to GSAP ticker
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time: number) => { lenis?.raf(time * 1000) })
      gsap.ticker.lagSmoothing(0)

      // Anchor links
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href')
          if (href && href.length > 1 && document.querySelector(href)) {
            e.preventDefault()
            lenis?.scrollTo(href, { offset: -70, duration: 1.4 })
          }
        })
      })

      // Scroll progress bar
      const progressBar = document.getElementById('scrollProgress')
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
        })
      }

      // Side CTA
      const sideCta = document.getElementById('sideCta')
      if (sideCta) {
        ScrollTrigger.create({
          trigger: '#hero',
          start: 'bottom top',
          onEnter: () => sideCta.classList.add('visible'),
          onLeaveBack: () => sideCta.classList.remove('visible'),
        })
      }

      ScrollTrigger.refresh()
    }

    initLenis().catch(console.error)

    return () => {
      lenis?.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return <>{children}</>
}
