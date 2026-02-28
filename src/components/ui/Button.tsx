import { motion } from 'framer-motion';

/**
 * Button — primary / secondary / outline; hover glow, subtle scale; supports href or button.
 */
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-hexfn-green focus:ring-offset-2 focus:ring-offset-hexfn-bg disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary:
      'bg-hexfn-cta text-white shadow-soft hover:shadow-cta-glow hover:bg-hexfn-cta-hover px-5 py-2.5 text-sm',
    secondary:
      'bg-hexfn-green text-white shadow-soft hover:shadow-green-glow px-5 py-2.5 text-sm',
    outline:
      'border-2 border-hexfn-green text-hexfn-green hover:bg-hexfn-green-muted px-5 py-2.5 text-sm',
  };
  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={combined}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
