<script setup lang="ts">
interface Props {
  modelValue: boolean | string | number
  size?: number
  activeColor?: string
  inactiveColor?: string
  activeValue?: boolean | string | number
  inactiveValue?: boolean | string | number
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  activeColor: '#30a72d',
  inactiveColor: '#676b5f',
  activeValue: true,
  inactiveValue: false,
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | number): void
}>()

const isOpen = computed(() => {
  return props.modelValue === props.activeValue
})

const switchStyle = computed(() => {
  return {
    'width': `${props.size * 2 + 2}px`,
    'height': `${props.size + 4}px`,
    'background-color': isOpen.value ? props.activeColor : props.inactiveColor,
    'border-radius': `${props.size + 4}px`,
    'overflow': 'hidden',
  }
})
const dotStyle = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    transform: isOpen.value ? 'translateX(100%)' : 'translateX(0)',
  }
})
function handleClick() {
  let value = props.activeValue
  if (props.modelValue === props.activeValue)
    value = props.inactiveValue

  emits('update:modelValue', value)
}
</script>

<template>
  <div flex items-center cursor-pointer :style="switchStyle" @click="handleClick">
    <div transition-transform-200 bg-white class="rounded-50%" :style="dotStyle" />
  </div>
</template>

<style lang="scss" scoped>
</style>
