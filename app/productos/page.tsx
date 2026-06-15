import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Products from '@/components/sections/Products'
import Properties from '@/components/sections/Properties'
import ProductDetails from '@/components/sections/ProductDetails'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Productos · Corcho proyectado F01, G01 y TCI',
  description:
    'La gama Thermocork: Textura Fina (F01), Textura Gruesa (G01) e Impermeabilizante (TCI). Aislamiento térmico, acústico e impermeabilización de corcho natural proyectado.',
}

export default function ProductosPage() {
  return (
    <main>
      <PageHero
        tag={{ es: 'Línea de productos', en: 'Product line' }}
        title={{ es: 'Corcho proyectado para', en: 'Projected cork for' }}
        accent={{ es: 'cada superficie.', en: 'every surface.' }}
        sub={{ es: 'Tres formulaciones especializadas fabricadas con corcho natural de alcornoque, sin disolventes, con doce propiedades en una sola aplicación.', en: 'Three specialised formulations made with natural cork oak, solvent-free, with twelve properties in a single application.' }}
        image="/img/facade-louvers.webp"
      />
      <Products withCta={false} />
      <Properties />
      <ProductDetails />
      <CtaBand />
    </main>
  )
}
