const express = require('express')
const { createPageRender } = require('vite-plugin-ssr')

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

const SUPPORTED_LOCALES = ['en', 'cn']
const DEFAULT_LOCALE = 'en'

const extractLocaleFromPath = (path = '') => {
  // eslint-disable-next-line no-unused-vars
  const [_, mayBeLocale] = path.split('/')
  if (SUPPORTED_LOCALES.includes(mayBeLocale)) {
    return {
      language: mayBeLocale,
      path: path.replace(`/${mayBeLocale}`, ''),
    }
  }
  return {
    language: DEFAULT_LOCALE,
    path,
  }
}

async function startServer() {
  const app = express()

  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }))
  } else {
    // eslint-disable-next-line global-require
    const vite = require('vite')
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
    app.use(viteDevServer.middlewares)
  }

  const renderPage = createPageRender({ viteDevServer, isProduction, root })
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    const { path, language } = extractLocaleFromPath(url)
    const pageContext = {
      url: path,
      language,
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
