<script setup lang="ts">
import { login } from '~/api/users'

const form = ref({
  username: '',
  password: '',
})
const showPassword = ref(false)
const inputType = computed(() => {
  let type = 'text'
  if (!showPassword.value)
    type = 'password'
  return type
})
function validate(): boolean {
  return true
}

async function handleLogin() {
  if (!validate())
    return

  const res = await login(form.value)
  localStorage.setItem('_TOKEN_', res.access_token)
}
</script>

<template>
  <div flex justify-between flex-col items-center h-full>
    <header p-3>
      <div flex items-center text-20px c-green justify-center>
        <span w-8 h-8 i-simple-icons:linktree inline-block mr-2 />
        Linker
      </div>
    </header>
    <main class="" w-80vh h-50vh mx-auto rounded-4 flex justify-center items-center>
      <div class="shadow-#0003" shadow w-420px rounded-4 bg-white p-4>
        <div py-4 text-center text-20px font-bold>
          Log in to your Linktree
        </div>
        <div flex justify-center flex-col items-center>
          <div relative h-48px mt-4 w-full rounded-2 grow>
            <!-- username -->
            <input id="username" v-model="form.username" class="h-12 pt-10px w-full pl-4 bg-chalk leading-48px rounded-2 sibling:focus:scale-85 sibling:focus:translate-y--3 focus:outline-2 focus:outline-black" outline-none pl-2 type="text">
            <label :class="[form.username.length ? 'scale-85 translate-y--3' : '']" class="text-concrete transition-transform origin-[0] absolute top-13px left-4" for="username">Username</label>
          </div>

          <!-- password -->
          <div relative h-48px mt-4 w-full rounded-2 grow>
            <input id="password" v-model="form.password" class="h-12 pt-10px w-full pl-4 bg-chalk leading-48px rounded-2 sibling:focus:scale-85 sibling:focus:translate-y--3 focus:outline-2 focus:outline-black" outline-none pl-2 :type="inputType">
            <label :class="[form.password.length ? 'scale-85 translate-y--3' : '']" class="text-concrete transition-transform origin-[0] absolute top-13px left-4" for="password">Password</label>
            <button class="absolute top-50% right-10px translate-y--50% c-black" @click="showPassword = !showPassword">
              <div v-if="showPassword" class="w-16px h-16px" i-ph:eye-thin />
              <div v-else class="w-16px h-16px" i-ph:eye-slash-light />
            </button>
          </div>
          <div class="pt-4 w-full pl-4">
            <span cursor-pointer underline c-blue>log in with phone number</span>
          </div>
          <div pt-4 w-full>
            <button class="h-12 w-full text-white bg-pansy rounded-12" @click="handleLogin">
              Log in
            </button>
          </div>
        </div>
      </div>
    </main>
    <footer />
  </div>
</template>

<style lang="scss" scoped>
:global(body) {
  background-color: white;
  background: url(~/assets/img/login_bg.svg);
  background-size: cover;
}
</style>
