import { createRouter, createWebHistory } from 'vue-router'
import AppView from '@/views/AppView.vue'
import HomeView from '@/views/HomeView.vue'
import authGuard from './guards/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/app',
      name: 'app',
      component: AppView,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(authGuard)

export default router
