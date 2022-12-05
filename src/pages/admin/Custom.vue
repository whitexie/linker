<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useUser } from '~/store'

const userStore = useUser()

/** ========== preview缩放 start ========== */
const previewWrapRef = ref<HTMLElement>()
const previewRef = ref<HTMLElement>()
const { width: wrapWidth } = useElementSize(previewWrapRef)
const { width, height } = useElementSize(previewRef)

const previewStyle = computed(() => {
  return {
    width: `${wrapWidth.value}px`,
  }
})

const deviceStyle = computed(() => {
  const result: Record<string, string> = {}
  if (width.value < 396 || height.value < 914)
    result.transform = `scale(${(width.value / 396) * (height.value / 914)}) translate(-50%, -50%)`

  return result
})

/** ========== preview缩放 end ========== */
</script>

<template>
  <div class="main" flex min-h-screen>
    <div class="main-wrap min-w-833px max-w-1103px p2 px-4 flex-1">
      <RouterView />
    </div>
    <!-- preview -->
    <div ref="previewWrapRef" class="preview-wrap w-full border-l-1 border-color-#ddd max-w-570px">
      <div ref="previewRef" :style="previewStyle" class="preview mx-auto fixed top-0 right-0 max-w-570px h-screen">
        <div
          :style="deviceStyle"
          class="device w-352px h-724px relative p-16px absolute top-50% left-50% translate--50% transform-origin-top-left"
        >
          <iframe w-full h-full :src="`/${userStore.username}`" frameborder="0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    pointer-events: none;
    background: url(~/assets/img/preview-device.svg) 100% 100% no-repeat;
  }
}
</style>
