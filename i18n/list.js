import en from './locales/en.json'
import zh from './locales/zh.json'

// + server/index.js
export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    name: 'English',
    default: true,
    messages: en,
  },
  {
    locale: 'zh',
    name: '中文',
    messages: zh,
  },
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l) => l.default)

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale
