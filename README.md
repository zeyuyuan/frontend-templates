# Frontend Templates

## Current Batch:vite-ssr

## Description

This is a template for ssr/ssg project using vite, vue and [vite-plugin-ssr](https://vite-plugin-ssr.com/).  
Use ssg(pre-render) by default, use [doNotPrerender](https://vite-plugin-ssr.com/doNotPrerender) for ssr pages.

## Added features

- [x] pre-render by default
- [x] data fetch demo
- [x] eslint+prettier
- [x] i18n
- [x] scss
- [x] commitlint
- [x] vscode config
- [x] pre-render static page
- [x] no longer rely on adding route/server.js
- [x] add sanitize.css

## I18n

- Set languages in i18n/locales,Language codes refer to ISO 639-1.
- Set SUPPORTED_LANGUAGES in i18n/list.js.
- Set hreflang link in renderer/\_default.page.server.js.
- Use components/Link.vue for route.

## Depoly

### For pure ssg(pre-render) product, depoly as static files:

```shell
npm install
npm run build
```

and depoly to any static hosts,  
or start a static file server:

```shell
PORT=3000 npm run prod:static
```

### For ssr/ssg product, we need to start a node server:

```shell
npm install
PORT=3000 npm run prod
```
