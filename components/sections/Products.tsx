'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

const PRODUCT_COLORS: Record<string, string> = {
  F01: '#C9A045',
  G01: '#8B5E3C',
  TCI: '#C4956A',
}

function getCode(codeStr: string) {
  const match = codeStr.match(/\b(F01|G01|TCI)\b/)
  return match ? match[1] : codeStr
}

export default function Products() {
  const { t: tr } = useLang()

  return (
    <section id="products" className="relative z-[1]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.products.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-3" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span className="text-gold-gradient">Thermocork</span>{' '}
            <span style={{ color: 'var(--white)' }}>{tr(t.products.tag)}</span>
          </h2>
          <p className="max-w-xl leading-relaxed" style={{ fontSize: 17, color: 'var(--white2)' }}>{tr(t.products.sub)}</p>
        </AnimateIn>

        <StaggerList className="grid gap-6 mt-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' } as React.CSSProperties}>
          {t.products.items.map((product, i) => {
            const code = getCode(product.code)
            const accent = PRODUCT_COLORS[code] ?? '#C9A045'
            return (
              <article key={i} className="card-glass overflow-hidden group cursor-pointer">
                {/* Texture header */}
                <div className="relative overflow-hidden" style={{ height: 200, background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}>
                  {/* SVG noise texture */}
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.18,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                  }} />
                  {/* Large decorative code */}
                  <div style={{ position: 'absolute', top: -10, right: 16, fontWeight: 800, fontSize: 100, color: `${accent}0A`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                    {code}
                  </div>
                  {/* Product label */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: accent }}>
                      Thermocork · {code}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--white)' }}>{tr(product.name)}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white2)' }}>{tr(product.desc)}</p>

                  <ul className="flex flex-col gap-2.5 mb-5">
                    {product.features[tr({ es: 'es', en: 'en' }) as 'es' | 'en'].map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-xs" style={{ color: 'var(--white2)' }}>
                        <span className="w-1.5 h-1.5 min-w-[6px] rounded-full flex-shrink-0" style={{ background: accent }} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-block rounded-full text-xs font-bold tracking-wide uppercase px-3 py-1"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}30`, color: accent }}>
                    {tr(product.badge)}
                  </span>
                </div>
              </article>
            )
          })}
        </StaggerList>
      </div>
    </section>
  )
}
