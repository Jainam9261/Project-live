import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Hero — single premium hero: large clean heading, light bg, animated SVG shapes, glass CTA panel.
 */
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 md:pb-40"
    >
      {/* Subtle leaf motif in the background */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-md opacity-[0.04]">
        <svg
          className="absolute top-1/3 right-[8%] w-32 h-32 text-hexfn-green"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2C8 6 4 10 4 14c0 4 4 8 8 8s8-4 8-8c0-4-4-8-8-12z" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-hexfn-green font-medium text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
          >
            Sustainable packaging
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl font-bold text-hexfn-navy tracking-tight sm:text-3xl md:text-4xl lg:text-display-lg"
          >
            Biodegradable coffee cups that perform.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-hexfn-text max-w-xl leading-relaxed"
          >
            Crafted from renewable plant fibers. PLA or water-based lining — fully compostable, heat-resistant, and
            leak-proof. Premium finish, 4oz to 16oz.
          </motion.p>

          {/* Glass morphism CTA panel */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/products"
                className="group relative inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-hexfn-cta focus:ring-offset-2 focus:ring-offset-hexfn-bg w-full sm:w-auto min-h-[48px]"
              >
                <span className="relative z-10">View products</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-hexfn-navy/20 bg-white/70 backdrop-blur-sm px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-hexfn-navy transition-all duration-300 hover:border-hexfn-green hover:bg-hexfn-green-muted hover:text-hexfn-navy focus:outline-none focus:ring-2 focus:ring-hexfn-green focus:ring-offset-2 w-full sm:w-auto min-h-[48px]"
              >
                Get a quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating cup mockup area — placeholder for 3D-style image; hidden on smaller viewports */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[320px] h-[320px] 2xl:w-[420px] 2xl:h-[420px]"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-hexfn-green-light/18 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
              alt="Biodegradable coffee cup"
              className="relative w-56 h-56 2xl:w-72 2xl:h-72 object-contain drop-shadow-elevated"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
