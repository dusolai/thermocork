'use client'

import { useMemo, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const eur = (n: number) => new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(Math.round(n))

export default function SavingsCalculator() {
  const { t: tr } = useLang()
  const [bill, setBill] = useState(180) // factura energética media mensual (€)
  const [pct, setPct] = useState(40) // % de ahorro estimado

  const r = useMemo(() => {
    const monthly = bill * (pct / 100)
    const yearly = monthly * 12
    const tenYear = yearly * 10
    const co2 = Math.round(yearly * 2.1) // ~2.1 kg CO2 por € de energía evitada (orientativo)
    return { monthly, yearly, tenYear, co2 }
  }, [bill, pct])

  return (
    <Section id="calculadora" tone="cream">
      <SectionHeading
        align="center"
        tag={tr({ es: 'Calculadora de ahorro', en: 'Savings calculator' })}
        title={tr({ es: 'Estima cuánto puedes', en: 'Estimate how much you could' })}
        accent={tr({ es: 'ahorrar.', en: 'save.' })}
        sub={tr({ es: 'Una estimación orientativa del ahorro energético al aislar con Thermocork. Para una cifra exacta, solicita tu estudio gratuito.', en: 'An indicative estimate of the energy savings from insulating with Thermocork. For an exact figure, request your free study.' })}
        className="mb-12"
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-5xl mx-auto">
        {/* Inputs */}
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <label className="block">
            <span className="flex items-center justify-between text-sm font-semibold text-sand-900 mb-3">
              {tr({ es: 'Factura energética mensual', en: 'Monthly energy bill' })}
              <span className="font-mono text-cork font-bold">{eur(bill)} €</span>
            </span>
            <input type="range" min={40} max={600} step={10} value={bill} onChange={(e) => setBill(+e.target.value)}
              className="w-full accent-[#C9A045]" />
          </label>

          <label className="block mt-8">
            <span className="flex items-center justify-between text-sm font-semibold text-sand-900 mb-3">
              {tr({ es: 'Ahorro estimado', en: 'Estimated saving' })}
              <span className="font-mono text-cork font-bold">{pct}%</span>
            </span>
            <input type="range" min={20} max={70} step={5} value={pct} onChange={(e) => setPct(+e.target.value)}
              className="w-full accent-[#C9A045]" />
            <span className="block mt-2 text-xs text-sand-700">{tr({ es: 'Según superficie, orientación y estado actual del aislamiento.', en: 'Depending on surface, orientation and current insulation state.' })}</span>
          </label>
        </div>

        {/* Results */}
        <div className="rounded-3xl bg-ink-900 text-sand-100 p-8 shadow-lift">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-display text-3xl font-semibold text-gold-400 leading-none">{eur(r.monthly)} €</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-sand-300 mt-2">{tr({ es: 'Ahorro / mes', en: 'Saving / month' })}</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-gold-400 leading-none">{eur(r.yearly)} €</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-sand-300 mt-2">{tr({ es: 'Ahorro / año', en: 'Saving / year' })}</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-gold-400 leading-none">{eur(r.tenYear)} €</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-sand-300 mt-2">{tr({ es: 'En 10 años', en: 'Over 10 years' })}</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-gold-400 leading-none">{eur(r.co2)} kg</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-sand-300 mt-2">{tr({ es: 'CO₂ evitado / año', en: 'CO₂ avoided / year' })}</div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-soft)' }}>
            <p className="text-sm text-sand-300 mb-4">{tr({ es: 'Y recuerda: tu proyecto puede ser subvencionable hasta un 40-60%.', en: 'And remember: your project may be eligible for 40-60% in grants.' })}</p>
            <Button href="/contacto" variant="primary">{tr({ es: 'Solicitar estudio gratuito', en: 'Request free study' })} →</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
