import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes built asset URLs relative, so the site works when served
// from a sub-path like /website-templates/japandi-wellness/ on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 4399, strictPort: false },
});
