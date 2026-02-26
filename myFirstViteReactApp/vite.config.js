import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  test: {
    // use jsdom for DOM testing (no extra adapter package required)
    environment: 'jsdom',
    globals: true,
    // automatically include jest-dom matchers for all tests
    setupFiles: ['./src/setupTests.js']
  }
})
