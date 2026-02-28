import type { Product } from '@/types';

/** Placeholder images — coffee cups / packaging (Unsplash). */
const productImages = {
  cup8: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
  cup12: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
  cup4: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600',
  cup16: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600',
};

/** Sample products for Hexfn Limited — sizes, lining types, custom branding. */
export const products: Product[] = [
  {
    id: '1',
    name: 'Eco Cup Classic',
    size: '8oz',
    liningType: 'PLA',
    customBranding: true,
    image: productImages.cup8,
    description:
      'Our 8oz biodegradable cup with PLA lining. Heat-resistant, leak-proof, and compostable. Textured grip and premium finish.',
    sizes: ['4oz', '8oz', '12oz', '16oz'],
  },
  {
    id: '2',
    name: 'Eco Cup Water-Based',
    size: '12oz',
    liningType: 'water-based',
    customBranding: true,
    image: productImages.cup12,
    description:
      'Water-based lining option for maximum compostability. Same premium performance and ergonomic design.',
    sizes: ['8oz', '12oz', '16oz'],
  },
  {
    id: '3',
    name: 'Eco Cup 4oz',
    size: '4oz',
    liningType: 'PLA',
    customBranding: false,
    image: productImages.cup4,
    description: 'Small size ideal for espresso and short drinks. Fully compostable with PLA lining.',
    sizes: ['4oz'],
  },
  {
    id: '4',
    name: 'Eco Cup 16oz',
    size: '16oz',
    liningType: 'PLA',
    customBranding: true,
    image: productImages.cup16,
    description: 'Large format for long drinks. Excellent insulation and leak-proof. Custom branding available.',
    sizes: ['16oz'],
  },
];
