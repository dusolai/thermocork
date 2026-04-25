'use client'

import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import StaggerList from '@/components/ui/StaggerList'

export default function Products() {
  const { t: tr } = useLang()

  return (
    <section id="products" className="relative z-[1]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.products.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-3" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span className="text-gold-gradient">Thermocork</span>{' '}
            <span style={{ color: 'var(--white)' }}>Products</span>
          </h2>
          <p className="max-w-xl leading-relaxed" style={{ fontSize: 17, color: 'var(--white2)' }}>{tr(t.products.sub)}</p>
        </AnimateIn>

        <StaggerList className="grid gap-6 mt-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' } as React.CSSProperties}>
          {t.products.items.map((product, i) => (
            <article key={i} className="card-glass overflow-hidden group cursor-pointer">
              {/* Product image */}
              <div className="relative overflow-hidden" style={{ height: 220 }}>
                <Image
                  src={product.img} alt={tr(product.name)}
                  fill sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(10,8,6,0.9) 100%)',
                }} />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--gold)' }}>{product.code}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--white)' }}>{tr(product.name)}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white2)' }}>{tr(product.desc)}</p>

                <ul className="flex flex-col gap-2.5 mb-5">
                  {product.features[tr({ es: 'es', en: 'en' }) as 'es' | 'en'].map((feat, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs" style={{ color: 'var(--white2)' }}>
                      <span className="w-1.5 h-1.5 min-w-[6px] rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <span className="inline-block rounded-full text-xs font-bold tracking-wide uppercase px-3 py-1"
                  style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                  {tr(product.badge)}
                </span>
              </div>
            </article>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
