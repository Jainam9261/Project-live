import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { staggerContainer, staggerItem } from '@/utils/motion';

const features = [
  {
    title: 'Renewable Materials',
    description:
      'Crafted from plant fibers with PLA or water-based lining. Fully compostable and free from conventional plastics.',
  },
  {
    title: 'Heat-Resistant & Leak-Proof',
    description:
      'Engineered for high performance. Excellent insulation keeps drinks at the perfect temperature for longer.',
  },
  {
    title: 'Ergonomic Design',
    description:
      'Textured grip and premium finish. Available in 4oz, 8oz, 12oz, and 16oz for every need.',
  },
  {
    title: 'Custom Branding',
    description:
      'Personalize with your logo, colors, or designs. Packaged in vegetable-based materials for end-to-end sustainability.',
  },
];

/**
 * Features — floating cards with depth, staggered reveal; curved divider above.
 */
export function Features() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SectionDivider fill="#FFFFFF" className="-mb-4 sm:-mb-6 lg:-mb-8" />
      <section
        ref={ref}
        aria-labelledby="features-heading"
        className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pb-section lg:py-20 xl:py-28 bg-white"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="max-w-2xl"
          >
            <motion.h2
              id="features-heading"
              variants={staggerItem}
              className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block"
            >
              Why Choose Hexfn
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-hexfn-text leading-relaxed"
            >
              Our innovative biodegradable coffee cups are crafted from renewable plant fibers, ensuring an
              environmentally friendly choice that avoids conventional plastics.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <Card hover>
                  <h3 className="font-heading text-lg font-semibold text-hexfn-navy">{f.title}</h3>
                  <p className="mt-3 text-sm text-hexfn-text leading-relaxed">{f.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
