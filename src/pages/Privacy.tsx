import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Privacy — privacy policy placeholder for Hexfn Limited.
 */
export default function Privacy() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Hexfn Limited</title>
        <meta name="description" content="Hexfn Limited privacy policy. How we collect, use, and protect your data." />
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
            Privacy Policy
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
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">1. Introduction</h2>
              <p className="mt-2">
                Hexfn Limited (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy
                explains how we collect, use, and safeguard your information when you use our website or contact us for
                quotes, samples, or product enquiries.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">2. Information we collect</h2>
              <p className="mt-2">
                We may collect your name, email address, company name, phone number, and message content when you
                submit our contact or quote form. We do not sell your data to third parties.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-lg font-semibold text-hexfn-navy sm:text-xl">3. Use of information</h2>
              <p className="mt-2">
                We use your information to respond to enquiries, process quotes, send samples, and improve our services.
                With your consent, we may send you updates about new products and sustainability news.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-semibold text-hexfn-navy">4. Contact</h2>
              <p className="mt-2">
                For privacy-related questions, contact us at contact&#64;hexfn.com or via the{' '}
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
