# Plot Studio - Commercial Space Planner

Production-grade React web app for planning cafes, co-working offices, boutiques,
and restaurants in measured 3D.

## Stack

- React 19 + TypeScript
- Vite
- Three.js for the interactive planning canvas
- jsPDF for client-side layout sheet exports
- Vanilla CSS with a product-specific design system

## What It Does

- Load commercial starter templates.
- Place, select, drag, rotate, and delete fixtures.
- Switch between measured floor-plan and 3D camera modes.
- Recolor branded fixtures from a global brand palette.
- Track capacity, density, recommended occupancy, exits, and fit-out cost.
- Visualize animated fire-egress paths.
- Export a client-ready PDF layout sheet.

## Architecture

- `src/App.tsx` owns React state and product UI.
- `src/planner/catalog.ts` contains typed fixture metadata, template data, and Three.js object builders.
- `src/planner/metrics.ts` calculates capacity, density, exits, and costs.
- `src/planner/scene-engine.ts` owns Three.js rendering, camera controls, picking, dragging, egress animation, and snapshots.
- `src/styles/app.css` contains the visual system and responsive layout.

This structure keeps the Three.js engine isolated from React panels, making it
straightforward to add future features such as saved projects, accounts,
collaboration, custom asset uploads, constraint solving, or backend persistence.

## Development

```sh
npm install
npm run dev
npm run build
npm run lint
```

The Vite config uses `base: './'` so this branch can be deployed under a
GitHub Pages subpath such as `/website-templates/commercial-space-planner/`.
