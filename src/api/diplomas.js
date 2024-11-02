export const getDiploma = code => {
  const result = {
    data: null,
    status: null,
  }

  return new Promise(resolve => {
    const request = fetch(`${import.meta.env.VITE_API_URL}/diplomas/${code}`)
      .then(response => {
        result.status = response.status
        return response.json()
      })
      .then(({ data }) => {
        result.data = data
        resolve(result)
      })
  })
}
