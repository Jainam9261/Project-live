import { motion } from 'framer-motion';

const slideEase = [0.4, 0, 0.2, 1];

interface CarouselNavigationProps {
  totalSlides: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * CarouselNavigation — desktop: right-side vertical (01/02/03). Mobile: bottom-center horizontal.
 */
export function CarouselNavigation({
  totalSlides,
  activeIndex,
  onSelect,
}: CarouselNavigationProps) {
  return (
    <>
      {/* Mobile & tablet: bottom-center horizontal */}
      <nav
        aria-label="Carousel slide navigation"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex md:hidden flex-row items-center justify-center gap-2"
      >
        {Array.from({ length: totalSlides }, (_, i) => {
          const isActive = i === activeIndex;
          const label = String(i + 1).padStart(2, '0');
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className={`relative flex min-w-[44px] min-h-[44px] items-center justify-center rounded-xl font-heading text-xl tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-colors ${
                isActive ? 'font-bold text-white' : 'font-medium text-white/50 hover:text-white/75'
              }`}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: slideEase }}
            >
              {label}
            </motion.button>
          );
        })}
      </nav>

      {/* Desktop: right-side vertical */}
      <nav
        aria-label="Carousel slide navigation"
        className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-1 sm:right-8 md:right-10 lg:right-12 md:flex"
      >
      {Array.from({ length: totalSlides }, (_, i) => {
        const isActive = i === activeIndex;
        const label = String(i + 1).padStart(2, '0');
        return (
          <div key={i} className="relative flex items-center gap-3">
            {/* Animated indicator line — visible for active */}
            <motion.div
              className="absolute right-full mr-3 h-px bg-white/90"
              initial={false}
              animate={{
                width: isActive ? 24 : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: slideEase }}
              aria-hidden
            />
            <motion.button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className="relative flex items-center justify-end font-heading text-2xl tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-3xl"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: slideEase }}
            >
              <span
                className={
                  isActive
                    ? 'font-bold text-white'
                    : 'font-medium text-white/50 transition-colors duration-300 hover:text-white/75'
                }
              >
                {label}
              </span>
            </motion.button>
          </div>
        );
        })}
      </nav>
    </>
  );
}
