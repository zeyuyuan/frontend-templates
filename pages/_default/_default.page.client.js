import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'

async function hydrate() {
  const pageContext = await getPage()
  const app = await createApp(pageContext)
  app.mount('#app')
}

hydrate()
