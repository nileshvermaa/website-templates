# Bugtester Dev

Screenshot-faithful React recreation of the supplied Bugster-style landing page
reference.

## Approach

The PDF contains full embedded screenshot slices. To preserve the exact visual
language as requested, this branch extracts and reuses those slices in the live
React page while adding lightweight navigation and accessibility labels.

## Stack

- React 19
- Vite
- TypeScript
- Extracted reference JPEG assets in `public/bugster-reference/`

## Commands

```sh
npm install
npm run dev
npm run build
npm run lint
```

The app uses `base: './'` so it works at the GitHub Pages subpath
`/website-templates/bugtester-dev/`.
