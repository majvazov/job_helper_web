import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/job_helper_web/' : '/', // Use '/' for local dev, '/job_helper_web/' for GitHub Pages
})