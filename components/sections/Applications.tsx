'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'
import { motion, AnimatePresence } from 'framer-motion'

const TAB_VISUALS: Record<string, { bg: string; accent: string; pattern: string; glow: string }> = {
  facades: {
    bg: 'linear-gradient(135deg, #7a4820, #b06830, #c98040)',
    accent: '#F5D080',
    pattern: '0.18',
    glow: 'rgba(201,160,69,0.55)',
  },
  roofs: {
    bg: 'linear-gradient(135deg, #2a5c1a, #3d7a28, #5a9e3a)',
    accent: '#B8E890',
    pattern: '0.18',
    glow: 'rgba(90,158,58,0.55)',
  },
  interiors: {
    bg: 'linear-gradient(135deg, #5a2880, #7a40a8, #9a60c8)',
    accent: '#E0C0FF',
    pattern: '0.18',
    glow: 'rgba(154,96,200,0.55)',
  },
  commercial: {
    bg: 'linear-gradient(135deg, #1a4870, #2a6898, #3a88b8)',
    accent: '#A8DEFF',
    pattern: '0.18',
    glow: 'rgba(58,136,184,0.55)',
  },
  vehicles: {
    bg: 'linear-gradient(135deg, #7a2818, #a84030, #c85848)',
    accent: '#FFB8A0',
    pattern: '0.18',
    glow: 'rgba(200,88,72,0.55)',
  },
}

export default function Applications() {
  const { t: tr, lang } = useLang()
  const [active, setActive] = useState(0)

  const tab = t.applications.tabs[active]
  const visual = TAB_VISUALS[tab.id] ?? TAB_VISUALS.facades

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

            {/* Visual panel — fully local, no external dependency */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 340, border: '1px solid rgba(255,255,255,0.15)', background: visual.bg, boxShadow: `0 20px 60px ${visual.glow}` }}>
              {/* Subtle noise texture */}
              <div style={{
                position: 'absolute', inset: 0, opacity: Number(visual.pattern),
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E")`,
                mixBlendMode: 'overlay',
              }} />
              {/* Strong radial glow */}
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 65% 55% at 50% 45%, ${visual.accent}40, transparent 70%)` }} />
              {/* Large icon — fully visible */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 60 }}>
                <span style={{ fontSize: 110, filter: `drop-shadow(0 0 32px ${visual.glow}) drop-shadow(0 4px 12px rgba(0,0,0,0.4))` }}>{tab.icon}</span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: visual.accent }}>
                  Thermocork · {tr(tab.label)}
                </span>
              </div>
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
