const mockData = () =>
  new Promise((resolve) => {
    resolve('data fetch in server!')
  })

const addPageContext = async (pageContext) => {
  const res = await mockData()
  const { id } = pageContext.routeParams
  return {
    pageProps: {
      mock: res,
      id,
    },
  }
}

export { addPageContext }

export const doNotPrerender = true
