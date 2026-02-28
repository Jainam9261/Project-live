import { Link } from 'react-router-dom';

/**
 * StickyCta — mobile-only bottom bar "Get a Quote"; light theme.
 */
export function StickyCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-hexfn-green/10 bg-hexfn-bg/95 backdrop-blur-xl py-3 px-4 lg:hidden"
      aria-label="Request a quote"
    >
      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-6 py-3.5 text-sm font-semibold text-white w-full max-w-xs sm:max-w-sm shadow-soft hover:shadow-cta-glow transition-shadow min-h-[48px]"
      >
        Get a Quote
      </Link>
    </div>
  );
}
