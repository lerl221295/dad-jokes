import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://icanhazdadjoke.com'
})

api.interceptors.request.use(
  (config): AxiosRequestConfig => {
    return {
      ...config,
      headers:  { ...config.headers, 'User-Agent': 'Luis Rojas Test', "Accept": "application/json" }
    }
  }
)

export default api
