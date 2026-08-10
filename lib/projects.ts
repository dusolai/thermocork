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
  /** Texto redactado a partir de la fotografía, pendiente de validar por Thermocork. */
  draft?: true
}

// El orden de este array manda: la portada muestra los tres primeros y
// /proyectos los muestra todos. Sigue el orden del documento de fotos (4.x).
export const projects: Project[] = [
  {
    slug: 'infinito-delicias',
    sector: { es: 'Arquitectura residencial', en: 'Residential architecture' },
    location: { es: 'Infinito Delicias · Madrid', en: 'Infinito Delicias · Madrid' },
    title: { es: 'Corcho proyectado en la fachada de Infinito Delicias', en: 'Sprayed cork on the Infinito Delicias facade' },
    summary: {
      es: 'Un edificio de vivienda con estructura de madera vista que confía su envolvente al corcho proyectado.',
      en: 'A timber-framed residential building that entrusts its envelope to sprayed cork.',
    },
    challenge: {
      es: 'Una envolvente de geometría compleja, con celosía de madera y numerosos encuentros, en la que un aislamiento por paneles habría multiplicado los cortes, las juntas y los puentes térmicos.',
      en: 'A complex building envelope, with a timber lattice and countless junctions, where panel insulation would have multiplied cuts, joints and thermal bridges.',
    },
    solution: {
      es: 'Proyección de Thermocork sobre el soporte para generar una capa continua que se adapta a la geometría del edificio sin juntas ni despieces, respetando la madera vista del proyecto.',
      en: 'Thermocork sprayed onto the substrate to create a continuous layer that adapts to the building geometry with no joints or panel layout, respecting the project\'s exposed timber.',
    },
    result: {
      es: 'Una envolvente continua, transpirable y sin puentes térmicos, integrada en el lenguaje material del edificio.',
      en: 'A continuous, breathable envelope with no thermal bridges, integrated into the building\'s material language.',
    },
    product: 'F01',
    cover: '/img/real/proy-infinito-delicias.webp',
    gallery: ['/img/real/proy-infinito-delicias.webp', '/img/real/proy-infinito-delicias-2.webp', '/img/real/proy-infinito-delicias-3.webp', '/img/real/proy-infinito-delicias-axo.webp'],
    metrics: [
      { value: '0', label: { es: 'Demolición', en: 'Demolition' } },
      { value: '100%', label: { es: 'Continuo, sin juntas', en: 'Continuous, jointless' } },
      { value: '25+', label: { es: 'Años de durabilidad', en: 'Years durability' } },
    ],
    draft: true,
  },
  {
    slug: 'ciecem',
    sector: { es: 'Equipamiento público', en: 'Public facility' },
    location: { es: 'CIECEM · Huelva', en: 'CIECEM · Huelva' },
    title: { es: 'Envolvente de corcho en el CIECEM', en: 'Cork envelope at CIECEM' },
    summary: {
      es: 'El Centro Internacional de Estudios y Convenciones Ecológicas y Medioambientales, revestido con un material coherente con lo que el edificio representa.',
      en: 'The International Centre for Ecological and Environmental Studies and Conventions, clad in a material consistent with what the building stands for.',
    },
    challenge: {
      es: 'Un equipamiento de referencia medioambiental necesitaba una solución de aislamiento y acabado coherente con su discurso: renovable, sin disolventes y de baja huella de carbono.',
      en: 'A landmark environmental facility needed an insulation and finish solution consistent with its message: renewable, solvent-free and low carbon footprint.',
    },
    solution: {
      es: 'Aplicación de Thermocork sobre la envolvente del centro, integrada en su entorno natural y con acabado en tonos tierra a medida.',
      en: 'Thermocork applied over the centre\'s envelope, integrated into its natural surroundings with a bespoke earth-tone finish.',
    },
    result: {
      es: 'Aislamiento térmico y acústico con un material 100% renovable y de base acuosa, en línea con la vocación medioambiental del edificio.',
      en: 'Thermal and acoustic insulation with a 100% renewable, water-based material, in line with the building\'s environmental mission.',
    },
    product: 'F01',
    cover: '/img/real/proy-ciecem.webp',
    gallery: ['/img/real/proy-ciecem.webp', '/img/real/sector-fachadas.webp'],
    metrics: [
      { value: '100%', label: { es: 'Base acuosa', en: 'Water-based' } },
      { value: '0', label: { es: 'Disolventes', en: 'Solvents' } },
      { value: '25+', label: { es: 'Años de durabilidad', en: 'Years durability' } },
    ],
    draft: true,
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
    cover: '/img/real/proy-ibiza-techo-frio.webp',
    video: { src: '/video/ibiza-techo-frio.mp4', poster: '/video/ibiza-techo-frio.jpg' },
    gallery: ['/img/real/proy-ibiza-techo-frio.webp', '/img/real/home-app-cubiertas.webp', '/img/real/app-cubiertas.webp'],
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
    cover: '/img/real/proy-galicia-pizarra.webp',
    video: { src: '/video/galicia-pizarra.mp4', poster: '/video/galicia-pizarra.jpg' },
    gallery: ['/img/real/proy-galicia-pizarra.webp', '/img/real/proy-impermeabilizacion.webp'],
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
    cover: '/img/real/proy-demostracion-impermeabilizacion.webp',
    video: { src: '/video/corcho-impermeable.mp4', poster: '/video/corcho-impermeable.jpg' },
    gallery: ['/img/real/proy-demostracion-impermeabilizacion.webp', '/img/real/proy-impermeabilizacion.webp'],
    metrics: [
      { value: '100%', label: { es: 'Impermeable', en: 'Waterproof' } },
      { value: '1', label: { es: 'Sola aplicación', en: 'Single application' } },
      { value: '0', label: { es: 'Disolventes', en: 'Solvents' } },
    ],
  },
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
    cover: '/img/real/proy-retail.webp',
    video: { src: '/video/restaurante-madrid.mp4', poster: '/video/restaurante-madrid.jpg' },
    gallery: ['/img/real/proy-retail.webp', '/img/real/app-comercial.webp', '/img/real/sector-comercial.webp', '/img/real/sector-comercial-detalle.webp'],
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
    cover: '/img/real/proy-cool-roof.webp',
    video: { src: '/video/nave-industrial.mp4', poster: '/video/nave-industrial.jpg' },
    gallery: ['/img/real/proy-cool-roof.webp', '/img/real/proy-industrial.webp', '/img/real/proy-cubiertas.webp', '/img/real/sector-cubiertas.webp'],
    metrics: [
      { value: '86%', label: { es: 'Reflexión solar', en: 'Solar reflectance' } },
      { value: '0.81', label: { es: 'Emisividad', en: 'Emissivity' } },
      { value: '500', label: { es: 'm² al día', en: 'm² per day' } },
    ],
  },
  {
    slug: 'residencial',
    sector: { es: 'Residencial', en: 'Residential' },
    location: { es: 'Bloque de viviendas', en: 'Apartment block' },
    title: { es: 'Rehabilitación energética de un bloque de viviendas', en: 'Energy retrofit of an apartment block' },
    summary: {
      es: 'Una fachada de bloque residencial aislada por el exterior sin andamiar meses ni vaciar las viviendas.',
      en: 'A residential block facade insulated from the outside without months of scaffolding or emptying the homes.',
    },
    challenge: {
      es: 'Un edificio de viviendas con la fachada degradada y sin aislamiento continuo: pérdidas térmicas, puentes térmicos en frentes de forjado y una intervención que no podía obligar a los vecinos a dejar sus casas.',
      en: 'A residential building with a degraded, poorly insulated facade: heat losses, thermal bridges at slab edges, and a refurbishment that could not force residents out of their homes.',
    },
    solution: {
      es: 'Proyección de Thermocork sobre la fachada existente, sin picar ni retirar el revestimiento anterior, resolviendo de una sola pasada aislamiento, impermeabilización y acabado decorativo.',
      en: 'Thermocork sprayed over the existing facade, with no chipping or removal of the previous finish, solving insulation, waterproofing and decorative finish in a single pass.',
    },
    result: {
      es: 'Envolvente continua sin puentes térmicos, fachada renovada y vecinos en sus casas durante toda la obra.',
      en: 'A continuous envelope with no thermal bridges, a renewed facade and residents at home throughout the works.',
    },
    product: 'F01',
    cover: '/img/real/proy-residencial.webp',
    gallery: ['/img/real/proy-residencial.webp', '/img/real/residencial-vivienda.webp', '/img/real/sector-fachadas.webp'],
    metrics: [
      { value: '0', label: { es: 'Puentes térmicos', en: 'Thermal bridges' } },
      { value: '0', label: { es: 'Demolición', en: 'Demolition' } },
      { value: '10', label: { es: 'Años de garantía', en: 'Years warranty' } },
    ],
    draft: true,
  },
  {
    slug: 'terminacion-sate',
    sector: { es: 'Terminación SATE', en: 'ETICS finish' },
    location: { es: 'Vivienda unifamiliar', en: 'Single-family home' },
    title: { es: 'Thermocork como acabado de un sistema SATE', en: 'Thermocork as the finish of an ETICS system' },
    summary: {
      es: 'El corcho proyectado sustituye al mortero acrílico como capa de terminación del SATE, sumando aislamiento y elasticidad.',
      en: 'Sprayed cork replaces acrylic render as the ETICS top coat, adding insulation and elasticity.',
    },
    challenge: {
      es: 'Los acabados tradicionales de un SATE son rígidos y tienden a fisurar con los movimientos del soporte, y no aportan aislamiento adicional a la solución.',
      en: 'Traditional ETICS finishes are rigid, tend to crack with substrate movement and add no further insulation to the system.',
    },
    solution: {
      es: 'Aplicación de Thermocork como capa de terminación sobre el sistema SATE, creando un acabado continuo, elástico y transpirable que resuelve encuentros y jambas sin juntas.',
      en: 'Thermocork applied as the top coat over the ETICS system, creating a continuous, elastic and breathable finish that resolves junctions and reveals without joints.',
    },
    result: {
      es: 'Un SATE con acabado elástico que acompaña los movimientos del edificio, con aislamiento añadido y color a medida en carta RAL o NCS.',
      en: 'An ETICS system with an elastic finish that follows building movements, with added insulation and bespoke RAL or NCS colour.',
    },
    product: 'F01',
    cover: '/img/real/proy-sate.webp',
    gallery: ['/img/real/proy-sate.webp', '/img/real/sector-fachadas.webp'],
    metrics: [
      { value: '0', label: { es: 'Juntas', en: 'Joints' } },
      { value: '1', label: { es: 'Día de aplicación', en: 'Application day' } },
      { value: '10', label: { es: 'Años de garantía', en: 'Years warranty' } },
    ],
    draft: true,
  },
  {
    slug: 'amianto',
    sector: { es: 'Cubiertas de fibrocemento', en: 'Fibre-cement roofs' },
    location: { es: 'Cubierta de fibrocemento', en: 'Fibre-cement roof' },
    title: { es: 'Encapsulado de una cubierta de fibrocemento', en: 'Encapsulation of a fibre-cement roof' },
    summary: {
      es: 'Una cubierta de fibrocemento sellada con una membrana continua de corcho, sin desmontarla.',
      en: 'A fibre-cement roof sealed with a continuous cork membrane, without dismantling it.',
    },
    challenge: {
      es: 'Las cubiertas de fibrocemento envejecidas se degradan y su retirada es una operación costosa y sujeta a normativa específica.',
      en: 'Aged fibre-cement roofs deteriorate, and removing them is a costly operation subject to specific regulations.',
    },
    solution: {
      es: 'Proyección de Thermocork sobre la cubierta como capa continua y elástica que sella la superficie y suma aislamiento térmico y protección frente al agua.',
      en: 'Thermocork sprayed over the roof as a continuous, elastic layer that seals the surface and adds thermal insulation and water protection.',
    },
    result: {
      es: 'Cubierta sellada, aislada e impermeabilizada, con una sola intervención y sin retirar el soporte existente.',
      en: 'A sealed, insulated and waterproofed roof, in a single intervention and without removing the existing substrate.',
    },
    product: 'TCI',
    cover: '/img/real/proy-amianto.webp',
    gallery: ['/img/real/proy-amianto.webp', '/img/real/sector-cubiertas.webp'],
    metrics: [
      { value: '0', label: { es: 'Retirada de cubierta', en: 'Roof removal' } },
      { value: '100%', label: { es: 'Superficie sellada', en: 'Surface sealed' } },
      { value: '25+', label: { es: 'Años de durabilidad', en: 'Years durability' } },
    ],
    draft: true,
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
