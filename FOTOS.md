# Fotografía real · dónde va cada foto

Origen: carpeta `Web` de Drive + documento `Una sola capa.docx`.
Los originales (JPG/JPEG/WEBP de hasta 4 MB) se han convertido a WebP
(máx. 2000 px, calidad 80) en `public/img/real/`. El vídeo `.MOV` 4K vertical
se ha recodificado a H.264 en `public/video/`.

## Colocadas

| Doc | Original | Archivo en el repo | Dónde se ve |
|---|---|---|---|
| 1 | `1.JPG` | `img/real/portada-fachada.webp` | Portada · franja a sangre "Una sola capa. Sin obra." (`app/page.tsx`) |
| F01 | `f01.JPG` | `img/real/producto-f01.webp` | Productos F01 + "Textura fina · F01" |
| G01 | `G01.JPG` | `img/real/producto-g01.webp` | Productos G01 + "Textura gruesa · G01" |
| X01 | `XG01.jpeg` | `img/real/producto-xg01.webp` | Productos · tercera formulación (en la web se llama **TCI**, no X01) |
| 3.1 | `3.1.JPG` | `img/real/home-app-fachadas.webp` | Portada · "Cada superficie. Una solución." → Fachadas |
| 3.2 | `3.2.jpg` | `img/real/home-app-cubiertas.webp` | ídem → Cubiertas |
| 3.3 | `3.3.jpeg` | `img/real/home-app-interiores.webp` | ídem → Interiores |
| 3.4 | `3.4.jpeg` | `img/real/home-app-comercial.webp` | ídem → Comercial |
| 3.5 | `3.5.jpg` | `img/real/home-app-vehiculos.webp` | ídem → Vehículos |
| 4.2 | `4.2 techo frio ibiza.JPG` | `img/real/proy-ibiza-techo-frio.webp` | Proyecto *Techo frío en Ibiza* (portada) |
| 4.3 | `4.3 pizarra galicia.JPG` | `img/real/proy-galicia-pizarra.webp` | Proyecto *Pizarra Galicia* (portada) |
| 4.4 | `4.4 demostración impermeabilización.JPG` | `img/real/proy-demostracion-impermeabilizacion.webp` | Proyecto *Corcho impermeable* (portada) |
| 5 | `5. como se aplica.MOV` | `video/como-se-aplica.mp4` + `.jpg` | Sección "Cómo se aplica" (`Process.tsx`) |
| 9.1 | `9.1.jpg` | `img/real/app-fachadas.webp` | /aplicaciones · pestañas → Fachadas |
| 9.2 | `9.2.jpg` | `img/real/app-cubiertas.webp` | ídem → Cubiertas |
| 9.3 | `9.3.WEBP` | `img/real/app-interiores.webp` | ídem → Interiores |
| 9.4 | `9.4 franquicia tako.jpeg` | `img/real/app-comercial.webp` | ídem → Comercial |
| 9.5 | `9.5.jpeg` | `img/real/app-vehiculos.webp` | ídem → Vehículos |
| 10.1 | `10.1 fachadas.JPG` | `img/real/sector-fachadas.webp` | /aplicaciones · "Una solución para cada espacio" → Fachadas |
| 10.2 | `10.2 cubiertas y tejados.jpg` | `img/real/sector-cubiertas.webp` | ídem → Cubiertas y tejados |
| 10.3 | **no está en Drive** | `img/real/sector-interiores.webp` | ídem → Interiores · *copia provisional de la 3.3* |
| 10.4 | `10.4.jpeg` | `img/real/sector-comercial.webp` | ídem → Comerciales e industriales |
| 10.4a | `10.4a.jpeg` | `img/real/sector-comercial-detalle.webp` | Galería del proyecto de hostelería |
| 10.5 | `10.5  aplicaciones especiales.jpeg` | `img/real/sector-especiales.webp` | ídem → Vehículos y aplicaciones especiales |
| 11.1 | `11.1 retail.jpeg` | `img/real/proy-retail.webp` | Portada del proyecto de hostelería/retail |
| 11.2 | `11.2 techo frio.jpg` | `img/real/proy-cool-roof.webp` | Portada del proyecto *Nave industrial · Cool roof* |
| 11.3 | `11.3 cubiertas.jpg` | `img/real/proy-cubiertas.webp` | Galería del proyecto cool roof |
| 11.4 | `11.4 impermeabilización.jpeg` | `img/real/proy-impermeabilizacion.webp` | Galería de *Galicia* y de *Corcho impermeable* |
| 11.9 | `11.9 industrual.jpg` | `img/real/proy-industrial.webp` | Galería del proyecto cool roof |

| 4 | `4. infinito delicias.JPG`, `4.WEBP`, `4. id.WEBP`, `IMG_9779.WEBP` | `img/real/proy-infinito-delicias*.webp` | Proyecto *Infinito Delicias* (portada + galería) y cabecera de /proyectos |
| 4.1 | `4.1 …(CIECEM).JPG` | `img/real/proy-ciecem.webp` | Proyecto *CIECEM* (portada) y cabecera de /sobre-nosotros |
| 11.5 | `11.5 residencial.jpg` | `img/real/proy-residencial.webp` | Proyecto *Residencial* (portada) |
| 11.7 | `11.7 terminacion sate.jpg` | `img/real/proy-sate.webp` | Proyecto *Terminación SATE* (portada) |
| 11.8 | `11.8 amianto.JPG` | `img/real/proy-amianto.webp` | Proyecto *Cubiertas de fibrocemento* (portada) |
| — | `IMG_5981.jpg` | `img/real/residencial-vivienda.webp` | Galería del proyecto *Residencial* |

## Cabeceras de página

El documento no asigna foto a las cabeceras, así que se han elegido de entre
las recibidas: /productos → `producto-f01`, /aplicaciones → `sector-fachadas`,
/proyectos → `proy-infinito-delicias-2`, /sobre-nosotros → `proy-ciecem`,
/formación → `proy-demostracion-impermeabilizacion`, franja CTA →
`app-fachadas`.

## ⚠ Pendiente de validar por Thermocork

- **Textos provisionales.** Las fichas marcadas con `draft: true` en
  `lib/projects.ts` (*Infinito Delicias, CIECEM, Residencial, Terminación SATE,
  Cubiertas de fibrocemento*) tienen el reto/solución/resultado **redactados a
  partir de la fotografía**, no facilitados por Thermocork. Las cifras usan
  solo datos que ya afirmaba la web (0 demolición, 10 años de garantía, 25+
  años de durabilidad, base acuosa). **Hay que revisarlas antes de publicar.**
- La ficha de fibrocemento (`slug: amianto`) evita a propósito cualquier
  afirmación sobre normativa de amianto (RD 396/2006). Si se quiere hablar de
  encapsulado de amianto, el texto debe redactarlo Thermocork.
- **"Cambiar conductividad térmica"**: el documento pide cambiar el valor pero
  no dice cuál es el nuevo. Está en `SPECS`, en
  `components/sections/ProductDetails.tsx`.
- Falta la **foto 10.3 (Interiores)** del bloque de sectores: de momento se
  usa una copia de la 3.3.
- La foto de la cabecera de /formación es de baja resolución (576×1024
  original). Si tenéis una foto de una formación real, mejor.
- Los vídeos de las fichas de proyecto (`public/video/*.mp4`) siguen siendo de
  relleno; el único vídeo real recibido es el de "Cómo se aplica".
- La foto del alcornoque (`About.tsx` y segunda franja de portada) sigue siendo
  de relleno: no hay foto real de alcornoque en el envío.
