'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import { APP_IMAGES } from '@/lib/site'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerList from '@/components/ui/StaggerList'

export default function ApplicationsGrid() {
  const { t: tr, lang } = useLang()
  return (
    <Section tone="darker">
      <SectionHeading
        align="center"
        tag={tr({ es: 'Sectores', en: 'Sectors' })}
        title={tr({ es: 'Una solución', en: 'One solution' })}
        accent={tr({ es: 'para cada espacio.', en: 'for every space.' })}
        className="mb-14"
      />
      <StaggerList className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.applications.tabs.map((tab) => (
          <article key={tab.id} className="card card-hover overflow-hidden flex flex-col">
            <div className="relative overflow-hidden aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(APP_IMAGES[tab.id] ?? '/img/villa-pool.webp')} alt={tr(tab.title)} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(10,8,6,0.85) 100%)' }} />
              <h3 className="absolute left-5 bottom-4 right-5 font-display text-lg font-semibold text-sand-100">{tr(tab.title)}</h3>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm leading-relaxed text-sand-300 mb-4">{tr(tab.desc)}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2 mt-auto">
                {tab.benefits[lang].slice(0, 3).map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-sand-200">
                    <span className="text-gold-600 font-bold mt-0.5">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </StaggerList>
    </Section>
  )
}
