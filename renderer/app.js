import { createSSRApp, h } from 'vue'
import PageWrapper from './PageWrapper.vue'
import { installI18n } from '../i18n'

export const createApp = async (pageContext) => {
  const { Page, pageProps, locale } = pageContext

  const PageWithLayout = {
    render() {
      return h(
        PageWrapper,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        }
      )
    },
  }

  const app = createSSRApp(PageWithLayout)

  await installI18n(app, locale)

  // We make `pageContext` available in all components as `$pageContext`.
  // More infos: https://vite-plugin-ssr.com/pageContext-anywhere
  app.config.globalProperties.$pageContext = pageContext

  return app
}
