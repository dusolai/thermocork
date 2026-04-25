'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function Testimonials() {
  const { t: tr } = useLang()

  return (
    <section id="testimonials" className="relative z-[1]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.testimonials.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.testimonials.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.testimonials.title2)}</span>
          </h2>
        </AnimateIn>

        <StaggerList className="grid gap-6 mt-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))' } as React.CSSProperties}>
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="rounded-2xl p-8 transition-all duration-300"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border2)' }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.transform = 'translateY(-4px)') }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border2)'); (e.currentTarget.style.transform = 'translateY(0)') }}>
              <div className="text-4xl leading-none mb-4" style={{ color: 'var(--gold)' }}>"</div>
              <p className="text-sm leading-relaxed italic mb-6" style={{ color: 'var(--white2)' }}>{tr(item.quote)}</p>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: 'linear-gradient(135deg,var(--cork),var(--cork2))', color: 'var(--bg)' }}>
                  {item.name[0]}
                </div>
                <div>
                  <span className="block text-sm font-bold" style={{ color: 'var(--white)' }}>{item.name}</span>
                  <span className="block text-xs" style={{ color: 'var(--white3)' }}>{tr(item.loc)}</span>
                  <span className="block text-xs mt-0.5" style={{ color: 'var(--gold)' }}>★★★★★</span>
                </div>
              </div>

              <div className="rounded-lg px-4 py-2.5 text-xs font-bold text-center"
                style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                {tr(item.saving)}
              </div>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
