import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { HeroSlide as HeroSlideType } from '@/types';

const slideEase = [0.4, 0, 0.2, 1];
const staggerDelay = 0.08;

interface HeroSlideProps {
  slide: HeroSlideType;
  isActive: boolean;
}

/**
 * HeroSlide — single hero: bg image (parallax zoom), overlay, staggered headline / description / CTA.
 */
export function HeroSlide({ slide, isActive }: HeroSlideProps) {
  return (
    <div className="relative h-full w-full">
      {/* Background image with subtle zoom (scale 1 → 1.05) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={slide.image}
          alt={slide.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          initial={false}
          animate={{
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 8, ease: 'easeOut' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920';
            (e.target as HTMLImageElement).alt = slide.imageAlt;
          }}
        />
      </div>

      {/* Dark gradient overlay for readability */}
      <div
        className="hero-overlay absolute inset-0"
        aria-hidden
      />

      {/* Content — left side, staggered; center-align on small mobile */}
      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full mx-auto md:mx-0 text-center md:text-left">
          <motion.h1
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, x: -20 }}
            animate={
              isActive
                ? { opacity: 1, x: 0 }
                : { opacity: 0.6, x: -12 }
            }
            transition={{
              duration: 0.7,
              ease: slideEase,
              delay: isActive ? 0.1 : 0,
            }}
          >
            {slide.headline}
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-5 max-w-xl mx-auto md:mx-0 text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={
              isActive
                ? { opacity: 1, x: 0 }
                : { opacity: 0.5, x: -12 }
            }
            transition={{
              duration: 0.7,
              ease: slideEase,
              delay: isActive ? 0.1 + staggerDelay : 0,
            }}
          >
            {slide.subline}
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={
              isActive
                ? { opacity: 1, y: 0 }
                : { opacity: 0.5, y: 8 }
            }
            transition={{
              duration: 0.7,
              ease: slideEase,
              delay: isActive ? 0.1 + staggerDelay * 2 : 0,
            }}
          >
            <Link
              to={slide.ctaHref}
              className="hero-cta group relative inline-flex items-center justify-center rounded-xl bg-hexfn-cta px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-hexfn-green focus:ring-offset-2 focus:ring-offset-transparent w-full sm:w-auto min-h-[48px]"
            >
              {slide.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
