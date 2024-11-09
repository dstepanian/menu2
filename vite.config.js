import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: true,
      port: 3025
  },
    theme: {
      extends: {
          colors: {
              primary: '#FF0000',
              secondary: '#00FF00',
              tertiary: '#0000FF'
          }
      }
    }
})
