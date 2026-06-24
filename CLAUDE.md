# CLAUDE.md - `bugtester-dev`

This branch is a live React recreation of a Bugster-style landing page supplied
as a PDF.

## Implementation

- `src/App.tsx` renders real landing-page sections, navigation, CTAs, cards,
  pricing, integrations, FAQ accordion, and footer.
- `src/styles.css` recreates the reference look: off-white noisy paper, subtle
  grid, black hairline cards, lime CTAs, mono headings, and blue mascot SVGs.

## Commands

```sh
npm install
npm run build
npm run lint
```

## Notes

- The original PDF remains ignored and should not be committed unless explicitly
  requested.
- Keep the page component-built; do not regress to full-page screenshots.
