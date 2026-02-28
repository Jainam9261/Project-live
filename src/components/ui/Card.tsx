import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { shadows } from '@/constants/design';

/**
 * Card — light premium container, soft shadow, 2xl radius, hover lift + shadow.
 */
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`rounded-3xl bg-hexfn-bg-card shadow-card p-6 sm:p-8 border border-hexfn-green/5 ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: shadows.cardHover,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
