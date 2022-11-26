<script setup lang="ts">
import LifetimeAnalytics from './components/LifetimeAnalytics.vue'

interface Link {
  id: number
  title: string
  url: string
  switch: boolean
}
const linkList = ref<Link[]>([
  { id: 1, title: '抖音', url: 'https://www.baidu.com', switch: false },
  { id: 2, title: '快手', url: 'https://www.baidu.com', switch: false },
  { id: 3, title: '小红书', url: 'https://www.baidu.com', switch: false },
])
const showAnalytics = ref(false)
/** 拖拽相关 */
const dragIndex = ref(-1)
function handleDragend(e: DragEvent) {
  dragIndex.value = -1
}
function handleMousedown(index: number) {
  dragIndex.value = index
}
function dragenter(e: DragEvent, index: number) {
  e.preventDefault()
  if (index === dragIndex.value)
    return
  const source = linkList.value[dragIndex.value]
  linkList.value.splice(dragIndex.value, 1)
  linkList.value.splice(index, 0, source)
  dragIndex.value = index
}
function dragover(e: DragEvent) {
  e.preventDefault()
}

const diyClass = computed(() => {
  if (showAnalytics.value)
    return ['max-h-999']
  return ['max-h-64px']
})
</script>

<template>
  <div class="main-wrap p2">
    <div class="analytics" :class="diyClass" bg-white rounded-6 overflow-hidden>
      <header
        class="header" bg-white relative z-1 flex items-center cursor-pointer justify-between h-64px px-4
        rounded-6 border-b @click="showAnalytics = !showAnalytics"
      >
        <div flex items-center>
          <span mr-32px>Lifetime Analytics:</span>
          <span
            class="flex items-center item before:rounded-50%" before:mr-1 mr-32px before:bg-green before:w-8px
            before:h-8px before:content-empty before:block
          >Views: 0</span>
          <span
            class="flex items-center item before:rounded-50%" before:mr-1 mr-32px before:bg-purple before:w-8px
            before:h-8px before:content-empty before:block
          >Clicks: 0</span>
          <span
            class="flex items-center item before:rounded-50%" before:mr-1 mr-32px before:bg-blue before:w-8px
            before:h-8px before:content-empty before:block
          >CTR: 0</span>
          <span
            class="flex items-center item before:rounded-50%" before:mr-1 mr-32px before:bg-pink before:w-8px
            before:h-8px before:content-empty before:block
          >Revenue: 0</span>
          <span
            class="flex items-center item before:rounded-50%" before:mr-1 mr-32px before:bg-yellow before:w-8px
            before:h-8px before:content-empty before:block
          >Subscribers: 0</span>
        </div>
        <div
          :class="[showAnalytics ? 'i-material-symbols:keyboard-arrow-up' : 'i-material-symbols:keyboard-arrow-down']"
          w-20px h-20px c-black
        />
      </header>
      <div relative z-0 transition-all-500>
        <div p-16px mb-8px>
          <LifetimeAnalytics />
        </div>
      </div>
    </div>
    <div max-w-672px w-full mx-auto pt-3>
      <!-- 新增按钮组 -->
      <div flex w-full md:pb-32px>
        <div flex flex-1 justify-between px-2 items-center h-48px>
          <button class="bg-#8129d9" c-white h-full w-full rounded-48px px-4 text-16px>
            Add new Link
          </button>
        </div>
        <div flex flex-1 justify-between px-2 items-center h-48px>
          <button class="bg-#8129d9" c-white h-full w-full rounded-48px px-4 text-16px>
            Add new Link
          </button>
        </div>
      </div>
      <!-- link 列表 -->
      <transition-group name="drag" class="list" tag="ul" w-640px h-4 mx-auto>
        <li
          v-for="(item, index) in linkList" :key="item.id" :draggable="dragIndex === index" mb-16px flex items-center
          w-full h-128px bg-white rounded-4 relative @dragenter="dragenter($event, index)" @dragover="dragover($event)"
          @dragend="handleDragend"
        >
          <div cursor-grab w-32px flex justify-center items-center @mousedown="handleMousedown(index)">
            <div i-material-symbols:drag-indicator w-16px h-16px />
          </div>
          <div>
            {{ item.title }}
            <div absolute top-2 right-2>
              <Switch v-model="linkList[index].switch" :size="16" />
            </div>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .main-wrap {
    margin-right: 300px;
  }
}

@media only screen and (min-width: 992px) {
  .main-wrap {
    margin-right: 435px;
  }
}

@media only screen and (min-width: 1260px) {
  .main-wrap {
    margin-right: 570px;
  }
}

.header {
  border-color: rgba(224, 226, 217);

  .item {
    color: rgb(103, 107, 95);
  }
}

.list {
  list-style: none;

  .drag-move {
    transition: transform 0.3s;
  }
}
</style>
