import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Served from https://koydas.github.io/koydas/ (project page, not a user page).
export default defineConfig({
  base: '/koydas/',
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts',
    globals: true,
  },
  server: {
    port: 5173,
  },
});
