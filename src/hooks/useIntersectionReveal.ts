import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';

interface UseIntersectionRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Returns ref to attach to element, inView flag, and reducedMotion for animations.
 */
export function useIntersectionReveal(options: UseIntersectionRevealOptions = {}) {
  const { threshold = 0.08, triggerOnce = true } = options;
  const [ref, inView] = useInView({ threshold, triggerOnce });
  const reduceMotion = useReducedMotion();
  return { ref, inView: !!inView, reduceMotion };
}
