import Nav from '@/components/layout/Nav';
import SiteFooter from '@/components/layout/SiteFooter';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Principles from '@/components/sections/Principles';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Newsletter from '@/components/sections/Newsletter';
import {
  organizationSchema,
  personSchema,
  websiteSchema,
  faqSchema,
} from '@/lib/seo';

export default function Home() {
  const schemas = [
    organizationSchema(),
    personSchema(),
    websiteSchema(),
    faqSchema('en'),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Principles />
        <About />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
