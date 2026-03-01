/** Shared types for Hexfn Limited site — products, nav, forms, etc. */

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Product {
  id: string;
  name: string;
  size: string;
  liningType: 'PLA' | 'water-based';
  customBranding: boolean;
  image: string;
  description: string;
  sizes?: string[];
}

export interface HeroSlide {
  id: string;
  headline: string;
  subline: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image: string;
  imageAlt: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  company?: string;
  message: string;
}
