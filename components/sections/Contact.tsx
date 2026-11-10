'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { CONTACT, LEGAL_ENTITY } from '@/lib/site'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

// La solicitud se envía por WhatsApp al número de Thermocork: la web es estática
// (GitHub Pages) y no tiene servidor. El formulario solo redacta el mensaje; lo
// envía el visitante desde su WhatsApp, así que la web no recoge ni guarda datos.
const WA_NUMBER = CONTACT.phoneIntl.replace(/\D/g, '')

export default function Contact() {
  const { t: tr, lang } = useLang()
  const [waUrl, setWaUrl] = useState<string | null>(null)
  const [profile, setProfile] = useState<'particular' | 'empresa'>('particular')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const val = (k: string) => String(data.get(k) ?? '').trim()

    // El mensaje va siempre en español: lo lee Thermocork.
    const lines: (string | null)[] = [
      'Hola, quiero pedir presupuesto (desde thermocork.es).',
      '',
      `Perfil: ${val('perfil')}`,
      profile === 'empresa' && val('cif') ? `CIF: ${val('cif')}` : null,
      `Nombre: ${val('name')}`,
      `Teléfono: ${val('phone')}`,
      `Tipo de proyecto: ${val('type')}`,
      val('area') ? `Superficie: ${val('area')}` : null,
      val('message') ? `\n${val('message')}` : null,
    ]
    const text = lines.filter((l) => l !== null).join('\n')
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
    setWaUrl(url)

    // Pestaña nueva para no perder la web; si el navegador la bloquea, misma pestaña.
    const w = window.open(url, '_blank')
    if (w) w.opener = null
    else window.location.href = url
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              {/* Información básica de protección de datos (art. 13 RGPD) */}
              <p className="text-[12px] leading-relaxed text-sand-300 m-0">
                {lang === 'es'
                  ? <><strong className="text-sand-200">Protección de datos.</strong> Responsable: {LEGAL_ENTITY.name}. Finalidad: atender tu solicitud de presupuesto. Legitimación: medidas precontractuales que nos pides. Destinatarios: WhatsApp, desde donde envías tú el mensaje, y, si hace falta, el aplicador certificado de tu zona. Derechos: acceso, rectificación, supresión y demás, en {CONTACT.email}. Más información en la <Link href="/legal/privacidad" className="text-gold-400">política de privacidad</Link>.</>
                  : <><strong className="text-sand-200">Data protection.</strong> Controller: {LEGAL_ENTITY.name}. Purpose: handling your quote request. Legal basis: pre-contractual steps you ask us to take. Recipients: WhatsApp, from which you send the message yourself, and, if needed, the certified applicator in your area. Rights: access, rectification, erasure and others, at {CONTACT.email}. More in our <Link href="/legal/privacidad" className="text-gold-400">privacy policy</Link>.</>}
              </p>
              <label className="flex items-start gap-3 text-sm text-sand-200 leading-relaxed cursor-pointer">
                <input type="checkbox" name="privacidad" required className="mt-1 h-4 w-4 shrink-0 accent-gold-400" />
                <span>{lang === 'es' ? 'He leído la información sobre protección de datos.' : 'I have read the data protection information.'}</span>
              </label>
              <button type="submit" className="btn btn-primary w-full">
                {tr(t.contact.submit)}
              </button>
              {waUrl ? (
                <p className="text-sm text-sand-200 m-0" role="status">
                  {lang === 'es'
                    ? <>Te hemos abierto WhatsApp con tu solicitud ya escrita: <strong>pulsa enviar</strong> para que nos llegue. ¿No se ha abierto? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400">Abrir WhatsApp</a>.</>
                    : <>We&apos;ve opened WhatsApp with your request already written: <strong>press send</strong> so it reaches us. Didn&apos;t open? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400">Open WhatsApp</a>.</>}
                </p>
              ) : (
                <p className="text-xs text-sand-300 m-0 text-center">
                  {lang === 'es' ? 'Se abrirá WhatsApp con tu solicitud para que la envíes.' : 'WhatsApp will open with your request so you can send it.'}
                </p>
              )}
            </form>
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
