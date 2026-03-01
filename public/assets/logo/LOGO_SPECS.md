# Hexfn brand logo — specs for this project

Use **your** brand logo here. Recommended:

## Files to add

| File | Use | Dimensions |
|------|-----|------------|
| **hexfn-logo.png** | Header (light background) | **300 × 80 px** (or 450 × 120 px for retina). PNG, transparent or white background. |
| **hexfn-logo-white.png** | Footer (dark blue background) | Same size as above, but **white / light** artwork so it’s visible on dark. |

- **Aspect ratio:** About **3.75 : 1** (wide rectangle) works well for nav and footer.
- **Format:** PNG with transparency preferred.
- If you only have one version (e.g. dark on white), use it for `hexfn-logo.png`; we can use the same file for the footer and invert it with CSS if needed.

## Favicon (browser tab)

The app uses **hexfn-logo.png** as the favicon as well (browsers scale it). For a square icon, add **hexfn-favicon.png** at 32×32 or 64×64 px and we can point the favicon to it.

Place these files in this folder (`public/assets/logo/`). The app is already set to load `hexfn-logo.png` and `hexfn-logo-white.png`.
