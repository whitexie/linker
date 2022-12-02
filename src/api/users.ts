import { request } from './request'

// 获取主页信息
export function getUserInfo(params: API.getUserInfoReq): Promise<API.getUserInfoResp> {
  return request<API.getUserInfoReq, API.getUserInfoResp>('GET', 'userInfo', params)
}

// 登录
export function login(params: API.LoginReq): Promise<API.LoginResp> {
  return request<API.LoginReq, API.LoginResp>('POST', 'login', params)
}

// 获取主页链接点击数据
export function getClicks(params: API.getEchartDataReq): Promise<API.getEchartDataResp> {
  return request('POST', 'clicks', params)
}

// 获取主页访问数据
export function getViews(params: API.getEchartDataReq): Promise<API.getEchartDataResp> {
  return request('POST', 'pagesview', params)
}

// 获取收益数据
export function getRevenue(params: API.getEchartDataReq): Promise<API.getEchartDataResp> {
  return request('POST', 'revenue', params)
}

// 获取订阅数据
export function getSubscribers(params: API.getEchartDataReq): Promise<API.getEchartDataResp> {
  return request('POST', 'subscribers', params)
}
