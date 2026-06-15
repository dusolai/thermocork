import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const SITE = 'https://thermocork.es'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/productos', '/aplicaciones', '/proyectos', '/sobre-nosotros', '/formacion', '/ayudas', '/contacto']
  const now = new Date()

  const staticEntries = routes.map((r) => ({
    url: `${SITE}${r}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.8,
  }))

  const projectEntries = projects.map((p) => ({
    url: `${SITE}/proyectos/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...projectEntries]
}
