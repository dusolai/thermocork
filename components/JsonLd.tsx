// Structured data (schema.org) for SEO / rich results.
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://thermocork.es/#org',
        name: 'Thermocork',
        legalName: 'THERMOCORK, S.L.',
        taxID: 'B71476584',
        vatID: 'ESB71476584',
        url: 'https://thermocork.es',
        logo: 'https://thermocork.es/brand/logos/logo-largo.png',
        description:
          'Fabricante de aislamiento térmico, acústico e impermeabilizante de corcho natural proyectado.',
        sameAs: [],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://thermocork.es/#business',
        name: 'Thermocork',
        image: 'https://thermocork.es/brand/logos/logo-hexagono.png',
        url: 'https://thermocork.es',
        telephone: '+34646185803',
        email: 'info@thermocork.es',
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Polígono Industrial Ombatillo, Calle B, Nave 9',
          addressLocality: 'Corella',
          addressRegion: 'Navarra',
          postalCode: '31591',
          addressCountry: 'ES',
        },
        areaServed: ['ES', 'PT', 'FR', 'DE', 'GB', 'IT', 'BE', 'NL', 'AT'],
        openingHours: 'Mo-Fr 08:00-18:00',
      },
      {
        '@type': 'Product',
        name: 'Thermocork — Corcho Natural Proyectado',
        brand: { '@id': 'https://thermocork.es/#org' },
        description:
          'Revestimiento de corcho natural proyectado: aislamiento térmico, acústico, impermeabilización, ignífugo y ecológico en una sola aplicación.',
        material: 'Corcho natural de alcornoque',
        category: 'Aislamiento de la edificación',
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
