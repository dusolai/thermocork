import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ink-900 text-sand-100 text-center px-6">
      <div className="font-display font-semibold text-gold-400" style={{ fontSize: 'clamp(80px,18vw,160px)', lineHeight: 1 }}>404</div>
      <p className="mt-3 mb-8 text-sand-300">Página no encontrada · Page not found</p>
      <Link href="/" className="btn btn-primary">← Volver al inicio</Link>
    </div>
  )
}
