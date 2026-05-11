import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // Ensure this matches your local port
    allowedHosts: [
      'introduced-honest-collected-wants.trycloudflare.com',
      '.trycloudflare.com' // Using a leading dot is sometimes more reliable than a wildcard
    ]
  }
})