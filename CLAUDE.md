# CLAUDE.md — `japandi-wellness` branch

> One template per branch. This branch holds **Nagi**, a Japandi wellness
> landing page. Repo-wide conventions live in `CLAUDE.md` on the `main` branch.

## What this is

**Nagi** (凪 — "the calm when the wind drops") — a single-page marketing site for
a fictional *mindful-living membership*. The brief: Japandi aesthetic (Japanese
zen minimalism × Scandinavian hygge), a meditative scroll that arcs from arrival →
trust → a warm invitation, with motion that moves "like slow exhalations".

Use this branch as a starting point for any **calm, editorial, content-led
landing page** (wellness, ceramics, slow brands, boutique services).

## Stack & how to run

- **React 18 + Vite** (JSX, no TypeScript). No CSS framework — bespoke CSS.
- Install: `npm install` · Dev: `npm run dev` (port **4399**) · Build: `npm run build` → `dist/`.
- Preview config: `.claude/launch.json` (server name `nagi`).
- **`vite.config.js` sets `base: './'`** — this is REQUIRED so built asset URLs
  are relative and the site works under the Pages sub-path
  `…/website-templates/japandi-wellness/`. Do not remove it.

## File map

| File | Role |
| --- | --- |
| `index.html` | Vite entry; loads Google Fonts (Zen Old Mincho, Zen Kaku Gothic New, Caveat) |
| `src/main.jsx` | React root |
| `src/App.jsx` | **All page content + section components.** Content lives in the `practices` / `chapters` / `materials` arrays near the top — edit these to re-skin |
| `src/index.css` | **Design system + all styles.** Palette & type tokens are CSS vars in `:root` |
| `src/components/Reveal.jsx` | Incense-smoke fade-in on scroll (IntersectionObserver) |
| `src/components/Parallax.jsx` | Falling-leaf scroll drift (rAF, writes transform directly) |

## Design system (in `src/index.css` `:root`)

- **Palette:** `--paper #f3efe7` (warm linen) base, `--ink #38322b` text; accents used
  sparingly — `--terracotta`, `--sage`, `--blush`, `--indigo` (the invitation band).
- **Type:** `--serif` Zen Old Mincho (headings), `--sans` Zen Kaku Gothic New (body),
  `--hand` Caveat (handwritten eyebrows/labels).
- **Motion:** long durations (~1.5s) on `--ease`; a breathing halo + drip cue in the hero.
  All motion is gated by `@media (prefers-reduced-motion: reduce)` and the `reduce`
  check in the two component files.

## How to reuse for a real project

1. Rename the concept in `App.jsx` (nav mark, hero, footer) and rewrite the
   `practices`/`chapters`/`materials` arrays + section copy.
2. Retheme by changing the CSS variables in `:root` only — the rest cascades.
3. Reuse `<Reveal>` and `<Parallax>` anywhere; they're self-contained.
4. Wire the invitation `<form>` (currently a local "is-sent" state) to a real
   endpoint (Formspree, a serverless function, etc.).

## Deploy

Actions tab → **Deploy to GitHub Pages (static / Node)** → branch
`japandi-wellness`. The workflow runs `npm ci && npm run build` and publishes
`dist/` to the gallery. `package-lock.json` is committed so `npm ci` works.

## Known quirks

- Scroll reveals depend on `IntersectionObserver`; in a **hidden/background tab**
  (e.g. the headless preview) IO and `requestAnimationFrame` are throttled, so
  content can appear stuck at opacity 0 — this resolves the moment the tab is
  visible. Not a bug on the live page.
