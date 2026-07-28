'use client'

import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import type { Bi } from '@/lib/site'

/**
 * Cabecera de página interior. Mismo criterio que la portada: la obra al fondo
 * a sangre, titular dominante y el texto retirado. Sin lavado radial dorado —
 * el degradado sobre la foto basta para sostener la lectura.
 */
export default function PageHero({
  tag,
  title,
  accent,
  sub,
  image,
}: {
  tag: Bi
  title: Bi
  accent?: Bi
  sub?: Bi
  image?: string
}) {
  const { t: tr } = useLang()
  return (
    <header
      className="relative overflow-hidden bg-ink-900 border-b flex items-end"
      style={{ borderColor: 'var(--border-soft)', minHeight: 'clamp(420px,62vh,640px)' }}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(image)} alt="" aria-hidden className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.74) 0%, rgba(10,8,6,0.4) 42%, rgba(10,8,6,0.9) 100%)' }} />
        </div>
      )}

      <div
        className="relative z-10 w-full max-w-wide mx-auto px-5 sm:px-8 lg:px-14"
        style={{ paddingTop: 'clamp(140px,20vh,210px)', paddingBottom: 'clamp(44px,7vh,76px)' }}
      >
        <span className="tag mb-7"><span className="tag-dot" /> {tr(tag)}</span>
        <h1 className="font-display m-0" style={{ fontSize: 'clamp(38px,6.6vw,96px)', lineHeight: 0.96 }}>
          <span className="text-sand-100">{tr(title)}</span>
          {accent && <> <span className="text-cork">{tr(accent)}</span></>}
        </h1>
        {sub && (
          <p className="mt-7 text-[17px] leading-[1.75] text-sand-200 m-0" style={{ maxWidth: '52ch' }}>
            {tr(sub)}
          </p>
        )}
      </div>
    </header>
  )
}
