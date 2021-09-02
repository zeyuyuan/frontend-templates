import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createPageRender } from 'vite-plugin-ssr'
import express from 'express'
import { createServer } from 'vite'
import parser from 'accept-language-parser'

const SUPPORTED_LOCALES = ['en', 'zh']
const DEFAULT_LOCALE = 'en'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${dirname(fileURLToPath(import.meta.url))}/..`

// Get the user's preferred language from accept-language
const detectLanguage = (accept = '') =>
  parser.pick(SUPPORTED_LOCALES, accept) || DEFAULT_LOCALE
// todo support cookie

const startServer = async () => {
  const app = express()

  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }))
  } else {
    viteDevServer = await createServer({
      root,
      server: { middlewareMode: true },
    })
    app.use(viteDevServer.middlewares)
  }

  const renderPage = createPageRender({ viteDevServer, isProduction, root })
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    const pageContext = {
      url,
      defaultLang: detectLanguage(req.headers['accept-language']),
    }
    const result = await renderPage(pageContext)
    if (result.nothingRendered) return next()
    res.status(result.statusCode).send(result.renderResult)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}

startServer()
