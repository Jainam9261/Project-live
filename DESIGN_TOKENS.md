# Hexfn Limited — Design Tokens

Design tokens used across the site. Defined in `tailwind.config.cjs`, `src/utils/tokens.ts`, and `src/styles/globals.css` (CSS variables).

## Color palette

| Token        | Hex       | Usage                          |
|-------------|-----------|---------------------------------|
| `--brand-navy` | `#0a1e33` | Primary background, headings    |
| `--brand-green` | `#0d7a52` | Brand accent, links, focus      |
| `--charcoal`   | `#374151` | Body text, subheads            |
| `--muted`      | `#6b7280` | Muted text, meta                |
| `--bg-light`   | `#f8fafc` | Page/section background         |
| `--cta`        | `#ea580c` | CTA buttons, high-contrast     |

### Tailwind usage

- `text-hexfn-navy`, `bg-hexfn-navy`
- `text-hexfn-green`, `bg-hexfn-green`
- `text-hexfn-charcoal`, `bg-hexfn-charcoal`
- `text-hexfn-muted`, `bg-hexfn-muted`
- `bg-hexfn-bg-light`
- `bg-hexfn-cta`, `text-hexfn-cta`

### CSS variables

Use in custom CSS or when Tailwind doesn’t fit:

```css
color: var(--brand-navy);
background: var(--cta);
```

## Typography

- **Headings**: `font-heading` → Poppins (fallback: system-ui, sans-serif).
- **Body**: `font-body` → Inter (fallback: system-ui, sans-serif).

Preload in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
```

## Spacing

Base unit: **8px**. Tailwind spacing scale is used; custom tokens in `tokens.ts`: `spacing.unit`, `spacing.xs` … `spacing['3xl']`.

## Radii

- `rounded-2xl` → 1rem (cards, modals).
- `rounded-3xl` → 1.5rem where needed.
- CSS: `--radius-2xl: 1rem`.

## Shadows

- `shadow-soft`: `0 4px 14px 0 rgba(14, 37, 64, 0.08)` — cards, buttons.
- `shadow-elevated`: `0 10px 40px -10px rgba(14, 37, 64, 0.15)` — hover, modals.
- `shadow-card`: `0 2px 12px rgba(14, 37, 64, 0.06)` — subtle cards.

## CTA contrast

- On **navy** background: use `--cta` (#FF6B35) or white for buttons.
- On **light** background: use `--brand-green` or `--cta` for primary actions.
- Focus ring: `focus:ring-hexfn-green` for accessibility.

## Curved accent (logo-inspired)

Use the `.accent-arc` class for a small green arc under headings:

```html
<h2 class="accent-arc">Heading</h2>
```

Defined in `globals.css` as a pseudo-element (green bar, 48px wide, 4px height).

## Gradient band (hero)

Use `.gradient-band` for the overlay under hero text (navy gradient bottom to transparent).
