'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimateIn from '@/components/ui/AnimateIn'

export default function Process() {
  const { t: tr } = useLang()
  return (
    <Section id="process" tone="cream">
      <SectionHeading
        tag={tr(t.process.tag)}
        title={tr(t.process.title1)}
        accent={tr(t.process.title2)}
        sub={tr(t.process.sub)}
        className="mb-12"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Video */}
        <AnimateIn>
          <div className="relative rounded-[3px] overflow-hidden aspect-[4/3]">
            <video autoPlay muted loop playsInline poster={asset('/video/corcho-impermeable.jpg')} className="w-full h-full object-cover">
              <source src={asset('/video/corcho-impermeable.mp4')} type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(10,8,6,0.35) 100%)' }} />
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="flex flex-col">
          {t.process.steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="flex gap-5 py-5 border-b border-[rgba(26,22,17,0.1)] last:border-0">
                <div className="shrink-0 w-12 h-12 rounded-[3px] flex items-center justify-center font-display text-lg font-semibold"
                  style={{ background: 'rgba(201,160,69,0.14)', color: 'var(--cork-500)', border: '1px solid rgba(201,160,69,0.3)' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-sand-900 mb-1.5">{tr(step.title)}</h3>
                  <p className="text-sm leading-relaxed text-sand-700">{tr(step.desc)}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
