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
      <StaggerList className="grid gap-6 lg:grid-cols-3">
        {t.testimonials.items.map((item, i) => (
          <figure key={i} className="card p-8 m-0 flex flex-col">
            <div className="text-gold-600 text-5xl font-display leading-none mb-3">“</div>
            <blockquote className="text-[15px] leading-relaxed text-sand-200 flex-1 m-0">{tr(item.quote)}</blockquote>
            <figcaption className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--border-soft)' }}>
              <div className="font-display font-semibold text-sand-100">{item.name}</div>
              <div className="text-xs text-sand-300 mt-0.5">{tr(item.loc)}</div>
              <div className="mt-3 text-[12px] font-semibold text-gold-400">{tr(item.saving)}</div>
            </figcaption>
          </figure>
        ))}
      </StaggerList>
    </Section>
  )
}
