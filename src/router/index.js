import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import HomePage from '../views/HomePage.vue'
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import ForgotPasswordPage from '@/views/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'

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
        layout: AuthLayout
      },
      path: '/login',
      name: 'login',
      component: LoginPage,
    },

    {
      meta: {
        layout: AuthLayout
      },
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
  ]
})

export default router
