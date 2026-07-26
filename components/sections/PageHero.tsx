'use client'

import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import Container from '@/components/ui/Container'
import type { Bi } from '@/lib/site'

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
    <header className="relative overflow-hidden bg-ink-900 border-b" style={{ borderColor: 'var(--border-soft)' }}>
      {image && (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(image)} alt="" aria-hidden className="w-full h-full object-cover" style={{ opacity: 0.32 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.7) 0%, rgba(10,8,6,0.78) 60%, rgba(10,8,6,0.96) 100%)' }} />
        </div>
      )}
      <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(201,160,69,0.1), transparent 70%)' }} />
      <Container className="relative z-10" >
        <div style={{ paddingTop: 150, paddingBottom: 70 }} className="max-w-3xl">
          <span className="tag mb-6"><span className="tag-dot" /> {tr(tag)}</span>
          <h1 className="font-display font-semibold tracking-tightest" style={{ fontSize: 'clamp(36px,5.4vw,68px)', lineHeight: 1.04 }}>
            <span className="text-sand-100">{tr(title)}</span>
            {accent && <> <span className="text-cork">{tr(accent)}</span></>}
          </h1>
          {sub && <p className="mt-6 text-[17px] leading-relaxed text-sand-200" style={{ maxWidth: '56ch' }}>{tr(sub)}</p>}
        </div>
      </Container>
    </header>
  )
}
