const baseUrl = 'https://jsonplaceholder.typicode.com'

export const get = async (path: string, params = {}, headers = {}) => {
  const query = new URLSearchParams(params)

  return fetch(`${baseUrl}/${path}?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
}
export const post = async (path: string, body = {}, headers = {}) => {
  return fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  })
}
export const del = async (path: string, params = {}, headers = {}) => {
  const query = new URLSearchParams(params)

  return fetch(`${baseUrl}/${path}?${query}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
}
