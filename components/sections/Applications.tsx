'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import { motion, AnimatePresence } from 'framer-motion'

export default function Applications() {
  const { t: tr, lang } = useLang()
  const [active, setActive] = useState(0)

  const tab = t.applications.tabs[active]

  return (
    <section id="applications" className="relative z-[1]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.applications.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.applications.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.applications.title2)}</span>
          </h2>
        </AnimateIn>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mt-12 mb-8">
          {t.applications.tabs.map((tab, i) => (
            <button key={i}
              onClick={() => setActive(i)}
              className="rounded-full text-xs font-semibold tracking-wide px-5 py-2.5 transition-all duration-200 cursor-pointer"
              style={{
                border: '1px solid',
                borderColor: active === i ? 'transparent' : 'var(--border2)',
                background: active === i ? 'linear-gradient(135deg,var(--gold),var(--cork2))' : 'transparent',
                color: active === i ? 'var(--bg)' : 'var(--white3)',
              }}>
              {tab.icon} {tr(tab.label)}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid gap-14 items-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 340, border: '1px solid var(--border)' }}>
              <Image src={tab.img} alt={tr(tab.title)} fill sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.8) 0%, transparent 50%)' }} />
              <div className="absolute bottom-6 left-6 text-5xl">{tab.icon}</div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--white)' }}>{tr(tab.title)}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white2)' }}>{tr(tab.desc)}</p>
              <ul className="flex flex-col gap-3">
                {tab.benefits[lang].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--white2)' }}>
                    <span className="font-bold mt-0.5" style={{ color: 'var(--gold)' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
