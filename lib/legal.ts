import type { Language } from './i18n';

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactBlock: {
    heading: string;
    lines: string[];
  };
};

export const privacy: Record<Language, LegalDocument> = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: May 15, 2026',
    intro:
      'This Privacy Policy describes how Luis Carranza, LLC ("we", "us", "our") collects, uses, and discloses your information when you visit luiscarranza.com or contact us through the website. By using the website, you agree to the practices described here.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'We collect the following types of information:',
          'Information you provide: when you contact us via the form or email, we collect your name, email address, and any details you choose to share.',
          'Automatically collected information: technical information such as IP address, browser type, device data, and pages viewed, through analytics tools.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'We use the information we collect to: respond to your inquiries and provide our services; improve the website and how it performs; comply with legal obligations; and send transactional emails related to your inquiry.',
        ],
      },
      {
        heading: '3. Information Sharing',
        body: [
          'We do not sell, trade, or rent your personal information. We may share information only with: service providers who help us operate (email, analytics, hosting); law enforcement when legally required; or successors in the event of a business transfer.',
        ],
      },
      {
        heading: '4. Cookies and Analytics',
        body: [
          'We use Firebase Analytics (a Google service) to understand how visitors use the website. This service uses cookies. You can manage your cookie preferences via your browser settings or the consent banner on our website.',
        ],
      },
      {
        heading: '5. Data Security',
        body: [
          'We implement industry-standard technical and organizational measures to protect your information against unauthorized access, loss, or alteration. No system is completely secure, but we follow best practices for what we control.',
        ],
      },
      {
        heading: '6. Your Rights',
        body: [
          'Depending on your jurisdiction, you may have the right to: access your personal information; correct inaccurate data; request deletion; opt out of marketing; and file a complaint with a supervisory authority.',
          'To exercise these rights, contact us at contact@luiscarranza.com.',
        ],
      },
      {
        heading: '7. International Data Transfers',
        body: [
          'We are based in Delaware, United States. If you access our services from outside the US, your information may be transferred to, stored in, and processed in the US under applicable safeguards.',
        ],
      },
      {
        heading: '8. Children’s Privacy',
        body: [
          'Our services are not directed to individuals under 16. We do not knowingly collect information from children. If you believe we hold information about a minor, please contact us and we will delete it.',
        ],
      },
      {
        heading: '9. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. The "Last updated" date will reflect any changes. Material changes will be communicated through the website.',
        ],
      },
    ],
    contactBlock: {
      heading: 'Contact Us',
      lines: [
        'Luis Carranza, LLC',
        '131 Continental Dr, Suite 305',
        'Newark, DE 19713, USA',
        'contact@luiscarranza.com',
        '+1 (814) 831-6901',
      ],
    },
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 15 de mayo, 2026',
    intro:
      'Esta Política de Privacidad describe cómo Luis Carranza, LLC ("nosotros", "nuestra") recopila, utiliza y divulga tu información cuando visitás luiscarranza.com o nos contactás a través del sitio. Al usar el sitio web, aceptás las prácticas descritas acá.',
    sections: [
      {
        heading: '1. Información que recopilamos',
        body: [
          'Recopilamos los siguientes tipos de información:',
          'Información que vos proveés: cuando nos contactás vía formulario o email, recopilamos tu nombre, dirección de email y los detalles que decidas compartir.',
          'Información recopilada automáticamente: información técnica como dirección IP, tipo de navegador, datos del dispositivo y páginas visitadas, mediante herramientas de analytics.',
        ],
      },
      {
        heading: '2. Cómo usamos tu información',
        body: [
          'Usamos la información que recopilamos para: responder a tus consultas y proveer nuestros servicios; mejorar el sitio y su rendimiento; cumplir con obligaciones legales; y enviar emails transaccionales relacionados con tu consulta.',
        ],
      },
      {
        heading: '3. Compartir información',
        body: [
          'No vendemos, intercambiamos ni alquilamos tu información personal. Solo compartimos información con: proveedores de servicios que nos ayudan a operar (email, analytics, hosting); autoridades cuando legalmente sea requerido; o sucesores en caso de transferencia de negocio.',
        ],
      },
      {
        heading: '4. Cookies y Analytics',
        body: [
          'Usamos Firebase Analytics (servicio de Google) para entender cómo los visitantes usan el sitio. Este servicio utiliza cookies. Podés gestionar tus preferencias mediante la configuración del navegador o el banner de consentimiento en el sitio.',
        ],
      },
      {
        heading: '5. Seguridad de datos',
        body: [
          'Implementamos medidas técnicas y organizativas estándar de la industria para proteger tu información contra acceso no autorizado, pérdida o alteración. Ningún sistema es completamente seguro, pero seguimos las mejores prácticas sobre lo que controlamos.',
        ],
      },
      {
        heading: '6. Tus derechos',
        body: [
          'Según tu jurisdicción, podés tener derecho a: acceder a tu información personal; corregir datos inexactos; solicitar eliminación; optar por no recibir marketing; y presentar reclamos ante autoridades supervisoras.',
          'Para ejercer estos derechos, contactanos en contact@luiscarranza.com.',
        ],
      },
      {
        heading: '7. Transferencias internacionales de datos',
        body: [
          'Estamos basados en Delaware, Estados Unidos. Si accedés a nuestros servicios desde fuera de EE.UU., tu información puede ser transferida, almacenada y procesada en EE.UU. bajo salvaguardas aplicables.',
        ],
      },
      {
        heading: '8. Privacidad de menores',
        body: [
          'Nuestros servicios no están dirigidos a personas menores de 16 años. No recopilamos información de menores conscientemente. Si creés que tenemos información de un menor, contactanos y la eliminaremos.',
        ],
      },
      {
        heading: '9. Cambios a esta política',
        body: [
          'Podemos actualizar esta Política de Privacidad ocasionalmente. La fecha de "Última actualización" reflejará los cambios. Los cambios significativos serán comunicados a través del sitio web.',
        ],
      },
    ],
    contactBlock: {
      heading: 'Contactanos',
      lines: [
        'Luis Carranza, LLC',
        '131 Continental Dr, Suite 305',
        'Newark, DE 19713, USA',
        'contact@luiscarranza.com',
        '+1 (814) 831-6901',
      ],
    },
  },
};

export const terms: Record<Language, LegalDocument> = {
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: May 15, 2026',
    intro:
      'These Terms of Service ("Terms") govern your use of luiscarranza.com (the "Website") and any services offered by Luis Carranza, LLC ("we", "us"). By accessing the Website, you agree to these Terms.',
    sections: [
      {
        heading: '1. Use of Website',
        body: [
          'You may use the Website for lawful purposes only. You agree not to: use the Website in any way that violates applicable law; attempt unauthorized access to systems; use automated systems without permission; or interfere with proper functioning of the Website.',
        ],
      },
      {
        heading: '2. Intellectual Property',
        body: [
          'All content on this Website, including text, graphics, logos, and code, is the property of Luis Carranza, LLC or its licensors, and is protected by US copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.',
        ],
      },
      {
        heading: '3. Contact and Inquiries',
        body: [
          'Submitting a contact form does not create a contractual relationship. We may decline any inquiry at our discretion. Our services are subject to separate written agreements signed by both parties.',
        ],
      },
      {
        heading: '4. Disclaimer of Warranties',
        body: [
          'The Website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.',
        ],
      },
      {
        heading: '5. Limitation of Liability',
        body: [
          'To the maximum extent permitted by law, Luis Carranza, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website.',
        ],
      },
      {
        heading: '6. Indemnification',
        body: [
          'You agree to indemnify and hold harmless Luis Carranza, LLC, its officers, employees, and agents from any claims arising from your use of the Website or violation of these Terms.',
        ],
      },
      {
        heading: '7. Third-Party Links',
        body: [
          'The Website may contain links to third-party websites or services. We are not responsible for their content, accuracy, or practices.',
        ],
      },
      {
        heading: '8. Modifications',
        body: [
          'We reserve the right to modify these Terms at any time. Continued use of the Website after changes constitutes acceptance of the modified Terms.',
        ],
      },
      {
        heading: '9. Termination',
        body: [
          'We may terminate or suspend your access to the Website at any time, without notice, for any reason.',
        ],
      },
      {
        heading: '10. Governing Law',
        body: [
          'These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law principles. Any disputes shall be resolved in the courts of Delaware.',
        ],
      },
    ],
    contactBlock: {
      heading: 'Contact Us',
      lines: [
        'Luis Carranza, LLC',
        '131 Continental Dr, Suite 305',
        'Newark, DE 19713, USA',
        'contact@luiscarranza.com',
        '+1 (814) 831-6901',
      ],
    },
  },
  es: {
    title: 'Términos de Servicio',
    lastUpdated: 'Última actualización: 15 de mayo, 2026',
    intro:
      'Estos Términos de Servicio ("Términos") rigen tu uso de luiscarranza.com (el "Sitio Web") y cualquier servicio ofrecido por Luis Carranza, LLC ("nosotros", "nuestra"). Al acceder al Sitio Web, aceptás estos Términos.',
    sections: [
      {
        heading: '1. Uso del sitio',
        body: [
          'Podés usar el sitio web solo para fines legales. Te comprometés a no: usar el sitio de manera que viole leyes aplicables; intentar acceso no autorizado a sistemas; usar sistemas automatizados sin permiso; o interferir con el funcionamiento adecuado del sitio.',
        ],
      },
      {
        heading: '2. Propiedad intelectual',
        body: [
          'Todo el contenido del sitio, incluyendo texto, gráficos, logos y código, es propiedad de Luis Carranza, LLC o sus licenciantes, y está protegido por leyes de copyright y marcas registradas de EE.UU. No podés reproducir, distribuir o crear obras derivadas sin nuestro permiso escrito.',
        ],
      },
      {
        heading: '3. Contacto y consultas',
        body: [
          'Enviar un formulario de contacto no crea una relación contractual. Podemos rechazar cualquier consulta a nuestra discreción. Nuestros servicios están sujetos a acuerdos escritos separados firmados por ambas partes.',
        ],
      },
      {
        heading: '4. Renuncia de garantías',
        body: [
          'El sitio se provee "tal cual" sin garantías de ningún tipo, expresas o implícitas. No garantizamos que el sitio será ininterrumpido, libre de errores o libre de componentes dañinos.',
        ],
      },
      {
        heading: '5. Limitación de responsabilidad',
        body: [
          'En la máxima medida permitida por la ley, Luis Carranza, LLC no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso del sitio.',
        ],
      },
      {
        heading: '6. Indemnización',
        body: [
          'Aceptás indemnizar y mantener indemne a Luis Carranza, LLC, sus directivos, empleados y agentes de cualquier reclamo derivado de tu uso del sitio o violación de estos Términos.',
        ],
      },
      {
        heading: '7. Enlaces a terceros',
        body: [
          'El sitio puede contener enlaces a sitios web o servicios de terceros. No somos responsables de su contenido, exactitud o prácticas.',
        ],
      },
      {
        heading: '8. Modificaciones',
        body: [
          'Nos reservamos el derecho de modificar estos Términos en cualquier momento. El uso continuado del sitio después de los cambios constituye aceptación de los Términos modificados.',
        ],
      },
      {
        heading: '9. Terminación',
        body: [
          'Podemos terminar o suspender tu acceso al sitio en cualquier momento, sin previo aviso, por cualquier motivo.',
        ],
      },
      {
        heading: '10. Ley aplicable',
        body: [
          'Estos Términos se rigen por las leyes del Estado de Delaware, Estados Unidos, sin considerar principios de conflicto de leyes. Cualquier disputa será resuelta en los tribunales de Delaware.',
        ],
      },
    ],
    contactBlock: {
      heading: 'Contactanos',
      lines: [
        'Luis Carranza, LLC',
        '131 Continental Dr, Suite 305',
        'Newark, DE 19713, USA',
        'contact@luiscarranza.com',
        '+1 (814) 831-6901',
      ],
    },
  },
};
