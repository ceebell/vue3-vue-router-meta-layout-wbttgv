import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/admin',
      component: () => import('@/views/Admin.vue'),
      meta: { layout: 'AppLayoutAdmin' }
    }
  ]
})
