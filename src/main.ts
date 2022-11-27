import { createApp } from 'vue'
// import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
