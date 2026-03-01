import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

/**
 * CtaSection — strong CTA block; light bg, soft gradient, two CTAs.
 */
export function CtaSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      ref={ref}
      aria-labelledby="cta-heading"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-hexfn-green/5 via-hexfn-bg to-hexfn-green-light/10" />
      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl"
        >
          Ready to go green?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-hexfn-text text-base sm:text-lg max-w-xl mx-auto"
        >
          Get a quote for your order or request a sample to experience our biodegradable cups.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-5 py-3.5 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-hexfn-cta focus:ring-offset-2 w-full sm:w-auto min-h-[48px]"
          >
            Get a quote
          </Link>
          <Link
            to="/contact?request=sample"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-hexfn-navy/20 bg-white/80 backdrop-blur-sm px-5 py-3.5 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-hexfn-navy transition-all duration-300 hover:border-hexfn-green hover:bg-hexfn-green-muted focus:outline-none focus:ring-2 focus:ring-hexfn-green focus:ring-offset-2 w-full sm:w-auto min-h-[48px]"
          >
            Request sample
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
