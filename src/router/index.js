import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import HomePage from '../views/HomePage.vue'
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import ForgotPasswordPage from '@/views/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import HomeAdminPage from '@/views/HomeAdminPage.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import ProductAdminPage from '@/views/ProductAdminPage.vue'
import ProductLayout from '@/layouts/ProductLayout.vue'
import FavoritePage from '@/views/FavoritePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import BrandPage from '@/views/BrandPage.vue'
import DetailPage from '@/views/DetailPage.vue'
import InvoicePage from '@/views/InvoicePage.vue'
import auth from './middleware/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/',
      name: 'home',
      component: HomePage,
    },
    
    {
      meta: {
        layout: AuthLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth()?  next('/') : next()},
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    
    {
      meta: {
        layout: AuthLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth()?  next('/') : next()},
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    
    {
      meta: {
        layout: AuthLayout
      },
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPasswordPage,
    },

    {
      meta: {
        layout: AuthLayout
      },
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPasswordPage,
    },

    {
      meta: {
        layout: ProductLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/products',
      name: 'Products',
      component: ProductsPage,
    },
    
    {
      meta: {
        layout: ProductLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/categories',
      name: 'CategoryName',
      component: CategoryPage,
    },
    
    {
      meta: {
        layout: ProductLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/brands',
      name: 'BrandName',
      component: BrandPage,
    },
    
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth()?  next() : next('/login')},
      path: '/favorite',
      name: 'Favorite',
      component: FavoritePage,
    },
    
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/product/:id',
      name: 'Detail',
      component: DetailPage,
    },
    
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/profile-details',
      name: 'profileDetails',
      component: ProfilePage,
    },
    
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/change-password',
      name: 'changePassword',
      component: ProfilePage,
    },
    
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth();  next()},
      path: '/transaction-history',
      name: 'transactionHistory',
      component: ProfilePage,
    },
    
    {
      meta: {
        layout: MainLayout
      },
      beforeEnter: async (to, from, next) => {await auth.checkAuth()?  next() : next('/login')},
      path: '/cart',
      name: 'cart',
      component: CheckoutPage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/invoice',
      name: 'Invoice',
      component: InvoicePage,
    },

    {
      meta: {
        layout: AdminLayout
      },
      path: '/home-admin',
      name: 'HomeAdmin',
      component: HomeAdminPage,
    },

    {
      meta: {
        layout: AdminLayout
      },
      path: '/products-admin',
      name: 'ProductAdmin',
      component: ProductAdminPage,
    },
  ]
})

export default router
