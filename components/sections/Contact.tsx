'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { CONTACT } from '@/lib/site'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

export default function Contact() {
  const { t: tr, lang } = useLang()
  const [state, setState] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [profile, setProfile] = useState<'particular' | 'empresa'>('particular')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // No backend configured → graceful mailto fallback
    if (!WEB3FORMS_KEY) {
      const body = Array.from(data.entries())
        .filter(([k]) => !k.startsWith('access_key') && !k.startsWith('botcheck'))
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Presupuesto Thermocork')}&body=${encodeURIComponent(body)}`
      setState('sent')
      form.reset()
      return
    }

    setState('loading')
    try {
      data.append('access_key', WEB3FORMS_KEY)
      data.append('subject', 'Nuevo presupuesto · thermocork.es')
      data.append('from_name', 'Web Thermocork')
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setState('sent')
        form.reset()
      } else setState('error')
    } catch {
      setState('error')
    }
  }

  return (
    <Section id="contact" tone="dark">
      <SectionHeading
        tag={tr(t.contact.tag)}
        title={tr(t.contact.title1)}
        accent={tr(t.contact.title2)}
        className="mb-12"
      />

      <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <div className="card p-7 sm:p-9">
          <h3 className="font-display text-xl font-semibold text-sand-100 mb-6">{tr(t.contact.formTitle)}</h3>

          {state === 'sent' ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(201,160,69,0.15)', border: '1px solid var(--border)' }}>
                <span className="text-gold-400 text-2xl">✓</span>
              </div>
              <p className="font-display text-lg font-semibold text-gold-400">{lang === 'es' ? '¡Recibido! Te contactaremos en menos de 24 h.' : 'Received! We will contact you within 24 h.'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {/* Perfil: particular / empresa (B2C / B2B) */}
              <div>
                <label className="field-label">{tr(t.contact.fields.profile)}</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['particular', 'empresa'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setProfile(p)}
                      aria-pressed={profile === p}
                      className={`rounded-[3px] px-4 py-2.5 text-sm font-semibold transition-colors ${profile === p ? 'text-gold-400' : 'text-sand-200'}`}
                      style={profile === p
                        ? { background: 'rgba(201,160,69,0.18)', border: '1px solid var(--border)' }
                        : { background: 'transparent', border: '1px solid var(--border-soft)' }}
                    >
                      {tr(t.contact.profileOptions[p])}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="perfil" value={tr(t.contact.profileOptions[profile])} />
                <p className="mt-2 text-xs text-sand-300 leading-relaxed">{tr(t.contact.profileHint)}</p>
              </div>
              {profile === 'empresa' && (
                <div>
                  <label className="field-label">{tr(t.contact.fields.cif)}</label>
                  <input name="cif" type="text" required className="field" placeholder={lang === 'es' ? 'ej: B12345678' : 'e.g. B12345678'} />
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="field-label">{tr(t.contact.fields.name)}</label>
                  <input name="name" type="text" required className="field" placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'} />
                </div>
                <div>
                  <label className="field-label">{tr(t.contact.fields.phone)}</label>
                  <input name="phone" type="tel" required className="field" placeholder="+34 600 000 000" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="field-label">{tr(t.contact.fields.type)}</label>
                  <select name="type" className="field" style={{ appearance: 'none' }}>
                    {t.contact.projectTypes[lang].map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="field-label">{tr(t.contact.fields.area)}</label>
                  <input name="area" type="text" className="field" placeholder={lang === 'es' ? 'ej: 80 m²' : 'e.g. 80 m²'} />
                </div>
              </div>
              <div>
                <label className="field-label">{tr(t.contact.fields.message)}</label>
                <textarea name="message" rows={4} className="field" placeholder={lang === 'es' ? 'Cuéntanos más sobre tu proyecto…' : 'Tell us more about your project…'} />
              </div>
              <button type="submit" disabled={state === 'loading'} className="btn btn-primary w-full disabled:opacity-70">
                {state === 'loading' ? '…' : tr(t.contact.submit)}
              </button>
              {state === 'error' && <p className="text-sm text-red-400">{lang === 'es' ? 'No se pudo enviar. Inténtalo por WhatsApp.' : 'Could not send. Please try WhatsApp.'}</p>}
            </form>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-[3px] p-4 font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}>
            {tr(t.contact.whatsapp)}
          </a>

          {[
            { title: { es: 'Teléfono', en: 'Phone' }, text: CONTACT.phone, href: `tel:${CONTACT.phoneIntl}` },
            { title: { es: 'Email', en: 'Email' }, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { title: { es: 'Oficina central', en: 'Head office' }, text: tr(CONTACT.address) },
            { title: { es: 'Horario', en: 'Hours' }, text: tr(CONTACT.hours) },
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="field-label">{tr(item.title)}</span>
              {item.href ? (
                <a href={item.href} className="text-[15px] text-sand-100 no-underline hover:text-gold-400 transition-colors">{item.text}</a>
              ) : (
                <span className="text-[15px] text-sand-200 whitespace-pre-line">{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
