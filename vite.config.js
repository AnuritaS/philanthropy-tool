import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// NOTE: Replace 'philanthropy-effectiveness-tool' with your actual GitHub repo name
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/philanthropic-foundations-evaluation-tool/',
}))
