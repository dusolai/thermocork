'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { asset } from '@/lib/asset'
import { APP_IMAGES } from '@/lib/site'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Applications() {
  const { t: tr, lang } = useLang()
  const [active, setActive] = useState(0)
  const tab = t.applications.tabs[active]
  const img = APP_IMAGES[tab.id] ?? '/img/villa-pool.webp'

  return (
    <Section id="applications" tone="dark">
      <SectionHeading
        tag={tr(t.applications.tag)}
        title={tr(t.applications.title1)}
        accent={tr(t.applications.title2)}
        className="mb-10"
      />

      {/* Tabs grouped by Exterior / Interior */}
      <div className="flex flex-col gap-4 mb-10">
        {(['exterior', 'interior'] as const).map((g) => (
          <div key={g} className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sand-400 mr-1 shrink-0">
              {tr(t.applications.groups[g])}
            </span>
            {t.applications.tabs
              .map((tb, i) => ({ tb, i }))
              .filter(({ tb }) => tb.group === g)
              .map(({ tb, i }) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full text-[13px] font-semibold tracking-wide px-5 py-2.5 transition-all duration-200 whitespace-nowrap"
                  style={{
                    border: '1px solid',
                    borderColor: active === i ? 'transparent' : 'var(--border-soft)',
                    background: active === i ? 'linear-gradient(135deg,var(--gold-600),var(--cork-400))' : 'transparent',
                    color: active === i ? 'var(--ink-900)' : 'var(--sand-300)',
                  }}
                >
                  {tr(tb.label)}
                </button>
              ))}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid gap-10 lg:gap-14 items-center lg:grid-cols-2"
        >
          <div className="relative rounded-[3px] overflow-hidden aspect-[4/3]" style={{ border: '1px solid var(--border-soft)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(img)} alt={tr(tab.title)} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, transparent 40%, rgba(10,8,6,0.7) 100%)' }} />
            <span className="absolute left-6 bottom-5 text-xs font-bold tracking-[0.16em] uppercase text-gold-400">
              Thermocork · {tr(tab.label)}
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-sand-100 mb-4">{tr(tab.title)}</h3>
            <p className="text-[15px] leading-relaxed text-sand-300 mb-6">{tr(tab.desc)}</p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
              {tab.benefits[lang].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-sand-200">
                  <span className="text-gold-600 font-bold mt-0.5">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
