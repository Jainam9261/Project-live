import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, A11y, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import type { HeroSlide as HeroSlideType } from '@/types';
import { useCarousel } from '@/hooks';
import { HeroSlide } from './HeroSlide';
import { CarouselNavigation } from './CarouselNavigation';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const AUTOPLAY_DELAY_MS = 6000; // 6 seconds between slides
const SLIDE_SPEED_MS = 700;

/**
 * HeroCarousel — full-viewport hero with fade transition, vertical number nav,
 * autoplay with progress bar, pause on hover.
 */
interface HeroCarouselProps {
  slides: HeroSlideType[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const {
    activeIndex,
    handleSwiper,
    handleSlideChange,
    goToSlide,
    swiperInstance,
  } = useCarousel({ totalSlides: slides.length, slideSpeedMs: SLIDE_SPEED_MS });

  // Sync autoplay with hover pause state and ensure it starts when Swiper is ready
  useEffect(() => {
    if (!swiperInstance?.autoplay) return;
    if (isPaused) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }
  }, [swiperInstance, isPaused]);

  return (
    <section
      aria-label="Hero carousel"
      className="hero-carousel relative h-[70vh] min-h-[280px] min-[500px]:h-screen min-[500px]:min-h-[380px] sm:min-h-[480px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Swiper
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
        modules={[EffectFade, Autoplay, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={SLIDE_SPEED_MS}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: AUTOPLAY_DELAY_MS,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true }}
        className="h-full w-full"
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-theme-color': '#fff',
          } as React.CSSProperties
        }
        a11y={{
          enabled: true,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} isActive={activeIndex === index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselNavigation
        totalSlides={slides.length}
        activeIndex={activeIndex}
        onSelect={goToSlide}
      />

      {!isPaused && (
        <HeroProgressBar durationMs={AUTOPLAY_DELAY_MS} key={activeIndex} />
      )}
    </section>
  );
}

/** Progress bar that fills over autoplay duration. */
function HeroProgressBar({ durationMs }: { durationMs: number }) {
  return (
    <div
      className="absolute bottom-0 left-0 z-20 h-0.5 w-full origin-left bg-white/20"
      aria-hidden
    >
      <motion.div
        className="h-full bg-hexfn-green"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: durationMs / 1000,
          ease: 'linear',
        }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}
