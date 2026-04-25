'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  children: React.ReactNode
  className?: string
  stagger?: number
  y?: number
}

export default function StaggerList({ children, className, stagger = 0.08, y = 50 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = Array.from(el.children)
    gsap.fromTo(items,
      { y, opacity: 0, scale: 0.96 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.85, stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => { ScrollTrigger.getAll().forEach(t => { if (t.trigger === el) t.kill() }) }
  }, [stagger, y])

  return <div ref={ref} className={className}>{children}</div>
}
