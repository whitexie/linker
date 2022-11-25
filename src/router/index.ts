import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
    meta: {
      title: '首页',
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
