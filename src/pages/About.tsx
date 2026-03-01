import { Helmet } from 'react-helmet-async';

/**
 * About — mission, story; light premium layout.
 */
export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Hexfn Limited</title>
        <meta name="description" content="Hexfn Limited mission and story. Import and export of renewable, biodegradable coffee cups and eco packaging." />
      </Helmet>
      <div className="relative py-16 md:py-20 lg:py-28">
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl lg:text-5xl accent-line inline-block">
              About Hexfn Limited
            </h1>
            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              <p>
                Our innovative biodegradable coffee cups are crafted from renewable plant fibers, ensuring an
                environmentally friendly choice that avoids conventional plastics. Each cup features either a PLA
                (polylactic acid) lining or a water-based lining, making them fully compostable and suitable for hot
                beverages.
              </p>
              <p>
                Engineered for high-performance, they are heat-resistant and leak-proof, providing excellent insulation
                that keeps your drinks at the perfect temperature for longer. Designed with user comfort in mind, these
                cups boast a textured, ergonomic grip and a sleek, premium finish that makes them visually appealing for
                any setting.
              </p>
              <p>
                We are committed to ethical sourcing and sustainable practices across our supply chain. From factory to
                delivery, we work with partners who share our values for quality and environmental responsibility.
              </p>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="mission-heading"
          className="mt-16 sm:mt-20 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="rounded-2xl sm:rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/10 p-6 sm:p-8 md:p-10">
            <h2 id="mission-heading" className="font-heading text-xl font-bold text-hexfn-navy sm:text-2xl md:text-3xl">
              Our mission
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-hexfn-text text-base sm:text-lg leading-relaxed">
              To provide businesses and events with premium, compostable packaging that performs as well as it protects
              the planet. We combine rigorous quality standards with full traceability and certifications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
