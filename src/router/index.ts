import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StatsView from '@/views/StatsView.vue'
import LogoutView from '@/views/LogoutView.vue'
import { authenticationGuard } from './auth-guard'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    }
  ]
})

// Global navigation guard
authenticationGuard(router)

export default router
