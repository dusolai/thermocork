'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import AnimateIn from '@/components/ui/AnimateIn'

export default function Contact() {
  const { t: tr, lang } = useLang()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      })
      if (res.ok) { setSent(true); form.reset() }
    } catch {
      // fallback: open mailto
      window.location.href = `mailto:info@thermocork.es?subject=Presupuesto&body=${encodeURIComponent(Array.from(data.entries()).map(([k,v]) => `${k}: ${v}`).join('\n'))}`
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative z-[1]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>
        <AnimateIn>
          <span className="section-tag">{tr(t.contact.tag)}</span>
          <h2 className="font-extrabold leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--white)' }}>{tr(t.contact.title1)}</span><br />
            <span className="text-gold-gradient">{tr(t.contact.title2)}</span>
          </h2>
        </AnimateIn>

        <div className="grid gap-20 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
          {/* Form */}
          <AnimateIn delay={0.1}>
            <div className="rounded-2xl p-10" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--white)' }}>{tr(t.contact.formTitle)}</h3>

              {sent ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="font-bold" style={{ color: 'var(--gold)' }}>
                    {lang === 'es' ? '¡Recibido! Te contactaremos en menos de 24h.' : 'Received! We\'ll contact you within 24h.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>{tr(t.contact.fields.name)}</label>
                    <input name="name" type="text" required className="form-input" placeholder={lang === 'es' ? 'Tu nombre completo' : 'Your full name'} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>{tr(t.contact.fields.phone)}</label>
                    <input name="phone" type="tel" required className="form-input" placeholder="+34 600 000 000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>{tr(t.contact.fields.type)}</label>
                    <select name="type" className="form-input" style={{ appearance: 'none' }}>
                      {t.contact.projectTypes[lang].map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>{tr(t.contact.fields.area)}</label>
                    <input name="area" type="text" className="form-input" placeholder="ej: 80m²" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>{tr(t.contact.fields.message)}</label>
                    <textarea name="message" className="form-input" rows={3} placeholder={lang === 'es' ? 'Cuéntanos más sobre tu proyecto...' : 'Tell us more about your project...'} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? '...' : tr(t.contact.submit)}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>

          {/* Info */}
          <AnimateIn delay={0.2}>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--white)' }}>{tr(t.contact.directContact)}</h3>
                <a href="https://wa.me/34646185803?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Thermocork"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full rounded-xl p-4 font-bold text-white transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                  <span className="text-2xl">💬</span> {tr(t.contact.whatsapp)}
                </a>
              </div>

              {[
                { icon: '📞', title: { es: 'Teléfono', en: 'Phone' }, text: t.contact.info.phone },
                { icon: '✉️', title: { es: 'Email', en: 'Email' }, text: t.contact.info.email },
                { icon: '📍', title: { es: 'Oficina Central', en: 'Head Office' }, text: tr(t.contact.info.address) },
                { icon: '🕐', title: { es: 'Horario', en: 'Hours' }, text: tr(t.contact.info.hours) },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 min-w-[48px] rounded-xl flex items-center justify-center text-xl"
                    style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--white)' }}>{tr(item.title)}</h4>
                    <p className="text-sm whitespace-pre-line" style={{ color: 'var(--white2)' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
