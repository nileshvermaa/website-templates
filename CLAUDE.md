# CLAUDE.md — `highnote-clone-full`

A modern reverse-engineering branch: **Next.js 16 + shadcn/ui + Tailwind v4**,
carrying the `clone-website` skill ported from the `web-cloner` project. This is
the first branch on the new tech stack; future clone-style templates can branch
from it.

## Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Base UI primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (supplemented by extracted SVGs in `src/components/icons.tsx`)
- **Deploy:** **static export** to the website-templates GitHub Pages gallery

## The clone-website skill

`.claude/skills/clone-website/SKILL.md` drives a section-by-section, spec-then-
build pipeline that extracts assets/CSS/content from a live site and dispatches
parallel builder agents. See `AGENTS.md` and `docs/research/INSPECTION_GUIDE.md`.

- **Requires a browser MCP** (Chrome / Playwright / Browserbase / Puppeteer) for
  screenshots, `getComputedStyle()` extraction, and interaction sweeps. The skill
  cannot run without one — connect it before invoking `/clone-website <url>`.
- After editing the skill, run `node scripts/sync-skills.mjs`; after editing
  `AGENTS.md`, run `bash scripts/sync-agent-rules.sh`.

## GitHub Pages static export — the important difference vs. plain Next.js

This branch deploys to `…/website-templates/highnote-clone-full/`, a sub-path, so
`next.config.ts` is configured for a static export:

- `output: "export"` → builds to **`out/`** (the deploy workflow auto-detects it).
- `basePath` / `assetPrefix` = `/website-templates/highnote-clone-full` in
  **production only** (so `next dev` still serves at localhost root).
- `images: { unoptimized: true }` — `next/image` optimization needs a server.
- `trailingSlash: true` — emits `route/index.html` so deep links resolve on Pages.

**Consequences:** no SSR, no Route Handlers / API routes, no ISR, no runtime
image optimization. Everything must be static / client-side. If a page needs a
server, deploy this branch via the **Deploy to Vercel** workflow instead.

**Internal links & assets:** use Next's `<Link>` / `next/font` / `next/image`
(they respect `basePath`). For raw `<img src>` or `fetch` to files under
`public/`, prefix the path with `process.env.NEXT_PUBLIC_BASE_PATH` so it
resolves under the sub-path in production.

## Commands

```sh
npm install
npm run dev        # localhost:3000 (no base path)
npm run build      # → out/  (static export)
npm run check      # lint + typecheck + build
```

## Deploying

Actions tab → **Deploy to GitHub Pages (static / Node)** → run on branch
`highnote-clone-full`. The workflow runs `npm ci`/`npm install` + `npm run build`,
finds `out/`, and publishes to `gh-pages/highnote-clone-full/`.

## Project structure

```
src/
  app/              # Next.js routes (one folder per page)
  components/
    ui/             # shadcn/ui primitives
    icons.tsx       # extracted SVG icons (created during a clone)
  lib/utils.ts      # cn()
  types/            # content interfaces
  hooks/
public/
  images/ videos/ seo/   # downloaded assets from the target site
docs/
  research/         # inspection output, component specs, BEHAVIORS, topology
  design-references/ # screenshots
scripts/            # asset download + skill/agent-rule sync
```
