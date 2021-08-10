const express = require('express')
const { createPageRender } = require('vite-plugin-ssr')
const parser = require('accept-language-parser')

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

const SUPPORTED_LOCALES = ['en', 'zh']
const DEFAULT_LOCALE = 'en'

// Get the user's preferred language from accept-language
const detectLanguage = (accept = '') =>
  parser.pick(SUPPORTED_LOCALES, accept) || DEFAULT_LOCALE
// todo support custom language set

// add locale params to page path
const fillPath = (path, locale) => {
  const pathList = path.split('/')
  pathList.splice(1, 0, locale)
  return pathList.join('/')
}

// const extractLocaleFromPath = (path = '') => {
//   const pathList = path.split('/')
//   if (SUPPORTED_LOCALES.includes(pathList[1])) {
//     return {
//       language: pathList[1],
//       path,
//     }
//   }
//   pathList.splice(1, 0, DEFAULT_LOCALE)
//   return {
//     language: DEFAULT_LOCALE,
//     path: pathList.join('/'),
//   }
// }

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
    const language = detectLanguage(req.headers['accept-language'])
    const pageContext = {
      url: fillPath(url, language),
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
