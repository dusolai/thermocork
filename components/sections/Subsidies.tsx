'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function Subsidies() {
  const { t: tr } = useLang()

  return (
    <section id="subsidies" className="relative z-[1] overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.subsidies.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.subsidies.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.subsidies.title2)}</span>
          </h2>
        </AnimateIn>

        <div className="rounded-3xl relative overflow-hidden mt-4" style={{ background: 'linear-gradient(135deg,var(--bg2),var(--bg3))', border: '1px solid var(--border)', padding: '48px' }}>
          {/* Big € decoration */}
          <div className="absolute text-[240px] font-black leading-none pointer-events-none select-none"
            style={{ right: -20, top: -40, color: 'rgba(201,160,69,0.04)', fontFamily: 'system-ui' }}>€</div>

          <p className="max-w-2xl leading-relaxed mb-10 relative z-10" style={{ fontSize: 16, color: 'var(--white2)' }}>
            {tr(t.subsidies.intro)}
          </p>

          <StaggerList className="grid gap-6 relative z-10" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))' } as React.CSSProperties}>
            {t.subsidies.items.map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border2)' }}>
                <div className="font-extrabold text-gold-gradient mb-2" style={{ fontSize: 34 }}>{item.pct}</div>
                <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--gold)' }}>{tr(item.title)}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--white2)' }}>{tr(item.desc)}</p>
              </div>
            ))}
          </StaggerList>

          <div className="mt-10 text-center relative z-10">
            <a href="#contact" className="btn-primary">{tr(t.subsidies.cta)}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
