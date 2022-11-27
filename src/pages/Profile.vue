<script setup lang="ts">
interface Props {
  username: string
}
defineProps<Props>()
</script>

<template>
  <div>
    {{ username }}
  </div>
</template>

<style lang="scss" scoped>

</style>
