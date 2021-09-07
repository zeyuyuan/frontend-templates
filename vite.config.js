import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

export default {
  plugins: [vue(), ssr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~/styles/global.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '~': dirname(fileURLToPath(import.meta.url)),
    },
  },
}
