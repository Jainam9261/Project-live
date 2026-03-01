import { render, screen } from '@testing-library/react';
import { HeroCarousel } from '../sections/HeroCarousel';
import { heroSlides } from '@/data/hero';

describe('HeroCarousel', () => {
  it('renders hero section with first slide headline', () => {
    render(<HeroCarousel slides={heroSlides} />);
    expect(screen.getByRole('region', { name: /hero carousel/i })).toBeInTheDocument();
    expect(screen.getByText(heroSlides[0].headline)).toBeInTheDocument();
  });

  it('renders CTA link for first slide', () => {
    render(<HeroCarousel slides={heroSlides} />);
    const cta = screen.getByRole('link', { name: heroSlides[0].ctaText });
    expect(cta).toHaveAttribute('href', heroSlides[0].ctaHref);
  });
});
