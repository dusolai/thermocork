import type { IconName } from '@/components/ui/Icon'

export type Bi = { es: string; en: string }

export const CONTACT = {
  phone: '646 18 58 03',
  phoneIntl: '+34646185803',
  email: 'info@thermocork.es',
  whatsapp:
    'https://wa.me/34646185803?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Thermocork',
  address: { es: 'Paseo Industrial Calle 8\n31592 Cintruénigo, Navarra, España', en: 'Paseo Industrial Calle 8\n31592 Cintruénigo, Navarra, Spain' },
  hours: { es: 'Lun – Vie · 8:00 – 18:00', en: 'Mon – Fri · 8:00 – 18:00' },
}

export const NAV: { href: string; label: Bi }[] = [
  { href: '/productos', label: { es: 'Productos', en: 'Products' } },
  { href: '/aplicaciones', label: { es: 'Aplicaciones', en: 'Applications' } },
  { href: '/proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { href: '/sobre-nosotros', label: { es: 'Empresa', en: 'Company' } },
  { href: '/formacion', label: { es: 'Formación', en: 'Training' } },
  { href: '/ayudas', label: { es: 'Ayudas', en: 'Grants' } },
]

// The 12 official product properties, each tied to a real brand icon.
export const PROPERTIES: { icon: IconName; name: Bi; desc: Bi }[] = [
  { icon: 'thermal', name: { es: 'Aislamiento térmico', en: 'Thermal insulation' }, desc: { es: 'Elimina puentes térmicos: fresco en verano, cálido en invierno.', en: 'Eliminates thermal bridges: cool in summer, warm in winter.' } },
  { icon: 'acoustic', name: { es: 'Aislamiento acústico', en: 'Acoustic insulation' }, desc: { es: 'Absorbe ruido aéreo, de impacto y reverberación.', en: 'Absorbs airborne, impact noise and reverberation.' } },
  { icon: 'waterproof', name: { es: 'Impermeable', en: 'Waterproof' }, desc: { es: 'Membrana continua sin juntas que elimina filtraciones.', en: 'Continuous jointless membrane that eliminates leaks.' } },
  { icon: 'breathable', name: { es: 'Transpirable', en: 'Breathable' }, desc: { es: 'Deja respirar al soporte y evita condensaciones.', en: 'Lets the substrate breathe and prevents condensation.' } },
  { icon: 'fire', name: { es: 'Resistente al fuego', en: 'Fire resistant' }, desc: { es: 'Ignífugo por naturaleza, no propaga la llama.', en: 'Naturally fire-resistant, does not spread flames.' } },
  { icon: 'elastic', name: { es: 'Elástico', en: 'Elastic' }, desc: { es: 'Acompaña los movimientos del edificio sin fisurarse.', en: 'Follows building movements without cracking.' } },
  { icon: 'ecologic', name: { es: 'Ecológico', en: 'Ecological' }, desc: { es: 'Renovable, base acuosa, huella de carbono negativa.', en: 'Renewable, water-based, negative carbon footprint.' } },
  { icon: 'non-toxic', name: { es: 'No tóxico', en: 'Non-toxic' }, desc: { es: 'Sin disolventes ni compuestos orgánicos volátiles.', en: 'Solvent-free, no volatile organic compounds.' } },
  { icon: 'conductivity', name: { es: 'Baja conductividad', en: 'Low conductivity' }, desc: { es: 'Coeficiente de conductividad térmica muy reducido.', en: 'Very low thermal conductivity coefficient.' } },
  { icon: 'fast', name: { es: 'Aplicación rápida', en: 'Fast application' }, desc: { es: 'Hasta 500 m² al día, listo en 24-48 h.', en: 'Up to 500 m² per day, ready in 24-48 h.' } },
  { icon: 'decorative', name: { es: 'Decorativo', en: 'Decorative' }, desc: { es: '20 colores y 2 texturas, fabricación RAL/NCS a medida.', en: '20 colours and 2 textures, custom RAL/NCS manufacturing.' } },
  { icon: 'versatile', name: { es: 'Versátil', en: 'Versatile' }, desc: { es: 'Adhiere sobre ladrillo, hormigón, madera, metal y curvas.', en: 'Adheres to brick, concrete, wood, metal and curves.' } },
]

// Real images per application sector id (overrides the placeholder URLs in i18n)
export const APP_IMAGES: Record<string, string> = {
  facades: '/img/facade-louvers.webp',
  roofs: '/img/roof-aerial.webp',
  interiors: '/img/interior-atrium.webp',
  commercial: '/img/interior-lobby.webp',
  vehicles: '/img/cork-wall.webp',
}

export const FAQ: { q: Bi; a: Bi }[] = [
  {
    q: { es: '¿Hay que hacer obra o retirar el revestimiento existente?', en: 'Do you need building works or to remove the existing finish?' },
    a: { es: 'No. Thermocork se proyecta directamente sobre el soporte existente (ladrillo, hormigón, madera, metal). Sin escombros, sin polvo y sin interrumpir tu vida cotidiana.', en: 'No. Thermocork is sprayed directly onto the existing substrate (brick, concrete, wood, metal). No debris, no dust and no disruption to your daily life.' },
  },
  {
    q: { es: '¿Cuánto dura la aplicación?', en: 'How long does the application take?' },
    a: { es: 'La mayoría de proyectos estándar se completan en un solo día. El equipo cubre hasta 500 m² diarios y el producto está seco y funcional en 24-48 horas.', en: 'Most standard projects are completed in a single day. The team covers up to 500 m² per day and the product is dry and functional within 24-48 hours.' },
  },
  {
    q: { es: '¿Es realmente impermeable?', en: 'Is it really waterproof?' },
    a: { es: 'Sí. El producto TCI crea una membrana continua, elástica y sin juntas que elimina goteras de forma definitiva, incluso en climas extremos como el atlántico.', en: 'Yes. The TCI product creates a continuous, elastic, jointless membrane that permanently eliminates leaks, even in extreme climates such as the Atlantic.' },
  },
  {
    q: { es: '¿Qué garantía tiene?', en: 'What warranty does it carry?' },
    a: { es: 'Las aplicaciones realizadas por aplicadores certificados cuentan con 10 años de garantía oficial, y el producto mantiene sus prestaciones más de 25 años sin mantenimiento.', en: 'Applications by certified applicators carry a 10-year official warranty, and the product retains its performance for over 25 years with no maintenance.' },
  },
  {
    q: { es: '¿Es subvencionable?', en: 'Is it eligible for grants?' },
    a: { es: 'En la mayoría de los casos, sí. Como solución certificada de aislamiento ecológico es elegible para los fondos Next Generation, el PREE y deducciones de IRPF de hasta el 60%.', en: 'In most cases, yes. As a certified ecological insulation solution it is eligible for Next Generation funds, the PREE programme and income-tax deductions of up to 60%.' },
  },
  {
    q: { es: '¿Puedo elegir el color y el acabado?', en: 'Can I choose the colour and finish?' },
    a: { es: 'Sí. Thermocork está disponible en 20 colores y 2 texturas (fina y gruesa), con posibilidad de fabricación a medida en cartas RAL y NCS.', en: 'Yes. Thermocork is available in 20 colours and 2 textures (fine and coarse), with custom manufacturing in RAL and NCS colour charts.' },
  },
]
