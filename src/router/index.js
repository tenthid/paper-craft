import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import HomePage from "../views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ForgotPasswordPage from "@/views/ForgotPasswordPage.vue";
import ResetPasswordPage from "@/views/ResetPasswordPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import HomeAdminPage from "@/views/HomeAdminPage.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import ProductAdminPage from "@/views/ProductAdminPage.vue";
import CustomerAdminPage from "@/views/CustomerAdminPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      },
      path: "/login",
      name: "login",
      component: LoginPage,
    },

    {
      meta: {
        layout: AuthLayout,
      },
      path: "/register",
      name: "register",
      component: RegisterPage,
    },

    {
      meta: {
        layout: AuthLayout,
      },
      path: "/forgot-password",
      name: "forgotPassword",
      component: ForgotPasswordPage,
    },

    {
      meta: {
        layout: AuthLayout,
      },
      path: "/reset-password",
      name: "resetPassword",
      component: ResetPasswordPage,
    },
    {
      meta: {
        layout: MainLayout,
      },
      path: "/products-page",
      name: "Products",
      component: ProductsPage,
    },

    {
      meta: {
        layout: AdminLayout,
      },
      path: "/home-admin",
      name: "HomeAdmin",
      component: HomeAdminPage,
    },
    {
      meta: {
        layout: AdminLayout,
      },
      path: "/products-admin",
      name: "ProductAdmin",
      component: ProductAdminPage,
    },
    {
      meta: {
        layout: AdminLayout,
      },
      path: "/category-admin",
      name: "CategoryAdmin",
      component: CategoryAdminPage,
    },
    {
      meta: {
        layout: AdminLayout,
      },
      path: "/brand-admin",
      name: "BrandAdmin",
      component: BrandAdminPage,
    },
    {
      meta: {
        layout: AdminLayout,
      },
      path: "/customer-admin",
      name: "CustomerAdmin",
      component: CustomerAdminPageAdminPage,
    },
  ],
});

export default router;
