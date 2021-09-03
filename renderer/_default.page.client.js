import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'
import { keepClientPathLang } from '../i18n/control'

const hydrate = async () => {
  // For Client Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage()
  const app = await createApp(pageContext)
  app.mount('#app')
}

hydrate()

// need to call keepClientPathLang in other custom client.js
keepClientPathLang()
