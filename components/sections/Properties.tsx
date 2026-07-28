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
      <StaggerList className="grid gap-px rounded-[3px] overflow-hidden sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--border-soft)' }}>
        {PROPERTIES.map((p, i) => (
          // El icono oficial va suelto, sin cápsula que lo encierre: gana aire
          // y el número en mono ordena la retícula.
          <div key={i} className="group bg-ink-800 px-7 py-9 transition-colors duration-300 hover:bg-ink-700">
            <div className="flex items-center justify-between mb-7">
              <Icon name={p.icon} size={34} />
              <span className="font-mono text-[11px] tracking-[0.18em] text-gold-600/50" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="font-display text-lg text-sand-100 mb-2.5">{tr(p.name)}</h3>
            <p className="text-sm leading-[1.7] text-sand-300 m-0">{tr(p.desc)}</p>
          </div>
        ))}
      </StaggerList>
    </Section>
  )
}
