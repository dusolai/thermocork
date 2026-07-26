'use client'

import { useLang } from '@/hooks/useLang'
import { PROPERTIES } from '@/lib/site'

/**
 * 1 · Banda de materia. Las doce propiedades reales del producto desfilan en
 * tipografía display: un recurso editorial que llena el ancho sin añadir ruido.
 */
export default function MaterialMarquee() {
  const { t: tr } = useLang()
  const items = PROPERTIES.map((p) => tr(p.name))
  const run = [...items, ...items] // duplicado exacto: el bucle no salta

  return (
    <section
      aria-label={tr({ es: 'Propiedades del producto', en: 'Product properties' })}
      className="relative overflow-hidden bg-ink-900 border-y select-none"
      style={{ borderColor: 'var(--border-soft)' }}
    >
      {/* Desvanecido en los cantos: la banda entra y sale, no se corta */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
        style={{ background: 'linear-gradient(90deg, var(--ink-900), transparent)' }} />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
        style={{ background: 'linear-gradient(270deg, var(--ink-900), transparent)' }} />

      <div className="flex w-max animate-marquee py-7 sm:py-9" style={{ willChange: 'transform' }}>
        {run.map((label, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-display text-sand-100/85"
              style={{ fontSize: 'clamp(20px,2.5vw,34px)', lineHeight: 1, whiteSpace: 'nowrap' }}
            >
              {label}
            </span>
            <span aria-hidden className="mx-7 sm:mx-10 text-gold-600" style={{ fontSize: 'clamp(14px,1.6vw,20px)' }}>
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
