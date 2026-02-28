import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

/**
 * SectionTitle — consistent section heading + optional description.
 * Use with accent-line for underline effect where needed.
 */
interface SectionTitleProps {
  id?: string;
  as?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  className?: string;
  accentLine?: boolean;
}

export function SectionTitle({
  id,
  as: As = 'h2',
  children,
  className,
  accentLine = false,
}: SectionTitleProps) {
  return (
    <As
      id={id}
      className={cn(
        'font-heading font-bold text-hexfn-navy',
        'text-2xl sm:text-3xl md:text-4xl',
        accentLine && 'accent-line inline-block',
        className
      )}
    >
      {children}
    </As>
  );
}

interface SectionDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function SectionDescription({ children, className }: SectionDescriptionProps) {
  return (
    <p className={cn('mt-6 text-hexfn-text leading-relaxed', className)}>
      {children}
    </p>
  );
}
