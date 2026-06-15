'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { CONTACT } from '@/lib/site'
import Logo from '@/components/ui/Logo'
import Container from '@/components/ui/Container'

const COLS = [
  {
    title: { es: 'Productos', en: 'Products' },
    links: [
      { href: '/productos', label: { es: 'Textura Fina · F01', en: 'Fine Texture · F01' } },
      { href: '/productos', label: { es: 'Textura Gruesa · G01', en: 'Coarse Texture · G01' } },
      { href: '/productos', label: { es: 'Impermeabilizante · TCI', en: 'Waterproofing · TCI' } },
      { href: '/aplicaciones', label: { es: 'Aplicaciones', en: 'Applications' } },
    ],
  },
  {
    title: { es: 'Empresa', en: 'Company' },
    links: [
      { href: '/sobre-nosotros', label: { es: 'Sobre nosotros', en: 'About us' } },
      { href: '/proyectos', label: { es: 'Proyectos', en: 'Projects' } },
      { href: '/formacion', label: { es: 'Formación', en: 'Training' } },
      { href: '/ayudas', label: { es: 'Ayudas y subvenciones', en: 'Grants & subsidies' } },
    ],
  },
  {
    title: { es: 'Legal', en: 'Legal' },
    links: [
      { href: '/legal/aviso-legal', label: { es: 'Aviso legal', en: 'Legal notice' } },
      { href: '/legal/privacidad', label: { es: 'Privacidad', en: 'Privacy' } },
      { href: '/legal/cookies', label: { es: 'Cookies', en: 'Cookies' } },
    ],
  },
]

export default function Footer() {
  const { t: tr } = useLang()
  return (
    <footer className="relative bg-ink-800 border-t" style={{ borderColor: 'var(--border-soft)' }}>
      <Container className="py-16">
        <div className="grid gap-12 lg:gap-8 lg:[grid-template-columns:minmax(240px,1.4fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand */}
          <div>
            <Logo variant="largo" height={32} />
            <p className="mt-5 text-sm leading-relaxed text-sand-200 max-w-xs">{tr(t.footer.desc)}</p>
            <div className="mt-6 flex flex-col gap-1.5 text-sm">
              <a href={`tel:${CONTACT.phoneIntl}`} className="no-underline text-sand-200 hover:text-gold-400 transition-colors">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="no-underline text-sand-200 hover:text-gold-400 transition-colors">{CONTACT.email}</a>
              <span className="whitespace-pre-line text-sand-300 text-[13px] mt-1">{tr(CONTACT.address)}</span>
            </div>
          </div>

          {/* Columns */}
          {COLS.map((col, i) => (
            <div key={i}>
              <h4 className="font-display text-base font-semibold mb-4 text-sand-100">{tr(col.title)}</h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <Link href={l.href} className="no-underline text-sm text-sand-300 hover:text-gold-400 transition-colors">
                      {tr(l.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t flex flex-col sm:flex-row gap-3 justify-between items-center" style={{ borderColor: 'var(--border-soft)' }}>
          <p className="text-xs text-sand-300 m-0 text-center sm:text-left">{tr(t.footer.copyright)}</p>
          <p className="text-xs text-gold-600 m-0 font-semibold tracking-[0.2em] uppercase">Natural Insulation System</p>
        </div>
      </Container>
    </footer>
  )
}
