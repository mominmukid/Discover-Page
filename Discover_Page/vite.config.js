import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':`https://newsapi.org/v2/top-headlines?category=`
    }
  },
  plugins: [react()],
})
