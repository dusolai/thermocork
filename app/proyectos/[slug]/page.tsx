import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import ProjectDetail from '@/components/sections/ProjectDetail'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug)
  if (!p) return {}
  return {
    title: p.title.es,
    description: p.summary.es,
    openGraph: { title: p.title.es, description: p.summary.es, images: [{ url: p.cover }] },
  }
}

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  if (!getProject(params.slug)) notFound()
  return <ProjectDetail slug={params.slug} />
}
