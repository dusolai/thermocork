# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con **igual prioridad** (confirmado por el cliente):

1. **Particulares (B2C)** — propietarios de vivienda unifamiliar o piso que sufren frío/calor, humedades, goteras o ruido, y buscan aislar sin acometer una obra. Evalúan desde el móvil, comparan presupuestos y desconfían de las reformas invasivas.
2. **Empresas y profesionales (B2B)** — arquitectos, constructoras, industria y aplicadores. Necesitan datos técnicos, certificaciones, rendimientos y obras de referencia para especificar el producto o distribuirlo.

Los leads se separan en origen: los particulares se derivan a un aplicador certificado de su zona; las empresas se gestionan directamente (por eso el formulario pide CIF a empresas).

## Product Purpose

THERMOCORK vende e instala un **revestimiento de corcho natural proyectado** que aísla térmica y acústicamente, impermeabiliza y decora **en una sola aplicación y sin obra**. Éxito = el visitante **contacta directamente por WhatsApp o teléfono** (acción prioritaria confirmada); el formulario de presupuesto es la vía secundaria.

## Positioning

Una única capa proyectada resuelve a la vez lo que normalmente exige varios sistemas: aislamiento térmico, absorción acústica, impermeabilización, resistencia al fuego y acabado decorativo. Se aplica sobre el soporte existente (ladrillo, hormigón, madera, metal), sin escombros ni desalojo, y en geometrías curvas donde los paneles no llegan. Material renovable de base acuosa, sin disolventes.

## Operating Context

Se aplica por proyección neumática por **aplicadores certificados**: inspección → preparación del soporte (limpieza, saneamiento y consolidación) → proyección → entrega. Rinde hasta 500 m²/día y seca en un mínimo de 48 h. Se usa en fachadas y cubiertas (exterior) e interiores, espacios comerciales/industriales y vehículos (interior). La empresa forma y certifica a su propia red de aplicadores.

## Capabilities and Constraints

- Sitio **estático** Next.js 14 (`output: 'export'`) + Tailwind; se publica en GitHub Pages sirviendo la rama `gh-pages` con basePath `/thermocork`. Sin backend propio.
- **Bilingüe ES/EN** con persistencia en `localStorage`; toda cadena visible debe existir en ambos idiomas.
- Páginas: home, productos, aplicaciones, proyectos (+detalle), sobre-nosotros, formación, contacto, legales.
- Formulario sin backend (Web3Forms cuando exista la key; si no, *fallback* a mailto). Incluye selector particular/empresa con CIF obligatorio a empresas.
- Gama publicada hoy: F01 (fina), G01 (gruesa), TCI (impermeabilizante). **Pendiente** ampliar a la gama real completa (fino, grueso, extragrueso, impermeable, masilla, techo frío): el cliente aún no ha entregado las formulaciones ni las fotos por producto.
- Terminología: usar «corcho proyectado» (SEO) reforzado con «revestimiento de corcho». Acústicamente es **absorción**, no aislamiento entre viviendas.

## Brand Commitments

Nombre **THERMOCORK**. Existen logos e iconos oficiales en `public/brand/`, pero el cliente ha dado **libertad visual total** para el rediseño (identidad, color y tipografía son replanteables). Fabricado en Cintruénigo (Navarra, España).

## Evidence on Hand

- **Fotografía y vídeo reales de obra** en `public/img` y `public/video` (sin stock ni imágenes de IA).
- **5 casos de estudio reales** en `lib/projects.ts`: restaurante Madrid (acústica), nave industrial Madrid (cool roof 86 % reflexión / 0,81 emisividad, 500 m²/día), Ibiza techo frío, Galicia impermeabilización sobre pizarra, corcho impermeable.
- Datos técnicos orientativos (M1 / B-s1,d0, conductividad, 38 dB de absorción) **pendientes de validar** con la ficha oficial.
- **Ausencias que no se deben inventar:** los testimonios actuales son provisionales/redactados, no reales; no existe aún el sello del certificado de huella de carbono; el «hasta 70 % de ahorro» está **pendiente de respaldo documental** y no debe reforzarse ni convertirse en promesa; las cifras de países, aplicadores y proyectos/año no están verificadas.

## Product Principles

1. **Dos públicos, un sitio.** Particular y profesional deben encontrar su camino sin estorbarse.
2. **El contacto directo manda.** WhatsApp y teléfono siempre alcanzables; el formulario es alternativa, no peaje.
3. **Sin obra es el argumento.** La ausencia de escombros, desalojo y molestias es el diferencial más vendible.
4. **Solo afirmaciones defendibles.** Ninguna cifra sin respaldo; ante la duda, cualitativo.
5. **Materia real.** El corcho y las obras reales son el activo visual; nada de stock.

## Accessibility & Inclusion

Contraste mínimo AA y uso íntegro desde móvil (muchos particulares llegan desde anuncios en el teléfono).
