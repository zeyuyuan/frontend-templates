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

## I18n feature

- set language by browser set(http header)
- set language by cookie
- set language by url（set cookie at the same time）, for example `/en/about`(will lose /en after route and )
