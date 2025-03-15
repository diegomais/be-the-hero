import postcss from '@tailwindcss/postcss'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcss()],
    },
  },
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
  },
})
