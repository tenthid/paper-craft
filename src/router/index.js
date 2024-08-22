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
import ProductLayout from '@/layouts/ProductLayout.vue'
import FilterPage from '@/views/FilterPage.vue'
import FavoritePage from '@/views/FavoritePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import BrandPage from '@/views/BrandPage.vue'
import DetailPage from '@/views/DetailPage.vue'
import InvoicePage from '@/views/InvoicePage.vue'


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

    {
      meta: {
        layout: ProductLayout
      },
      path: '/products-page',
      name: 'Products',
      component: ProductsPage,
    },

    {
      meta: {
        layout: ProductLayout
      },
      path: '/filter-page',
      name: 'Filter',
      component: FilterPage,
    },

    {
      meta: {
        layout: ProductLayout
      },
      path: '/category-page',
      name: 'CategoryName',
      component: CategoryPage,
    },

    {
      meta: {
        layout: ProductLayout
      },
      path: '/brand-page',
      name: 'BrandName',
      component: BrandPage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/favorite-page',
      name: 'Favorite',
      component: FavoritePage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/detail-page',
      name: 'Detail',
      component: DetailPage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/profile-details',
      name: 'profileDetails',
      component: ProfilePage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/change-password',
      name: 'changePassword',
      component: ProfilePage,
    },

    {
      meta: {
        layout: MainLayout
      },
      path: '/transaction-history',
      name: 'transactionHistory',
      component: ProfilePage,
    },

    {
      meta: {
        layout: MainLayout
      },
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
  ]
})

export default router
