export type Language = 'en' | 'es';

export type Translations = {
  nav: {
    services: string;
    process: string;
    principles: string;
    about: string;
    faq: string;
    blog: string;
    contact: string;
    homeAriaLabel: string;
    contactAriaLabel: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    eyebrow: string;
    headline: string;
    features: Array<{
      number: string;
      eyebrow: string;
      headline: string;
      body: string;
      stack: string[];
    }>;
  };
  process: {
    eyebrow: string;
    headline: string;
    steps: Array<{
      number: string;
      name: string;
      headline: string;
      body: string;
    }>;
  };
  principles: {
    eyebrow: string;
    headline: string;
    items: Array<{
      number: string;
      headline: string;
      body: string;
    }>;
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  about: {
    eyebrow: string;
    headline: string;
    caption: string;
    paragraphs: string[];
    readMore: string;
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headline: string;
    leadParagraph: string;
    intro: {
      heading: string;
      body: string[];
    };
    founder: {
      eyebrow: string;
      name: string;
      title: string;
      bio: string[];
      caption: string;
    };
    story: {
      eyebrow: string;
      heading: string;
      chapters: Array<{
        year: string;
        title: string;
        body: string;
      }>;
    };
    values: {
      eyebrow: string;
      heading: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    };
    closing: {
      heading: string;
      body: string;
      cta: string;
    };
  };
  contact: {
    headline: string;
    subtitle: string;
    cta: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      alternative: string;
    };
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headline: string;
    lead: string;
    sections: {
      direct: {
        title: string;
        body: string;
      };
      legal: {
        title: string;
        rows: Array<{ label: string; value: string }>;
      };
      social: {
        title: string;
        body: string;
      };
      response: {
        title: string;
        body: string;
      };
    };
    formHeading: string;
    back: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    legalTitle: string;
    legal: Array<{
      label: string;
      value: string;
      sub: string;
    }>;
    copyright: string;
    location: string;
    privacyLink: string;
    termsLink: string;
    followUs: string;
  };
  langToggle: {
    switchTo: string;
  };
  cookies: {
    message: string;
    accept: string;
    reject: string;
    learnMore: string;
  };
  newsletter: {
    eyebrow: string;
    headline: string;
    description: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    invalidEmail: string;
    privacyNote: string;
  };
};

const enContent: Translations = {
  nav: {
    services: 'Services',
    process: 'Process',
    principles: 'Principles',
    about: 'About',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contact',
    homeAriaLabel: 'Luis Carranza, LLC — Home',
    contactAriaLabel: 'Contact',
  },
  hero: {
    headline: 'Software, engineered.',
    subtitle: 'Digital systems for enterprises, startups, and governments.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'Explore services',
  },
  services: {
    eyebrow: 'Services',
    headline: 'Built end-to-end.',
    features: [
      {
        number: '01',
        eyebrow: 'Engineering',
        headline: 'Built to last.',
        body: 'Web, mobile, and cloud platforms built with modern stacks. From MVPs to enterprise systems serving millions.',
        stack: ['TypeScript', 'Next.js', 'React Native', 'AWS', 'Kubernetes'],
      },
      {
        number: '02',
        eyebrow: 'Intelligence',
        headline: 'Software that learns.',
        body: 'LLM systems, retrieval pipelines, and analytics that turn data into operational decisions, not dashboards.',
        stack: ['LLMs', 'RAG', 'Python', 'Vector databases', 'Real-time ML'],
      },
      {
        number: '03',
        eyebrow: 'Product',
        headline: 'Crafted around the user.',
        body: 'Research, design systems, and end-to-end UX. Engineering aligned with what people actually need.',
        stack: ['Research', 'Design Systems', 'Figma', 'Prototyping'],
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    headline: 'How we work.',
    steps: [
      {
        number: '01',
        name: 'Discover',
        headline: 'Understand the problem.',
        body: 'A deep dive into business, users, and constraints. No templates. A plan engineered for your context.',
      },
      {
        number: '02',
        name: 'Build',
        headline: 'Engineer with precision.',
        body: 'Agile sprints, weekly demos, single source of truth. Code reviews, tests, and documentation throughout.',
      },
      {
        number: '03',
        name: 'Deploy',
        headline: 'Ship and support.',
        body: 'CI/CD to production. Monitoring, documentation, and ongoing engineering support on your terms.',
      },
    ],
  },
  principles: {
    eyebrow: 'Principles',
    headline: 'What we believe.',
    items: [
      {
        number: '01',
        headline: 'Engineering, not coding.',
        body: 'Software is craft. Every line is a deliberate decision, not a feature ticked off a list.',
      },
      {
        number: '02',
        headline: 'Built to outlast its makers.',
        body: 'Code that runs in five years matters more than code shipped in five days. We optimize for endurance, not speed.',
      },
      {
        number: '03',
        headline: 'The user is the spec.',
        body: 'Documents describe; people reveal. We test ideas against humans, not against requirements.',
      },
      {
        number: '04',
        headline: 'Transparent by default.',
        body: 'Weekly demos. Single source of truth. No hidden trade-offs. You always know what is happening.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Common questions.',
    items: [
      {
        question: 'How long does a typical engagement take?',
        answer:
          'From discovery to launch, most projects run six to twelve weeks. We do not believe in artificial deadlines; the time is what the problem requires.',
      },
      {
        question: 'Do you work with non-technical founders?',
        answer:
          'Yes. A significant part of our work is translating business intent into engineering decisions. Technical fluency on your side is not required.',
      },
      {
        question: 'What is your pricing model?',
        answer:
          'Fixed-scope engagements for defined deliverables, time-and-materials for evolving products. We propose the model after the discovery phase, not before.',
      },
      {
        question: 'What if the scope changes during the project?',
        answer:
          'We expect it. Weekly demos and a single source of truth make change visible. We rescope openly, not silently.',
      },
      {
        question: 'Who owns the code and intellectual property?',
        answer:
          'You do. All deliverables, source code, and infrastructure are yours. Standard transfer-of-ownership agreements unless your jurisdiction requires otherwise.',
      },
      {
        question: 'Do you offer ongoing maintenance?',
        answer:
          'Yes. After launch we offer monthly retainers for support, monitoring, and iterative development. No long-term commitment required.',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    headline: 'Founded on craft.',
    caption: 'Luis Ivan Carranza Saldaña, Founder',
    paragraphs: [
      'Founded by Luis Ivan Carranza Saldaña, the company applies rigorous engineering to the systems businesses, governments, and emerging products rely on.',
      'The conviction: software is craft. Great work emerges where technical execution meets a deep understanding of the people it serves. Not the other way around.',
      'A distributed team. End-to-end ownership. Built to last.',
    ],
    readMore: 'Read the full story',
  },
  aboutPage: {
    metaTitle: 'About',
    metaDescription:
      'The story of Luis Carranza, LLC — a Delaware software company engineering systems for businesses, startups, and governments. Founded by Luis Ivan Carranza Saldaña.',
    eyebrow: 'About',
    headline: 'A company built around one idea.',
    leadParagraph:
      'Software is craft. Great work emerges where technical execution meets a deep understanding of the people it serves. Luis Carranza, LLC was founded to operate on that belief, without compromise.',
    intro: {
      heading: 'What we do',
      body: [
        'We engineer digital systems for organizations that cannot afford for software to be the limiting factor. Enterprises modernizing legacy operations. Startups racing to validate a thesis. Governments delivering services at scale.',
        'Our work is deliberately end-to-end. We engage from the first conversation about what the system should do, through architecture and implementation, into deployment, monitoring, and the long tail of maintenance that most teams never plan for.',
        'We are small by design. A larger team would force us into structures that prioritize coordination over craft. Staying small means every line of code we ship has been read by someone who cares about the system five years from now, not just five days.',
      ],
    },
    founder: {
      eyebrow: 'Founder',
      name: 'Luis Ivan Carranza Saldaña',
      title: 'Founder & Authorized Representative',
      bio: [
        'Software engineer, builder, and operator. I started writing code before I understood that what I was actually doing was solving operational problems for organizations that did not have the language to describe them yet.',
        'I have spent the last decade engineering systems across web, mobile, infrastructure, and product. That experience is the foundation of the company. The reason I formed Luis Carranza, LLC as a Delaware entity is the same reason I write code the way I do: I want the structure to outlast the person.',
      ],
      caption: 'Founder, Luis Carranza, LLC',
    },
    story: {
      eyebrow: 'Timeline',
      heading: 'How we arrived here.',
      chapters: [
        {
          year: '2026',
          title: 'Luis Carranza, LLC is formed.',
          body: 'Registered in Delaware on May 1, 2026. The decision to incorporate was not about scale. It was about structure. Long-running software requires long-running entities. A US LLC provides both the legal foundation for international contracts and the operational discipline of a real business.',
        },
        {
          year: '2026',
          title: 'A first principle: ship engineering, not deliverables.',
          body: 'From day one, every engagement we accept is scoped around an outcome the client could not have produced in-house. We say no to projects where we would only be cheaper hands. We say yes where what we bring is judgment.',
        },
        {
          year: '2026+',
          title: 'Built for the next decade.',
          body: 'We are not optimizing for the next quarter. We are optimizing for the systems we ship to still be running in 2036. That horizon changes every decision — what stacks we choose, how we document, who we hire, and what we refuse to do.',
        },
      ],
    },
    values: {
      eyebrow: 'Values',
      heading: 'What we will not negotiate on.',
      items: [
        {
          title: 'Craft over speed.',
          body: 'Velocity is a metric. Endurance is a value. We ship at the pace required to ship something worth running.',
        },
        {
          title: 'Transparency over polish.',
          body: 'Weekly demos with the unfinished work visible. Honest assessments of trade-offs. No status reports that obscure the reality of the project.',
        },
        {
          title: 'Engineering over fashion.',
          body: 'We do not adopt frameworks because they trend. We use what serves the system five years from now, regardless of whether the choice is fashionable today.',
        },
        {
          title: 'Ownership over delivery.',
          body: 'We are not vendors. We are operators temporarily attached to your system. When we leave, the system is yours, and it works.',
        },
      ],
    },
    closing: {
      heading: 'Working together.',
      body: 'If the way we describe software resonates with how you think about the systems you are building, we would like to hear about your project.',
      cta: 'Start a conversation',
    },
  },
  contact: {
    headline: 'Let’s build.',
    subtitle: 'Tell us about your project. We respond within 24 hours.',
    cta: 'Start a project',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      messageLabel: 'Message',
      messagePlaceholder:
        'Tell us about your project, timeline, and what you’re trying to achieve.',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thanks. We will get back to you within 24 hours.',
      error:
        'Something went wrong. Please try again or email us at contact@luiscarranza.com.',
      alternative: 'Or email directly at contact@luiscarranza.com',
    },
  },
  contactPage: {
    metaTitle: 'Contact',
    metaDescription:
      'Contact Luis Carranza, LLC — a Delaware-registered software company. Email, legal address, and direct project inquiry form.',
    eyebrow: 'Contact',
    headline: 'Get in touch.',
    lead:
      'We respond to every legitimate inquiry within 24 hours. For project work, the form below routes directly to the team. For legal or media matters, email us instead.',
    sections: {
      direct: {
        title: 'Direct email',
        body:
          'contact@luiscarranza.com — for general inquiries, partnerships, and new projects.',
      },
      legal: {
        title: 'Legal entity',
        rows: [
          { label: 'Name', value: 'Luis Carranza, LLC' },
          { label: 'Type', value: 'Delaware Limited Liability Company' },
          { label: 'EIN', value: '32-0855037' },
          { label: 'Delaware File', value: '10608059' },
          { label: 'Registered Agent', value: 'Legalinc Corporate Services Inc.' },
          {
            label: 'Address',
            value: '131 Continental Dr, Suite 305, Newark, DE 19713, USA',
          },
        ],
      },
      social: {
        title: 'Social',
        body:
          'LinkedIn and GitHub links are in the footer. We answer direct messages there as well.',
      },
      response: {
        title: 'Response times',
        body:
          'Inquiries Monday–Friday receive a response within 24 hours. Weekend inquiries are answered Monday morning.',
      },
    },
    formHeading: 'Send us a message',
    back: 'Back to home',
  },
  footer: {
    tagline: 'Software for enterprises, startups, and governments.',
    navTitle: 'Navigate',
    legalTitle: 'Legal',
    legal: [
      {
        label: 'Legal entity',
        value: 'Luis Carranza, LLC',
        sub: 'Delaware Limited Liability Company',
      },
      {
        label: 'EIN',
        value: '32-0855037',
        sub: 'Federal Tax Identification',
      },
      {
        label: 'Formation',
        value: 'May 1, 2026',
        sub: 'New Castle County, Delaware',
      },
      {
        label: 'Delaware File',
        value: '10608059',
        sub: 'Public registry',
      },
      {
        label: 'Registered Agent',
        value: 'Legalinc Corporate Services Inc.',
        sub: '131 Continental Dr, Suite 305, Newark, DE 19713',
      },
      {
        label: 'Founder',
        value: 'Luis Ivan Carranza Saldaña',
        sub: 'Authorized Representative',
      },
    ],
    copyright: '© 2026 Luis Carranza, LLC. All rights reserved.',
    location: 'Delaware, USA',
    privacyLink: 'Privacy',
    termsLink: 'Terms',
    followUs: 'Follow',
  },
  langToggle: {
    switchTo: 'Switch language',
  },
  cookies: {
    message:
      'We use cookies to understand how visitors use the site, via Firebase Analytics. Your choice is stored locally.',
    accept: 'Accept',
    reject: 'Reject',
    learnMore: 'Privacy policy',
  },
  newsletter: {
    eyebrow: 'Newsletter',
    headline: 'Stay in touch.',
    description:
      'Occasional notes on software craft, the work we ship, and what we are learning. One email a month, no more.',
    emailPlaceholder: 'you@company.com',
    submit: 'Subscribe',
    submitting: 'Subscribing…',
    success: 'You are in. Look for our next note in your inbox.',
    error: 'Something went wrong. Try again in a moment.',
    invalidEmail: 'Please enter a valid email address.',
    privacyNote: 'No spam. Unsubscribe anytime.',
  },
};

const esContent: Translations = {
  nav: {
    services: 'Servicios',
    process: 'Proceso',
    principles: 'Principios',
    about: 'Nosotros',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contacto',
    homeAriaLabel: 'Luis Carranza, LLC — Inicio',
    contactAriaLabel: 'Contacto',
  },
  hero: {
    headline: 'Software, con oficio.',
    subtitle: 'Sistemas digitales para empresas, startups y gobiernos.',
    ctaPrimary: 'Iniciar un proyecto',
    ctaSecondary: 'Ver servicios',
  },
  services: {
    eyebrow: 'Servicios',
    headline: 'Construido de principio a fin.',
    features: [
      {
        number: '01',
        eyebrow: 'Ingeniería',
        headline: 'Hecho para durar.',
        body: 'Plataformas web, móviles y cloud construidas con stacks modernos. Desde MVPs hasta sistemas enterprise para millones de usuarios.',
        stack: ['TypeScript', 'Next.js', 'React Native', 'AWS', 'Kubernetes'],
      },
      {
        number: '02',
        eyebrow: 'Inteligencia',
        headline: 'Software que aprende.',
        body: 'Sistemas con LLMs, pipelines de retrieval y analytics que convierten datos en decisiones operativas, no dashboards.',
        stack: ['LLMs', 'RAG', 'Python', 'Bases vectoriales', 'ML en tiempo real'],
      },
      {
        number: '03',
        eyebrow: 'Producto',
        headline: 'Diseñado en torno al usuario.',
        body: 'Investigación, design systems y UX de extremo a extremo. Ingeniería alineada con lo que las personas realmente necesitan.',
        stack: ['Investigación', 'Design Systems', 'Figma', 'Prototipado'],
      },
    ],
  },
  process: {
    eyebrow: 'Proceso',
    headline: 'Cómo trabajamos.',
    steps: [
      {
        number: '01',
        name: 'Descubrir',
        headline: 'Entender el problema.',
        body: 'Un análisis profundo del negocio, usuarios y restricciones. Sin plantillas. Un plan diseñado para tu contexto.',
      },
      {
        number: '02',
        name: 'Construir',
        headline: 'Ingeniería con precisión.',
        body: 'Sprints ágiles, demos semanales, una sola fuente de verdad. Code reviews, tests y documentación en cada paso.',
      },
      {
        number: '03',
        name: 'Desplegar',
        headline: 'Lanzar y mantener.',
        body: 'CI/CD a producción. Monitoreo, documentación y soporte de ingeniería continuo en tus términos.',
      },
    ],
  },
  principles: {
    eyebrow: 'Principios',
    headline: 'Lo que creemos.',
    items: [
      {
        number: '01',
        headline: 'Ingeniería, no código.',
        body: 'El software es oficio. Cada línea es una decisión deliberada, no un feature marcado de una lista.',
      },
      {
        number: '02',
        headline: 'Construido para durar.',
        body: 'El código que corre en cinco años importa más que el código entregado en cinco días. Optimizamos por durabilidad, no por velocidad.',
      },
      {
        number: '03',
        headline: 'El usuario es la especificación.',
        body: 'Los documentos describen; las personas revelan. Probamos ideas contra gente real, no contra requerimientos.',
      },
      {
        number: '04',
        headline: 'Transparencia por defecto.',
        body: 'Demos semanales. Una sola fuente de verdad. Sin trade-offs ocultos. Siempre sabés qué está pasando.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Preguntas comunes.',
    items: [
      {
        question: '¿Cuánto dura un compromiso típico?',
        answer:
          'De descubrimiento a lanzamiento, la mayoría de proyectos duran de seis a doce semanas. No creemos en deadlines artificiales; el tiempo es el que el problema necesita.',
      },
      {
        question: '¿Trabajan con founders no técnicos?',
        answer:
          'Sí. Una parte importante de nuestro trabajo es traducir intención de negocio en decisiones de ingeniería. No requerimos fluidez técnica de tu lado.',
      },
      {
        question: '¿Cuál es su modelo de pricing?',
        answer:
          'Compromisos a alcance fijo para entregables definidos, time-and-materials para productos en evolución. Proponemos el modelo después del descubrimiento, no antes.',
      },
      {
        question: '¿Qué pasa si el alcance cambia durante el proyecto?',
        answer:
          'Lo esperamos. Demos semanales y una sola fuente de verdad hacen visible el cambio. Reajustamos el scope abiertamente, no en silencio.',
      },
      {
        question: '¿Quién es dueño del código y la propiedad intelectual?',
        answer:
          'Vos. Todos los entregables, código fuente e infraestructura son tuyos. Acuerdos estándar de transferencia de propiedad a menos que tu jurisdicción requiera otra cosa.',
      },
      {
        question: '¿Ofrecen mantenimiento continuo?',
        answer:
          'Sí. Después del lanzamiento ofrecemos retainers mensuales para soporte, monitoreo y desarrollo iterativo. Sin compromiso de largo plazo.',
      },
    ],
  },
  about: {
    eyebrow: 'Nosotros',
    headline: 'Fundada en el oficio.',
    caption: 'Luis Ivan Carranza Saldaña, Fundador',
    paragraphs: [
      'Fundada por Luis Ivan Carranza Saldaña, la empresa aplica ingeniería rigurosa a los sistemas en los que confían empresas, gobiernos y productos emergentes.',
      'La convicción: el software es oficio. El gran trabajo surge donde la ejecución técnica se encuentra con una comprensión profunda de las personas a las que sirve. No al revés.',
      'Un equipo distribuido. Responsabilidad de extremo a extremo. Hecho para durar.',
    ],
    readMore: 'Leé la historia completa',
  },
  aboutPage: {
    metaTitle: 'Nosotros',
    metaDescription:
      'La historia de Luis Carranza, LLC — una empresa de software de Delaware que diseña sistemas para empresas, startups y gobiernos. Fundada por Luis Ivan Carranza Saldaña.',
    eyebrow: 'Nosotros',
    headline: 'Una empresa construida alrededor de una idea.',
    leadParagraph:
      'El software es oficio. El gran trabajo emerge donde la ejecución técnica se encuentra con una comprensión profunda de las personas a las que sirve. Luis Carranza, LLC fue fundada para operar sobre esa convicción, sin compromiso.',
    intro: {
      heading: 'Qué hacemos',
      body: [
        'Diseñamos sistemas digitales para organizaciones que no pueden permitirse que el software sea el factor limitante. Empresas modernizando operaciones legadas. Startups corriendo para validar una tesis. Gobiernos entregando servicios a escala.',
        'Nuestro trabajo es deliberadamente de extremo a extremo. Nos comprometemos desde la primera conversación sobre lo que el sistema debe hacer, pasando por arquitectura e implementación, hasta despliegue, monitoreo y la larga cola de mantenimiento que la mayoría de los equipos nunca planea.',
        'Somos pequeños por diseño. Un equipo más grande nos forzaría a estructuras que priorizan coordinación sobre oficio. Mantenernos pequeños significa que cada línea de código que entregamos fue leída por alguien que se preocupa por el sistema dentro de cinco años, no solo dentro de cinco días.',
      ],
    },
    founder: {
      eyebrow: 'Fundador',
      name: 'Luis Ivan Carranza Saldaña',
      title: 'Fundador y Representante Autorizado',
      bio: [
        'Ingeniero de software, builder y operador. Empecé a escribir código antes de entender que lo que en realidad estaba haciendo era resolver problemas operativos para organizaciones que aún no tenían el lenguaje para describirlos.',
        'Pasé la última década diseñando sistemas en web, mobile, infraestructura y producto. Esa experiencia es la base de la empresa. La razón por la que constituí Luis Carranza, LLC como entidad de Delaware es la misma razón por la que escribo código de la forma en que lo hago: quiero que la estructura sobreviva a la persona.',
      ],
      caption: 'Fundador, Luis Carranza, LLC',
    },
    story: {
      eyebrow: 'Línea de tiempo',
      heading: 'Cómo llegamos acá.',
      chapters: [
        {
          year: '2026',
          title: 'Luis Carranza, LLC se constituye.',
          body: 'Registrada en Delaware el 1 de mayo de 2026. La decisión de incorporar no fue por escala. Fue por estructura. El software de larga duración requiere entidades de larga duración. Una LLC de EE.UU. provee tanto la base legal para contratos internacionales como la disciplina operativa de un negocio real.',
        },
        {
          year: '2026',
          title: 'Un primer principio: entregar ingeniería, no entregables.',
          body: 'Desde el primer día, cada engagement que aceptamos está definido alrededor de un resultado que el cliente no podría haber producido internamente. Decimos que no a proyectos donde solo seríamos manos más baratas. Decimos que sí donde lo que aportamos es criterio.',
        },
        {
          year: '2026+',
          title: 'Construido para la próxima década.',
          body: 'No estamos optimizando para el próximo trimestre. Estamos optimizando para que los sistemas que entreguemos sigan corriendo en 2036. Ese horizonte cambia cada decisión: qué stacks elegimos, cómo documentamos, a quién contratamos, y a qué nos negamos.',
        },
      ],
    },
    values: {
      eyebrow: 'Valores',
      heading: 'Lo que no negociamos.',
      items: [
        {
          title: 'Oficio sobre velocidad.',
          body: 'La velocidad es una métrica. La durabilidad es un valor. Entregamos al ritmo necesario para entregar algo que valga la pena correr.',
        },
        {
          title: 'Transparencia sobre prolijidad.',
          body: 'Demos semanales con el trabajo inconcluso visible. Evaluaciones honestas de trade-offs. Sin reportes de estado que oculten la realidad del proyecto.',
        },
        {
          title: 'Ingeniería sobre moda.',
          body: 'No adoptamos frameworks porque están de moda. Usamos lo que sirve al sistema dentro de cinco años, independientemente de si la decisión es fashionable hoy.',
        },
        {
          title: 'Responsabilidad sobre entrega.',
          body: 'No somos proveedores. Somos operadores temporalmente conectados a tu sistema. Cuando nos vamos, el sistema es tuyo, y funciona.',
        },
      ],
    },
    closing: {
      heading: 'Trabajando juntos.',
      body: 'Si la forma en que describimos el software resuena con cómo pensás los sistemas que estás construyendo, nos gustaría escuchar sobre tu proyecto.',
      cta: 'Iniciar una conversación',
    },
  },
  contact: {
    headline: 'Construyamos.',
    subtitle: 'Contános sobre tu proyecto. Respondemos en 24 horas.',
    cta: 'Iniciar un proyecto',
    form: {
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'vos@empresa.com',
      messageLabel: 'Mensaje',
      messagePlaceholder:
        'Contános sobre tu proyecto, plazos y lo que querés lograr.',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Gracias. Te respondemos en 24 horas.',
      error:
        'Algo salió mal. Intentá de nuevo o escribinos a contact@luiscarranza.com.',
      alternative: 'O escribinos directamente a contact@luiscarranza.com',
    },
  },
  contactPage: {
    metaTitle: 'Contacto',
    metaDescription:
      'Contactá a Luis Carranza, LLC — empresa de software registrada en Delaware. Email, dirección legal y formulario directo para consultas de proyectos.',
    eyebrow: 'Contacto',
    headline: 'Hablemos.',
    lead:
      'Respondemos cada consulta legítima en menos de 24 horas. Para proyectos, el formulario abajo va directo al equipo. Para temas legales o de prensa, escribinos por email.',
    sections: {
      direct: {
        title: 'Email directo',
        body:
          'contact@luiscarranza.com — para consultas generales, partnerships y proyectos nuevos.',
      },
      legal: {
        title: 'Entidad legal',
        rows: [
          { label: 'Nombre', value: 'Luis Carranza, LLC' },
          { label: 'Tipo', value: 'Compañía de Responsabilidad Limitada de Delaware' },
          { label: 'EIN', value: '32-0855037' },
          { label: 'Archivo de Delaware', value: '10608059' },
          { label: 'Agente registrado', value: 'Legalinc Corporate Services Inc.' },
          {
            label: 'Dirección',
            value: '131 Continental Dr, Suite 305, Newark, DE 19713, USA',
          },
        ],
      },
      social: {
        title: 'Redes sociales',
        body:
          'Los enlaces a LinkedIn y GitHub están en el footer. También respondemos mensajes directos en esas plataformas.',
      },
      response: {
        title: 'Tiempos de respuesta',
        body:
          'Consultas de lunes a viernes reciben respuesta en menos de 24 horas. Consultas del fin de semana se responden el lunes a la mañana.',
      },
    },
    formHeading: 'Enviános un mensaje',
    back: 'Volver al inicio',
  },
  footer: {
    tagline: 'Software para empresas, startups y gobiernos.',
    navTitle: 'Navegar',
    legalTitle: 'Legal',
    legal: [
      {
        label: 'Entidad legal',
        value: 'Luis Carranza, LLC',
        sub: 'Compañía de Responsabilidad Limitada de Delaware',
      },
      {
        label: 'EIN',
        value: '32-0855037',
        sub: 'Identificación tributaria federal',
      },
      {
        label: 'Constitución',
        value: '1 de mayo, 2026',
        sub: 'Condado de New Castle, Delaware',
      },
      {
        label: 'Archivo de Delaware',
        value: '10608059',
        sub: 'Registro público',
      },
      {
        label: 'Agente registrado',
        value: 'Legalinc Corporate Services Inc.',
        sub: '131 Continental Dr, Suite 305, Newark, DE 19713',
      },
      {
        label: 'Fundador',
        value: 'Luis Ivan Carranza Saldaña',
        sub: 'Representante Autorizado',
      },
    ],
    copyright: '© 2026 Luis Carranza, LLC. Todos los derechos reservados.',
    location: 'Delaware, EE.UU.',
    privacyLink: 'Privacidad',
    termsLink: 'Términos',
    followUs: 'Seguir',
  },
  langToggle: {
    switchTo: 'Cambiar idioma',
  },
  cookies: {
    message:
      'Usamos cookies para entender cómo los visitantes usan el sitio, vía Firebase Analytics. Tu elección queda guardada localmente.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    learnMore: 'Política de privacidad',
  },
  newsletter: {
    eyebrow: 'Newsletter',
    headline: 'Mantenete en contacto.',
    description:
      'Notas ocasionales sobre oficio del software, el trabajo que entregamos y lo que estamos aprendiendo. Un email al mes, no más.',
    emailPlaceholder: 'vos@empresa.com',
    submit: 'Suscribirme',
    submitting: 'Suscribiendo…',
    success: 'Listo. Vas a recibir nuestra próxima nota en tu inbox.',
    error: 'Algo salió mal. Intentá de nuevo en un momento.',
    invalidEmail: 'Por favor ingresá un email válido.',
    privacyNote: 'Sin spam. Cancelá la suscripción cuando quieras.',
  },
};

export const translations: Record<Language, Translations> = {
  en: enContent,
  es: esContent,
};
