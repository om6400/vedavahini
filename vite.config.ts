import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If deploying to GitHub Pages, set base to '/your-repo-name/'
// For local dev or root domain, use '/'
export default defineConfig({
  plugins: [react()],
  base: '/', // or '/your-repo-name/' if deploying under a GitHub repo
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
