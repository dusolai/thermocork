export type Bi = { es: string; en: string }

export interface Project {
  slug: string
  sector: Bi
  location: Bi
  title: Bi
  summary: Bi
  challenge: Bi
  solution: Bi
  result: Bi
  product: string // F01 | G01 | TCI
  cover: string // /img/...webp
  video?: { src: string; poster: string }
  gallery: string[]
  metrics: { value: string; label: Bi }[]
}

export const projects: Project[] = [
  {
    slug: 'restaurante-madrid',
    sector: { es: 'Hostelería', en: 'Hospitality' },
    location: { es: 'Restaurante · Madrid', en: 'Restaurant · Madrid' },
    title: { es: 'Confort acústico premium en un restaurante de Madrid', en: 'Premium acoustic comfort in a Madrid restaurant' },
    summary: {
      es: 'Un restaurante con problemas de reverberación recuperó la conversación tranquila sin cerrar un solo servicio.',
      en: 'A restaurant plagued by reverberation regained calm conversation without closing for a single service.',
    },
    challenge: {
      es: 'El local sufría un exceso de ruido aéreo y reverberación que dificultaba la conversación y devaluaba la experiencia del cliente. El reto: intervenir sin parar la actividad ni alterar la estética del interiorismo.',
      en: 'The venue suffered from excessive airborne noise and reverberation that made conversation difficult and devalued the customer experience. The challenge: intervene without stopping operations or altering the interior design.',
    },
    solution: {
      es: 'Aplicación de Thermocork en techos y paramentos mediante proyección, en horario nocturno. El acabado de corcho natural absorbe el ruido y aporta calidez visual, integrándose con el diseño existente.',
      en: 'Thermocork sprayed onto ceilings and walls during night hours. The natural cork finish absorbs noise and adds visual warmth, blending with the existing design.',
    },
    result: {
      es: 'Reducción acústica perceptible desde el primer servicio, sin obras invasivas ni días de cierre. El acabado decorativo se convirtió además en parte de la identidad del local.',
      en: 'Perceptible acoustic reduction from the very first service, with no invasive works or closure days. The decorative finish also became part of the venue\'s identity.',
    },
    product: 'F01',
    cover: '/img/interior-restaurant.webp',
    video: { src: '/video/restaurante-madrid.mp4', poster: '/video/restaurante-madrid.jpg' },
    gallery: ['/img/interior-restaurant.webp', '/img/interior-columns.webp', '/img/interior-hall.webp', '/img/interior-warm.webp'],
    metrics: [
      { value: '38 dB', label: { es: 'Absorción de ruido', en: 'Noise absorption' } },
      { value: '0', label: { es: 'Días de cierre', en: 'Closure days' } },
      { value: '1', label: { es: 'Día de aplicación', en: 'Application day' } },
    ],
  },
  {
    slug: 'nave-industrial-madrid',
    sector: { es: 'Industrial · Cool Roof', en: 'Industrial · Cool Roof' },
    location: { es: 'Nave industrial · Madrid', en: 'Industrial unit · Madrid' },
    title: { es: 'Techo frío en una nave industrial de Madrid', en: 'Cool roof on a Madrid industrial unit' },
    summary: {
      es: 'Una gran cubierta industrial convertida en "cool roof" de alta reflexión solar, aplicada a ritmo de 500 m² al día.',
      en: 'A large industrial roof turned into a high-reflectivity cool roof, applied at 500 m² per day.',
    },
    challenge: {
      es: 'La cubierta acumulaba calor en verano, disparando la temperatura interior y el coste de refrigeración de la nave. Era necesaria una solución de gran superficie, rápida y sin retirar la cubierta existente.',
      en: 'The roof accumulated heat in summer, driving up indoor temperature and the building\'s cooling costs. A fast, large-area solution that did not require removing the existing roof was needed.',
    },
    solution: {
      es: 'Proyección de Thermocork como membrana "cool roof" sobre la cubierta existente, con alta reflexión solar y emisividad. El equipo cubrió grandes superficies a un ritmo de 500 m² diarios.',
      en: 'Thermocork sprayed as a cool-roof membrane over the existing roof, with high solar reflectance and emissivity. The team covered large areas at 500 m² per day.',
    },
    result: {
      es: '86% de reflexión solar y una emisividad de 0,81 que rebajan drásticamente la carga térmica de la cubierta y el consumo de climatización en verano.',
      en: '86% solar reflectance and 0.81 emissivity that drastically cut the roof\'s thermal load and summer cooling consumption.',
    },
    product: 'TCI',
    cover: '/img/roof-aerial.webp',
    video: { src: '/video/nave-industrial.mp4', poster: '/video/nave-industrial.jpg' },
    gallery: ['/img/roof-aerial.webp', '/img/roof-path.webp', '/img/coating-path.webp', '/img/industrial.webp'],
    metrics: [
      { value: '86%', label: { es: 'Reflexión solar', en: 'Solar reflectance' } },
      { value: '0.81', label: { es: 'Emisividad', en: 'Emissivity' } },
      { value: '500', label: { es: 'm² al día', en: 'm² per day' } },
    ],
  },
  {
    slug: 'ibiza-techo-frio',
    sector: { es: 'Cubiertas · Residencial', en: 'Roofs · Residential' },
    location: { es: 'Vivienda · Ibiza', en: 'Property · Ibiza' },
    title: { es: 'Techo frío en una cubierta de Ibiza', en: 'Cool roof on an Ibiza property' },
    summary: {
      es: 'Aislamiento de cubierta frente al calor mediterráneo, manteniendo la estética y sin retirar el tejado existente.',
      en: 'Roof insulation against Mediterranean heat, preserving aesthetics and keeping the existing roof in place.',
    },
    challenge: {
      es: 'El sobrecalentamiento estival de la cubierta hacía inhabitables las estancias superiores y obligaba a un uso intensivo del aire acondicionado.',
      en: 'Summer overheating of the roof made the upper rooms uncomfortable and forced intensive air-conditioning use.',
    },
    solution: {
      es: 'Aplicación de Thermocork sobre la cubierta para crear una barrera térmica continua y reflectante, sin juntas y adaptada a la geometría del tejado.',
      en: 'Thermocork applied over the roof to create a continuous, reflective thermal barrier, jointless and adapted to the roof geometry.',
    },
    result: {
      es: 'Descenso notable de la temperatura interior en verano y reducción del uso de climatización, conservando la imagen original de la vivienda.',
      en: 'A marked drop in indoor summer temperature and reduced air-conditioning use, while preserving the property\'s original look.',
    },
    product: 'TCI',
    cover: '/img/villa-pool.webp',
    video: { src: '/video/ibiza-techo-frio.mp4', poster: '/video/ibiza-techo-frio.jpg' },
    gallery: ['/img/villa-pool.webp', '/img/villa-aerial.webp', '/img/roof-pool.webp', '/img/facade-landscape.webp'],
    metrics: [
      { value: '-15°C', label: { es: 'En cubierta (verano)', en: 'On roof (summer)' } },
      { value: '0', label: { es: 'Demolición', en: 'Demolition' } },
      { value: '100%', label: { es: 'Continuo, sin juntas', en: 'Continuous, jointless' } },
    ],
  },
  {
    slug: 'galicia-pizarra',
    sector: { es: 'Impermeabilización', en: 'Waterproofing' },
    location: { es: 'Cubierta de pizarra · Galicia', en: 'Slate roof · Galicia' },
    title: { es: 'Impermeabilización de cubierta de pizarra en Galicia', en: 'Slate roof waterproofing in Galicia' },
    summary: {
      es: 'Una cubierta de pizarra en clima extremo, sellada con una membrana elástica continua que elimina las goteras.',
      en: 'A slate roof in an extreme climate, sealed with a continuous elastic membrane that eliminates leaks.',
    },
    challenge: {
      es: 'El clima atlántico, con lluvia intensa y constante, generaba filtraciones recurrentes en una cubierta de pizarra difícil de sellar con sistemas tradicionales.',
      en: 'The Atlantic climate, with heavy and constant rain, caused recurring leaks on a slate roof that was hard to seal with traditional systems.',
    },
    solution: {
      es: 'Aplicación del producto impermeabilizante TCI, que crea una membrana continua, elástica y sin juntas, capaz de seguir los movimientos del soporte.',
      en: 'Application of the TCI waterproofing product, creating a continuous, elastic, jointless membrane that follows the substrate\'s movements.',
    },
    result: {
      es: 'Fin definitivo de las filtraciones y una protección duradera frente a uno de los climas más exigentes de la península.',
      en: 'A permanent end to leaks and durable protection against one of the most demanding climates on the peninsula.',
    },
    product: 'TCI',
    cover: '/img/cork-walkway.webp',
    video: { src: '/video/galicia-pizarra.mp4', poster: '/video/galicia-pizarra.jpg' },
    gallery: ['/img/cork-walkway.webp', '/img/roof-slats.webp', '/img/cork-terrace.webp', '/img/facade-detail.webp'],
    metrics: [
      { value: '100%', label: { es: 'Fin de goteras', en: 'Leaks eliminated' } },
      { value: '0', label: { es: 'Juntas', en: 'Joints' } },
      { value: '25+', label: { es: 'Años de durabilidad', en: 'Years durability' } },
    ],
  },
  {
    slug: 'corcho-impermeable',
    sector: { es: 'Demostración técnica', en: 'Technical demo' },
    location: { es: 'En obra', en: 'On site' },
    title: { es: 'Corcho impermeable: la demostración en obra', en: 'Waterproof cork: the on-site demonstration' },
    summary: {
      es: 'La prueba que mejor explica Thermocork: el agua resbala sobre una membrana de corcho continua y elástica.',
      en: 'The test that best explains Thermocork: water rolls off a continuous, elastic cork membrane.',
    },
    challenge: {
      es: 'Demostrar de forma tangible que un material natural como el corcho puede comportarse como una membrana impermeable de alto rendimiento.',
      en: 'To tangibly prove that a natural material such as cork can behave like a high-performance waterproof membrane.',
    },
    solution: {
      es: 'Aplicación de Thermocork sobre el soporte y prueba directa de impermeabilidad en obra, mostrando cómo el agua no penetra la capa proyectada.',
      en: 'Thermocork applied to the substrate and a direct on-site waterproofing test, showing how water does not penetrate the sprayed layer.',
    },
    result: {
      es: 'Una membrana continua, sin juntas y elástica que combina aislamiento e impermeabilización en una sola aplicación.',
      en: 'A continuous, jointless, elastic membrane that combines insulation and waterproofing in a single application.',
    },
    product: 'TCI',
    cover: '/img/cork-wall.webp',
    video: { src: '/video/corcho-impermeable.mp4', poster: '/video/corcho-impermeable.jpg' },
    gallery: ['/img/cork-wall.webp', '/img/building-modern.webp', '/img/facade-louvers.webp'],
    metrics: [
      { value: '100%', label: { es: 'Impermeable', en: 'Waterproof' } },
      { value: '1', label: { es: 'Sola aplicación', en: 'Single application' } },
      { value: '0', label: { es: 'Disolventes', en: 'Solvents' } },
    ],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
