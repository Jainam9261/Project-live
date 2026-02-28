import type { BlogPost } from '@/types';

/** Placeholder images — eco cups / sustainability (Unsplash). */
const blogImages = {
  cups: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
  cupSection: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
  packaging: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600',
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Choose Biodegradable Coffee Cups',
    excerpt: 'The environmental and practical benefits of switching to compostable cups.',
    slug: 'why-choose-biodegradable-coffee-cups',
    date: '2024-01-15',
    image: blogImages.cups,
    imageAlt: 'Biodegradable cups',
  },
  {
    id: '2',
    title: 'PLA vs Water-Based Lining',
    excerpt: 'Understanding the two lining options for our compostable cups.',
    slug: 'pla-vs-water-based-lining',
    date: '2024-01-10',
    image: blogImages.cupSection,
    imageAlt: 'Cup cross-section',
  },
  {
    id: '3',
    title: 'Custom Branding for Eco Packaging',
    excerpt: 'How to add your logo and messaging to compostable cups and stay on-brand sustainably.',
    slug: 'custom-branding-eco-packaging',
    date: '2024-01-05',
    image: blogImages.packaging,
    imageAlt: 'Custom branded eco packaging',
  },
];
