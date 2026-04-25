'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function Process() {
  const { t: tr } = useLang()

  return (
    <section id="process" className="relative z-[1]" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.process.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.process.title1)} </span>
            <span className="text-gold-gradient">{tr(t.process.title2)}</span>
          </h2>
          <p className="max-w-xl leading-relaxed" style={{ fontSize: 17, color: 'var(--white2)' }}>{tr(t.process.sub)}</p>
        </AnimateIn>

        <div className="relative mt-14">
          {/* Connecting line */}
          <div className="absolute hidden lg:block"
            style={{ top: 44, left: '12%', right: '12%', height: 1, background: 'linear-gradient(90deg, transparent, var(--border), var(--gold), var(--border), transparent)' }} />

          <StaggerList className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' } as React.CSSProperties}>
            {t.process.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg,var(--gold),var(--cork2))', color: 'var(--bg)' }}>
                  {step.num}
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: 'var(--white)' }}>{tr(step.title)}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--white3)' }}>{tr(step.desc)}</p>
              </div>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  )
}
