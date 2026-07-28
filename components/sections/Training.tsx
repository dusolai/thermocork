'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'
import AnimateIn from '@/components/ui/AnimateIn'
import Stat from '@/components/ui/Stat'
import Button from '@/components/ui/Button'

export default function Training() {
  const { t: tr } = useLang()
  return (
    <>
      <Section id="training" tone="dark">
        <SectionHeading
          tag={tr(t.training.tag)}
          title={tr(t.training.title1)}
          accent={tr(t.training.title2)}
          className="mb-12"
        />
        {/* Itinerario en retícula de filete: los cuatro pasos leen como uno */}
        <StaggerList className="grid gap-px md:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--border-soft)' }}>
          {t.training.steps.map((step, i) => (
            <div key={i} className="bg-ink-900 px-7 py-9 h-full">
              <div className="font-mono text-[11px] tracking-[0.18em] text-gold-600 mb-7">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-display text-lg text-sand-100 mb-2.5">{tr(step.title)}</h3>
              <p className="text-sm leading-[1.7] text-sand-300 m-0">{tr(step.desc)}</p>
            </div>
          ))}
        </StaggerList>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <AnimateIn>
            <h2 className="font-display text-sand-900 m-0" style={{ fontSize: 'clamp(30px,4.2vw,52px)' }}>{tr(t.training.promoTitle)}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-sand-700">{tr(t.training.promoDesc)}</p>
            <div className="mt-8"><Button href="/contacto" variant="primary">{tr(t.training.cta)} →</Button></div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-2 gap-px rounded-[3px] overflow-hidden" style={{ background: 'rgba(26,22,17,0.08)' }}>
              {t.training.stats.map((s, i) => (
                <div key={i} className="bg-cream-50 p-8 flex flex-col items-center text-center text-sand-900">
                  <Stat value={s.num} label={tr(s.label)} className="flex flex-col items-center" />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  )
}
