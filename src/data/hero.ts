/** Hero carousel slide and product copy for Hexfn Limited. */
import type { HeroSlide } from '@/types';

/** Placeholder images — eco cups / packaging (Unsplash). */
const heroImages = {
  hero1: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920',
  hero2: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1920',
  hero3: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1920',
};

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    headline: 'Biodegradable Coffee Cups',
    subline: 'Crafted from renewable plant fibers. PLA or water-based lining — fully compostable and heat-resistant.',
    ctaText: 'View Products',
    ctaHref: '/products',
    image: heroImages.hero1,
    imageAlt: 'Eco-friendly biodegradable coffee cups on display',
  },
  {
    id: '2',
    headline: 'Eco Packaging That Performs',
    subline: 'Leak-proof, premium finish, and available in 4oz to 16oz. Perfect for hot beverages.',
    ctaText: 'Get a Quote',
    ctaHref: '/contact',
    image: heroImages.hero2,
    imageAlt: 'Close-up of compostable cup with ergonomic grip',
  },
  {
    id: '3',
    headline: 'Custom Branding for Your Business',
    subline: 'Personalize with your logo and designs. Vegetable-based packaging — from cup to delivery.',
    ctaText: 'Custom Branding',
    ctaHref: '/custom-branding',
    image: heroImages.hero3,
    imageAlt: 'Custom branded compostable cups at an event',
  },
];

export const valuePropositionCopy =
  'Our innovative biodegradable coffee cups are crafted from renewable plant fibers, ensuring an environmentally friendly choice that avoids conventional plastics. Each cup features either a PLA (polylactic acid) lining or a water-based lining, making them fully compostable and suitable for hot beverages. Engineered for high-performance, they are heat-resistant and leak-proof, providing excellent insulation that keeps your drinks at the perfect temperature for longer.';

export const valuePropositionShort =
  'Designed with user comfort in mind, these cups boast a textured, ergonomic grip and a sleek, premium finish. Available in 4oz, 8oz, 12oz, and 16oz. Custom branding and vegetable-based packaging available.';
