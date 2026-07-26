# Design

<!-- impeccable:design-schema 1 -->

## Direction contract — «MARCA DE OBRA»

**THESIS.** El producto se aplica pulverizándolo a través de una boquilla sobre el soporte; la web se compone con la gramática del **marcaje industrial ibérico a plantilla** — tinta pulverizada a través de una máscara sobre material. Rechaza el arreglo que esta categoría siempre envía: fondo crema, serif de alto contraste, acento terracota y foto de fachada al 60 % de ancho.

**OWN-WORLD.** Fondo de **kraft de bala de corcho** (material, no papel blanco ni crema), tinta **betún casi negra**, y **azul ultramar de marcaje** comprometido a escala de región (no como acento suelto). Rótulos condensados de señalética industrial con **puentes de plantilla** reales, bordes con **sangrado de pulverización**, numeración de lote en mono, cruces de registro en las esquinas de la retícula y sellos de inspección.

**STORY.** El visitante entiende que una sola capa proyectada resuelve frío, calor, ruido y goteras sin obra; cree porque ve obra real y datos marcados como en una ficha de lote; y actúa **llamando o escribiendo por WhatsApp** (acción de éxito confirmada), no rellenando un formulario.

**FIRST VIEWPORT.** Fotografía real de obra a sangre, atravesada por la marca a plantilla a escala máxima (el nombre del producto pulverizado sobre el muro). Bajo la marca, una línea que explica el mecanismo. La acción primaria — **WhatsApp / teléfono** — es un bloque macizo azul ultramar, no un botón redondeado. A la izquierda, franja vertical de lote con datos técnicos en mono.

**FORM.** Marcaje industrial a plantilla; candidato 6 de la lista ordenada por resonancia; asignado por semilla `ac242fef` (índice 6). Sin staging de challenger: la marca a plantilla aporta su propia composición.

## Palette

Estrategia: **Committed** — el azul de marcaje ocupa regiones enteras; el kraft es el suelo material del sitio.

| Rol | Token | Valor |
|---|---|---|
| Suelo material | `--kraft` | `#D6C4A6` |
| Suelo claro | `--kraft-2` | `#E7DBC4` |
| Tinta | `--pitch` | `#17140F` |
| Tinta suave | `--pitch-60` | `rgba(23,20,15,.62)` |
| Marca (committed) | `--mark` | `#1B3FAE` |
| Marca profunda | `--mark-deep` | `#122A75` |
| Señal (estados vivos) | `--signal` | `#EFB700` |
| Corcho tostado (secciones densas) | `--burnt` | `#231B12` |

Claro por escena física: se lee a mediodía en obra, en el móvil bajo el sol de Sevilla y en el portátil del arquitecto. Las secciones densas invierten a `--burnt`.

## Type

- **Display:** `Big Shoulders Display` — letra de señalética industrial condensada; sostiene la marca a plantilla a escala.
- **Texto:** `Archivo` — grotesca de trabajo, misma familia industrial.
- **Datos:** `JetBrains Mono` — numeración de lote, especificaciones, códigos.

Prohibido volver a Fraunces o a cualquier serif editorial de alto contraste: es el default de la categoría que esta dirección refuta.

## Native devices

1. **Puente de plantilla** (`.stencil`): los rótulos llevan cortes horizontales de máscara. Es el device nativo del mundo; no se suaviza.
2. **Sangrado de pulverización** (`.spray`): borde granulado con turbulencia SVG donde la tinta se dispersa.
3. **Sello de lote** (`.lote`): mono en caja alta con separador `·`, para datos verificables.
4. **Cruz de registro** (`.reg`): marca de registro en las esquinas de las regiones.
5. **Bloque macizo de acción**: los CTA son rectángulos sólidos marcados, nunca píldoras con degradado.

## Rules

- Nada de `border-radius: 999px` ni degradados dorados: pertenecían al mundo descartado.
- La acción primaria de cada superficie es **contacto directo** (WhatsApp/teléfono).
- Toda cadena visible existe en ES y EN.
- Contraste mínimo AA; el azul de marcaje sobre kraft y la tinta sobre kraft cumplen holgadamente.
- Ninguna cifra sin respaldo (ver PRODUCT.md, «Evidence on Hand»).
