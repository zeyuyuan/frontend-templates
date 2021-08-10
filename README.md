# Frontend Templates

## Current Batch:vite-ssr

This project is create with vite-plugin-ssr(https://vite-plugin-ssr.com/);

```
npm init vite-plugin-ssr@latest
```

## Added features

- [x] data fetch demo
- [x] eslint+prettier
- [x] i18n
- [x] scss
- [x] commitlint
- [x] vscode config
- [x] pre-render static page
- [ ] no longer rely on adding route/server.js

## i18n use case

### 1.(recommend)use request header to detect language, prerender pages with all language.  
current solution: detect language and redirect path in middleware of server.js,
add xx.page.route.js and xx.page.server.js for every page, 'doNotPrerender' for no-prerender pages.  

### 2.use path params to detect language, prerender pages with all language.
current solution: 1 + client route should keep path params.
