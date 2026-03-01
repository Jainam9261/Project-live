import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * Sustainability — materials, lifecycle, compostability; animated sections.
 */
export default function Sustainability() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Sustainability — Hexfn Limited</title>
        <meta name="description" content="Materials, compostability testing, and lifecycle of Hexfn biodegradable cups. Vegetable-based packaging and environmental commitments." />
      </Helmet>
      <div className="relative py-16 md:py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="max-w-2xl"
          >
            <motion.h1
              variants={staggerItem}
              className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block"
            >
              Sustainability
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              Our cups are crafted from renewable plant fibers with PLA or water-based lining. They are fully
              compostable and designed for a circular approach.
            </motion.p>
          </motion.div>

          <section className="mt-16 sm:mt-20 rounded-2xl sm:rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/10 p-6 sm:p-8 md:p-10">
            <h2 className="font-heading text-xl font-bold text-hexfn-navy sm:text-2xl">Materials</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-hexfn-text text-base sm:text-lg leading-relaxed">
              We use renewable plant-based fibers and either PLA (polylactic acid) or water-based lining. No
              conventional plastics. Each material is selected for compostability and performance.
            </p>
          </section>

          <section className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 p-6 sm:p-8 md:p-10 shadow-card">
            <h2 className="font-heading text-xl font-bold text-hexfn-navy sm:text-2xl">Compostability & lifecycle</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-hexfn-text text-base sm:text-lg leading-relaxed">
              Our products meet compostability standards and are tested accordingly. Packaging is vegetable-based,
              reinforcing end-to-end eco-friendly status from production to disposal.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
