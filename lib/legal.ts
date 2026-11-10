import { CONTACT, LEGAL_ENTITY as L, type Bi } from '@/lib/site'

// Textos legales: aviso legal (LSSI-CE), privacidad (RGPD + LOPDGDD) y cookies
// (art. 22.2 LSSI-CE y Guía de cookies de la AEPD). Si la web empieza a usar
// analítica, mapas, vídeos incrustados o cualquier otro servicio de terceros,
// la política de cookies deja de ser cierta: hay que actualizarla y poner un
// aviso de consentimiento ANTES de publicar ese cambio.

export type LegalBlock = { h?: Bi; p?: Bi; items?: Bi[] }
export type LegalDoc = { title: Bi; tag: Bi; blocks: LegalBlock[] }

const b = (es: string, en: string): Bi => ({ es, en })

const EMAIL = CONTACT.email
const PHONE = `+34 ${CONTACT.phone}`
const UPDATED: LegalBlock = { p: b('Última actualización: 10 de noviembre de 2026.', 'Last updated: 10 November 2026.') }

export const LEGAL: Record<string, LegalDoc> = {
  'aviso-legal': {
    tag: b('Legal', 'Legal'),
    title: b('Aviso legal', 'Legal notice'),
    blocks: [
      {
        h: b('Titular del sitio web', 'Website owner'),
        p: b(
          'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), estos son los datos del titular de thermocork.es:',
          'In compliance with article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), these are the details of the owner of thermocork.es:',
        ),
        items: [
          b(`Titular: ${L.name} (${L.form.es})`, `Owner: ${L.name} (${L.form.en})`),
          b(`NIF: ${L.cif}`, `Tax ID (NIF): ${L.cif}`),
          b(`Domicilio social: ${L.registeredOffice.es}`, `Registered office: ${L.registeredOffice.en}`),
          b(`Instalaciones: ${L.premises.es}`, `Premises: ${L.premises.en}`),
          b(`Datos registrales: ${L.registry.es}`, `Registration: ${L.registry.en}`),
          b(`Email: ${EMAIL} · Teléfono: ${PHONE}`, `Email: ${EMAIL} · Phone: ${PHONE}`),
        ],
      },
      {
        h: b('Objeto y aceptación', 'Purpose and acceptance'),
        p: b(
          `Este aviso legal regula el acceso y el uso de thermocork.es, que informa sobre los revestimientos de corcho natural proyectado de ${L.name} y permite solicitar presupuesto. El acceso es gratuito y te atribuye la condición de usuario, lo que implica aceptar este aviso legal en la versión publicada en cada momento.`,
          `This legal notice governs access to and use of thermocork.es, which provides information about the sprayed natural cork coatings of ${L.name} and allows you to request a quote. Access is free of charge and makes you a user, which implies acceptance of this legal notice as published at any given time.`,
        ),
      },
      {
        h: b('Uso del sitio web', 'Use of the website'),
        p: b(
          'Te comprometes a usar el sitio web y sus contenidos conforme a la ley, la buena fe y el orden público, y a no emplearlos para actividades ilícitas, para dañar los sistemas del titular o de terceros, ni para introducir virus o cualquier otro código dañino.',
          'You agree to use the website and its content in accordance with the law, good faith and public order, and not to use them for unlawful purposes, to damage the systems of the owner or third parties, or to introduce viruses or any other harmful code.',
        ),
      },
      {
        h: b('Propiedad intelectual e industrial', 'Intellectual and industrial property'),
        p: b(
          `Los contenidos del sitio web (textos, fotografías, vídeos, diseño, logotipos, marcas y código) son de ${L.name} o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin autorización expresa y por escrito. Se permite consultarlos e imprimirlos para uso personal y privado.`,
          `The website content (texts, photographs, videos, design, logos, trademarks and code) belongs to ${L.name} or to third parties who have authorised its use, and is protected by intellectual and industrial property law. Total or partial reproduction, distribution, public communication or transformation without express written authorisation is prohibited. Viewing and printing for personal, private use is permitted.`,
        ),
      },
      {
        h: b('Información técnica y comercial', 'Technical and commercial information'),
        p: b(
          'Los datos de prestaciones, rendimientos, duración y garantías son informativos y orientativos: el resultado en cada obra depende del soporte, del espesor aplicado y de que la aplicación la haga un aplicador certificado. Nada de lo publicado constituye una oferta vinculante; las condiciones aplicables son las del presupuesto o contrato de cada caso.',
          'Performance, coverage, durability and warranty data are for information and guidance only: the result on each project depends on the substrate, the applied thickness and application by a certified applicator. Nothing published here constitutes a binding offer; the applicable terms are those of each quote or contract.',
        ),
      },
      {
        h: b('Responsabilidad', 'Liability'),
        p: b(
          `${L.name} procura que la información sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio web, y no responde de los daños derivados de interrupciones, fallos técnicos o del uso que se haga de la información, salvo en los casos en que la ley no permita excluir esa responsabilidad.`,
          `${L.name} strives to keep the information accurate and up to date, but does not guarantee that it is error-free or that the website will be available without interruption, and is not liable for damages arising from interruptions, technical failures or the use made of the information, except where the law does not allow such liability to be excluded.`,
        ),
      },
      {
        h: b('Enlaces a terceros', 'Third-party links'),
        p: b(
          `El sitio web enlaza con servicios de terceros, como WhatsApp. ${L.name} no los controla ni responde de sus contenidos ni de sus condiciones, que se rigen por las de cada proveedor.`,
          `The website links to third-party services such as WhatsApp. ${L.name} does not control them and is not responsible for their content or terms, which are governed by those of each provider.`,
        ),
      },
      {
        h: b('Protección de datos y cookies', 'Data protection and cookies'),
        p: b(
          'El tratamiento de datos personales se rige por la Política de privacidad, y el almacenamiento en tu navegador por la Política de cookies. Ambas están enlazadas en el pie de todas las páginas.',
          'The processing of personal data is governed by the Privacy policy, and storage in your browser by the Cookie policy. Both are linked in the footer of every page.',
        ),
      },
      {
        h: b('Legislación aplicable y jurisdicción', 'Governing law and jurisdiction'),
        p: b(
          'Este aviso legal se rige por la legislación española. Las controversias se someterán a los juzgados y tribunales competentes conforme a la ley; si eres consumidor, a los de tu domicilio.',
          'This legal notice is governed by Spanish law. Disputes shall be submitted to the courts with jurisdiction under the law; if you are a consumer, to those of your place of residence.',
        ),
      },
      UPDATED,
    ],
  },

  privacidad: {
    tag: b('Legal', 'Legal'),
    title: b('Política de privacidad', 'Privacy policy'),
    blocks: [
      {
        h: b('Responsable del tratamiento', 'Data controller'),
        items: [
          b(`${L.name} (${L.form.es}), NIF ${L.cif}`, `${L.name} (${L.form.en}), Tax ID ${L.cif}`),
          b(`Domicilio social: ${L.registeredOffice.es}`, `Registered office: ${L.registeredOffice.en}`),
          b(`Email: ${EMAIL} · Teléfono: ${PHONE}`, `Email: ${EMAIL} · Phone: ${PHONE}`),
        ],
      },
      {
        h: b('Qué datos tratamos', 'What data we process'),
        items: [
          b(
            'Los que nos das al pedir presupuesto o información por WhatsApp, por email o por teléfono: nombre, teléfono, CIF si eres empresa, tipo de proyecto, superficie y lo que nos cuentes en el mensaje.',
            'The data you give us when requesting a quote or information via WhatsApp, email or phone: name, phone number, tax ID if you are a company, project type, surface area and whatever you tell us in your message.',
          ),
          b(
            'El formulario de esta web no guarda ni envía datos por sí mismo: prepara un mensaje con lo que escribes y lo abre en tu WhatsApp, y eres tú quien decide enviarlo.',
            'The form on this website does not store or send any data by itself: it prepares a message with what you type and opens it in your WhatsApp, and you decide whether to send it.',
          ),
          b(
            'Al navegar, el servidor que aloja la web registra datos técnicos de cada visita (dirección IP, fecha y hora, página solicitada y navegador) por seguridad. No usamos analítica, publicidad ni seguimiento.',
            'When you browse, the server hosting the website logs technical data about each visit (IP address, date and time, page requested and browser) for security purposes. We do not use analytics, advertising or tracking.',
          ),
        ],
      },
      {
        h: b('Para qué los usamos y con qué base legal', 'Purposes and legal basis'),
        items: [
          b(
            'Atender tu solicitud, prepararte el presupuesto y hacer su seguimiento: aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD). Si contratas, la ejecución del contrato.',
            'Handling your request, preparing your quote and following it up: steps taken at your request prior to entering into a contract (art. 6.1(b) GDPR). If you hire us, performance of the contract.',
          ),
          b(
            'Si escribes en nombre de una empresa, tus datos de contacto profesional: nuestro interés legítimo en mantener la relación comercial (art. 6.1.f RGPD y art. 19 LOPDGDD).',
            'If you write on behalf of a company, your professional contact details: our legitimate interest in maintaining the business relationship (art. 6.1(f) GDPR and art. 19 of the Spanish Data Protection Act).',
          ),
          b(
            'Proteger la web frente a abusos y ataques (registros técnicos): interés legítimo (art. 6.1.f RGPD).',
            'Protecting the website against abuse and attacks (technical logs): legitimate interest (art. 6.1(f) GDPR).',
          ),
          b(
            'Cumplir las obligaciones fiscales y contables si llegas a contratar: obligación legal (art. 6.1.c RGPD).',
            'Meeting tax and accounting obligations if you become a customer: legal obligation (art. 6.1(c) GDPR).',
          ),
        ],
      },
      {
        p: b(
          'No te enviaremos publicidad sin tu consentimiento, no tomamos decisiones automatizadas y no elaboramos perfiles.',
          'We will not send you advertising without your consent, we do not make automated decisions and we do not create profiles.',
        ),
      },
      {
        h: b('Cuánto tiempo los conservamos', 'How long we keep them'),
        p: b(
          'Los datos de una solicitud se conservan mientras se gestiona y, si no llega a contratarse, se suprimen como máximo un año después del último contacto. Si contratas, se conservan mientras dure la relación y, después, durante los plazos legales (por ejemplo, seis años para la documentación mercantil y contable). Los registros técnicos del servidor se conservan durante el plazo que fija el proveedor de alojamiento.',
          'Request data is kept while the request is being handled and, if no contract follows, deleted no later than one year after the last contact. If you hire us, data is kept for the duration of the relationship and then for the legally required periods (for example, six years for commercial and accounting records). Server logs are kept for the period set by the hosting provider.',
        ),
      },
      {
        h: b('A quién se comunican', 'Who receives your data'),
        p: b(
          'No cedemos tus datos a terceros, salvo obligación legal (por ejemplo, a la Administración tributaria o a juzgados y tribunales). Sí intervienen:',
          'We do not disclose your data to third parties except where required by law (for example, to the tax authorities or the courts). The following are involved:',
        ),
        items: [
          b(
            'El aplicador certificado de nuestra red en tu zona, cuando sea él quien tenga que visitarte o presupuestarte la obra: le pasamos tu nombre, tu teléfono y los datos del proyecto, solo para eso.',
            'The certified applicator in our network in your area, when they need to visit you or quote the job: we share your name, phone number and project details with them for that purpose only.',
          ),
          b(
            'WhatsApp Ireland Ltd., si nos escribes por WhatsApp. Esa comunicación se rige también por las condiciones y la política de privacidad de WhatsApp.',
            'WhatsApp Ireland Ltd., if you message us on WhatsApp. That communication is also governed by WhatsApp’s terms and privacy policy.',
          ),
          b(
            'GitHub, Inc., que aloja la web, y nuestro proveedor de correo electrónico, que tratan datos por cuenta nuestra.',
            'GitHub, Inc., which hosts the website, and our email provider, which process data on our behalf.',
          ),
        ],
      },
      {
        h: b('Transferencias internacionales', 'International transfers'),
        p: b(
          'GitHub y el grupo Meta, al que pertenece WhatsApp, pueden tratar datos en Estados Unidos. Esas transferencias se amparan en las garantías del RGPD: el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
          'GitHub and the Meta group, which owns WhatsApp, may process data in the United States. Those transfers rely on GDPR safeguards: the EU-US Data Privacy Framework or the standard contractual clauses approved by the European Commission.',
        ),
      },
      {
        h: b('Tus derechos', 'Your rights'),
        p: b(
          `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a ${EMAIL} o a nuestro domicilio social, indicando qué derecho ejerces. Si tenemos dudas razonables sobre tu identidad, podremos pedirte que la acredites. Te responderemos en el plazo de un mes. Si crees que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
          `You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to ${EMAIL} or to our registered office, stating which right you are exercising. If we have reasonable doubts about your identity, we may ask you to verify it. We will reply within one month. If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
        ),
      },
      {
        h: b('Menores', 'Minors'),
        p: b(
          'Esta web no está dirigida a menores de 14 años. Si lo eres, no nos envíes tus datos.',
          'This website is not aimed at children under 14. If you are under 14, please do not send us your data.',
        ),
      },
      {
        h: b('Seguridad', 'Security'),
        p: b(
          'Aplicamos medidas técnicas y organizativas adecuadas al riesgo para proteger tus datos. La web se sirve siempre cifrada (HTTPS).',
          'We apply technical and organisational measures appropriate to the risk to protect your data. The website is always served encrypted (HTTPS).',
        ),
      },
      {
        h: b('Cambios en esta política', 'Changes to this policy'),
        p: b(
          'Podemos actualizar esta política para adaptarla a cambios legales o del servicio. La versión vigente es siempre la publicada en esta página.',
          'We may update this policy to reflect changes in the law or in our services. The current version is always the one published on this page.',
        ),
      },
      UPDATED,
    ],
  },

  cookies: {
    tag: b('Legal', 'Legal'),
    title: b('Política de cookies', 'Cookie policy'),
    blocks: [
      {
        h: b('Qué son', 'What they are'),
        p: b(
          'Las cookies y las tecnologías similares, como el almacenamiento local del navegador, guardan información en tu dispositivo cuando visitas una web.',
          'Cookies and similar technologies, such as the browser’s local storage, store information on your device when you visit a website.',
        ),
      },
      {
        h: b('Qué usa esta web', 'What this website uses'),
        p: b(
          'Esta web no instala cookies. Solo usa un elemento propio de almacenamiento local, que está exento de consentimiento:',
          'This website does not set any cookies. It only uses one first-party local storage item, which is exempt from consent:',
        ),
        items: [
          b(
            'tc-lang · almacenamiento local (localStorage), propio · Finalidad: recordar el idioma que eliges (español o inglés) · Duración: hasta que lo borres desde tu navegador · Exento: sí, es un elemento técnico de personalización que tú mismo solicitas (art. 22.2 LSSI-CE).',
            'tc-lang · local storage (localStorage), first-party · Purpose: remembering the language you choose (Spanish or English) · Duration: until you delete it from your browser · Exempt: yes, it is a technical customisation item that you request yourself (art. 22.2 LSSI-CE).',
          ),
        ],
      },
      {
        p: b(
          'No usamos cookies de análisis, publicidad ni redes sociales, ni propias ni de terceros. Los enlaces a WhatsApp te llevan a un servicio externo que, al abrirlo, aplica su propia política de cookies.',
          'We do not use analytics, advertising or social media cookies, whether first- or third-party. Links to WhatsApp take you to an external service which, once opened, applies its own cookie policy.',
        ),
      },
      {
        h: b('Por qué no ves un aviso de cookies', 'Why you do not see a cookie banner'),
        p: b(
          'El artículo 22.2 de la LSSI-CE y la Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos solo exigen pedir consentimiento para las cookies no exentas. Como esta web no usa ninguna, no hay nada que aceptar ni rechazar. Si en el futuro se incorporase alguna (por ejemplo, de analítica), te pediremos el consentimiento antes de instalarla, con un aviso en el que aceptar y rechazar estén al mismo nivel, y actualizaremos esta política.',
          'Article 22.2 LSSI-CE and the Spanish Data Protection Agency’s Guide on the use of cookies only require consent for non-exempt cookies. As this website uses none, there is nothing to accept or reject. If any were added in the future (for example, for analytics), we would ask for your consent before setting them, with a banner where accepting and rejecting are equally prominent, and update this policy.',
        ),
      },
      {
        h: b('Cómo borrarlo', 'How to delete it'),
        p: b(
          'Puedes borrar el almacenamiento local desde la configuración de privacidad de tu navegador, en el apartado de datos de sitios web (Chrome, Edge, Firefox y Safari lo permiten). Si lo borras, la web volverá a mostrarse en el idioma por defecto.',
          'You can delete local storage from your browser’s privacy settings, under site data (Chrome, Edge, Firefox and Safari all allow this). If you delete it, the website will go back to the default language.',
        ),
      },
      UPDATED,
    ],
  },
}
