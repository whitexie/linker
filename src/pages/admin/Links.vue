<script setup lang="ts">
import LifetimeAnalytics from './components/LifetimeAnalytics.vue'
import YsInput from './components/YsInput.vue'
import { useLinkr } from '~/store'

const linkStore = useLinkr()

const showAnalytics = ref(false)

function handleAddLink() {
  linkStore.addLink()
}

/** 拖拽相关 */
const dragIndex = ref(-1)
// 拖拽结束后，重置dragIndex
function handleDragend() {
  dragIndex.value = -1
}
// 在鼠标按下时，激活当前元素的 draggable 属性
function handleMousedown(index: number) {
  dragIndex.value = index
}
// 调整元素位置
function dragenter(e: DragEvent, index: number) {
  e.preventDefault()
  if (index === dragIndex.value)
    return
  const source = linkStore.linkList[dragIndex.value]
  linkStore.linkList.splice(dragIndex.value, 1)
  linkStore.linkList.splice(index, 0, source)
  dragIndex.value = index
}
// 阻止默认行为
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
          <button class="bg-#8129d9" c-white h-full w-full rounded-48px px-4 text-16px @click.stop="handleAddLink">
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
          v-for="(item, index) in linkStore.linkList" :key="item.id" :draggable="dragIndex === index" mb-16px flex
          items-center w-full h-128px bg-white rounded-4 relative @dragenter="dragenter($event, index)"
          @dragover="dragover($event)" @dragend="handleDragend"
        >
          <div flex-shrink-0 cursor-grab w-32px flex justify-center items-center @mousedown="handleMousedown(index)">
            <div i-material-symbols:drag-indicator w-16px h-16px />
          </div>
          <div w-full p-16px>
            <div flex>
              <div flex-1>
                <YsInput v-model="linkStore.linkList[index].title" placeholder="Title" />
                <YsInput v-model="linkStore.linkList[index].url" placeholder="Url" />
              </div>
              <div flex flex-shrink-0>
                <div i-ph:bell w-20px h-20px cursor-pointer mr-2 />
                <Switch v-model="linkStore.linkList[index].switch" :size="16" />
              </div>
            </div>
            <div flex justify-between items-center class="c-#7f8b99">
              <div flex items-center pt-2 pb-2 w-full>
                <div i-ph:arrow-bend-down-right-light w-18px h-18px cursor-pointer mr-2 />
                <div i-teenyicons:image-alt-outline w-18px h-18px cursor-pointer mr-2 />
                <div i-mdi:star-outline w-18px h-18px cursor-pointer mr-2 />
                <div i-icon-park-outline:medication-time w-18px h-18px cursor-pointer mr-2 />
                <div i-material-symbols:lock-outline w-18px h-18px cursor-pointer mr-2 />
                <div i-mdi:chart-bell-curve-cumulative w-18px h-18px cursor-pointer mr-2 />
              </div>
              <div i-carbon:delete w-16px h-16px cursor-pointer />
            </div>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
  <!-- preview -->
  <div class="preview" flex justify-center items-center absolute top-0 right-0 h-screen>
    <div class="device" relative w-352px h-724px p-16px>
      <iframe w-full h-full src="/ysansan" frameborder="0" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .main-wrap {
    margin-right: 300px;
  }

  .preview {
    width: 300px;
  }
}

@media only screen and (min-width: 992px) {
  .main-wrap {
    margin-right: 435px;
  }

  .preview {
    width: 435px;
  }
}

@media only screen and (min-width: 1260px) {
  .main-wrap {
    margin-right: 570px;
  }

  .preview {
    width: 570px;
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

.device {
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: url(~/assets/img/preview-device.svg) 100% 100% no-repeat;
  }
}
</style>
