import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve('index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const imgExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']
          const isImage = imgExtensions.some(ext => assetInfo.name?.endsWith(ext))
          if (isImage) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
