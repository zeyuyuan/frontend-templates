import { renderToString } from '@vue/server-renderer'
import { html } from 'vite-plugin-ssr'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../i18n/list'
import { createApp } from './app'
import logoUrl from './logo.svg'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'locale']

export const render = async (pageContext) => {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc =
    (documentProps && documentProps.description) ||
    'App using Vite + vite-plugin-ssr'

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${html.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}

export const _onBeforePrerender = (globalContext) => {
  const prerenderPageContexts = []
  globalContext.prerenderPageContexts.forEach((pageContext) => {
    prerenderPageContexts.push({
      ...pageContext,
      locale: DEFAULT_LOCALE,
    })
    SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach(
      (locale) => {
        prerenderPageContexts.push({
          ...pageContext,
          url: `/${locale}${pageContext.url}`,
          locale,
        })
      }
    )
  })
  return {
    globalContext: {
      prerenderPageContexts,
    },
  }
}
