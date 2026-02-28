import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer, staggerItem } from '@/utils/motion';

/**
 * AnimatedReveal — reveals children when in view using motion variants.
 * Respects prefers-reduced-motion.
 */
interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  containerVariants?: Variants;
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimatedReveal({
  children,
  className,
  containerVariants = staggerContainer,
  threshold = 0.08,
  triggerOnce = true,
}: AnimatedRevealProps) {
  const [ref, inView] = useInView({ threshold, triggerOnce });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={inView && !reduceMotion ? 'animate' : 'initial'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Single item to animate inside AnimatedReveal (uses staggerItem by default). */
export function AnimatedRevealItem({
  children,
  variants = staggerItem,
  className,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
