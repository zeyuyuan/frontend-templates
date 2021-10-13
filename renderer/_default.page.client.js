import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'

const hydrate = async () => {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage()
  const app = await createApp(pageContext)
  app.mount('#app')
}

hydrate()
