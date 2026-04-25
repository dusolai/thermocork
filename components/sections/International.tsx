'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function International() {
  const { t: tr } = useLang()

  return (
    <section id="international" className="relative z-[1]" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.international.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.international.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.international.title2)}</span>
          </h2>
          <p className="max-w-xl leading-relaxed" style={{ fontSize: 17, color: 'var(--white2)' }}>{tr(t.international.sub)}</p>
        </AnimateIn>

        <StaggerList className="grid gap-4 mt-12" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))' } as React.CSSProperties}>
          {t.international.countries.map((c, i) => (
            <div key={i}
              className="flex items-center gap-3.5 rounded-xl p-5 transition-all duration-300 cursor-default"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.transform = 'translateX(4px)') }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border2)'); (e.currentTarget.style.transform = 'translateX(0)') }}>
              <span className="text-3xl">{c.flag}</span>
              <div>
                <strong className="block text-sm font-bold" style={{ color: 'var(--white)' }}>{tr(c.name)}</strong>
                <span className="text-xs" style={{ color: 'var(--white3)' }}>{tr(c.desc)}</span>
              </div>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
