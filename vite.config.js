import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  server: {
    open: true
  },
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html')
      }
    }
  }
})
