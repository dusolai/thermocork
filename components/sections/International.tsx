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
      <StaggerList className="grid gap-px rounded-3xl overflow-hidden grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ background: 'var(--border-soft)' }}>
        {t.international.countries.map((c, i) => (
          <div key={i} className="bg-ink-800 p-6 flex flex-col items-center text-center transition-colors duration-300 hover:bg-ink-700">
            <span className="text-3xl mb-3" aria-hidden>{c.flag}</span>
            <div className="font-display font-semibold text-sand-100">{tr(c.name)}</div>
            <div className="text-[12px] text-sand-300 mt-1">{tr(c.desc)}</div>
          </div>
        ))}
      </StaggerList>
    </Section>
  )
}
