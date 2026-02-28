import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/constants/site';
import { useNavbarScrollState } from '@/hooks';
import { slideInRight } from '@/utils/motion';

/**
 * Header — light premium nav, shrink-on-scroll, mobile menu with slide-in.
 */
export function Header() {
  const scrolled = useNavbarScrollState(48);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.header
      role="banner"
      initial={false}
      animate={{
        paddingTop: scrolled ? 12 : 20,
        paddingBottom: scrolled ? 12 : 20,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out-expo ${
        scrolled
          ? 'bg-hexfn-bg/90 backdrop-blur-xl shadow-soft border-b border-hexfn-green/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Hexfn Limited home">
          <img
            src="/assets/logo/hexfn-logo.svg"
            alt="Hexfn Limited"
            className={`transition-all duration-500 ease-out-expo ${scrolled ? 'h-8' : 'h-10'} w-auto`}
            width={scrolled ? 120 : 150}
            height={scrolled ? 32 : 40}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-hexfn-green focus:text-hexfn-green ${
                location.pathname === link.href ? 'text-hexfn-green' : 'text-hexfn-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center rounded-2xl bg-hexfn-cta px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-cta-glow focus:outline-none focus:ring-2 focus:ring-hexfn-cta focus:ring-offset-2 focus:ring-offset-hexfn-bg"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 rounded-2xl bg-hexfn-cta-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-3 min-w-[44px] min-h-[44px] rounded-2xl text-hexfn-navy hover:bg-hexfn-green-muted focus:outline-none focus:ring-2 focus:ring-hexfn-green transition-colors flex items-center justify-center"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-hexfn-navy/20 backdrop-blur-sm lg:hidden"
              aria-hidden
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInRight}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white/98 backdrop-blur-xl border-l border-hexfn-green/10 shadow-elevated lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-4 sm:px-6 pt-6 pb-4 border-b border-hexfn-green/10">
                <span className="text-sm font-medium text-hexfn-text">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-3 min-w-[44px] min-h-[44px] rounded-2xl text-hexfn-navy hover:bg-hexfn-green-muted focus:outline-none focus:ring-2 focus:ring-hexfn-green flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav
                aria-label="Mobile navigation"
                className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col gap-1"
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.25 }}
                  >
                    <Link
                      to={link.href}
                      className="block py-4 px-3 min-h-[48px] text-base font-medium text-hexfn-navy hover:text-hexfn-green hover:bg-hexfn-green-muted rounded-xl transition-colors flex items-center"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 pt-6 border-t border-hexfn-green/10"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center min-h-[48px] rounded-2xl bg-hexfn-cta px-6 py-3.5 text-base font-semibold text-white shadow-soft hover:shadow-cta-glow transition-shadow"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
