import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const inputBase =
  'w-full rounded-2xl border border-hexfn-green/20 bg-hexfn-bg px-4 py-3 text-hexfn-text placeholder-hexfn-text-muted focus:border-hexfn-green focus:outline-none focus:ring-2 focus:ring-hexfn-green/20 transition-colors min-h-[48px] text-base';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(inputBase, error && 'border-red-500 focus:ring-red-500/20', className)}
      {...props}
    />
  );
});
