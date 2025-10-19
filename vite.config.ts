import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/VibeCode-FE-Timesheet/',
  //"homepage": "https://github.com/MRohithReddy/VibeCode-FE-Timesheet",
  //"deploy": "gh-pages -d dist"
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
});


