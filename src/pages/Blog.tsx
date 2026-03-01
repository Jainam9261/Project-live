import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * Blog — list layout; light cards, link to article view.
 */
export default function Blog() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Blog & Insights — Hexfn Limited</title>
        <meta name="description" content="Insights on sustainability, biodegradable packaging, and eco cups from Hexfn Limited." />
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
              Blog & Insights
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-4 sm:mt-6 text-hexfn-text text-base sm:text-lg leading-relaxed">
              Sustainability, materials, and industry updates.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((p) => (
              <motion.article key={p.id} variants={staggerItem}>
                <Link to={`/blog/${p.slug}`} className="group block">
                    <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-hexfn-green/5 shadow-card transition-all duration-500 group-hover:shadow-soft group-hover:border-hexfn-green/10">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="h-40 sm:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="p-4 sm:p-6">
                      <time className="text-sm text-hexfn-text-muted" dateTime={p.date}>
                        {new Date(p.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <h2 className="mt-2 font-heading text-lg font-semibold text-hexfn-navy transition-colors duration-300 group-hover:text-hexfn-green">
                        {p.title}
                      </h2>
                      <p className="mt-2 text-sm text-hexfn-text line-clamp-2">{p.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
