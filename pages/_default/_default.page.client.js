import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'

async function hydrate() {
  const pageContext = await getPage()
  const app = createApp(pageContext)
  app.mount('#app')
}

hydrate()
