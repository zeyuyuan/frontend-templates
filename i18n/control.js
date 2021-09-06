import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './list.js'

export const getPathLocale = () => {
  if (typeof window === 'undefined') {
    return ''
  }
  const mayBeLocal = window.location.pathname.split('/')[1]
  return SUPPORTED_LOCALES.includes(mayBeLocal) ? mayBeLocal : ''
}

/**
 * Get current locale from location.
 */
export const getCurrentLocale = () => {
  const pathList = window.location.pathname.split('/') // ['', 'zh', 'foo']
  const mayBeLocale = pathList[1]
  console.log('mayBeLocale', mayBeLocale)
  return SUPPORTED_LOCALES.includes(mayBeLocale) ? mayBeLocale : DEFAULT_LOCALE
}

/**
 * Route with locale path.
 * @example
 * www.origin.com/zh/foo -> www.origin.com/zh/bar
 * www.origin.com/foo -> www.origin.com/bar
 */
export const getPathWithLocale = (path, locale) => {
  const targetLocalePath = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  return `${targetLocalePath}${path}`
}

/**
 * Switch locale handler, 'origin' for default locale, 'origin/locale' for other locale.
 * @param {string} locale - Target locale.
 */
export const switchLocale = (locale) => {
  if (typeof window === 'undefined') {
    throw new Error('switchLocale should run in client')
  }
  const currentLocale = getCurrentLocale()
  if (currentLocale === locale) {
    return
  }
  const oldHref = window.location.href
  if (currentLocale === DEFAULT_LOCALE) {
    // '/' => '/zh'
    const { origin } = window.location
    window.location.href = oldHref.replace(origin, `${origin}/${locale}`)
  } else {
    // '/zh' -> '/' or 'zh' -> 'kr'
    const targetPath = locale === DEFAULT_LOCALE ? '' : `/${locale}`
    window.location.href = oldHref.replace(`/${currentLocale}`, targetPath)
  }
}
