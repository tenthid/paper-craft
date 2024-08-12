import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      meta: {
        layout: MainLayout
      },
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ]
})

export default router
