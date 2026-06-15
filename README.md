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
# Formulario de contacto (Web3Forms — gratis, sin backend). Sin esta clave,
# el formulario hace fallback a un email mailto automáticamente.
NEXT_PUBLIC_WEB3FORMS_KEY=tu_access_key

# Solo si se despliega como "project site" en GitHub Pages (p. ej. /thermocork).
# Déjalo vacío para dominio propio (thermocork.es) o Vercel.
NEXT_PUBLIC_BASE_PATH=
```

## Despliegue

- **Dominio propio / Vercel:** sin configuración. `npm run build` y publica `out/`.
- **GitHub Pages (project site):** define `NEXT_PUBLIC_BASE_PATH=/nombre-repo` antes del build.

## Pendiente de aportar por el cliente

- Clave de Web3Forms (o EmailJS) para recibir los leads del formulario.
- Datos registrales reales (CIF, razón social) para las páginas legales.
