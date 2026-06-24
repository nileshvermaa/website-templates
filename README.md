# Calculus Atlas

Interactive React web app for visualizing derivatives, integrals, and limits.

## Concept

Calculus Atlas is a rigorous, beautiful, exam-ready visualization site. It uses
pure illustrated graphs, KaTeX-rendered formulas, and interactive SVG plotting
tools instead of photography or static diagrams.

## Features

- Hero tangent line sweeping along `sin(x)` with adjustable speed.
- Derivatives lab: drag a point on `f(x)` and see the tangent slope update live.
- Side-by-side function and derivative views.
- Integrals lab: Riemann rectangles animate as the partition slider changes.
- Limits lab: epsilon-delta proof window with snapping delta and confirmation flash.
- Hoverable formula terms with definition popovers.
- Step-through proof practice controlled by button or `N` / right-arrow key.
- Plot areas support wheel zoom and drag pan with a cursor-anchored math grid.

## Stack

- React 19 + TypeScript
- Vite
- SVG-based custom plotting
- KaTeX for math rendering
- CSS graph-paper design system

## Commands

```sh
npm install
npm run dev
npm run build
npm run lint
```

`vite.config.ts` uses `base: './'` so this site works when deployed under the
GitHub Pages branch folder `/website-templates/calculus-visualizer/`.
