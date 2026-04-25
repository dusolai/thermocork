'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  once?: boolean
}

export default function AnimateIn({ children, className, delay = 0, y = 40, duration = 0.9, once = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.fromTo(el,
      { y, opacity: 0 },
      {
        y: 0, opacity: 1, duration, delay, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    )

    return () => { ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() }) }
  }, [y, duration, delay, once])

  return <div ref={ref} className={className}>{children}</div>
}
