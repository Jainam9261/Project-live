/**
 * Site-wide constants — navigation, contact, and config.
 * Single source of truth for links and contact channels.
 */

export const SITE_NAME = 'Hexfn Limited';

/** WhatsApp: use full international number without + or spaces. Open in chat with optional message. */
export const WHATSAPP_NUMBER = '441234567890';
export const WHATSAPP_MESSAGE = 'Hi, I\'d like to request a quote for eco packaging.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Import & Export', href: '/import-export' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Custom Branding', href: '/custom-branding' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const QUICK_LINKS = NAV_LINKS;
