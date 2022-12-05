<script setup lang="ts">
import { thmemes } from '~/data/themes'

const themesList = ref(thmemes)
const profileTitle = ref('@ysansan')
const bio = ref('')
const selectedThemeId = ref<string | number>(0)
</script>

<template>
  <div class="max-w-672px mx-auto ">
    <!-- Profile -->
    <div>
      <h1 class="text-20px font-bold mt-48px mb-16px">
        Profile
      </h1>
      <div class="p-24px pb-32px rounded-8px bg-white">
        <div class="flex items-center">
          <img class="rounded-50% w-96px h-96px border border-#ebeef1 mr-16px flex-shrink-0" src="/src/assets/img/avatar.jpeg">
          <div class="h-full flex-1 font-600 text-16px">
            <button class="block h-12 w-full rounded-12 bg-pansy c-white hover:bg-teasel">
              Pick an image
            </button>
            <button class="block w-full mt-8px h-12 rounded-12 border hover:bg-sand text-black">
              Remove
            </button>
          </div>
        </div>
        <div class="mt-6">
          <div>
            <div relative h-48px mt-4 w-full rounded-2 grow>
              <!-- Profile Title -->
              <input id="profileTitle" v-model="profileTitle" class="h-12 pt-10px w-full pl-4 bg-chalk leading-48px rounded-2 sibling:focus:scale-85 sibling:focus:translate-y--3 focus:outline-2 focus:outline-black" outline-none pl-2 type="text">
              <label :class="[profileTitle.length ? 'scale-85 translate-y--3' : '']" class="text-concrete transition-transform origin-[0] absolute top-13px left-4" for="profileTitle">Profile Title</label>
            </div>
          </div>

          <div>
            <div class="relative mt-4 w-full rounded-2 grow">
              <!-- Bio -->
              <textarea id="bio" v-model="bio" class="h-12 pb-12 pt-16px w-full pl-4 min-h-96px bg-chalk rounded-2 sibling:focus:scale-85 sibling:focus:translate-y--3 focus:outline-2 focus:outline-black" outline-none pl-2 type="text" />
              <label :class="[bio.length ? 'scale-85 translate-y--3' : '']" class="pt-md w-10/12 text-concrete bg-chalk transition-transform origin-[0] absolute top-13px left-4" for="bio">Bio</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- themes -->
    <div>
      <h1 class="text-20px font-bold mt-48px mb-16px">
        Themes
      </h1>

      <div class="p-24px pb-32px rounded-8px bg-white">
        <div class="inline-grid w-full grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-4">
          <div class="w-136px h-241px flex flex-col justify-between items-center cursor-pointer">
            <div class="w-130px h-202px rounded-2">
              <h4 class="flex justify-center items-center text-20px text-center px-3 border border-dashed border-black h-full rounded-2">
                CREATE YOUR OWN
              </h4>
            </div>
            <p class="text-center">
              Custom
            </p>
          </div>

          <div v-for="item in themesList" :key="item.name" class=" cursor-pointer" @click="selectedThemeId = item.id">
            <div class="h-203px">
              <div :class="[selectedThemeId === item.id ? 'border-2px border-pebble p-8px' : '']" class="transition-all rounded-2 w-128px h-200px">
                <img class="w-full h-full border border-#ddd rounded-2" :src="item.bgImgUrl">
              </div>
            </div>

            <p class="text-center mt-3">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
