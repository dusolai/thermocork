'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'

export default function Subsidies() {
  const { t: tr } = useLang()
  return (
    <Section id="subsidies" tone="dark">
      <SectionHeading
        tag={tr(t.subsidies.tag)}
        title={tr(t.subsidies.title1)}
        accent={tr(t.subsidies.title2)}
        sub={tr(t.subsidies.intro)}
        className="mb-12"
      />
      <StaggerList className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.subsidies.items.map((item, i) => (
          <div key={i} className="card p-7 h-full">
            <div className="font-display text-3xl font-semibold text-cork mb-3 leading-none">{item.pct}</div>
            <h3 className="font-display text-base font-semibold text-sand-100 mb-2">{tr(item.title)}</h3>
            <p className="text-[13px] leading-relaxed text-sand-300">{tr(item.desc)}</p>
          </div>
        ))}
      </StaggerList>
    </Section>
  )
}
