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
      if (!link)
        result = { id: uuid(), title: '', url: '', switch: false }
      else
        result = link
      this.linkList.push(result)
    },
    removeLink(id: number) {
      this.linkList = this.linkList.filter(item => item.id === id)
    },
  },
})

