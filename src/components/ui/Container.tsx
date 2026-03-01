import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

/**
 * Container — max-width wrapper with consistent horizontal padding.
 * Use inside Section for consistent layout.
 */
interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
  size?: 'default' | 'narrow' | 'wide';
}

const sizeClasses = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-[90rem]',
} as const;

export function Container({
  children,
  className,
  as: As = 'div',
  size = 'default',
}: ContainerProps) {
  return (
    <As
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </As>
  );
}
