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
      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left p-6"
                aria-expanded={isOpen}
              >
                <span className="font-display text-[17px] font-semibold text-sand-100">{tr(item.q)}</span>
                <span className="shrink-0 text-gold-600 text-xl transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-sand-300 m-0">{tr(item.a)}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
