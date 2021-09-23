const mockData = () =>
  new Promise((resolve) => {
    resolve('data fetch in server!')
  })

export const onBeforeRender = async (pageContext) => {
  const res = await mockData()
  const { id } = pageContext.routeParams
  const pageProps = {
    mock: res,
    id,
  }
  return {
    pageContext: {
      pageProps,
    },
  }
}

export const doNotPrerender = true
