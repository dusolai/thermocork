'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'

export default function Testimonials() {
  const { t: tr } = useLang()
  return (
    <Section id="testimonials" tone="darker">
      <SectionHeading
        align="center"
        tag={tr(t.testimonials.tag)}
        title={tr(t.testimonials.title1)}
        accent={tr(t.testimonials.title2)}
        className="mb-14"
      />
      {/* Columnas separadas por filete, sin caja. La cita va en display: la voz
          del cliente pesa más que el contenedor. */}
      <StaggerList className="grid gap-px lg:grid-cols-3" style={{ background: 'var(--border-soft)' }}>
        {t.testimonials.items.map((item, i) => (
          <figure key={i} className="bg-ink-900 px-7 py-10 sm:px-9 sm:py-12 m-0 flex flex-col">
            <blockquote
              className="font-display text-sand-100 flex-1 m-0"
              style={{ fontSize: 'clamp(19px,1.9vw,23px)', lineHeight: 1.4 }}
            >
              {tr(item.quote)}
            </blockquote>
            <figcaption className="mt-9 pt-6 border-t" style={{ borderColor: 'var(--border-soft)' }}>
              <div className="text-[13px] uppercase tracking-[0.16em] text-sand-100">{item.name}</div>
              <div className="text-[12px] text-sand-300 mt-1.5">{tr(item.loc)}</div>
              <div className="mt-4 text-[12px] text-gold-600">{tr(item.saving)}</div>
            </figcaption>
          </figure>
        ))}
      </StaggerList>
    </Section>
  )
}
