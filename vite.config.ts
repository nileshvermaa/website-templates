import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    // Three.js is intentionally part of the interactive planner bundle.
    chunkSizeWarningLimit: 900,
  },
  plugins: [react()],
})
