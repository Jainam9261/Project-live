import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * CustomBranding — how to order, artwork guidelines, MOQ; light premium layout.
 */
export default function CustomBranding() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Custom Branding — Hexfn Limited</title>
        <meta name="description" content="Custom branding for biodegradable cups. Artwork guidelines, minimum order quantity, and how to order." />
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
              Custom branding
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              For businesses and events, we offer custom branding so you can personalize your cups with your logo,
              colors, or unique designs.
            </motion.p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 sm:mt-16 space-y-6 sm:space-y-8"
          >
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">How to order</h2>
              <p className="mt-2 text-hexfn-text text-base sm:text-lg leading-relaxed">
                Contact us with your requirements: cup size, quantity, and branding details. We will provide a quote and
                artwork guidelines. Once approved, production typically takes a few weeks depending on order size.
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/10 p-5 sm:p-6 md:p-8">
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">Artwork guidelines</h2>
              <p className="mt-2 text-hexfn-text text-base sm:text-lg leading-relaxed">
                Provide your logo or design in vector format (AI, EPS, or high-resolution PNG). We support full-color
                printing and can advise on safe zones and bleed for best results.
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">Minimum order quantity</h2>
              <p className="mt-2 text-hexfn-text text-base sm:text-lg leading-relaxed">
                MOQ depends on size and design. Contact us for a custom quote and sample options.
              </p>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-10 sm:mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-5 py-3.5 sm:px-6 text-sm sm:text-base font-semibold text-white shadow-soft hover:shadow-cta-glow transition-shadow min-h-[48px]"
            >
              Get a quote for custom branding
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
