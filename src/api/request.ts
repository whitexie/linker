import type { AxiosResponse, Method } from 'axios'
import axios from 'axios'

const service = axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/638311a09433403d6c0685e6/linker/api',
})

service.interceptors.response.use((response: AxiosResponse) => {
  const { data } = response
  if (data.code === 0)
    return data.data
  return Promise.reject(data)
})

export function request<Req, Resp>(method: Method, url: string, data: Req): Promise<Resp> {
  return service.request({
    method,
    url,
    data,
  })
}
