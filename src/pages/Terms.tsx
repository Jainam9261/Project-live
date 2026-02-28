import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Terms — terms of use placeholder for Hexfn Limited.
 */
export default function Terms() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>Terms of Use — Hexfn Limited</title>
        <meta name="description" content="Hexfn Limited terms of use for this website and our services." />
      </Helmet>
      <div className="relative py-16 md:py-20 lg:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-2 text-sm text-hexfn-text-muted"
          >
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 space-y-6 text-hexfn-text text-base sm:text-lg leading-relaxed"
          >
            <section>
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">1. Acceptance</h2>
              <p className="mt-2">
                By using the Hexfn Limited website, you agree to these terms. If you do not agree, please do not use our
                site.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold text-hexfn-navy">2. Use of the website</h2>
              <p className="mt-2">
                You may use this website for lawful purposes only. Content (text, images, logos) is owned by Hexfn
                Limited and may not be copied or used without permission.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">3. Quotes and orders</h2>
              <p className="mt-2">
                Quotes provided via this site or by email are indicative and subject to confirmation. Orders are
                subject to our standard commercial terms and availability.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold text-hexfn-navy">4. Contact</h2>
              <p className="mt-2">
                For questions about these terms, contact us at contact&#64;hexfn.com or via the{' '}
                <Link to="/contact" className="text-hexfn-green transition-colors hover:text-hexfn-green-light">
                  Contact page
                </Link>
                .
              </p>
            </section>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-10 sm:mt-12"
          >
            <Link to="/" className="text-hexfn-green font-medium transition-all duration-300 hover:translate-x-1 inline-block min-h-[44px] flex items-center">
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
