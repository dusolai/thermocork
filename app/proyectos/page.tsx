import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import CtaBand from '@/components/sections/CtaBand'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Proyectos · Casos de éxito reales',
  description:
    'Casos de estudio reales de Thermocork: restaurante en Madrid, nave industrial cool roof, techo frío en Ibiza, impermeabilización de pizarra en Galicia y más. Resultados medibles.',
}

export default function ProyectosPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'Casos de estudio', en: 'Case studies' }}
        title={{ es: 'Obra real,', en: 'Real projects,' }}
        accent={{ es: 'resultados reales.', en: 'real results.' }}
        sub={{ es: 'Una selección de proyectos de nuestra red de aplicadores certificados, documentados con fotografía y vídeo en obra.', en: 'A selection of projects from our certified applicator network, documented with on-site photography and video.' }}
        image="/img/roof-aerial.webp"
      />
      <FeaturedProjects limit={projects.length} compact />
      <CtaBand />
    </main>
  )
}
