import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Advice-Generator-React/',
  build: {
    outDir: './build'
  },
  plugins: [react()]
})
