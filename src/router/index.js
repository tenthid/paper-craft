import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MainLayout from '../layouts/MainLayout.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import ProductLayout from '@/layouts/ProductLayout.vue'

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
    {
      meta: {
        layout: ProductLayout
      },
      path: '/Products-page',
      name: 'Products',
      component: ProductsPage,
    },
  ]
})

export default router
