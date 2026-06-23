# CLAUDE.md — `fitness-studio` Template

This template is a high-end, dark-themed fitness studio landing page called **APEX GRID**. It uses bold contrasts, high-density layout grids, neon orange highlights, and high-performance branding to convey strength, precision, and hardcore community belonging.

## Dev Commands

- **Start Dev Server**: `npm run dev` (Served at `http://localhost:5173`)
- **Production Build**: `npm run build` (Outputs optimized assets to `dist/`)
- **Preview Production Build**: `npm run preview`

## Tech Stack

- **Core**: React 18 + TypeScript + Vite
- **Styling**: Vanilla CSS (modular, customized variables for colors and borders, CSS animations)
- **Icons**: `lucide-react` (clean vector geometry)

## File Map

```
f:\website-templates/
├── index.html            # Google Fonts Loader (Bebas Neue, Barlow Condensed, Inter)
├── package.json          # Vite & React configurations
├── vite.config.ts        # Custom configuration (asset paths relative for Pages)
├── src/
│   ├── main.tsx          # App entry point
│   ├── index.css         # Global design system, typography, grain overlay, parallax drift
│   ├── App.tsx           # Main application structure & dynamic states
│   └── App.css           # Grid styles, 3D card flips, carousel drag handlers
└── public/               # Asset folder
```

## Key Aesthetic & Interactive Mechanisms

1. **Grain Parallax**: Custom SVG noise background defined in `src/index.css`. React listens to page scroll events and updates a `--scroll-top` CSS variable on the document element, drifting the grain vertically to create a deep, textured, multi-dimensional dark theme.
2. **Slow-Motion Training Loop**: Background video hero that auto-plays in grayscale/high-contrast. Includes an unmute control button synced via React ref.
3. **3D Coach Flip Cards**: Built using hardware-accelerated 3D transforms (`rotateY(180deg)` and `backface-visibility: hidden`). Hovering flips the coach's front face to reveal details, certifications, and signature workouts.
4. **Member Story Carousel**: Custom touch/mouse drag-to-swipe tracker implemented with pure React state. Supports auto-advancing slide intervals and dynamic damping (rubber-band easing) when dragging past the boundaries.
5. **Sticky Pulse CTA**: Snaps into place as a bottom sticky banner as soon as the user scrolls past the main hero fold.
