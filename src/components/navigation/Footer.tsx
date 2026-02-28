import { Link } from 'react-router-dom';
import { QUICK_LINKS } from '@/constants/site';

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
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <img
                src="/assets/logo/hexfn-logo-white.svg"
                alt="Hexfn Limited"
                className="h-9 sm:h-10 w-auto mx-auto md:mx-0"
                width={150}
                height={40}
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
                    className="text-white/75 hover:text-hexfn-green-light text-sm transition-colors inline-block py-1 min-h-[44px] flex items-center justify-center md:justify-start"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-4 sm:mb-5">Newsletter</h3>
            <p className="text-white/75 text-sm mb-4 max-w-sm mx-auto md:mx-0">Stay updated on new products and sustainability news.</p>
            <form
              className="flex flex-col sm:flex-row gap-2 max-w-xs sm:max-w-none mx-auto md:mx-0"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/55 focus:border-hexfn-green-light focus:outline-none focus:ring-1 focus:ring-hexfn-green-light transition-colors min-h-[48px]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-2xl bg-hexfn-cta px-4 py-3 text-sm font-semibold text-white hover:bg-hexfn-cta-hover transition-colors focus:outline-none focus:ring-2 focus:ring-hexfn-cta focus:ring-offset-2 focus:ring-offset-[#142844] min-h-[48px]"
              >
                Subscribe
              </button>
            </form>
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

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
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
