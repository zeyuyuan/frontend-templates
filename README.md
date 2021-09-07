# Frontend Templates

## Current Batch:vite-ssr

This project is create with vite-plugin-ssr(https://vite-plugin-ssr.com/);

```
npm init vite-plugin-ssr@latest
```

## Added features

- [x] pre-render by default
- [x] data fetch demo
- [x] eslint+prettier
- [x] i18n
- [x] scss
- [x] commitlint
- [x] vscode config
- [x] pre-render static page
- [ ] no longer rely on adding route/server.js

## I18n

- Set languages in i18n/locales,Language codes refer to ISO 639-1.
- Set SUPPORTED_LANGUAGES in i18n/list.js.
- Set hreflang link in renderer/\_default.page.server.js.
- Use components/Link.vue for route.
