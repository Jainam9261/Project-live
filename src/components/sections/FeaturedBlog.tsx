import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * FeaturedBlog — homepage blog teaser; card grid, link to Blog.
 */
export function FeaturedBlog() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const reduceMotion = useReducedMotion();
  const posts = blogPosts.slice(0, 3);

  return (
    <>
      <SectionDivider fill="#FFFFFF" className="-mb-4 sm:-mb-6 lg:-mb-8" />
      <section
        ref={ref}
        aria-labelledby="blog-heading"
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
              id="blog-heading"
              variants={staggerItem}
              className="font-heading text-3xl font-bold text-hexfn-navy sm:text-4xl accent-line inline-block"
            >
              From the blog
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 text-hexfn-text leading-relaxed">
              Insights on sustainability, materials, and eco packaging.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView && !reduceMotion ? 'animate' : 'initial'}
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((p) => (
              <motion.article key={p.id} variants={staggerItem}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <div className="overflow-hidden rounded-3xl bg-hexfn-bg-warm border border-hexfn-green/5 shadow-card transition-all duration-500 group-hover:shadow-soft group-hover:border-hexfn-green/10">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <time
                        className="text-sm text-hexfn-text-muted"
                        dateTime={p.date}
                      >
                        {new Date(p.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-hexfn-navy transition-colors duration-300 group-hover:text-hexfn-green">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-hexfn-text line-clamp-2">{p.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="mt-10"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-hexfn-green font-semibold transition-all duration-300 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-hexfn-green rounded-lg"
            >
              View all articles →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
