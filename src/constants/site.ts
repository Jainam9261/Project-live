/**
 * Site-wide constants — navigation, contact, and config.
 * Single source of truth for links and contact channels.
 */

export const SITE_NAME = 'Hexfn Limited';

/** Logo paths — your brand logo files (see public/assets/logo/LOGO_SPECS.md for dimensions). */
export const LOGO_LIGHT_URL = '/assets/logo/hexfn-logo.png';
export const LOGO_DARK_BG_URL = '/assets/logo/hexfn-logo-white.png';

/** WhatsApp: use full international number without + or spaces. Open in chat with optional message. */
export const WHATSAPP_NUMBER = '447770514867';
export const WHATSAPP_MESSAGE = "Hi! Can I get more details about your products?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Build WhatsApp URL with a product-specific quote message. */
export function getWhatsAppUrlForProduct(productName: string): string {
  const message = `Hi, I'm interested in your "${productName}". Could you please provide more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Import & Export', href: '/import-export' },
  { label: 'Custom Branding', href: '/custom-branding' },
  { label: 'Contact', href: '/contact' },
] as const;

export const QUICK_LINKS = NAV_LINKS;
