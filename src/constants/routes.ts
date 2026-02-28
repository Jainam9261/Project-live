/**
 * Centralized route paths — single source of truth for links and route config.
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  IMPORT_EXPORT: '/import-export',
  SUSTAINABILITY: '/sustainability',
  CERTIFICATIONS: '/certifications',
  CUSTOM_BRANDING: '/custom-branding',
  BLOG: '/blog',
  BLOG_ARTICLE: (slug: string) => `/blog/${slug}`,
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;
