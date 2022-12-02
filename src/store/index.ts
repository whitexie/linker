import { defineStore } from 'pinia'
import { uuid } from '~/utils/util'

export const useLinkr = defineStore('Link', {
  state: (): LinkState => {
    return {
      linkList: [
        { id: 1, title: '抖音', url: 'https://www.douyin.com', switch: true },
        { id: 2, title: '快手', url: 'https://www.kuaishou.com', switch: false },
      ],
    }
  },
  actions: {
    addLink(link?: Link) {
      let result: Link
      // console.log('addLink')
      if (!link)
        result = { id: uuid(), title: '', url: '', switch: false }
      else
        result = link
      this.linkList.push(result)
      // this.linkList = [...this.linkList, result]
    },
    removeLink(id: number) {
      this.linkList = this.linkList.filter(item => item.id === id)
    },
  },
})

export const useUser = defineStore('User', {
  state: (): UserInfo => {
    return {
      username: 'Ysansan',
      avatarUrl: '/src/assets/img/avatar.jpeg',
      nickName: '幺叁叁',
      descript: '一名前端开发工程师',
      linkList: [
        { id: 1, title: '抖音', url: 'https://www.douyin.com', switch: true },
        { id: 2, title: '快手', url: 'https://www.kuaishou.com', switch: false },
      ],
    }
  },
  actions: {
    addLink(link?: Link) {
      let result: Link
      if (!link)
        result = { id: uuid(), title: '', url: '', switch: false }
      else
        result = link
      this.linkList.push(result)
    },
    removeLink(id: number) {
      this.linkList = this.linkList.filter(item => item.id === id)
    },
    updateUserInfo(state: User) {
      const { username, nickName, descript, avatarUrl } = state
      this.username = username
      this.nickName = nickName
      this.descript = descript
      this.avatarUrl = avatarUrl
    },
  },
})
