import { useScrollToTop } from '@/hooks';

/**
 * ScrollToTop — on route change, smoothly scroll window to top.
 * Uses useScrollToTop hook; render once inside Router (e.g. in App).
 */
export function ScrollToTop() {
  useScrollToTop();
  return null;
}
