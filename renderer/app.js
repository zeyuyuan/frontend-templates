import { createSSRApp, h } from 'vue'
import PageWrapper from './PageWrapper.vue'
import { installI18n } from '../i18n'
import { setPageContext } from './usePageContext'

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
  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)
  return app
}
