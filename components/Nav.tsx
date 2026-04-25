'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navLinks = [
  { href: '#products', label: t.nav.products },
  { href: '#applications', label: t.nav.applications },
  { href: '#ecological', label: t.nav.ecology },
  { href: '#training', label: t.nav.training },
  { href: '#contact', label: t.nav.contact },
]

export default function Nav() {
  const { lang, toggle, t: tr } = useLang()
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const nav = navRef.current
    if (!nav) return
    ScrollTrigger.create({
      start: 50, end: 99999,
      onToggle: (self) => nav.classList.toggle('scrolled', self.isActive),
    })
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        id="navbar"
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 lg:px-12"
        style={{
          height: '72px',
          background: 'rgba(10,8,6,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border2)',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg leading-none"
            style={{ background: 'linear-gradient(135deg,var(--gold),var(--cork2))', color: 'var(--bg)', letterSpacing: '-1px' }}>
            TC
          </div>
          <span className="text-lg font-bold tracking-widest text-gold-gradient">THERMOCORK</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}
                className="no-underline text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--white3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--white3)')}>
                {tr(link.label)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button onClick={toggle}
            className="rounded-full text-xs font-bold tracking-widest transition-all duration-200 px-4 py-1.5"
            style={{ background: 'var(--gold-dim)', border: '1px solid var(--border)', color: 'var(--gold)' }}
            onMouseEnter={e => { (e.currentTarget.style.background = 'var(--gold)'); (e.currentTarget.style.color = 'var(--bg)') }}
            onMouseLeave={e => { (e.currentTarget.style.background = 'var(--gold-dim)'); (e.currentTarget.style.color = 'var(--gold)') }}>
            🌐 {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#contact" className="btn-primary hidden sm:inline-block !py-2.5 !px-5 !text-xs">
            {tr(t.nav.quote)}
          </a>
          {/* Mobile hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
            <span className="w-6 h-0.5 block transition-all" style={{ background: 'var(--white)' }} />
            <span className="w-6 h-0.5 block transition-all" style={{ background: 'var(--white)' }} />
            <span className="w-4 h-0.5 block transition-all" style={{ background: 'var(--white)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[999] lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />
          <nav className="absolute top-[72px] left-0 right-0 p-6 flex flex-col gap-4"
            style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border2)' }}
            onClick={e => e.stopPropagation()}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest uppercase py-2 no-underline"
                style={{ color: 'var(--white2)', borderBottom: '1px solid var(--border2)' }}>
                {tr(link.label)}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center mt-2">
              {tr(t.nav.quote)}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
