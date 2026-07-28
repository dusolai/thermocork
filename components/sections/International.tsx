'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'

export default function International() {
  const { t: tr } = useLang()
  return (
    <Section id="international" tone="darker">
      <SectionHeading
        tag={tr(t.international.tag)}
        title={tr(t.international.title1)}
        accent={tr(t.international.title2)}
        sub={tr(t.international.sub)}
        className="mb-12"
      />
      <StaggerList className="grid gap-px rounded-[3px] overflow-hidden grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ background: 'var(--border-soft)' }}>
        {t.international.countries.map((c, i) => (
          // Sin banderas emoji: Windows no las dibuja (salen como "ES", "PT").
          // El número de orden en mono da orden y aire sin depender del sistema.
          <div key={i} className="bg-ink-800 px-6 py-8 flex flex-col items-start transition-colors duration-300 hover:bg-ink-700">
            <span className="font-mono text-[11px] tracking-[0.18em] text-gold-600" aria-hidden>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="font-display text-lg text-sand-100 mt-4">{tr(c.name)}</div>
            <div className="text-[12px] leading-snug text-sand-300 mt-1.5">{tr(c.desc)}</div>
          </div>
        ))}
      </StaggerList>
    </Section>
  )
}
