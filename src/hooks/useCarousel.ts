import { useState, useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';

interface UseCarouselOptions {
  totalSlides: number;
  slideSpeedMs?: number;
}

/**
 * Carousel state and controls for Swiper-based hero/carousel.
 */
export function useCarousel(options: UseCarouselOptions) {
  const { slideSpeedMs = 700 } = options;
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    setSwiperInstance(swiper);
    setActiveIndex(swiper.realIndex);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      swiperInstance?.slideToLoop(index, slideSpeedMs);
    },
    [swiperInstance, slideSpeedMs]
  );

  const slidePrev = useCallback(() => {
    swiperInstance?.slidePrev();
  }, [swiperInstance]);

  const slideNext = useCallback(() => {
    swiperInstance?.slideNext();
  }, [swiperInstance]);

  return {
    activeIndex,
    setActiveIndex,
    handleSwiper,
    handleSlideChange,
    goToSlide,
    slidePrev,
    slideNext,
    swiperInstance,
  };
}
