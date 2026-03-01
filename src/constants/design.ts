/**
 * Centralized design tokens — spacing, radius, shadows, animation, colors.
 * Single source of truth; no magic numbers in components.
 */

export const spacing = {
  unit: 8,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const radii = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
} as const;

export const shadows = {
  soft: '0 4px 14px 0 rgba(14, 37, 64, 0.06)',
  elevated: '0 10px 40px -10px rgba(14, 37, 64, 0.12)',
  card: '0 2px 12px rgba(14, 37, 64, 0.04)',
  cardHover: '0 18px 36px -14px rgba(14, 37, 64, 0.18)',
} as const;

export const colors = {
  bg: '#F7F9F8',
  green: '#2E7D5B',
  sage: '#A8D5BA',
  navy: '#0E2540',
  text: '#5F6B6B',
  cta: '#FF6B35',
} as const;

/** Animation durations in seconds (for Framer Motion and CSS). */
export const duration = {
  fast: 0.25,
  normal: 0.4,
  smooth: 0.45,
  slow: 0.5,
} as const;

/** Cubic-bezier easing curves. */
export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
} as const;

/** Stagger timing. */
export const stagger = {
  delayChildren: 0.06,
  staggerChildren: 0.08,
} as const;
