import { extractLocale } from '../i18n'

const onBeforeRoute = ({ url }) => {
  const { urlWithoutLocale, locale } = extractLocale(url)

  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`.
      // We can then use https://vite-plugin-ssr.com/pageContext-anywhere
      // to access `pageContext.locale` in any React/Vue component.
      locale,
      // We overwrite the original URL
      url: urlWithoutLocale,
    },
  }
}

export { onBeforeRoute }
