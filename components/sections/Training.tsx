'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function Training() {
  const { t: tr } = useLang()

  return (
    <section id="training" className="relative z-[1]" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.training.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.training.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.training.title2)}</span>
          </h2>
        </AnimateIn>

        <div className="grid gap-16 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
          {/* Steps */}
          <StaggerList className="flex flex-col gap-5">
            {t.training.steps.map((step, i) => (
              <div key={i} className="flex gap-5 rounded-2xl p-6 transition-all duration-300"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}>
                <div className="w-11 h-11 min-w-[44px] rounded-full flex items-center justify-center font-black text-lg"
                  style={{ background: 'linear-gradient(135deg,var(--gold),var(--cork2))', color: 'var(--bg)' }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--white)' }}>{tr(step.title)}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--white3)' }}>{tr(step.desc)}</p>
                </div>
              </div>
            ))}
          </StaggerList>

          {/* Promo card */}
          <AnimateIn delay={0.15}>
            <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg,var(--bg3),var(--bg4))', border: '1px solid var(--border)' }}>
              <h3 className="text-xl font-bold text-gold-gradient mb-4">{tr(t.training.promoTitle)}</h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--white2)' }}>{tr(t.training.promoDesc)}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {t.training.stats.map((stat, i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ background: 'var(--bg)' }}>
                    <div className="font-extrabold" style={{ fontSize: 28, color: 'var(--gold)' }}>{stat.num}</div>
                    <div className="text-xs uppercase tracking-wide mt-1" style={{ color: 'var(--white3)' }}>{tr(stat.label)}</div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary">{tr(t.training.cta)}</a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
