import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * Products — product listing with filters and detail modal; light premium layout.
 */
export default function Products() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Products — Hexfn Limited</title>
        <meta name="description" content="Biodegradable coffee cups in 4oz, 8oz, 12oz, 16oz. PLA or water-based lining. Custom branding. View specs and request a quote." />
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
              Products
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              Our biodegradable coffee cups are available in various sizes with PLA or water-based lining. Filter by
              size, lining type, and custom branding option.
            </motion.p>
          </motion.div>
          <div className="mt-8 sm:mt-12">
            <ProductGrid />
          </div>
        </div>
      </div>
    </>
  );
}
