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
  {
    path: '/admin',
    component: () => import('~/layout/Manager.vue'),
    children: [
      {
        path: '',
        component: () => import('~/pages/admin/Custom.vue'),
        children: [
          { path: '', component: () => import('~/pages/admin/Links.vue') },
          { path: 'appearance', component: () => import('~/pages/admin/Appearance.vue') },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: () => import('~/pages/Login.vue'),
  },
  {
    path: '/:username',
    component: () => import('~/pages/Profile.vue'),
    meta: {
      title: '',
    },
    props: true,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
