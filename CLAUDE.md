# CLAUDE.md - `commercial-space-planner` branch

This branch contains **Plot Studio**, a production-grade React and Three.js web
app for planning commercial interiors.

## Product

Plot Studio is an interactive 3D planner for cafes, co-working offices,
boutiques, and restaurants. Users can load starter layouts, place fixtures,
drag and rotate items, switch between floor-plan and 3D views, recolor branded
fixtures, validate capacity and exits, estimate fit-out cost, animate egress
paths, and export a PDF layout sheet.

## Stack

- React 19 + TypeScript
- Vite
- Three.js for the measured 3D planner canvas
- jsPDF for client-side PDF export
- Vanilla CSS in `src/styles/app.css`

## Commands

```sh
npm install
npm run dev
npm run build
npm run lint
```

## File Map

| File | Role |
| --- | --- |
| `src/App.tsx` | React product shell, planner state, panels, export flow |
| `src/planner/scene-engine.ts` | Three.js engine: rendering, picking, dragging, camera, egress, snapshots |
| `src/planner/catalog.ts` | Fixture metadata, template data, and Three.js object builders |
| `src/planner/metrics.ts` | Capacity, density, exits, and cost calculations |
| `src/planner/types.ts` | Shared planner domain types |
| `src/styles/app.css` | Responsive product UI and visual system |
| `vite.config.ts` | Vite config with relative base for GitHub Pages subpath deploys |

## Architecture Notes

- React owns the planner domain state. The Three.js engine receives state via
  `sync()` and emits item/selection changes through callbacks.
- The fixture catalog is typed and separated from UI code so future asset
  libraries, pricing tables, and templates can be added safely.
- The 3D engine is intentionally imperative and isolated. Keep rendering,
  raycasting, camera motion, and WebGL disposal inside `scene-engine.ts`.
- PDF export lazy-loads `jspdf` from `App.tsx` so the initial planner bundle is
  focused on the interactive canvas.
- `base: './'` is required because GitHub Pages deploys this branch under a
  subpath such as `/website-templates/commercial-space-planner/`.

## Extension Points

- Add a fixture by adding a catalog entry and a builder in `src/planner/catalog.ts`.
- Add a template by adding a `TEMPLATES` entry with room dimensions and item coordinates.
- Add persistence by serializing `PlannerState`; it is already clean domain state.
- Add collaboration or backend sync above React state without changing the Three.js engine boundary.
