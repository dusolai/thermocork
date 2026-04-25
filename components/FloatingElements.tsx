'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'

export default function FloatingElements() {
  const { lang } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Cursor trail
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    let mx = 0, my = 0, cx = 0, cy = 0
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const tick = () => {
      cx += (mx - cx) * 0.12
      cy += (my - cy) * 0.12
      cursor.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      cursor.remove()
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Scroll progress bar */}
      <div id="scrollProgress" className="scroll-progress" />

      {/* Side CTA */}
      <a id="sideCta" href="#contact" className="side-cta">
        {lang === 'es' ? '🌿 Presupuesto' : '🌿 Get Quote'}
      </a>

      {/* WhatsApp float */}
      <a href="https://wa.me/34646185803?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Thermocork"
        className="whatsapp-float" target="_blank" rel="noopener noreferrer" title="WhatsApp">
        💬
      </a>
    </>
  )
}
