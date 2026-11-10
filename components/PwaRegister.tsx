'use client'

import { useEffect } from 'react'

// Ya no se registra ningún service worker: el que había servía páginas viejas
// desde caché tras cada publicación (ver public/sw.js). Esto da de baja el que
// quede instalado y borra su caché, por si el navegador no ha pasado aún por la
// actualización de sw.js.
export default function PwaRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    navigator.serviceWorker.getRegistrations()
      .then((regs) => Promise.all(regs.map((r) => r.unregister())))
      .catch(() => {})
    if ('caches' in window) {
      caches.keys()
        .then((keys) => Promise.all(keys.filter((k) => k.startsWith('thermocork')).map((k) => caches.delete(k))))
        .catch(() => {})
    }
  }, [])
  return null
}
