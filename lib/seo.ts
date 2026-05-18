import { translations } from './i18n';

const SITE_URL = 'https://luiscarranza.com';

export const SITE = {
  url: SITE_URL,
  name: 'Luis Carranza, LLC',
  legalName: 'Luis Carranza, LLC',
  description:
    'Delaware-registered software company building digital solutions for enterprises, startups, and governments worldwide.',
  email: 'contact@luiscarranza.com',
  phone: '+1 (814) 831-6901',
  phoneE164: '+18148316901',
  founder: {
    name: 'Luis Ivan Carranza Saldaña',
    jobTitle: 'Founder & Authorized Representative',
  },
  address: {
    streetAddress: '131 Continental Dr, Suite 305',
    addressLocality: 'Newark',
    addressRegion: 'DE',
    postalCode: '19713',
    addressCountry: 'US',
  },
  registration: {
    foundingDate: '2026-05-01',
    taxID: '32-0855037',
    delawareFileNumber: '10608059',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/luiscarranza-llc/',
    github: 'https://github.com/lucadevv',
  },
} as const;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/opengraph-image`,
    description: SITE.description,
    foundingDate: SITE.registration.foundingDate,
    taxID: SITE.registration.taxID,
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'Delaware File Number',
        value: SITE.registration.delawareFileNumber,
      },
    ],
    founders: [{ '@type': 'Person', '@id': `${SITE.url}#founder` }],
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    areaServed: 'Worldwide',
    email: SITE.email,
    telephone: SITE.phoneE164,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE.email,
        telephone: SITE.phoneE164,
        availableLanguage: ['en', 'es'],
        areaServed: 'Worldwide',
      },
    ],
    sameAs: [SITE.social.linkedin, SITE.social.github],
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}#founder`,
    name: SITE.founder.name,
    jobTitle: SITE.founder.jobTitle,
    worksFor: { '@id': `${SITE.url}#organization` },
    sameAs: [SITE.social.linkedin, SITE.social.github],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}#organization` },
    inLanguage: ['en', 'es'],
  };
}

export function faqSchema(lang: 'en' | 'es' = 'en') {
  const items = translations[lang].faq.items;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE.url}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
