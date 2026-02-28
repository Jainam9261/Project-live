import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

/**
 * Section — semantic section wrapper with consistent vertical padding.
 * Use with Container inside for content width.
 */
interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  'aria-labelledby'?: string;
}

const sectionPadding = 'py-16 md:py-20 lg:py-28';
const sectionPaddingTight = 'pt-12 pb-16 sm:pt-16 sm:pb-20 lg:py-20 xl:py-28';

export function Section({
  children,
  className,
  as: As = 'section',
  id,
  'aria-labelledby': ariaLabelledby,
}: SectionProps) {
  return (
    <As
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('relative', sectionPadding, className)}
    >
      {children}
    </As>
  );
}

export function SectionTight({
  children,
  className,
  as: As = 'section',
  id,
  'aria-labelledby': ariaLabelledby,
}: SectionProps) {
  return (
    <As
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('relative', sectionPaddingTight, className)}
    >
      {children}
    </As>
  );
}
