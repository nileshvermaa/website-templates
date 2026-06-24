# Website Templates

This repository is organized as a branch-per-website template collection.
Each template branch contains one complete website, and the GitHub Actions
workflows can manually deploy any branch for a shareable preview.

## Repository Model

- Keep each website template isolated on its own branch.
- Use clear branch names, for example `portfolio-studio`, `saas-dashboard`, or `restaurant-landing`.
- The default/infrastructure branch should keep the shared `.github/workflows` and `.github/actions` deployment files.
- Template branches can use different stacks as long as they can build or serve static output.

## Create A New Template

```sh
git switch <infrastructure-branch>
git pull
git switch -c <template-branch>
```

Build the website on that new branch, then commit and push it:

```sh
npm install
npm run build
git add .
git commit -m "Create <template-branch> template"
git push -u origin <template-branch>
```

For Vite templates, keep `base: './'` in `vite.config.ts`. GitHub Pages publishes
each branch under a subfolder, so root-relative asset paths can break previews.

## Deploy To GitHub Pages

Use the `Deploy to GitHub Pages (static / Node)` workflow.

1. Open GitHub Actions.
2. Select `Deploy to GitHub Pages (static / Node)`.
3. Click `Run workflow`.
4. Enter the template branch name.
5. Run the workflow.

The workflow checks out the chosen branch, builds it if a `package.json` build
script exists, and publishes it to:

```txt
https://<owner>.github.io/<repo>/<branch>/
```

It also maintains a gallery index at:

```txt
https://<owner>.github.io/<repo>/
```

On the first deploy, enable GitHub Pages in repository settings:

```txt
Settings -> Pages -> Deploy from a branch -> gh-pages / root
```

## Deploy To Vercel

Use the `Deploy to Vercel` workflow for a Vercel preview or production deploy.
Configure these repository secrets first:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Then run the workflow manually and provide the template branch name. Leave
`production` unchecked for preview deployments.

## WordPress / PHP Templates

This repo also includes workflows for PHP and WordPress templates:

- `Deploy WordPress to GitHub Pages` renders a static snapshot and publishes it to the GitHub Pages gallery.
- `Release WordPress theme` builds upload-ready WordPress theme zip artifacts.

Use these only for branches that contain PHP or WordPress theme code.

## Local Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

The current branch is a React, TypeScript, and Vite template. Other branches may
use a different stack if their workflows can build or snapshot the site.
