# CLAUDE.md - `calculus-visualizer`

This branch contains **Calculus Atlas**, a React and TypeScript web app for
interactive calculus visualization.

## Product Direction

- Visualize derivatives, integrals, and limits through pure illustrated math.
- Avoid photography; use graph-paper, curves, tangent lines, Riemann rectangles,
  epsilon-delta bands, and proof cards.
- Vibe: rigorous, beautiful, intuitive, exam-ready.

## Stack

- React 19 + TypeScript
- Vite
- KaTeX
- Custom SVG plotting
- Vanilla CSS in `src/styles.css`

## File Map

| File | Role |
| --- | --- |
| `src/App.tsx` | All interactive calculus components and graph helpers |
| `src/styles.css` | Navy/paper graph-paper design system |
| `src/main.tsx` | React entry and KaTeX CSS import |
| `vite.config.ts` | Vite config with relative `base` for Pages subfolders |

## Commands

```sh
npm install
npm run dev
npm run build
npm run lint
```

## Extension Notes

- Keep graph interactions SVG-based unless a future feature needs WebGL.
- Preserve cursor-anchored zoom and drag-pan behavior for plot surfaces.
- Add new math labs as separate sections inside `src/App.tsx` or split into
  components once the app grows further.
- KaTeX formula popovers are implemented through the `MathTerm` component.
