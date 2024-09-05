import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import HomePage from "../views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ForgotPasswordPage from "@/views/ForgotPasswordPage.vue";
import ResetPasswordPage from "@/views/ResetPasswordPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
// import HomeAdminPage from "@/views/HomeAdminPage.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import BrandAdminPage from "@/views/BrandAdminPage.vue";
import ProductAdminPage from "@/views/ProductAdminPage.vue";
import CategoryAdminPage from "@/views/CategoryAdminPage.vue";
import ProfilePage from '@/views/ProfilePage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import ProductLayout from '@/layouts/ProductLayout.vue'
import FavoritePage from '@/views/FavoritePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import BrandPage from '@/views/BrandPage.vue'
import ProductFormPage from "@/views/ProductFormPage.vue";
import EditCategoryPage from "@/views/EditCategoryPage.vue";
import EditBrandPage from "@/views/EditBrandPage.vue";
import DetailPage from '@/views/DetailPage.vue'
import InvoicePage from '@/views/InvoicePage.vue'
import auth from './middleware/auth'
import UserRolePage from "@/views/UserRolePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      meta: {
        layout: MainLayout,
      },
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      meta: {
        layout: AuthLayout,
        authPage: true
      },
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    
    {
      meta: {
        layout: AuthLayout,
        authPage: true
      },
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    
    {
      meta: {
        layout: AuthLayout,
        authPage: true
      },
      path: "/forgot-password",
      name: "forgotPassword",
      component: ForgotPasswordPage,
    },

    {
      meta: {
        layout: AuthLayout,
        authPage: true
      },
      path: "/reset-password",
      name: "resetPassword",
      component: ResetPasswordPage,
    },

    {
      meta: {
        layout: ProductLayout
      },
      path: '/products',
      name: 'Products',
      component: ProductsPage,
    },
    
    {
      meta: {
        layout: ProductLayout
      },
      path: '/categories',
      name: 'CategoryName',
      component: CategoryPage,
    },
    
    {
      meta: {
        layout: ProductLayout
      },
      path: '/brands',
      name: 'BrandName',
      component: BrandPage,
    },
    
    {
      meta: {
        layout: MainLayout,
        requireAuth: true
      },
      path: '/favorite',
      name: 'Favorite',
      component: FavoritePage,
    },

    // {
    //   meta: {
    //     layout: AdminLayout,
    //   },
    //   path: "/home-admin",
    //   name: "HomeAdmin",
    //   component: HomeAdminPage,
    // },
    {
      meta: {
        layout: MainLayout
      },
      path: '/product/:id',
      name: 'Detail',
      component: DetailPage,
    },
    
    {
      meta: {
        layout: MainLayout,
        requireAuth: true
      },
      path: '/profile-details',
      name: 'profileDetails',
      component: ProfilePage,
    },
    
    {
      meta: {
        layout: MainLayout,
        requireAuth: true
      },
      path: '/change-password',
      name: 'changePassword',
      component: ProfilePage,
    },
    
    {
      meta: {
        layout: MainLayout,
        requireAuth: true
      },
      path: '/transaction-history',
      name: 'transactionHistory',
      component: ProfilePage,
    },
    
    {
      meta: {
        layout: MainLayout,
        requireAuth: true
      },
      path: '/cart',
      name: 'cart',
      component: CheckoutPage,
    },

    {
      meta: {
        layout: MainLayout,
        requireAuth: true
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
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/category-admin',
      name: CategoryAdminPage,
      component: CategoryAdminPage
    },
    
    {
      meta: {
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/brand-admin',
      name: BrandAdminPage,
      component: BrandAdminPage
    },
    
    {
      meta: {
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/products-admin',
      name: 'ProductAdmin',
      component: ProductAdminPage,
    },
    {
      meta: {
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/create-product',
      name: 'createProduct',
      component: ProductFormPage,
    },
    {
      meta: {
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/edit-product/:id',
      name: 'editProduct',
      component: ProductFormPage,
    },
    {
      meta: {
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/edit-category/:id',
      name: 'editCategory',
      component: EditCategoryPage,
    },
    {
      meta: {
        layout: AdminLayout,
        isAdmin: true
      },
      path: '/edit-brand/:id',
      name: 'editBrand',
      component: EditBrandPage,
    },
    {
      meta: {
        layout: AdminLayout,
        isMaster: true
      },
      path: '/user-role',
      name: 'manageUserRole',
      component: UserRolePage
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  await auth.getAuth()
  
  if(to.meta.isAdmin) {
    if(auth.checkAuth()) return auth.checkRole('user')? next(from) : next()
    return next(from)
  }

  if(to.meta.isMaster) {
    if(auth.checkAuth()) return auth.checkRole('master')? next() : next(from)
    return next(from)
  }

  if(auth.checkAuth()) {
    if(!to.meta.isAdmin) return !auth.checkRole('user')? next('/products-admin') : next()
  }

  if(to.meta.requireAuth) {
    return auth.checkAuth()? next() : next('/login')
  }
  
  if(to.meta.authPage) {
    return auth.checkAuth()? next(from) : next()
  }

  next()
}) 

export default router
