import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '@/views/errors/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/views/layouts/Landing.vue'),
      children: [
        {
          path: '',
          name: 'landing.index',
          component: () => import('@/views/landing/Index.vue'),
        },
        {
          path: 'verify/:code',
          name: 'landing.diploma.details',
          component: () => import('@/views/landing/diploma/SearchDetails.vue'),
        },
      ],
    },
    {
      path: '/auth/login',
      name: 'auth.login',
      component: () => import('@/views/auth/Login.vue'),
    },
    {
      path: '/app',
      name: 'app',
      children: [
        {
          path: 'dashboard',
          name: 'app.dashboard',
          component: () => import('@/views/app/dashboard/Index.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)', component: PageNotFound },
  ],
})

export default router
