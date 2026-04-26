'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { t } from '@/lib/i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navLinks = [
  { href: '#products',     label: t.nav.products },
  { href: '#applications', label: t.nav.applications },
  { href: '#ecological',   label: t.nav.ecology },
  { href: '#training',     label: t.nav.training },
  { href: '#contact',      label: t.nav.contact },
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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        ref={navRef}
        id="navbar"
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between"
        style={{
          height: 68,
          padding: '0 clamp(16px,4vw,48px)',
          background: 'rgba(10,8,6,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border2)',
          transition: 'height 0.3s, background 0.3s',
        }}
      >
        {/* Logo */}
        <a href="#hero" onClick={close} className="flex items-center gap-2.5 no-underline shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm leading-none"
            style={{ background: 'linear-gradient(135deg,var(--gold),var(--cork2))', color: 'var(--bg)' }}>
            TC
          </div>
          <span className="font-bold tracking-widest text-gold-gradient" style={{ fontSize: 'clamp(13px,2.5vw,17px)' }}>
            THERMOCORK
          </span>
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
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button onClick={toggle}
            className="rounded-full text-xs font-bold tracking-widest transition-all duration-200 shrink-0"
            style={{
              background: 'var(--gold-dim)', border: '1px solid var(--border)',
              color: 'var(--gold)', padding: '6px 12px',
            }}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Desktop CTA */}
          <a href="#contact" className="btn-primary hidden lg:inline-block" style={{ padding: '10px 20px', fontSize: 12 }}>
            {tr(t.nav.quote)}
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 rounded-xl transition-all duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              width: 40, height: 40,
              background: open ? 'var(--gold-dim)' : 'transparent',
              border: '1px solid',
              borderColor: open ? 'var(--border)' : 'transparent',
            }}>
            <span style={{
              display: 'block', width: 20, height: 2, borderRadius: 2,
              background: open ? 'var(--gold)' : 'var(--white)',
              transform: open ? 'rotate(45deg) translateY(5.5px)' : 'none',
              transition: 'transform 0.3s, background 0.3s',
            }} />
            <span style={{
              display: 'block', width: 20, height: 2, borderRadius: 2,
              background: 'var(--gold)',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
              transition: 'opacity 0.2s, transform 0.2s',
            }} />
            <span style={{
              display: 'block', width: 20, height: 2, borderRadius: 2,
              background: open ? 'var(--gold)' : 'var(--white)',
              transform: open ? 'rotate(-45deg) translateY(-5.5px)' : 'none',
              transition: 'transform 0.3s, background 0.3s',
            }} />
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile menu ── */}
      <div
        className="lg:hidden fixed inset-0 z-[999] flex flex-col"
        style={{
          background: 'rgba(10,8,6,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          paddingTop: 68,
        }}
      >
        {/* Links */}
        <nav className="flex flex-col flex-1 justify-center px-8 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="no-underline flex items-center justify-between py-4 border-b"
              style={{
                borderColor: 'var(--border2)',
                color: 'var(--white)',
                fontSize: 'clamp(18px,5vw,24px)',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transform: open ? 'translateX(0)' : 'translateX(-30px)',
                opacity: open ? 1 : 0,
                transition: `transform 0.4s ease ${0.05 * i + 0.15}s, opacity 0.4s ease ${0.05 * i + 0.15}s`,
              }}
            >
              <span>{tr(link.label)}</span>
              <span style={{ color: 'var(--gold)', fontSize: 18 }}>→</span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-8 pb-10 pt-6 flex flex-col gap-3"
          style={{
            borderTop: '1px solid var(--border2)',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s',
          }}>
          <a href="#contact" onClick={close} className="btn-primary text-center w-full">
            {tr(t.nav.quote)} →
          </a>
          <p className="text-center text-xs" style={{ color: 'var(--white3)' }}>
            thermocork.es
          </p>
        </div>
      </div>
    </>
  )
}
