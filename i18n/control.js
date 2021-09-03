import parser from 'accept-language-parser'
import Cookies from 'js-cookie'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './list.js'

export const setLocalLang = (lang) => {
  Cookies.set('user-language', lang)
}

export const getLocalLang = () => Cookies.get('user-language') || ''

/**
 * Get the user's preferred language from cookie or header
 * @params {string} accept - accept-lanuage
 */
export const detectLanguage = (accept = '', cookieLang = '') => {
  if (cookieLang && SUPPORTED_LOCALES.includes(cookieLang)) {
    return cookieLang
  }
  return parser.pick(SUPPORTED_LOCALES, accept) || DEFAULT_LOCALE
}

export const getPathLang = () => {
  if (typeof window === 'undefined') {
    return ''
  }
  const mayBeLocal = window.location.pathname.split('/')[1]
  return SUPPORTED_LOCALES.includes(mayBeLocal) ? mayBeLocal : ''
}

export const keepClientPathLang = () => {
  const pathLang = getPathLang()
  if (pathLang) {
    setLocalLang(pathLang)
  }
}

/**
 * Switch lang handler,set cookie,change href,reload
 * @param {string} lang
 */
export const switchHandler = (lang) => {
  setLocalLang(lang)
  const pathLang = getPathLang()
  if (pathLang) {
    const hrefWithoutLocale = window.location.href.replace(`/${pathLang}`, '')
    window.location.href = hrefWithoutLocale
  } else {
    window.location.reload()
  }
}
