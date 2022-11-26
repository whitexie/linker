<script setup lang="ts">
import { RouterView } from 'vue-router'

const active = ref(0)

const activeTextColor = (index: number) => {
  return index === active.value ? 'text-black' : 'text-concrete'
}
</script>

<template>
  <div class="">
    <div h-18>
      <nav class="z-99999 flex items-center w-auto h-16 fixed left-2 right-2 top-2 rounded-16 bg-white dark:bg-black">
        <div class="logo ml-6 mr-6">
          <div i-simple-icons:linktree dark:c-white class="w-6 h-6 c-black" />
        </div>
        <!-- 菜单 -->
        <div class="menu p-1 h-full flex items-center gap-4 w-full">
          <div
            class="hover:bg-sand hover:rounded-2 cursor-pointer font-semibold justify-center p-3 text-xs flex  items-center bg-white"
            :class="activeTextColor(0)" @click="active = 0"
          >
            <div class="i-carbon:text-link w-6 h-6" />
            <div class="ml-1 text-14px leading-normal">
              Links
            </div>
          </div>

          <div
            class="hover:bg-sand hover:rounded-2 cursor-pointer font-semibold justify-center p-3 text-xs flex items-center  bg-white"
            :class="activeTextColor(1)" @click="active = 1"
          >
            <div class="i-carbon:asset-view w-6 h-6 " />
            <div class="ml-1 text-14px leading-normal">
              Appearance
            </div>
          </div>

          <div
            class="hover:bg-sand hover:rounded-2 cursor-pointer font-semibold justify-center p-3 text-xs flex items-center bg-white"
            :class="activeTextColor(2)" @click="active = 2"
          >
            <div class="i-carbon:agriculture-analytics w-6 h-6" />
            <div class="ml-1 text-14px leading-normal">
              Analytics
            </div>
          </div>

          <div
            class="hover:bg-sand hover:rounded-2 cursor-pointer font-semibold justify-center p-3 text-xs flex items-center bg-white"
            :class="activeTextColor(3)" @click="active = 3"
          >
            <div class="i-carbon:settings-adjust w-6 h-6" />
            <div class="ml-1 text-14px leading-normal">
              Settings
            </div>
          </div>
        </div>

        <!-- 个人信息 -->
        <div class="profile flex items-center justify-between mx-3 gap-x-2">
          <!-- 消息 -->
          <div class="item h-12 w-12 flex items-center cursor-pointer justify-center hover:bg-sand hover:rounded-50%">
            <div class="i-carbon:bullhorn w-20px h-20px c-black" />
          </div>
          <!-- 升级 -->
          <div
            class="item p-3 flex items-center justify-center bg-sand h-40px rounded-40px hover:bg-marble cursor-pointer"
          >
            <div class="flex justify-center items-center c-black">
              <div class="i-carbon:upgrade c-inherit" />
              <div class="ml-1 c-inherit font-bold">
                Upgrade
              </div>
            </div>
          </div>
          <!-- 分享 -->
          <div
            class="item p-3 flex items-center justify-center h-40px rounded-40px hover:bg-sand  cursor-pointer border border-marble"
          >
            <div class="flex justify-center items-center c-black">
              <div class="i-carbon:share c-inherit" />
              <div class="ml-1 c-inherit font-bold">
                Share
              </div>
            </div>
          </div>
          <!-- 头像 -->
          <div class="item h-12 w-12 flex items-center cursor-pointer justify-center hover:outline hover:outline-gray">
            <img src="../assets/img/avatar.jpeg" class="w-40px h-40px rounded-50%">
          </div>
        </div>
      </nav>
    </div>
    <div w-full>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
