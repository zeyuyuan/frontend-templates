import en from './locales/en.json'
import cn from './locales/cn.json'

// + server/index.js
export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    name: 'English',
    default: true,
    messages: en,
  },
  {
    locale: 'ch',
    name: '中文',
    messages: cn,
  },
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l) => l.default)

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale
