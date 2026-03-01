import { Link } from 'react-router-dom';
import { QUICK_LINKS, LOGO_DARK_BG_URL } from '@/constants/site';

/**
 * Footer — quick links, newsletter, social, legal.
 */
export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative bg-[#142844] text-white/90 border-t border-hexfn-green/15"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#142844] via-[#12243e] to-[#0e2238] opacity-95" />
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center justify-center md:justify-start mb-4 sm:mb-6 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#142844] rounded-lg">
              <img
                src={LOGO_DARK_BG_URL}
                alt="Hexfn Limited"
                className="h-8 w-auto max-w-[140px] sm:h-9 sm:max-w-[160px] md:h-10 md:max-w-[180px] object-contain object-left mx-auto md:mx-0 invert mix-blend-lighten"
                width={180}
                height={48}
                loading="lazy"
              />
            </Link>
            <p className="text-white/75 text-sm max-w-xs leading-relaxed mx-auto md:mx-0">
              Renewable, biodegradable coffee cups and eco packaging. Import & export you can trust.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-4 sm:mb-5">Quick links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/75 hover:text-hexfn-green-light text-sm transition-colors py-1 min-h-[44px] flex items-center justify-center md:justify-start"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-4 sm:mb-5">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-start" aria-label="Social links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-hexfn-green-light transition-colors rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-hexfn-green-light transition-colors rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-hexfn-green-light transition-colors rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-hexfn-green-light transition-colors rounded-full p-2 hover:bg-white/10"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left pb-8 lg:pb-4">
          <p className="text-white/65 text-sm">© {new Date().getFullYear()} Hexfn Limited. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8 text-sm">
            <Link to="/privacy" className="text-white/65 hover:text-hexfn-green-light transition-colors min-h-[44px] flex items-center justify-center">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/65 hover:text-hexfn-green-light transition-colors min-h-[44px] flex items-center justify-center">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
