import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../i18n/list'
import { createApp } from './app'
import logoUrl from './logo.svg'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'locale']

export const render = async (pageContext) => {
  const app = await createApp(pageContext)
  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps, locale, url } = pageContext
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc =
    (documentProps && documentProps.description) ||
    'App using Vite + vite-plugin-ssr'
  const keywords = 'Vite, SSR, SEO'
  const origin = 'https://fe.com'
  const getHref = (targetLocale) =>
    `${origin}${
      targetLocale === DEFAULT_LOCALE ? '' : `/${targetLocale}`
    }${url}`

  return escapeInject`<!DOCTYPE html>
    <html lang="${locale}">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <link rel="alternate" hreflang="en" href="${getHref('en')}" />
        <link rel="alternate" hreflang="zh" href="${getHref('zh')}" />
        <link rel="alternate" hreflang="x-default" href="${getHref('en')}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="${keywords}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}

export const onBeforePrerender = (globalContext) => {
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
