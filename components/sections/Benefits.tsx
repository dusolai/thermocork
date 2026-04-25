'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function Benefits() {
  const { t: tr } = useLang()

  return (
    <section id="benefits" className="relative z-[1]" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.benefits.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.benefits.title1)} </span>
            <span className="text-gold-gradient">{tr(t.benefits.title2)}</span>
          </h2>
        </AnimateIn>

        <StaggerList className="grid gap-5 mt-14" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))' } as React.CSSProperties}>
          {t.benefits.items.map((benefit, i) => (
            <div key={i} className="p-7 text-center rounded-2xl transition-all duration-300 cursor-default group"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.transform = 'translateY(-5px)') }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border2)'); (e.currentTarget.style.transform = 'translateY(0)') }}>
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--white)' }}>{tr(benefit.name)}</h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--white3)' }}>{tr(benefit.desc)}</p>
              <div className="font-extrabold text-gold-gradient" style={{ fontSize: 28 }}>{benefit.value}</div>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
