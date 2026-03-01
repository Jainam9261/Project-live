import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/motion';

const certs = [
  { id: '1', title: 'Compostability certificate', description: 'Third-party compostability certification.', downloadUrl: '#' },
  { id: '2', title: 'ISO quality management', description: 'Quality and environmental management systems.', downloadUrl: '#' },
];

/**
 * Certifications — cards with hover glow; download link with subtle animation.
 */
export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Certifications — Hexfn Limited</title>
        <meta name="description" content="Hexfn Limited certifications. ISO and compostability certificates. Download spec sheets and compliance documents." />
      </Helmet>
      <div ref={ref} className="relative py-16 md:py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block">
              Certifications
            </h1>
            <p className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              Our products and processes are backed by recognized certifications. Download documents below.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certs.map((c) => (
              <motion.div
                key={c.id}
                variants={staggerItem}
                className="rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 p-5 sm:p-6 md:p-8 shadow-card hover:shadow-green-glow hover:border-hexfn-green/20 transition-all duration-300"
              >
                <h2 className="font-heading text-lg font-semibold text-hexfn-navy">{c.title}</h2>
                <p className="mt-2 text-sm text-hexfn-text leading-relaxed">{c.description}</p>
                <motion.a
                  href={c.downloadUrl}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-hexfn-green transition-all duration-300 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-hexfn-green rounded-lg"
                  whileHover={{ x: 4 }}
                >
                  Download spec
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
