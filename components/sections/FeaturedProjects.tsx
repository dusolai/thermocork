'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import { projects } from '@/lib/projects'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'
import Button from '@/components/ui/Button'

export default function FeaturedProjects({ limit = 3, compact = false }: { limit?: number; compact?: boolean }) {
  const { t: tr } = useLang()
  const items = projects.slice(0, limit)

  return (
    <Section id="proyectos" tone="darker">
      {!compact && (
        <SectionHeading
          tag={tr({ es: 'Obra real', en: 'Real projects' })}
          title={tr({ es: 'Proyectos que', en: 'Projects that' })}
          accent={tr({ es: 'hablan por sí solos.', en: 'speak for themselves.' })}
          sub={tr({ es: 'Fotografía y vídeo de obras reales de nuestra red de aplicadores, con resultados medibles.', en: 'Photography and video from real projects by our applicator network, with measurable results.' })}
          className="mb-14"
        />
      )}

      <StaggerList className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link key={p.slug} href={`/proyectos/${p.slug}`} className="card card-hover overflow-hidden no-underline group flex flex-col">
            <div className="media relative aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(p.cover)} alt={tr(p.title)} loading="lazy" decoding="async" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(10,8,6,0.88) 100%)' }} />
              <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: 'rgba(10,8,6,0.6)', border: '1px solid var(--border)', color: 'var(--gold-400)', backdropFilter: 'blur(6px)' }}>
                {tr(p.sector)}
              </span>
              <div className="absolute left-5 right-5 bottom-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-sand-300 mb-1">{tr(p.location)}</div>
                <h3 className="font-display text-lg font-semibold text-sand-100 leading-snug">{tr(p.title)}</h3>
              </div>
            </div>
            <div className="p-6 flex items-center gap-5 flex-1">
              {p.metrics.slice(0, 3).map((m, i) => (
                <div key={i}>
                  <div className="font-display text-lg font-semibold text-gold-400 leading-none">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.1em] text-sand-300 mt-1 leading-tight">{tr(m.label)}</div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </StaggerList>

      {!compact && (
        <div className="mt-12 flex justify-center">
          <Button href="/proyectos" variant="outline">{tr({ es: 'Ver todos los proyectos', en: 'See all projects' })} →</Button>
        </div>
      )}
    </Section>
  )
}
