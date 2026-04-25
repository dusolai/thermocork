'use client'

import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'

export default function Footer() {
  const { t: tr } = useLang()

  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border2)', padding: '60px 48px 32px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg"
                style={{ background: 'linear-gradient(135deg,var(--gold),var(--cork2))', color: 'var(--bg)' }}>TC</div>
              <span className="text-xl font-bold tracking-widest text-gold-gradient">THERMOCORK</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: 'var(--white3)' }}>{tr(t.footer.desc)}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>{tr(t.footer.cols.products)}</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {['Thermocork F01', 'Thermocork G01', 'Thermocork TCI'].map(p => (
                <li key={p}><a href="#products" className="text-sm no-underline transition-colors" style={{ color: 'var(--white3)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white3)')}>{p}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>{tr(t.footer.cols.company)}</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                { label: { es: 'Sobre nosotros', en: 'About us' }, href: '#about' },
                { label: { es: 'Sostenibilidad', en: 'Sustainability' }, href: '#ecological' },
                { label: { es: 'Formación', en: 'Training' }, href: '#training' },
                { label: { es: 'Internacional', en: 'International' }, href: '#international' },
              ].map((item, i) => (
                <li key={i}><a href={item.href} className="text-sm no-underline transition-colors" style={{ color: 'var(--white3)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white3)')}>{tr(item.label)}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>{tr(t.footer.cols.legal)}</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                { label: { es: 'Política de privacidad', en: 'Privacy policy' } },
                { label: { es: 'Aviso legal', en: 'Legal notice' } },
                { label: { es: 'Cookies', en: 'Cookies' } },
                { label: { es: 'Contacto', en: 'Contact' } },
              ].map((item, i) => (
                <li key={i}><a href="#" className="text-sm no-underline transition-colors" style={{ color: 'var(--white3)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--white3)')}>{tr(item.label)}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid var(--border2)' }}>
          <p className="text-xs" style={{ color: 'var(--white3)' }}>{tr(t.footer.copyright)}</p>
          <div className="flex gap-3">
            {[
              { icon: '📸', href: 'https://www.instagram.com/thermocork/', title: 'Instagram' },
              { icon: '👍', href: 'https://www.facebook.com/thermocork/', title: 'Facebook' },
              { icon: '🎵', href: 'https://www.tiktok.com/@thermocork', title: 'TikTok' },
              { icon: '💼', href: '#', title: 'LinkedIn' },
              { icon: '▶️', href: '#', title: 'YouTube' },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" title={s.title}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base no-underline transition-all duration-200"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}
                onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.transform = 'translateY(-2px)') }}
                onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border2)'); (e.currentTarget.style.transform = 'translateY(0)') }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
