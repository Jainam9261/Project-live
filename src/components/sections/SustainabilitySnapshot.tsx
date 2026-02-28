import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { staggerContainer, staggerItem } from '@/utils/motion';

/** Animated counter — counts up when in view (optional, respects reduced motion). */
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const reduceMotion = useReducedMotion();
  const isNumeric = /^\d+$/.test(value);

  if (reduceMotion || !isNumeric) {
    return (
      <span ref={ref}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {value}
        {suffix}
      </motion.span>
    </motion.span>
  );
}

const points = [
  { value: '100%', label: 'Compostable' },
  { value: 'Plant', label: 'Based fibres' },
  { value: '0', label: 'Conventional plastic' },
];

/**
 * SustainabilitySnapshot — stats with optional counter animation; link to Sustainability.
 */
export function SustainabilitySnapshot() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SectionDivider fill="#FFFFFF" />
      <section
        ref={ref}
        aria-labelledby="sustainability-heading"
        className="relative py-16 md:py-20 lg:py-28 bg-white"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="max-w-2xl"
          >
            <motion.h2
              id="sustainability-heading"
              variants={staggerItem}
              className="font-heading text-3xl font-bold text-hexfn-navy sm:text-4xl accent-line inline-block"
            >
              Sustainability at a glance
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 text-hexfn-text leading-relaxed">
              Each cup features PLA or water-based lining, making them fully compostable. Packaged in vegetable-based
              materials.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {points.map((p) => (
              <motion.div
                key={p.label}
                variants={staggerItem}
                className="rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/10 p-6 sm:p-8 md:p-10 text-center"
              >
                <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-hexfn-green">
                  <AnimatedCounter value={p.value} />
                </span>
                <p className="mt-3 text-hexfn-text font-medium text-sm sm:text-base">{p.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link
              to="/sustainability"
              className="inline-flex items-center text-hexfn-green font-semibold transition-all duration-300 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-hexfn-green rounded-lg"
            >
              Learn more about our materials & lifecycle →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
