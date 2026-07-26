'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'

/**
 * 4 · Raíl de secciones. Índice fijo al margen que marca dónde estás y permite
 * saltar. Recurso de sitio editorial: orienta sin ocupar, y solo en pantallas
 * grandes donde sobra margen.
 */
const SECTIONS: { id: string; label: { es: string; en: string } }[] = [
  { id: 'hero', label: { es: 'Inicio', en: 'Start' } },
  { id: 'about', label: { es: 'Qué es', en: 'What it is' } },
  { id: 'propiedades', label: { es: 'Propiedades', en: 'Properties' } },
  { id: 'products', label: { es: 'Productos', en: 'Products' } },
  { id: 'applications', label: { es: 'Aplicaciones', en: 'Applications' } },
  { id: 'testimonials', label: { es: 'Clientes', en: 'Clients' } },
]

export default function SectionRail() {
  const { t: tr } = useLang()
  const [active, setActive] = useState('hero')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    if (nodes.length < 2) return
    setReady(true)

    const io = new IntersectionObserver(
      (entries) => {
        // La sección que más superficie ocupa manda
        const visible = entries.filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -35% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  if (!ready) return null

  return (
    <nav
      aria-label={tr({ es: 'Índice de secciones', en: 'Section index' })}
      className="hidden 2xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {SECTIONS.map((s) => {
        const on = active === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={on ? 'true' : undefined}
            className="group flex items-center gap-3 no-underline"
          >
            <span
              aria-hidden
              className="block h-px transition-all duration-500"
              style={{ width: on ? 30 : 14, background: on ? 'var(--gold-600)' : 'var(--border)' }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.22em] transition-colors duration-300"
              style={{ color: on ? 'var(--gold-600)' : 'transparent' }}
            >
              {tr(s.label)}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
