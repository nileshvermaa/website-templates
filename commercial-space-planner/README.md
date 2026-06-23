# website-templates

A single repository that holds many website templates — **one template per branch**.
Templates can be static HTML, Node-built (Vite/Next/etc.), **or PHP/WordPress themes**.

The `main` branch contains no website. It only holds the documentation, a shared
composite action, and the GitHub Actions deploy workflows. Every actual website
lives on its own branch (`portfolio`, `saas-landing`, `lumen-wellness`, …)
created from `main`.

## How it works

```
main ───────────────► docs + deploy workflows (no website)
  ├── portfolio ─────► a portfolio website template
  ├── saas-landing ──► a SaaS landing-page template
  └── <your-branch> ─► created whenever you ask for a new kind of site
```

You never have to merge anything. To get a new template you create a new
branch off `main`, build the site there, and push it. To preview/share any
template you trigger a deploy workflow and pick the branch.

## Deploying / previewing a template

Both deploys are **manual** (`workflow_dispatch`) — go to the repo's
**Actions** tab, pick the workflow, click **Run workflow**, and type the branch
name of the template you want to deploy.

### GitHub Pages (free, all templates live at once)

Workflow: **Deploy to GitHub Pages**.

- Publishes the chosen branch into `gh-pages/<branch>/`.
- All previously deployed templates stay live, so you get a gallery:
  - Index:    `https://nileshvermaa.github.io/website-templates/`
  - Template: `https://nileshvermaa.github.io/website-templates/<branch>/`
- Auto-detects the site:
  - If the branch has a `package.json` with a `build` script, it runs
    `npm ci && npm run build` and publishes the build output
    (`dist`, `build`, or `out`).
  - Otherwise it publishes the static files as-is (root, or a `public`/`src`
    folder if present).

**One-time setup:** in repo **Settings → Pages**, set the source to
**Deploy from a branch → `gh-pages` / root**. (The first Pages run creates the
`gh-pages` branch automatically.)

### PHP / WordPress

PHP can't run on GitHub Pages or Vercel, so these get their own paths.

**Preview (free, in the gallery)** — workflow: **Deploy WordPress to GitHub Pages**.
It boots a real environment in CI, renders the site, crawls it to a **static
snapshot**, and publishes it to `gh-pages/<branch>/` next to the other templates.

- WordPress theme branch → boots WordPress (MariaDB + WP-CLI), copies the theme
  folder(s) in, activates the theme, and crawls the homepage.
- Plain PHP site branch → serves it with PHP's built-in server and crawls.
- Auto-detects which: a folder with a `style.css` declaring `Theme Name:` ⇒
  WordPress; otherwise plain PHP. You can override the theme to activate via the
  `theme` input.
- Caveat: the snapshot is static — the design renders exactly, but server-side
  behaviour (form submits, AJAX, logins) won't run on Pages.

**Install into a real WordPress** — workflow: **Release WordPress theme**.
Builds an upload-ready theme `.zip` from the branch and attaches it as a workflow
artifact (and, if you pass a `tag`, a GitHub Release). Install it via
**Appearance → Themes → Add New → Upload**, or `wp theme install <zip> --activate`.

### Vercel (per-deploy shareable preview URL)

Workflow: **Deploy to Vercel**. Produces a unique preview URL each run, and can
optionally promote to production.

**One-time setup:** add these repo secrets (Settings → Secrets and variables →
Actions):

| Secret | Where to get it |
| --- | --- |
| `VERCEL_TOKEN` | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` after running `vercel link`, or Vercel project settings |
| `VERCEL_PROJECT_ID` | same as above |

## Adding a new template

```bash
git checkout main
git checkout -b <branch-name>     # e.g. portfolio
# ...build the site...
git add -A && git commit -m "<branch-name> template"
git push -u origin <branch-name>
```

Then deploy it from the Actions tab as described above.
