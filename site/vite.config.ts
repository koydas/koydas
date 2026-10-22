import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Relative base: works at the root of a user page (koydas.github.io) and under a project page (/koydas/).
export default defineConfig({
  base: './',
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
