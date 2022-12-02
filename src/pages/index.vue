<script setup lang="ts">
const height = ref(40)
</script>

<template>
  <div>
    <Collapse title="嘻嘻哈哈">
      <!-- <template #title>
        <div>
          哈哈哈哈哈哈
        </div>
      </template> -->
      <div>
        sfasfslkdfjlsdfjdskfjldksjflsd
        <div :style="{ height: `${height}vh` }">
          隐藏内容
        </div>
      </div>
    </Collapse>

    <button class="btn" @click="height++">
      增加高度
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  display: block;
  margin: 40px auto;
  width: 100px;
  height: 40px;
  background-color: pink;
}
</style>
