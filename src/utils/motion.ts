/**
 * Centralized motion variants — Framer Motion.
 * No inline animation objects; use these variants everywhere.
 */
import { duration, easing, stagger } from '@/constants/design';

export const easeOutExpo = easing.outExpo;

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.slow, ease: easeOutExpo },
};

export const fadeInUpSlight = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.smooth, ease: easeOutExpo },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: stagger.staggerChildren,
      delayChildren: stagger.delayChildren,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.smooth, ease: easeOutExpo },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: duration.normal, ease: easeOutExpo },
};

/** Page transition: fade + slight upward motion. */
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: duration.normal, ease: easeOutExpo },
};

/** Slide in from right (e.g. mobile menu). */
export const slideInRight = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { type: 'tween' as const, duration: 0.35, ease: easeOutExpo },
};

export const easeOutExpoTransition = { duration: duration.smooth, ease: easeOutExpo };
