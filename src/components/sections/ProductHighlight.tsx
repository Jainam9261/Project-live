import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { products } from '@/data/products';
import { Card } from '@/components/ui/Card';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * ProductHighlight — homepage product teasers; floating cards, hover depth, link to Products.
 */
export function ProductHighlight() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();
  const featured = products.slice(0, 3);

  return (
    <>
      <SectionDivider fill="#F0F4F2" flip className="-mb-4 sm:-mb-6 lg:-mb-8" />
      <section
        ref={ref}
        aria-labelledby="products-heading"
        className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:py-20 xl:py-28 bg-hexfn-bg-warm"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="max-w-2xl"
          >
            <motion.h2
              id="products-heading"
              variants={staggerItem}
              className="font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl accent-line inline-block"
            >
              Product highlights
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 text-hexfn-text leading-relaxed">
              Available in various sizes with PLA or water-based lining. Custom branding and vegetable-based packaging
              available.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={staggerItem}>
                <Link to="/products" className="block h-full group">
                  <Card hover>
                    <div className="aspect-square overflow-hidden rounded-2xl bg-hexfn-green-muted">
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600';
                        }}
                      />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-hexfn-navy">{p.name}</h3>
                    <p className="mt-1 text-sm text-hexfn-text-muted">
                      {p.size} · {p.liningType}
                    </p>
                    <p className="mt-2 text-sm text-hexfn-text line-clamp-2">{p.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-hexfn-green transition-all duration-300 group-hover:translate-x-1">
                      View all products →
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.45 }}
            className="mt-12 text-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-hexfn-cta focus:ring-offset-2"
            >
              View all products
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
