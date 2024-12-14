export const get = async (path: string, params = {}, headers = {}) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
  const query = new URLSearchParams(params)

  return fetch(`${baseUrl}/${path}?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
}
