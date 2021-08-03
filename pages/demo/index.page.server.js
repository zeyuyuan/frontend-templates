const mockData = () =>
  new Promise((resolve) => {
    resolve('data fetch in server!')
  })

const addPageContext = async () => {
  const res = await mockData()
  return {
    pageProps: {
      mock: res,
    },
  }
}

export { addPageContext }
