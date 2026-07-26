'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'
import Button from '@/components/ui/Button'

const PRODUCT_META: Record<string, { accent: string; img: string }> = {
  F01: { accent: '#C9A045', img: '/img/cork-wall.webp' },
  G01: { accent: '#8B5E3C', img: '/img/roof-slats.webp' },
  TCI: { accent: '#C4956A', img: '/img/coating-path.webp' },
}

function getCode(codeStr: string) {
  const m = codeStr.match(/\b(F01|G01|TCI)\b/)
  return m ? m[1] : codeStr
}

export default function Products({ withCta = true }: { withCta?: boolean }) {
  const { t: tr, lang } = useLang()
  return (
    <Section id="products" tone="dark">
      <SectionHeading
        tag={tr(t.products.tag)}
        title={tr({ es: 'Tres formulaciones,', en: 'Three formulations,' })}
        accent={tr({ es: 'un mismo corcho.', en: 'one same cork.' })}
        sub={tr(t.products.sub)}
        className="mb-14"
      />

      <StaggerList className="grid gap-6 lg:grid-cols-3">
        {t.products.items.map((product, i) => {
          const code = getCode(product.code)
          const meta = PRODUCT_META[code] ?? PRODUCT_META.F01
          return (
            <article key={i} className="card card-hover overflow-hidden flex flex-col">
              <div className="relative overflow-hidden aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(meta.img)} alt={tr(product.name)} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(10,8,6,0.85) 100%)' }} />
                <span className="absolute left-5 bottom-4 text-xs font-bold tracking-[0.16em] uppercase" style={{ color: meta.accent }}>
                  Thermocork · {code}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-sand-100 mb-2">{tr(product.name)}</h3>
                <p className="text-sm leading-relaxed text-sand-300 mb-5">{tr(product.desc)}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-6">
                  {product.features[lang].map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13px] text-sand-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: meta.accent }} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-block self-start rounded-full text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5"
                  style={{ background: `${meta.accent}1f`, border: `1px solid ${meta.accent}40`, color: meta.accent }}>
                  {tr(product.badge)}
                </span>
              </div>
            </article>
          )
        })}
      </StaggerList>

      {withCta && (
        <div className="mt-12 flex justify-center">
          <Button href="/productos" variant="outline">{tr({ es: 'Ver la gama completa', en: 'See the full range' })} →</Button>
        </div>
      )}
    </Section>
  )
}
