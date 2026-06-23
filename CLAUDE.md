# CLAUDE.md — `website-templates` (main branch)

Repo-wide context for future sessions. **Read this first.** Each website template
lives on its **own branch** and carries its own `CLAUDE.md` with template-specific
detail.

## The model

- **`main`** holds no website — only docs, the deploy workflows, and a shared
  composite action.
- **Every website is a branch off `main`** (`portfolio`, `saas-landing`, …). You
  never merge templates into `main`; they live independently, in parallel.
- Branches inherit `main`'s `.github/` (workflows + action), so a new branch is
  immediately deployable.

### Current template branches

| Branch | What it is | Stack |
| --- | --- | --- |
| `commercial-space-planner` | **Plot** — interactive 3D space planner (café/office/retail): floor-plan ⇄ 3D, capacity, egress, brand colour, cost, PDF export | Vanilla JS + Three.js/jsPDF via CDN, **no build** |
| `japandi-wellness` | **Nagi** — Japandi wellness/mindful-living landing page, meditative scroll-reveal narrative | React 18 + Vite, builds to `dist/` |
| `bauhaus-landing-page` | **FormFab** — Bauhaus-inspired single-page landing for an architectural fabrication & modular design service; bold primary-colour geometry, structural CSS Grid, mechanical hover animations | React 18 + Vite + TypeScript, builds to `dist/` |

## Adding a new template

```bash
git checkout main
git checkout -b <branch-name>     # e.g. portfolio
# ...build the site...
git add -A && git commit -m "<branch-name> template"
git push -u origin <branch-name>
```

Then deploy from the **Actions** tab (see below). **Add a `CLAUDE.md` to each new
branch** describing that template (concept, stack, file map, how to reuse).

## Conventions for a template branch

- **Static HTML or no-build JS** → put `index.html` at the branch root (or in
  `public/`/`src/` with an `index.html`). Served as-is.
- **Node build** (Vite/React/etc.) → `package.json` with a `build` script that
  outputs to `dist/`, `build/`, or `out/`. **Commit `package-lock.json`** (the
  workflow runs `npm ci`). **Set the bundler's base path to relative** (Vite:
  `base: './'`) so assets resolve under the Pages sub-path.
- **PHP / WordPress theme** → a folder containing `style.css` with a
  `Theme Name:` header. Detected automatically.
- For local preview, add a `.claude/launch.json` with the dev/serve command.

## Deploying (all manual — `workflow_dispatch`)

Go to **Actions** → pick a workflow → **Run workflow** → type the **branch name**.

| Workflow | Use for | Result |
| --- | --- | --- |
| **Deploy to GitHub Pages (static / Node)** | static-HTML or Node-built templates | Publishes to `gh-pages/<branch>/`; all templates stay live in one gallery. Auto-builds if a `build` script exists |
| **Deploy WordPress to GitHub Pages** | PHP/WordPress templates | Boots real WP (or PHP server), crawls to a **static snapshot**, publishes to the same gallery |
| **Release WordPress theme** | shipping a WP theme | Builds an installable theme `.zip` (artifact; GitHub Release if a `tag` is given) |
| **Deploy to Vercel** | per-deploy shareable preview | Unique preview URL (needs `VERCEL_TOKEN`/`VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` secrets) |

- Gallery index: `https://nileshvermaa.github.io/website-templates/`
- A template: `…/website-templates/<branch>/`
- All Pages deploys share `.github/actions/publish-to-gh-pages` (clones
  `gh-pages`, replaces only `<branch>/`, regenerates the index). The deploy
  workflow checks out `main` (for the action) and the template branch into
  `_template/`.
- **One-time:** Settings → Pages → *Deploy from a branch* → `gh-pages` / root.

## Using a template for a real project

Two options:
1. **Branch from it:** `git checkout <template> && git checkout -b <client>-<project>`
   — keeps the template pristine while you customise.
2. **Copy it out:** copy the branch's files into a new standalone repo.

Each template's own `CLAUDE.md` documents what to change (content arrays, CSS
variables, reusable components) to re-skin it.

## Platform notes

- Windows host; default shell is PowerShell, with a Bash tool also available.
- Git line-ending warnings (LF→CRLF) on commit are harmless — files are stored as LF.
- `requestAnimationFrame` / `IntersectionObserver` are throttled in hidden/headless
  preview tabs, so animation-driven templates may look blank there but work on the
  live (visible) page.
