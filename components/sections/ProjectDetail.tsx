'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { asset } from '@/lib/asset'
import { getProject, projects } from '@/lib/projects'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t: tr } = useLang()
  const project = getProject(slug)
  if (!project) return null

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  const blocks = [
    { label: { es: 'El reto', en: 'The challenge' }, text: project.challenge },
    { label: { es: 'La solución', en: 'The solution' }, text: project.solution },
    { label: { es: 'El resultado', en: 'The result' }, text: project.result },
  ]

  return (
    <main>
      {/* Hero */}
      <header className="relative overflow-hidden bg-ink-900 border-b" style={{ borderColor: 'var(--border-soft)' }}>
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(project.cover)} alt="" aria-hidden className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.65), rgba(10,8,6,0.96))' }} />
        </div>
        <Container className="relative z-10">
          <div style={{ paddingTop: 150, paddingBottom: 60 }} className="max-w-3xl">
            <Link href="/proyectos" className="no-underline text-xs uppercase tracking-[0.16em] text-sand-300 hover:text-gold-400">← {tr({ es: 'Proyectos', en: 'Projects' })}</Link>
            <span className="tag mt-5 mb-5"><span className="tag-dot" /> {tr(project.sector)}</span>
            <h1 className="font-display font-semibold tracking-tightest text-sand-100" style={{ fontSize: 'clamp(32px,4.8vw,60px)', lineHeight: 1.05 }}>{tr(project.title)}</h1>
            <p className="mt-4 text-[15px] uppercase tracking-[0.14em] text-gold-400">{tr(project.location)}</p>
            <p className="mt-5 text-[17px] leading-relaxed text-sand-200" style={{ maxWidth: '56ch' }}>{tr(project.summary)}</p>
          </div>
        </Container>
      </header>

      {/* Metrics */}
      <section className="bg-ink-800 border-b" style={{ borderColor: 'var(--border-soft)' }}>
        <Container className="py-10">
          <div className="grid grid-cols-3 gap-6 text-center">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <div className="font-display font-semibold text-cork leading-none" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>{m.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-sand-300">{tr(m.label)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Video + narrative */}
      <Section tone="dark">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          <AnimateIn>
            {project.video ? (
              <div className="rounded-[3px] overflow-hidden" style={{ border: '1px solid var(--border-soft)' }}>
                <video controls playsInline preload="metadata" poster={asset(project.video.poster)} className="w-full h-auto block bg-black">
                  <source src={asset(project.video.src)} type="video/mp4" />
                </video>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={asset(project.cover)} alt={tr(project.title)} className="rounded-[3px] w-full" />
            )}
            <p className="mt-3 text-xs text-sand-300">{tr({ es: 'Vídeo real de obra · red de aplicadores Thermocork', en: 'Real on-site video · Thermocork applicator network' })}</p>
          </AnimateIn>

          <div className="flex flex-col gap-8">
            {blocks.map((b, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div>
                  <h2 className="font-display text-xl font-semibold text-gold-400 mb-2">{tr(b.label)}</h2>
                  <p className="text-[15px] leading-relaxed text-sand-200">{tr(b.text)}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section tone="darker">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {project.gallery.map((src, i) => (
            <AnimateIn key={i} delay={(i % 2) * 0.06}>
              <div className="rounded-[3px] overflow-hidden aspect-[4/3]" style={{ border: '1px solid var(--border-soft)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(src)} alt={`${tr(project.title)} — ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Next + CTA */}
      <Section tone="dark" size="narrow">
        <div className="text-center">
          <Button href="/contacto" variant="primary">{tr({ es: 'Quiero un proyecto así', en: 'I want a project like this' })} →</Button>
          <div className="mt-10 pt-8 border-t" style={{ borderColor: 'var(--border-soft)' }}>
            <span className="text-xs uppercase tracking-[0.16em] text-sand-300">{tr({ es: 'Siguiente proyecto', en: 'Next project' })}</span>
            <Link href={`/proyectos/${next.slug}`} className="block mt-2 no-underline font-display text-2xl font-semibold text-sand-100 hover:text-gold-400 transition-colors">
              {tr(next.title)} →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
