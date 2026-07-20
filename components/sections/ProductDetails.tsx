'use client'

import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimateIn from '@/components/ui/AnimateIn'

const SPECS: { k: { es: string; en: string }; v: string }[] = [
  { k: { es: 'Reflexión solar (cool roof)', en: 'Solar reflectance (cool roof)' }, v: '86%' },
  { k: { es: 'Emisividad térmica', en: 'Thermal emissivity' }, v: '0.81' },
  { k: { es: 'Reducción acústica', en: 'Acoustic reduction' }, v: '38 dB' },
  { k: { es: 'Reacción al fuego', en: 'Fire reaction' }, v: 'M1 / B-s1,d0' },
  { k: { es: 'Rendimiento de aplicación', en: 'Application rate' }, v: '≤ 500 m²/día' },
  { k: { es: 'Base', en: 'Base' }, v: { es: 'Acuosa · sin disolventes', en: 'Water · solvent-free' } as any },
  { k: { es: 'Vida útil', en: 'Service life' }, v: '25+' },
  { k: { es: 'Garantía (cert.)', en: 'Warranty (cert.)' }, v: '10' },
]

export default function ProductDetails() {
  const { t: tr } = useLang()
  return (
    <>
      {/* Finishes */}
      <Section tone="cream">
        <SectionHeading
          tag={tr({ es: 'Acabados y color', en: 'Finishes & colour' })}
          title={tr({ es: 'Dos texturas, miles de colores,', en: 'Two textures, thousands of colours,' })}
          accent={tr({ es: 'infinitas posibilidades.', en: 'endless possibilities.' })}
          sub={tr({ es: 'Elige entre acabado fino o grueso y personaliza el color con cartas RAL y NCS a medida.', en: 'Choose between a fine or coarse finish and customise the colour with bespoke RAL and NCS charts.' })}
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: '/img/cork-wall.webp', t: { es: 'Textura fina · F01', en: 'Fine texture · F01' } },
            { img: '/img/facade-louvers.webp', t: { es: 'Textura gruesa · G01', en: 'Coarse texture · G01' } },
            { img: '/img/info/colores.webp', t: { es: 'Miles de colores RAL/NCS', en: 'Thousands of RAL/NCS colours' } },
          ].map((f, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="rounded-3xl overflow-hidden shadow-soft bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(f.img)} alt={tr(f.t)} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 font-display font-semibold text-sand-900">{tr(f.t)}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Technical data */}
      <Section tone="dark">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          <AnimateIn>
            <SectionHeading
              tag={tr({ es: 'Datos técnicos', en: 'Technical data' })}
              title={tr({ es: 'Rendimiento', en: 'Performance' })}
              accent={tr({ es: 'medible.', en: 'you can measure.' })}
            />
            <div className="mt-8 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-soft)' }}>
              {SPECS.map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-4 px-5 py-3.5" style={{ background: i % 2 ? 'var(--ink-800)' : 'var(--ink-700)' }}>
                  <span className="text-sm text-sand-300">{tr(s.k)}</span>
                  <span className="font-mono text-sm font-semibold text-gold-400">{typeof s.v === 'string' ? s.v : tr(s.v)}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-sand-300">{tr({ es: 'Valores orientativos según producto y soporte. Consulta la ficha técnica oficial para cada aplicación.', en: 'Indicative values depending on product and substrate. Refer to the official datasheet for each application.' })}</p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-col gap-6">
              {['/img/info/comparativa.webp', '/img/info/datos_tecnicos.webp'].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-soft" style={{ border: '1px solid var(--border-soft)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(src)} alt="Thermocork" loading="lazy" decoding="async" className="w-full h-auto block" />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  )
}
