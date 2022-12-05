interface ResponseData<T> {
  code: number,
  data: T,
  msg: string
}

interface User {
  username: string
  avatarUrl: string
  nickName: string
  descript: string
}
interface UserInfo extends User {
  linkList: Link[]
}

interface EchartItem {
  time: number | string
  count: number
}
declare namespace API {
  interface getUserInfoReq {
    username: string
  }
  type getUserInfoResp = UserInfo

  interface LoginReq {
    username: string
    password: string
  }
  interface LoginResp {
    access_token: string
  }

  interface getEchartDataReq {
    range: number
  }
  interface getEchartDataResp {
    list: EchartItem[]
  }
}

interface Theme {
  id: number | string
  name: string
  bgImgUrl: string
}
