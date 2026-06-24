# CLAUDE.md - `bugtester-dev`

This branch is a screenshot-faithful React recreation of a Bugster-style landing
page supplied as a PDF.

## Implementation

- The PDF contained full embedded screenshot images.
- Four extracted slices are stored in `public/bugster-reference/`.
- `src/App.tsx` renders those slices in order with anchor navigation.
- `src/styles.css` handles page framing, sticky quick nav, and accessibility.

## Commands

```sh
npm install
npm run build
npm run lint
```

## Notes

- This is intentionally image-faithful rather than component-rebuilt, because the
  user requested the closest possible match including colors, fonts, and images.
- If the design later needs editable HTML sections, use these slices as the visual
  reference and rebuild section-by-section with semantic components.
