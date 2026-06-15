import type { Bi } from '@/lib/site'

export type LegalBlock = { h?: Bi; p: Bi }
export type LegalDoc = { title: Bi; tag: Bi; blocks: LegalBlock[] }

const COMPANY = 'Thermocork'

export const LEGAL: Record<string, LegalDoc> = {
  'aviso-legal': {
    tag: { es: 'Legal', en: 'Legal' },
    title: { es: 'Aviso legal', en: 'Legal notice' },
    blocks: [
      { h: { es: 'Titular del sitio', en: 'Site owner' }, p: { es: `Este sitio web es propiedad de ${COMPANY}, con domicilio en Paseo Industrial Calle 8, 31592 Cintruénigo (Navarra), España. Email de contacto: info@thermocork.es.`, en: `This website is owned by ${COMPANY}, located at Paseo Industrial Calle 8, 31592 Cintruénigo (Navarra), Spain. Contact email: info@thermocork.es.` } },
      { h: { es: 'Objeto', en: 'Purpose' }, p: { es: 'El presente aviso legal regula el uso del sitio web. La navegación implica la aceptación de las condiciones aquí recogidas.', en: 'This legal notice governs the use of the website. Browsing implies acceptance of the conditions set out herein.' } },
      { h: { es: 'Propiedad intelectual', en: 'Intellectual property' }, p: { es: 'Todos los contenidos (textos, imágenes, marcas, logotipos) son propiedad de Thermocork o de terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización.', en: 'All content (texts, images, trademarks, logos) is the property of Thermocork or third parties who have authorised its use. Reproduction without authorisation is prohibited.' } },
      { h: { es: 'Responsabilidad', en: 'Liability' }, p: { es: 'Thermocork no se responsabiliza del uso indebido de la información publicada ni de los daños derivados del acceso a este sitio.', en: 'Thermocork is not liable for the misuse of the published information nor for damages arising from access to this site.' } },
      { p: { es: 'Documento orientativo pendiente de adaptación a los datos registrales definitivos.', en: 'Indicative document pending adaptation to the final registry data.' } },
    ],
  },
  privacidad: {
    tag: { es: 'Legal', en: 'Legal' },
    title: { es: 'Política de privacidad', en: 'Privacy policy' },
    blocks: [
      { h: { es: 'Responsable del tratamiento', en: 'Data controller' }, p: { es: 'Thermocork (Cintruénigo, Navarra). Email: info@thermocork.es.', en: 'Thermocork (Cintruénigo, Navarra). Email: info@thermocork.es.' } },
      { h: { es: 'Finalidad', en: 'Purpose' }, p: { es: 'Los datos facilitados a través del formulario de contacto se utilizan exclusivamente para responder a tu solicitud de presupuesto o información.', en: 'The data provided through the contact form is used exclusively to respond to your quote or information request.' } },
      { h: { es: 'Legitimación', en: 'Legal basis' }, p: { es: 'El consentimiento del usuario al enviar el formulario.', en: 'The user\'s consent when submitting the form.' } },
      { h: { es: 'Conservación y cesión', en: 'Retention & disclosure' }, p: { es: 'Los datos se conservan el tiempo necesario para gestionar tu solicitud y no se ceden a terceros salvo obligación legal.', en: 'Data is kept for as long as necessary to handle your request and is not shared with third parties except by legal obligation.' } },
      { h: { es: 'Derechos', en: 'Your rights' }, p: { es: 'Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición escribiendo a info@thermocork.es.', en: 'You may exercise your rights of access, rectification, erasure and objection by writing to info@thermocork.es.' } },
      { p: { es: 'Documento orientativo pendiente de adaptación al RGPD y a la LOPDGDD.', en: 'Indicative document pending adaptation to GDPR and Spanish data protection law.' } },
    ],
  },
  cookies: {
    tag: { es: 'Legal', en: 'Legal' },
    title: { es: 'Política de cookies', en: 'Cookie policy' },
    blocks: [
      { h: { es: '¿Qué cookies usamos?', en: 'Which cookies do we use?' }, p: { es: 'Este sitio utiliza únicamente almacenamiento técnico necesario (por ejemplo, para recordar el idioma seleccionado). No se utilizan cookies publicitarias ni de seguimiento de terceros.', en: 'This site only uses necessary technical storage (for example, to remember the selected language). No advertising or third-party tracking cookies are used.' } },
      { h: { es: 'Gestión', en: 'Management' }, p: { es: 'Puedes borrar el almacenamiento local desde la configuración de tu navegador en cualquier momento.', en: 'You can clear local storage from your browser settings at any time.' } },
      { p: { es: 'Si en el futuro se incorporan herramientas de analítica, esta política se actualizará para solicitar tu consentimiento.', en: 'If analytics tools are added in the future, this policy will be updated to request your consent.' } },
    ],
  },
}
