// Genera páginas de redirección para las URLs del WordPress anterior de
// thermocork.es. GitHub Pages no soporta reglas de servidor (_redirects es
// solo de Cloudflare), así que cada URL antigua se publica como una página
// mínima que redirige: canonical para Google, meta refresh y replace() para
// el visitante. Ejecutar con: node scripts/gen-redirects.mjs
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const MAP = {
  '/soluciones': '/aplicaciones/',
  '/soluciones/fachadas': '/aplicaciones/',
  '/soluciones/tejados': '/aplicaciones/',
  '/soluciones/decoracion': '/aplicaciones/',
  '/soluciones/suelos': '/aplicaciones/',
  '/soluciones/aplicaciones-especiales': '/aplicaciones/',
  '/soluciones/encapsulado-amianto': '/proyectos/amianto/',
  '/techo-frio': '/proyectos/ibiza-techo-frio/',
  '/terminacion-sate': '/proyectos/terminacion-sate/',
  '/residencial': '/proyectos/residencial/',
  '/retail': '/proyectos/restaurante-madrid/',
  '/retail/aislamiento-tiendas': '/aplicaciones/',
  '/retail/aislamiento-hoteles': '/aplicaciones/',
  '/retail/aislamiento-oficinas': '/aplicaciones/',
  '/retail/aislamiento-restaurantes': '/proyectos/restaurante-madrid/',
  '/productos/mortero-corcho': '/productos/',
  '/productos/f01': '/productos/',
  '/productos/g01': '/productos/',
  '/productos/tci': '/productos/',
  '/cursos': '/formacion/',
  '/renovables': '/sobre-nosotros/',
  '/mapa-web': '/',
  '/aviso-legal': '/legal/aviso-legal/',
  '/politica-de-cookies': '/legal/cookies/',
  '/politica-de-privacidad': '/legal/privacidad/',
  '/declaracion-de-accesibilidad': '/legal/aviso-legal/',
  '/blog': '/proyectos/',
  '/thermocork-cataluna-impermeabilizacion': '/proyectos/galicia-pizarra/',
  '/thermocork-catalunya': '/proyectos/',
  '/thermcork-cataluna-lleida': '/proyectos/',
  '/thermocork-aragon-teruel': '/proyectos/',
  '/thermocork-aragon-alfamen': '/proyectos/',
  '/thermocork-andalucia-cadiz-espectacular-trabajo': '/proyectos/',
  '/thermocork-galicia': '/proyectos/galicia-pizarra/',
  '/thermocork-internacional': '/sobre-nosotros/',
  '/thermocork-internacional-aplicacion-corcho-proyectado': '/sobre-nosotros/',
  '/mejora-tu-aislamiento-termico-con-el-revestimiento-de-corcho-thermocork': '/productos/',
  '/corcho-thermocork-como-revestimiento-acustico-y-termico': '/productos/',
  '/ecologico-energeticamente-eficiente-el-corcho-proyectado-thermocork-es-respetuosp-con-el-medio-ambiente': '/sobre-nosotros/',
}

const SITE = 'https://thermocork.es'
const page = (to) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Redirigiendo…</title>
<link rel="canonical" href="${SITE}${to}">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)})</script>
</head>
<body><p>Esta página se ha movido a <a href="${to}">${SITE}${to}</a>.</p></body>
</html>
`

let n = 0
for (const [from, to] of Object.entries(MAP)) {
  const file = join('public', from.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page(to))
  n++
}
console.log(`${n} páginas de redirección generadas en public/`)
