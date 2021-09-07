import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

export default {
  plugins: [vue(), ssr()],
  resolve: {
    alias: {
      '~': dirname(fileURLToPath(import.meta.url)),
    },
  },
}
