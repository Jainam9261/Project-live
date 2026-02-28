import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type BadgeVariant = 'default' | 'primary' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-hexfn-green-muted text-hexfn-green',
  primary: 'bg-hexfn-cta text-white',
  outline: 'border border-hexfn-green/20 text-hexfn-text',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
