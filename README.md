# Hexfn Limited — Static React Website

A high-quality, fully responsive static React website for **Hexfn Limited** (import/export of renewable, biodegradable coffee cups and eco packaging). Built with Vite, React, TypeScript, Tailwind CSS, Framer Motion, Lenis smooth scroll, and Swiper.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** — styling and design tokens
- **Framer Motion** — page and component transitions, micro-interactions
- **Lenis** — smooth scrolling
- **Swiper** — hero carousel
- **GSAP** (optional, for advanced scroll effects) — available; use with code-splitting where needed
- **React Helmet Async** — meta tags per page
- **React Intersection Observer** — scroll-triggered reveals

## Design

- **Colors**: Brand navy `#0a1e33`, green `#0d7a52`, CTA `#ea580c`, charcoal, muted, light background. See `DESIGN_TOKENS.md`.
- **Typography**: Poppins (headings), Inter (body). Preloaded in `index.html`.
- **Responsive**: Desktop-first, breakpoints `sm`, `md`, `lg`, `xl`. Fluid typography and spacing.
- **Floating actions**: WhatsApp icon (bottom-right) and “Request Quote” (desktop: pill left of WhatsApp; mobile: bottom bar). Configure WhatsApp in `src/constants/site.ts`.

## Project structure

Production-oriented, feature-based architecture:

```
src/
  app/router/     — routes (lazy-loaded pages, MainLayout, PageTransition)
  app/providers/   — SmoothScrollProvider
  app/layout/      — MainLayout, PageLayout
  components/ui/   — Button, Card, Modal, Input, Textarea, Badge, Section, Container, SectionTitle, AnimatedReveal, etc.
  components/navigation/ — Header, Footer
  components/sections/   — HeroCarousel, Features, ProductHighlight, CtaSection, ContactForm, etc.
  features/home/   — HomePage, data (hero)
  features/products/, blog/ — data re-exports
  hooks/           — useScrollToTop, useIntersectionReveal, useCarousel, useNavbarScrollState, useScrollProgress
  utils/           — motion (animation variants), cn, tokens
  constants/       — site, design (spacing, duration, easing), routes
  types/           — index.ts (NavLink, Product, HeroSlide, BlogPost, etc.)
  data/            — hero, products, blog
  pages/           — route entry points (e.g. Home re-exports features/home)
  styles/          — globals.css
```

- **Layout**: MainLayout wraps every route. Use `Section` + `Container` for consistent section padding/width.
- **Motion**: Variants in `utils/motion.ts`; durations/easing in `constants/design.ts`.
- **Routing**: Centralized in `app/router/routes.tsx`. ScrollToTop via `useScrollToTop` in App.

## Installation

```bash
cd hexfn-website
npm install
```

If you see **“Cannot find type definition file for 'node'”** when running `npm run typecheck`, ensure `npm install` completed successfully (so `node_modules/@types/node` exists). If it still fails, try closing editors that might lock `node_modules`, or run the terminal as Administrator. The project uses `tsconfig.node.json` with `typeRoots: ["./node_modules/@types"]` for Vite’s config.

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Production build (`dist/`) |
| `npm run typecheck` | Run TypeScript compiler check (`tsc -b`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format with Prettier |
| `npm run test` | Run Vitest (watch) |
| `npm run test:run` | Run Vitest once |

## Deploy (Netlify / Vercel)

### Netlify

1. Connect your repo to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Optional: add `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Vercel

1. Import the project in Vercel.
2. Framework preset: Vite. Build command: `npm run build`, output: `dist`.

### Environment

No env vars required for static build. For production contact form, set your Formspree form ID (see below).

## Replacing content and assets

### Product / hero copy

- **Hero slides**: `src/data/hero.ts` — edit `heroSlides`, `valuePropositionCopy`, `valuePropositionShort`.
- **Products**: `src/data/products.ts` — edit the `products` array (name, size, liningType, image path, description).
- **Blog**: `src/data/blog.ts` — edit `blogPosts` (title, excerpt, slug, date, image).

### Images

- **Logo**: Place `hexfn-logo.png` and `hexfn-logo-white.png` in `public/assets/logo/`.
- **Hero**: Place `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` in `public/assets/hero/` (or rely on Unsplash fallbacks in code).
- **Products**: Place product images in `public/assets/products/` and reference in `src/data/products.ts` (e.g. `/assets/products/cup-8oz.jpg`).

For best performance, provide AVIF/WebP variants and use `srcset` in components (see product/hero components for patterns).

### Contact form (Formspree / Netlify Forms)

- **Formspree**: Create a form at [formspree.io](https://formspree.io), get the form ID, then in `src/components/sections/ContactForm.tsx` set `action` to `https://formspree.io/f/YOUR_FORM_ID` and ensure the form uses `method="POST"` and `name` attributes (already set).
- **Netlify Forms**: Add `name="contact"` and `data-netlify="true"` to the form, and add a hidden input for Netlify bot. See [Netlify Forms docs](https://docs.netlify.com/forms/setup/).

## SEO and accessibility

- Semantic HTML, landmark regions, heading hierarchy.
- Meta tags per page via `react-helmet-async`.
- Skip-to-content link, focus outlines, `aria-*` where needed.
- `public/sitemap.xml` and `public/robots.txt` — replace `https://yoursite.com` with your production URL after deploy.

## Design decisions

- **Static only**: No SSR; Vite outputs static files. All pages are client-rendered with client-side routing.
- **Lenis**: Loaded once in `SmoothScrollProvider`; syncs with `requestAnimationFrame`.
- **GSAP**: Included in deps; use dynamic import on pages that need ScrollTrigger/parallax to keep initial bundle smaller.
- **Lighthouse**: Target 90+; use lazy loading, code splitting, and optimized images. Optional: add a simple Workbox service worker for caching (tradeoff: cache invalidation and complexity).

## Optional: demo video

Record a short demo of the hero carousel and scroll animations and place it in `public/demo/` (e.g. `hero-demo.gif`). Link to it from the README or a dedicated page.

## License

Private — Hexfn Limited.
"# Project-live" 
