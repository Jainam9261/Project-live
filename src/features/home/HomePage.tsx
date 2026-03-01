import { Helmet } from 'react-helmet-async';
import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { Features } from '@/components/sections/Features';
import { ProductHighlight } from '@/components/sections/ProductHighlight';
import { SustainabilitySnapshot } from '@/components/sections/SustainabilitySnapshot';
import { CertificationsStrip } from '@/components/sections/CertificationsStrip';
import { CtaSection } from '@/components/sections/CtaSection';
import { heroSlides } from './data';

/**
 * Home page — hero carousel, value props, product highlights, sustainability, certs, CTA.
 */
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hexfn Limited — Biodegradable Coffee Cups & Eco Packaging</title>
        <meta name="description" content="Renewable, biodegradable coffee cups and eco packaging. Import & export of compostable products. PLA and water-based lining. Get a quote." />
      </Helmet>
      <HeroCarousel slides={heroSlides} />
      <Features />
      <ProductHighlight />
      <SustainabilitySnapshot />
      <CertificationsStrip />
      <CtaSection />
    </>
  );
}
