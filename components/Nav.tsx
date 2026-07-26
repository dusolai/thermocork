'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { NAV } from '@/lib/site'
import Logo from '@/components/ui/Logo'
import clsx from 'clsx'

export default function Nav() {
  const { lang, toggle, t: tr } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const close = () => setOpen(false)
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <nav
        ref={navRef}
        id="navbar"
        className={clsx(
          'fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300',
          'border-b',
        )}
        style={{
          height: scrolled ? 60 : 76,
          padding: '0 clamp(16px,4vw,40px)',
          background: scrolled ? 'rgba(10,8,6,0.96)' : 'rgba(10,8,6,0.55)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderColor: scrolled ? 'var(--border-soft)' : 'transparent',
        }}
      >
        <Logo variant="largo" height={scrolled ? 26 : 30} onClick={close} />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 list-none m-0">
          {NAV.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'no-underline text-[12px] font-medium tracking-[0.14em] uppercase transition-colors duration-200',
                  isActive(link.href) ? 'text-gold-400' : 'text-sand-300 hover:text-gold-400',
                )}
              >
                {tr(link.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            className="rounded-full text-[11px] font-bold tracking-[0.14em] transition-all duration-200 shrink-0 text-gold-400"
            style={{ background: 'var(--border-soft)', border: '1px solid var(--border)', padding: '6px 12px' }}
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <Link href="/contacto" className="btn btn-primary hidden lg:inline-flex" style={{ padding: '9px 20px', fontSize: 12 }}>
            {tr(t.nav.quote)}
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] rounded-[3px]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            style={{ width: 42, height: 42, background: open ? 'var(--border-soft)' : 'transparent', border: '1px solid', borderColor: open ? 'var(--border)' : 'transparent' }}
          >
            <span style={{ display: 'block', width: 20, height: 2, borderRadius: 2, background: open ? 'var(--gold-400)' : 'var(--sand-100)', transform: open ? 'rotate(45deg) translateY(7px)' : 'none', transition: 'transform 0.3s, background 0.3s' }} />
            <span style={{ display: 'block', width: 20, height: 2, borderRadius: 2, background: 'var(--gold-400)', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: 20, height: 2, borderRadius: 2, background: open ? 'var(--gold-400)' : 'var(--sand-100)', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: 'transform 0.3s, background 0.3s' }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="lg:hidden fixed inset-0 z-[99] flex flex-col"
        style={{
          background: 'rgba(10,8,6,0.98)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)', paddingTop: 76,
        }}
      >
        <nav className="flex flex-col flex-1 justify-center px-8 gap-1">
          {NAV.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="no-underline flex items-center justify-between py-4 border-b"
              style={{
                borderColor: 'var(--border-soft)', color: isActive(link.href) ? 'var(--gold-400)' : 'var(--sand-100)',
                fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,6vw,28px)', fontWeight: 600,
                transform: open ? 'translateX(0)' : 'translateX(-24px)', opacity: open ? 1 : 0,
                transition: `transform 0.4s ease ${0.05 * i + 0.15}s, opacity 0.4s ease ${0.05 * i + 0.15}s`,
              }}
            >
              <span>{tr(link.label)}</span>
              <span style={{ color: 'var(--gold-600)', fontSize: 18 }}>→</span>
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10 pt-6 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border-soft)' }}>
          <Link href="/contacto" onClick={close} className="btn btn-primary w-full">
            {tr(t.nav.quote)} →
          </Link>
          <p className="text-center text-xs text-sand-300 m-0">thermocork.es</p>
        </div>
      </div>
    </>
  )
}
