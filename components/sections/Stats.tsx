'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'

export default function Stats() {
  const { t: tr } = useLang()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const container = ref.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = container.querySelectorAll('.stat-item')
    gsap.fromTo(items,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <div ref={ref}
      className="grid relative z-[1]"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border2)',
        borderBottom: '1px solid var(--border2)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        padding: '28px 48px',
      }}
    >
      {t.stats.map((stat, i) => (
        <div key={i} className="stat-item text-center py-3 px-6"
          style={{ borderRight: i < t.stats.length - 1 ? '1px solid var(--border2)' : 'none' }}>
          <div className="font-extrabold leading-none mb-1.5 text-gold-gradient" style={{ fontSize: 42 }}>
            {stat.num}
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--white3)' }}>
            {tr(stat.label)}
          </div>
        </div>
      ))}
    </div>
  )
}
