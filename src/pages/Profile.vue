<script setup lang="ts">
import { getUserInfo } from '~/api/users'

interface Props {
  username: string
}
const props = defineProps<Props>()
const userInfo = ref<UserInfo>()

onMounted(async () => {
  const res = await getUserInfo({ username: props.username })
  userInfo.value = res
})
</script>

<template>
  <div v-if="userInfo?.avatarUrl" min-h-screen relative overflow-x-hidden>
    <!-- 背景 -->
    <div filter-blur-50px opacity-25 w-full h-full fixed z--1>
      <img :src="userInfo.avatarUrl" w-full h-full object-cover>
    </div>
    <!-- 外层 -->
    <div w-full h-full>
      <!-- 主体内容 -->
      <div
        class="profile" flex flex-col justify-between items-center min-h-screen w-full h-full pt-64px px-16px pb-16px
        pm-32px
      >
        <div max-w-680px mx-auto w-full h-full>
          <!-- 头像 -->
          <div flex flex-col w-full items-center>
            <div>
              <img :src="userInfo.avatarUrl" class="rounded-50%" mb-16px w-96px h-96px>
            </div>
            <h1 font-bold text-center text-20px c-black>
              {{ userInfo.nickName }}
            </h1>
            <h2 class="c-#00000099" text-center font-500 leading-normal mt-1 text-16px>
              {{ userInfo.descript }}
            </h2>
          </div>
          <!-- 链接 -->
          <div flex-1 mt-32px w-full h-full>
            <div
              v-for="item in userInfo.linkList" :key="item.id" class="shadow-#0a0b0d14 link" relative hover:scale-102
              bg-white rounded-4px w-full mb-16px p-16px px-20px shadow
            >
              <a block w-full h-full :href="item.url" target="_blank">{{ item.title }}</a>
              <!-- share icon -->
              <div
                class="share rounded-50% hover:bg-#00000012 top-50% translate--50%" flex justify-center items-center
                absolute right-0 w-40px h-40px overflow-hidden cursor-pointer
              >
                <div w-16px h-16px i-iconoir:share-ios />
              </div>
            </div>
          </div>
        </div>
        <!-- 底部logo -->
        <div text-gray text-opacity-50 text-center text-sm>
          MIT Licensed | Copyright © 2022-PRESENT Ysansan
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 576px) {
  .profile {
    padding-bottom: 64px;
  }
}

.link {
  transition: transform 0.15s cubic-bezier(0, 0.2, 0.5, 3) 0s;

  &:hover {
    .share {
      opacity: 1;
    }
  }

  .share {
    opacity: 0;
    transition: opacity 500ms;
  }
}
</style>
