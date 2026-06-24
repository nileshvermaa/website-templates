import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages publishes each template under /<repo>/<branch>/.
  // Relative asset URLs keep Vite builds working from any deployed subfolder.
  base: './',
  plugins: [react()],
})
