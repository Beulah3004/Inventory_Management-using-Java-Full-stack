import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  root: resolve(__dirname),
  plugins: [react()],
  base: '/Inventory_Management-using-Java-Full-stack/',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
})
