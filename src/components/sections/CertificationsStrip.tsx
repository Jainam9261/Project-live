import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { staggerContainer, staggerItem } from '@/utils/motion';

const certs = [
  { title: 'Compostability', description: 'Certified compostable materials' },
  { title: 'ISO Standards', description: 'Quality and environmental management' },
];

/**
 * CertificationsStrip — homepage certifications teaser; light cards, link to Certifications.
 */
export function CertificationsStrip() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SectionDivider fill="#F0F4F2" flip />
      <section
        ref={ref}
        aria-labelledby="certs-heading"
        className="relative py-16 md:py-20 lg:py-28 bg-hexfn-bg-warm"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
          >
            <motion.h2
              id="certs-heading"
              variants={staggerItem}
              className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block"
            >
              Certifications
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6"
          >
            {certs.map((c) => (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="rounded-2xl bg-white border border-hexfn-green/10 px-6 py-5 shadow-card hover:shadow-soft transition-shadow"
              >
                <h3 className="font-heading font-semibold text-hexfn-navy">{c.title}</h3>
                <p className="text-sm text-hexfn-text mt-1">{c.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="mt-8"
          >
            <Link
              to="/certifications"
              className="text-hexfn-green font-semibold transition-all duration-300 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-hexfn-green rounded-lg inline-block"
            >
              View all certifications & downloads →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
