import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

/**
 * PageLayout — optional wrapper for page content (e.g. consistent top padding).
 * Use inside MainLayout when pages need a shared content structure.
 */
interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>;
}
