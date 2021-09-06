import { createI18n } from 'vue-i18n'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './list.js'

// Refer to https://github.com/frandiox/vitesse-ssr-template

// This is a dynamic import so not all languages are bundled in frontend.
const messageImports = import.meta.glob('./locales/*.json')

function importLocale(locale) {
  // eslint-disable-next-line no-shadow
  const [, importLocale] =
    Object.entries(messageImports).find(([key]) =>
      key.includes(`/${locale}.`)
    ) || []

  return importLocale && importLocale()
}

export async function installI18n(app, locale = DEFAULT_LOCALE) {
  const messages = await importLocale(locale)
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      [locale]: messages.default || messages,
    },
  })
  app.use(i18n)
}

export const extractLocale = (url) => {
  const urlPaths = url.split('/')
  let locale = ''
  let urlWithoutLocale = ''
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath = urlPaths[1]
  if (SUPPORTED_LOCALES.includes(firstPath)) {
    locale = firstPath
    urlWithoutLocale = `/${urlPaths.slice(2).join('/')}`
  } else {
    locale = DEFAULT_LOCALE
    urlWithoutLocale = url
  }
  return { locale, urlWithoutLocale }
}
