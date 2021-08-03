import { createSSRApp, h } from 'vue'
import { installI18n } from '../../i18n'
import PageLayout from './PageLayout.vue'

async function createApp(pageContext) {
  const { Page, pageProps, language } = pageContext

  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
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

  await installI18n(app, language)

  // We make `pageContext.routeParams` available in all components as `$routeParams`
  // (e.g. `$routeParams.movieId` for a Route String `/movie/:movieId`).
  app.config.globalProperties.$routeParams = pageContext.routeParams

  return app
}

export { createApp }
