'use client'

import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

const ECO_BG = 'https://image.pollinations.ai/prompt/ancient+cork+oak+tree+mediterranean+forest+golden+hour+sunlight+rays+cinematic+national+geographic+style+8k?width=1600&height=900&seed=1102&nologo=true&model=flux'

export default function Ecological() {
  const { t: tr } = useLang()

  return (
    <section id="ecological" className="parallax-section relative z-[1]" style={{ background: 'var(--bg)' }}>
      {/* Parallax bg */}
      <div className="parallax-bg" style={{ backgroundImage: `url("${ECO_BG}")`, filter: 'brightness(0.42) saturate(0.9)' }} />

      <span className="ambient-blob" style={{ width: 600, height: 600, top: '20%', right: '-10%', background: 'radial-gradient(circle,rgba(74,100,44,0.15),transparent 70%)' }} />

      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.ecological.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.ecological.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.ecological.title2)}</span>
          </h2>
        </AnimateIn>

        <div className="grid gap-20 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
          {/* Visual */}
          <AnimateIn delay={0.1}>
            {/* Ring visual */}
            <div className="relative mx-auto flex items-center justify-center" style={{ width: 300, height: 300 }}>
              <div className="absolute inset-0 rounded-full" style={{ border: '2px solid var(--border)' }} />
              <div className="absolute" style={{ inset: -16, borderRadius: '50%', border: '1px solid rgba(201,160,69,0.08)' }} />
              <div className="absolute" style={{ inset: -32, borderRadius: '50%', border: '1px solid rgba(201,160,69,0.04)' }} />
              <div className="text-center">
                <div className="text-6xl mb-2">🌳</div>
                <div className="font-extrabold text-gold-gradient" style={{ fontSize: 48 }}>CO₂−</div>
                <div className="text-sm" style={{ color: 'var(--white2)' }}>{tr(t.ecological.title2)}</div>
              </div>
            </div>

            <StaggerList className="grid grid-cols-2 gap-4 mt-8">
              {t.ecological.stats.map((stat, i) => (
                <div key={i} className="text-center rounded-xl p-5" style={{ background: 'var(--bg2)', border: '1px solid var(--border2)' }}>
                  <div className="font-extrabold text-gold-gradient" style={{ fontSize: 32 }}>{stat.num}</div>
                  <div className="text-xs uppercase tracking-wide mt-1" style={{ color: 'var(--white3)' }}>{tr(stat.label)}</div>
                </div>
              ))}
            </StaggerList>
          </AnimateIn>

          {/* Text */}
          <AnimateIn delay={0.2}>
            <p className="leading-relaxed mb-5" style={{ fontSize: 16, color: 'var(--white2)' }}>{tr(t.ecological.p1)}</p>
            <p className="leading-relaxed mb-8" style={{ fontSize: 16, color: 'var(--white2)' }}>{tr(t.ecological.p2)}</p>

            <div className="flex flex-wrap gap-2.5">
              {t.ecological.pills.map((pill, i) => (
                <span key={i} className="rounded-full text-sm font-semibold px-4 py-2"
                  style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)', color: 'var(--gold2)' }}>
                  {tr(pill)}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
