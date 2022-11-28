interface UserInfo {
  username: string
  avatarUrl: string
  nickName: string
  descript: string
  linkList: Link[]
}

interface ResponseData<T> {
  code: number,
  data: T,
  msg: string
}
declare namespace API {
  interface getUserInfoReq {
    username: string
  }
  type getUserInfoResp = UserInfo
}
