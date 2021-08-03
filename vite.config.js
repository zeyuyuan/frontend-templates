import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
// eslint-disable-next-line import/no-extraneous-dependencies
// import VueI18n from '@intlify/vite-plugin-vue-i18n'
// import path from 'path'

export default {
  plugins: [
    vue(),
    ssr(),
    // VueI18n({
    //   include: [path.resolve(__dirname, '/i18n/locales/**')],
    // }),
  ],
}
