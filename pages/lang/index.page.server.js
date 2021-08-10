function prerender() {
  const names = ['en', 'zh']
  return names.map((name) => `/${name}/lang`)
}

export { prerender }
