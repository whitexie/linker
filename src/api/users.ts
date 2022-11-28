import { request } from './request'

export function getUserInfo(params: API.getUserInfoReq): Promise<API.getUserInfoResp> {
  return request<API.getUserInfoReq, API.getUserInfoResp>('GET', 'userInfo', params)
}
