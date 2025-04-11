import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Extract the repository name from GitHub Pages URL 
// The format is typically username.github.io/repo-name
const repo = 'job_helper_web';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
})