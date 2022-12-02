<script setup lang="ts">
interface Props {
  title?: string
  customStyle?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  customStyle() {
    return {}
  },
})

const titleEl = ref<HTMLElement>()
const contentEl = ref<HTMLElement>()
const showContent = ref(false)
const { height: titleHeight } = useElementSize(titleEl)
const { height } = useElementSize(contentEl)

const collapseStyle = computed(() => {
  let style: Record<string, any> = {}
  if (showContent.value) {
    style = {
      height: `${height.value + titleHeight.value}px`,
    }
  }
  else {
    style = {
      height: `${titleHeight.value}px`,
    }
  }
  Object.assign(style, props.customStyle)
  return style
})

function handleClickTitle() {
  showContent.value = !showContent.value
}
</script>

<template>
  <div class="collapse" :style="collapseStyle" bg-white>
    <div ref="titleEl" class="title-wrap" @click="handleClickTitle">
      <slot name="title">
        <div class="title p-10px border border-#ddd border-x-0">
          {{ title }}
        </div>
      </slot>
    </div>
    <div ref="contentEl" class="content-wrap">
      <div class="content w-full">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.collapse {
  overflow: hidden;
  transition: height 300ms;
}
</style>
