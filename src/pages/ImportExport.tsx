import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem } from '@/utils/motion';

const steps = [
  { title: 'Sourcing', description: 'We source renewable, certified materials from trusted suppliers.' },
  { title: 'Manufacturing', description: 'Quality-controlled production with compostability in mind.' },
  { title: 'Logistics', description: 'Efficient import/export and warehousing for global reach.' },
  { title: 'Delivery', description: 'Reliable delivery to your door with vegetable-based packaging.' },
];

/**
 * ImportExport — capabilities, steps grid; light cards; CTA for samples.
 */
export default function ImportExport() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Import & Export — Hexfn Limited</title>
        <meta name="description" content="Hexfn Limited import and export capabilities. Global logistics, trade partners, and sample documentation for biodegradable cups and eco packaging." />
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
              Import & Export
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              We handle end-to-end logistics for biodegradable coffee cups and eco packaging. From sourcing to
              delivery, we work with certified partners to ensure quality and compliance.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={staggerItem}
                className="rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 p-5 sm:p-6 md:p-8 shadow-card hover:shadow-soft transition-shadow"
              >
                <span className="text-sm font-semibold text-hexfn-green">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 font-heading text-lg font-semibold text-hexfn-navy">{s.title}</h2>
                <p className="mt-2 text-sm text-hexfn-text leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16 sm:mt-20 rounded-2xl sm:rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/10 p-6 sm:p-8 md:p-10"
          >
            <h2 className="font-heading text-xl font-bold text-hexfn-navy sm:text-2xl">Sample & documentation</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-hexfn-text text-base sm:text-lg leading-relaxed">
              Request samples and download spec sheets, certificates, and shipping documentation. Our team can
              provide custom quotes and MOQ information for your region.
            </p>
            <Link
              to="/contact"
              className="mt-5 sm:mt-6 inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-5 py-3.5 sm:px-6 text-sm sm:text-base font-semibold text-white shadow-soft hover:shadow-cta-glow transition-shadow min-h-[48px]"
            >
              Request sample / Download spec
            </Link>
          </motion.section>
        </div>
      </div>
    </>
  );
}
