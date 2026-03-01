import { useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, LOGO_LIGHT_URL } from '@/constants/site';
import { useNavbarScrollState } from '@/hooks';
import { slideInRight } from '@/utils/motion';

/**
 * Header — light premium nav, shrink-on-scroll, mobile menu with slide-in.
 */
interface HeaderProps {
  mobileMenuOpen?: boolean;
  onMobileMenuOpenChange?: (open: boolean) => void;
}

export function Header({ mobileMenuOpen = false, onMobileMenuOpenChange }: HeaderProps) {
  const scrolled = useNavbarScrollState(48);
  const [internalOpen, setInternalOpen] = useState(false);
  const location = useLocation();

  const isOpen = onMobileMenuOpenChange ? mobileMenuOpen : internalOpen;
  const setIsOpen = onMobileMenuOpenChange ?? setInternalOpen;

  // Lock scroll without moving the page — no position:fixed so no scroll-to-top
  const applyScrollLock = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };

  const removeScrollLock = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };

  useEffect(() => {
    if (onMobileMenuOpenChange) onMobileMenuOpenChange(false);
  }, [location.pathname, onMobileMenuOpenChange]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    applyScrollLock();
    return removeScrollLock;
  }, [isOpen]);

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-7xl gap-4">
        <Link to="/" className="flex items-center shrink-0 min-w-0 focus:outline-none focus:ring-2 focus:ring-hexfn-green/40 focus:ring-offset-2 rounded-lg" aria-label="Hexfn Limited home">
          <img
            src={LOGO_LIGHT_URL}
            alt="Hexfn Limited"
            className={`w-auto max-w-[130px] sm:max-w-[150px] md:max-w-[180px] object-contain object-left transition-all duration-500 ease-out-expo ${
              scrolled ? 'h-8' : 'h-9 sm:h-10'
            }`}
            width={180}
            height={48}
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
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            } else {
              setIsOpen(false);
            }
          }}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-[9998] bg-hexfn-navy/25 backdrop-blur-md lg:hidden touch-none"
                  aria-hidden
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  id="mobile-menu"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={slideInRight}
                  className="fixed top-0 right-0 z-[9999] h-full w-full max-w-sm bg-white/85 backdrop-blur-2xl lg:hidden flex flex-col border-l border-white/40 shadow-[0_0_40px_rgba(34,168,83,0.08)]"
                >
                  <div className="flex items-center justify-between px-4 sm:px-6 pt-6 pb-4 border-b border-hexfn-green/15 bg-white/50 backdrop-blur-sm">
                    <span className="text-xl font-bold tracking-tight text-hexfn-navy">Menu</span>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                      className="p-3 min-w-[44px] min-h-[44px] rounded-2xl text-hexfn-navy/80 hover:text-hexfn-green hover:bg-hexfn-green/10 focus:outline-none focus:ring-2 focus:ring-hexfn-green flex items-center justify-center transition-colors"
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
                          className={`flex items-center py-4 px-3 min-h-[48px] text-base font-semibold rounded-xl transition-all duration-200 ${
                            location.pathname === link.href
                              ? 'text-hexfn-green bg-hexfn-green/10'
                              : 'text-hexfn-navy/90 hover:text-hexfn-green hover:bg-hexfn-green/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 pt-6 border-t border-hexfn-green/15"
                    >
                      <Link
                        to="/contact"
                        className="flex items-center justify-center min-h-[48px] rounded-2xl bg-hexfn-cta px-6 py-3.5 text-base font-semibold text-white shadow-soft hover:shadow-cta-glow transition-shadow"
                        onClick={() => setIsOpen(false)}
                      >
                        Get a Quote
                      </Link>
                    </motion.div>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  );
}
