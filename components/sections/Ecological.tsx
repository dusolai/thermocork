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
      {/* ambient */}
      <div className="ambient-blob" style={{ width: 520, height: 520, top: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(90,140,60,0.35), transparent 65%)' }} />

      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <AnimateIn>
          <span className="tag mb-5"><span className="tag-dot" /> {tr(t.ecological.tag)}</span>
          <h2 className="font-display font-semibold tracking-tightest" style={{ fontSize: 'clamp(28px,3.8vw,46px)', lineHeight: 1.1 }}>
            <span className="text-sand-100">{tr(t.ecological.title1)}</span>{' '}
            <span className="text-cork">{tr(t.ecological.title2)}</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-sand-200">{tr(t.ecological.p1)}</p>
          <p className="mt-4 text-[16px] leading-relaxed text-sand-300">{tr(t.ecological.p2)}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {t.ecological.pills.map((pill, i) => (
              <span key={i} className="rounded-full px-4 py-2 text-[13px] font-medium" style={{ background: 'var(--border-soft)', border: '1px solid var(--border-soft)', color: 'var(--sand-200)' }}>
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
