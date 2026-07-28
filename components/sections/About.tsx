'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import Section from '@/components/ui/Section'
import AnimateIn from '@/components/ui/AnimateIn'

export default function About() {
  const { t: tr } = useLang()
  return (
    <Section id="about" tone="cream">
      <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
        {/* Image */}
        <AnimateIn className="order-2 lg:order-1">
          <div className="relative">
            <div className="media relative aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/img/cork-oak.webp')} alt={tr({ es: 'Alcornoque, origen del corcho Thermocork', en: 'Cork oak, the origin of Thermocork cork' })} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -right-4 lg:-right-8 bottom-8 rounded-[3px] px-5 py-4 bg-ink-900 text-sand-100 max-w-[200px]">
              <div className="font-display text-3xl font-semibold text-gold-400 leading-none">9</div>
              <div className="text-xs text-sand-200 mt-1.5 leading-snug">{tr({ es: 'años entre cosechas, sin talar el árbol', en: 'years between harvests, without felling the tree' })}</div>
            </div>
          </div>
        </AnimateIn>

        {/* Text */}
        <AnimateIn className="order-1 lg:order-2">
          <span className="tag mb-5"><span className="tag-dot" /> {tr(t.about.tag)}</span>
          <h2 className="font-display font-semibold tracking-tightest text-sand-900" style={{ fontSize: 'clamp(28px,3.8vw,46px)', lineHeight: 1.1 }}>
            {tr(t.about.title1)}{' '}
            <span className="text-cork">{tr(t.about.title2)}</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-sand-700">{tr(t.about.p1)}</p>
          <p className="mt-4 text-[16px] leading-relaxed text-sand-700">{tr(t.about.p2)}</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {t.about.highlights.map((h, i) => (
              <div key={i}>
                <div className="font-display text-base font-semibold text-sand-900">{tr(h.title)}</div>
                <p className="text-[13px] leading-snug text-sand-700 mt-1.5">{tr(h.desc)}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </Section>
  )
}
