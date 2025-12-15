import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Swapp-delivery/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
