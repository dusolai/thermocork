# THERMOCORK — Sitio web premium

Sitio multipágina de alto standing para THERMOCORK (aislamiento de corcho natural proyectado), construido con identidad de marca real y fotografía/vídeo de obras reales.

## Stack

- **Next.js 14** (App Router, `output: 'export'` → sitio 100% estático)
- **TypeScript** + **Tailwind CSS** con design tokens de marca
- **GSAP + ScrollTrigger** (parallax y reveals), **Lenis** (scroll suave), **Framer Motion** (transiciones)
- Tipografía editorial: **Fraunces** (display serif) + **Inter** (sans) + **JetBrains Mono** (datos técnicos)
- Bilingüe **ES / EN** con persistencia en `localStorage`

## Arquitectura

```
app/
├── layout.tsx              Fuentes, metadata, JSON-LD, shell
├── page.tsx                Home
├── productos/              Gama F01 · G01 · TCI + propiedades + datos técnicos
├── aplicaciones/           Sectores (tabs + grid)
├── proyectos/              Índice de casos de estudio
│   └── [slug]/             Caso de estudio (foto + vídeo + métricas)
├── sobre-nosotros/         Empresa, ecología, presencia internacional
├── formacion/              Red de aplicadores certificados
├── ayudas/                 Subvenciones + calculadora de ahorro
├── contacto/               Formulario real + datos
├── legal/                  Aviso legal · Privacidad · Cookies
├── sitemap.ts / robots.ts  SEO técnico

components/
├── ui/                     Primitivas: Container, Section, SectionHeading,
│                           Button, Card, Icon (iconos oficiales), Stat, Logo, AnimateIn, StaggerList
├── sections/               Una sección por bloque (reutilizadas entre páginas)
├── Nav.tsx · JsonLd.tsx · FloatingElements.tsx

lib/
├── i18n.ts                 Textos ES/EN de las secciones base
├── site.ts                 Navegación, propiedades, FAQ, contacto, imágenes por sector
├── projects.ts             Datos de los 5 casos de estudio reales
├── legal.ts                Textos legales
└── asset.ts                Helper de rutas (soporta basePath)

public/
├── brand/                  Logos e iconos oficiales THERMOCORK
├── img/                    Fotografía real de obra (WebP optimizado)
└── video/                  Vídeos reales de proyecto (MP4 + póster)
```

## Assets reales

Toda la imaginería procede de los assets oficiales de marca y de obras reales
(curados y optimizados: ~24 MB en total). Sin imágenes de stock ni IA genérica, sin emojis.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera el sitio estático en out/
```

## Configuración (variables de entorno)

Crea `.env.local`:

```env
# Solo si se despliega como "project site" en GitHub Pages (p. ej. /thermocork).
# Déjalo vacío para dominio propio (thermocork.es) o Vercel.
NEXT_PUBLIC_BASE_PATH=
```

## Formulario de presupuesto

No hay backend: el formulario redacta la solicitud y la abre en el WhatsApp del
visitante, dirigida al número de `CONTACT.phoneIntl` (`lib/site.ts`). Lo envía el
visitante, así que la web no recoge ni guarda datos personales.

## Despliegue

thermocork.es lo sirve GitHub Pages **desde la rama `gh-pages`** (no desde
Actions). Para publicar:

1. `npm run build` (sin `NEXT_PUBLIC_BASE_PATH`).
2. Sustituir el contenido de la rama `gh-pages` por el de `out/`, conservando
   `CNAME` (thermocork.es) y `.nojekyll`, y hacer push.

El workflow `.github/workflows/deploy.yml` es del método anterior (Pages desde
Actions) y solo se lanza a mano; con Pages configurado desde rama no sirve.

## Legal

Aviso legal, privacidad y cookies están en `lib/legal.ts`; los datos del titular
(razón social, CIF, domicilio social, Registro Mercantil), en `LEGAL_ENTITY` de
`lib/site.ts`, sacados del BORME (BORME-A-2023-60-31). La política de cookies dice
que la web no usa cookies ni servicios de terceros: **si se añade analítica, un
mapa, un vídeo incrustado o fuentes externas, hay que actualizarla y poner un
aviso de consentimiento antes de publicar.**
