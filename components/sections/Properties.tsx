'use client'

import { useLang } from '@/hooks/useLang'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import StaggerList from '@/components/ui/StaggerList'
import { PROPERTIES } from '@/lib/site'

export default function Properties() {
  const { t: tr } = useLang()
  return (
    <Section id="propiedades" tone="darker">
      <SectionHeading
        align="center"
        tag={tr({ es: 'Por qué Thermocork', en: 'Why Thermocork' })}
        title={tr({ es: 'Una sola aplicación,', en: 'A single application,' })}
        accent={tr({ es: 'doce ventajas.', en: 'twelve advantages.' })}
        sub={tr({
          es: 'El corcho proyectado reúne en una capa continua todo lo que normalmente exige varios materiales y varias obras.',
          en: 'Projected cork brings together in one continuous layer everything that normally requires several materials and several works.',
        })}
        className="mb-14"
      />
      <StaggerList className="grid gap-px rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--border-soft)' }}>
        {PROPERTIES.map((p, i) => (
          <div key={i} className="group bg-ink-800 p-7 transition-colors duration-300 hover:bg-ink-700">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'var(--border-soft)', border: '1px solid var(--border-soft)' }}>
              <Icon name={p.icon} size={32} />
            </div>
            <h3 className="font-display text-lg font-semibold text-sand-100 mb-2">{tr(p.name)}</h3>
            <p className="text-sm leading-relaxed text-sand-300">{tr(p.desc)}</p>
          </div>
        ))}
      </StaggerList>
    </Section>
  )
}
