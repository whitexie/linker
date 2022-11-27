<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
}
const props = defineProps<Props>()
const emits = defineEmits<{ (e: 'update:modelValue', value: string | number): void }>()
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})
const inputEl = ref<HTMLElement>()
const activeInput = ref(false)
function handleClick() {
  if (activeInput.value)
    return
  activeInput.value = true
  inputEl.value?.focus()
}
function handleBlur() {
  activeInput.value = false
}
</script>

<template>
  <div cursor-pointer @click="handleClick">
    <span relative>
      <span relative :class="[activeInput ? 'opacity-0 z-0' : 'z-1 opacity-100', modelValue.length ? 'c-#000' : 'c-#676b5f']">
        {{ modelValue || placeholder }}
      </span>
      <input
        ref="inputEl"
        v-model="value" :placeholder="placeholder" w-full outline-0 absolute left-0 cursor-none type="text"
        class="top-50% translate-y--50%" :class="[activeInput ? 'z-1 opacity-100' : 'opacity-0 z-0']" @blur="handleBlur"
      >
      <span class="c-#bec1c3 top-50% right--14px translate-y--50%" absolute inline-block w-13px h-13px z-3 i-mdi:fountain-pen />
    </span>
  </div>
</template>

<style lang="scss" scoped>

</style>
