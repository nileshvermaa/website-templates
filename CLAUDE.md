# CLAUDE.md — `starta`

This branch is a dark-themed embedded-fintech landing page, design-inspired by
[highnote.com](https://highnote.com/). The brand name in the markup is **Strata**
(a fictional fintech) — all copy is original, the card mockups are CSS-only, and
no Highnote assets are reproduced. Use it as a starting point for any card-
issuing, payments, or embedded-finance product.

## Look and feel

- Warm near-black palette (`#0a0908`) with a lime accent (`#d3ff3d`) and cream
  text (`#f5f1e8`). SVG noise overlay on the body for grain.
- Editorial serif (Instrument Serif) for headlines and italic accents, paired
  with Onest as the body sans and JetBrains Mono for technical metadata.
- Hero centerpiece: a CSS 3D card stack with three floating credit-card
  mockups (debit / lime / cream), individually keyframed.
- Horizontal client marquee with pause-on-hover; animated stat counters via
  `IntersectionObserver`; pillar cards in a 2×2 grid with hairline divider.

## Implementation

- `src/App.tsx` — single-file React app: PromoBar, Nav, Hero (with card-stack
  parallax via mouse-pos CSS vars), Marquee, CardShowcase, Pillars, Stats
  (count-up on intersect), Quote, CTA, Footer.
- `src/styles.css` — design tokens, all section styles, card mockup styles,
  responsive breakpoints at 1080px and 720px.
- React 19 + Vite 8 + TypeScript. `base: './'` so assets resolve under the
  GitHub Pages sub-path.

## Commands

```sh
npm install
npm run build
```

## Notes

- `package-lock.json` is intentionally **not committed** — Vite 8 uses Rolldown,
  whose native binding is platform-specific, and a Windows-generated lockfile
  fails `npm ci` on the Linux CI runner. The deploy workflow falls back to
  `npm install` when no lockfile is present.
- All brand names ("Strata", "Folio", "Halcyon", etc.) are fictional placeholders.
