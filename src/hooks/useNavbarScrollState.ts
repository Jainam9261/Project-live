import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD_PX = 48;

/**
 * Returns true when user has scrolled past threshold (e.g. for navbar shrink).
 */
export function useNavbarScrollState(thresholdPx: number = SCROLL_THRESHOLD_PX): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > thresholdPx);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [thresholdPx]);

  return scrolled;
}
