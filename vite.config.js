import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // app draait op WampServer in de map /pokemon-team-manager/
  base: '/pokemon-team-manager/',
})
