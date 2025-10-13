import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/neurodiversity-in-teens/vite-project/',
  build: {
    outDir: 'dist'
  }
})