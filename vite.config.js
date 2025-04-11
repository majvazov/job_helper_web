import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Default base for development
  }

  if (command === 'build') {
    // Set the base path only for production builds (GitHub Pages)
    config.base = '/job_helper_web/'
  }

  return config
})