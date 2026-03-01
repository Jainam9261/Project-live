import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const textareaBase =
  'w-full rounded-2xl border border-hexfn-green/20 bg-hexfn-bg px-4 py-3 text-hexfn-text placeholder-hexfn-text-muted focus:border-hexfn-green focus:outline-none focus:ring-2 focus:ring-hexfn-green/20 transition-colors resize-y min-h-[120px] text-base';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, error, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cn(textareaBase, error && 'border-red-500 focus:ring-red-500/20', className)}
      {...props}
    />
  );
});
