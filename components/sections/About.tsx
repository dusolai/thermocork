'use client'

import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

const ABOUT_BG = 'https://image.pollinations.ai/prompt/dark+cork+wall+texture+close+up+warm+amber+highlights+architectural+editorial+moody+premium+8k?width=1600&height=900&seed=1101&nologo=true&model=flux'

export default function About() {
  const { t: tr } = useLang()

  return (
    <section id="about" className="parallax-section relative z-[1]" style={{ background: 'var(--bg2)' }}>
      {/* Parallax bg */}
      <div className="parallax-bg" style={{
        backgroundImage: `url("${ABOUT_BG}")`,
        filter: 'brightness(0.1) saturate(0.8)',
      }} />

      {/* Ambient blobs */}
      <span className="ambient-blob" style={{ width: 500, height: 500, top: '10%', left: '-5%', background: 'radial-gradient(circle,rgba(201,160,69,0.15),transparent 70%)' }} />
      <span className="ambient-blob" style={{ width: 400, height: 400, bottom: '5%', right: '-5%', background: 'radial-gradient(circle,rgba(139,94,60,0.15),transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.about.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            {tr(t.about.title1)}<br />
            <span className="text-gold-gradient">{tr(t.about.title2)}</span>
          </h2>
        </AnimateIn>

        <div className="grid gap-20 mt-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Text side */}
          <AnimateIn delay={0.1}>
            <p className="mb-5 leading-relaxed" style={{ fontSize: 16, color: 'var(--white2)' }}>{tr(t.about.p1)}</p>
            <p className="mb-8 leading-relaxed" style={{ fontSize: 16, color: 'var(--white2)' }}>{tr(t.about.p2)}</p>

            <StaggerList className="flex flex-col gap-4">
              {t.about.highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 min-w-[44px] rounded-xl flex items-center justify-center text-xl"
                    style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)' }}>
                    {h.icon}
                  </div>
                  <div>
                    <strong className="block text-sm font-bold mb-0.5" style={{ color: 'var(--white)' }}>{tr(h.title)}</strong>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--white3)' }}>{tr(h.desc)}</span>
                  </div>
                </div>
              ))}
            </StaggerList>
          </AnimateIn>

          {/* Cards side */}
          <StaggerList className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' } as React.CSSProperties}>
            {t.about.cards.map((card, i) => (
              <div key={i} className="card-glass relative overflow-hidden p-8">
                <div className="absolute top-[-10px] right-[-8px] font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: 100, color: 'rgba(201,160,69,0.06)' }}>
                  {card.big}
                </div>
                <div className="relative z-10">
                  <div className="text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--gold)' }}>{tr(card.label)}</div>
                  <div className="font-extrabold leading-none mb-1 text-gold-gradient" style={{ fontSize: 42 }}>{card.value}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--white2)' }}>{tr(card.sub)}</div>
                </div>
              </div>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  )
}
