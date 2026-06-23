# CLAUDE.md — `commercial-space-planner` branch

> One template per branch. This branch holds **Plot**, a 3D commercial space
> planner. Repo-wide conventions live in `CLAUDE.md` on the `main` branch.

## What this is

**Plot** — an interactive 3D space planner for cafés, co-working offices and
boutique retail. Drag furniture/fixtures onto a floor plan, swing between a
top-down plan and a 3D perspective, track seating capacity + fire egress, recolour
branded elements live, estimate fit-out cost, and export a PDF layout sheet.

Use this branch as a starting point for any **interactive 3D / canvas tool, a
configurator, or a data-rich single-page app**.

## Stack & how to run

- **Vanilla JS, ES modules. NO build step.** Three.js (r160) + jsPDF are loaded
  from the unpkg CDN via an **import map** in `index.html`.
- It must be served over **HTTP** (ES modules + import maps don't work on `file://`).
- Preview config: `.claude/launch.json` (server name `planner`, runs
  `npx serve` on port **4321**). Any static server works.

## File map

| File | Role |
| --- | --- |
| `index.html` | Workspace markup (top bar, tool rail, canvas, panels) + import map + jsPDF tag |
| `css/styles.css` | Design system (warm white/oat/charcoal + brand accent, blueprint grid) and all layout |
| `js/catalog.js` | **Furniture/fixture 3D builders, item metadata, the 4 templates, density rules** |
| `js/main.js` | **App: Three.js scene, state, pointer interaction, capacity/cost, egress, camera swing, PDF export** |

## Architecture notes (read before editing)

- **Catalog** (`catalog.js`): each item has `{ key, cat, name, w, d, seats, cost,
  branded }` metadata plus a `build.<key>()` function returning a `THREE.Group`
  centred at the origin on `y=0`. Footprints are in **metres**.
- **Branded parts** are tagged `mesh.userData.branded = true`. The colour picker
  recolours them by traversing the scene — no per-item wiring needed. New branded
  meshes are built with the current colour via the `bbox`/`bcyl` helpers.
- **Templates** (`TEMPLATES` in `catalog.js`): `{ use, w, d, items:[{key,x,z,rot}] }`.
  `use` ∈ `assembly|office|retail` drives the capacity density (`DENSITY` map).
  Exits are normal items with `key:'exit'`; egress uses them.
- **`main.js` flow:** `buildRoom()` (floor/walls/grid) → `loadTemplate()` →
  `addItem()`. Interaction is raycast-based: placement tool clicks the floor;
  the select tool picks/drag-moves items (`itemRootOf` climbs to the item group).
  `refresh()` recomputes capacity + cost + egress after any change.
- **Camera swing** is a manual lerp tween between stored plan/3D positions
  (`camFor`, `swingCamera`, the loop in `loop()`). OrbitControls rotate is on in
  3D, off in plan.
- **PDF export** snapshots the WebGL canvas (`renderer` uses
  `preserveDrawingBuffer:true`) → builds the on-screen "sheet" with a staggered
  CSS animation → renders to A4 via jsPDF (`window.jspdf`).

## How to extend

- **Add a fixture:** write a `build.<key>()` builder + add a `CATALOG` entry.
- **Add a template:** add an entry to `TEMPLATES` with item positions in metres.
- **Re-theme:** edit the CSS variables in `:root` in `css/styles.css`.

## Deploy

Actions tab → **Deploy to GitHub Pages (static / Node)** → branch
`commercial-space-planner`. No build script, so it's published as static files.

## Known quirks

- The render loop uses `requestAnimationFrame`, which is throttled in a
  **hidden/background tab** (e.g. the headless preview) — the canvas can read
  black there. Fine on a visible page. The export path calls `renderer.render()`
  synchronously, so it works regardless.
- A `ResizeObserver` on the viewport handles canvas sizing (the one-shot init
  resize can run before layout settles).
