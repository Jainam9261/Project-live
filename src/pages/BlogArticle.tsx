import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { blogPosts } from '@/data/blog';

/**
 * BlogArticle — single article; reading progress bar (top); light theme prose.
 */
export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [ref] = useInView({ threshold: 0, triggerOnce: false });
  const progress = useScrollProgress();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="relative py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-hexfn-navy">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-hexfn-green hover:text-hexfn-green-light transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} — Hexfn Limited</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-hexfn-green/10" aria-hidden>
        <motion.div
          className="h-full bg-hexfn-cta"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>

      <article ref={ref} className="relative py-16 md:py-20 lg:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="text-sm font-medium text-hexfn-green transition-all duration-300 hover:translate-x-1 min-h-[44px] inline-flex items-center"
          >
            ← Back to Blog
          </Link>
          <header className="mt-4 sm:mt-6">
            <time className="text-sm text-hexfn-text-muted" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <h1 className="mt-2 font-heading text-2xl font-bold text-hexfn-navy sm:text-3xl md:text-4xl">{post.title}</h1>
          </header>
          <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-hexfn-green/5 shadow-card">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-auto object-cover max-h-[280px] sm:max-h-[360px]"
              loading="lazy"
            />
          </div>
          <div className="mt-8 sm:mt-10 max-w-none text-hexfn-text text-base sm:text-lg leading-relaxed space-y-4">
            <p className="text-hexfn-text">{post.excerpt}</p>
            <p>
              Our innovative biodegradable coffee cups are crafted from renewable plant fibers, ensuring an
              environmentally friendly choice that avoids conventional plastics. Each cup features either a PLA
              (polylactic acid) lining or a water-based lining, making them fully compostable and suitable for hot
              beverages.
            </p>
            <p>
              Engineered for high-performance, they are heat-resistant and leak-proof, providing excellent insulation.
              Designed with user comfort in mind, these cups boast a textured, ergonomic grip and a sleek, premium
              finish.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
