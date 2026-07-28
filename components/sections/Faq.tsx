'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { FAQ } from '@/lib/site'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Faq({ limit }: { limit?: number }) {
  const { t: tr } = useLang()
  const [open, setOpen] = useState<number | null>(0)
  const items = limit ? FAQ.slice(0, limit) : FAQ

  return (
    <Section id="faq" tone="dark" size="narrow">
      <SectionHeading
        align="center"
        tag={tr({ es: 'Preguntas frecuentes', en: 'FAQ' })}
        title={tr({ es: 'Lo que todo el mundo', en: 'What everyone' })}
        accent={tr({ es: 'pregunta.', en: 'asks.' })}
        className="mb-12"
      />
      {/* Lista editorial: filas separadas por filete, sin cajas. La pregunta
          manda en display y la respuesta se despliega debajo. */}
      <div className="border-t" style={{ borderColor: 'var(--border-soft)' }}>
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="border-b" style={{ borderColor: 'var(--border-soft)' }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-6 text-left py-7 group"
                aria-expanded={isOpen}
              >
                <span
                  className="font-display text-sand-100 transition-colors duration-300 group-hover:text-gold-600"
                  style={{ fontSize: 'clamp(19px,2.1vw,26px)', lineHeight: 1.25 }}
                >
                  {tr(item.q)}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 mt-1.5 text-gold-600 text-2xl font-light leading-none transition-transform duration-500"
                  style={{ transform: isOpen ? 'rotate(135deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                <div className="overflow-hidden">
                  <p className="pb-8 pr-12 text-[16px] leading-[1.75] text-sand-300 m-0" style={{ maxWidth: '62ch' }}>
                    {tr(item.a)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
