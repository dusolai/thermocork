'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import Section from '@/components/ui/Section'
import AnimateIn from '@/components/ui/AnimateIn'
import Stat from '@/components/ui/Stat'

export default function Ecological() {
  const { t: tr } = useLang()
  return (
    <Section id="ecological" tone="dark" className="overflow-hidden">
      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <AnimateIn>
          <span className="tag mb-7"><span className="tag-dot" /> {tr(t.ecological.tag)}</span>
          <h2 className="font-display m-0" style={{ fontSize: 'clamp(32px,4.8vw,58px)' }}>
            <span className="text-sand-100">{tr(t.ecological.title1)}</span>{' '}
            <span className="text-cork">{tr(t.ecological.title2)}</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-sand-200">{tr(t.ecological.p1)}</p>
          <p className="mt-4 text-[16px] leading-relaxed text-sand-300">{tr(t.ecological.p2)}</p>
          {/* Marbetes en versalita sobre filete: sin cápsulas blandas */}
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {t.ecological.pills.map((pill, i) => (
              <span
                key={i}
                className="text-[11px] uppercase tracking-[0.18em] text-sand-200 pt-3 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                {tr(pill)}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-2 gap-px rounded-[3px] overflow-hidden" style={{ background: 'var(--border-soft)' }}>
            {t.ecological.stats.map((s, i) => (
              <div key={i} className="bg-ink-800 p-8 flex flex-col items-center text-center">
                <Stat value={s.num} label={tr(s.label)} className="flex flex-col items-center" />
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </Section>
  )
}
