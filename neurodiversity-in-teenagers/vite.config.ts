import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/neurodiversity-in-teens/neurodiversity-in-teenagers/',
  build: {
    outDir: 'dist'
  }
})
