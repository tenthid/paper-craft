<template>
  <div
    class="relative bg-white w-50 h-[740px] overflow-hidden flex flex-col items-start justify-between p-5 box-border text-left text-base text-black font-maitree"
  >
    <div
      class="w-[171px] bg-white overflow-hidden flex flex-col items-start justify-start gap-5"
    >
      <div
        class="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start font-lato"
      >
        <div
          class="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start gap-10 mt-[50px]"
        >
          <router-link to="/home-admin" active-class="text-primary-1"
            >Home</router-link
          >
          <router-link to="/products-admin" active-class="text-primary-1"
            >Products</router-link
          >
          <router-link to="/category-admin" active-class="text-primary-1"
            >Categories</router-link
          >
          <router-link to="/brand-admin" active-class="text-primary-1"
            >Brands</router-link
          >
          <router-link to="/customer-admin" active-class="text-primary-1"
            >Customers</router-link
          >
        </div>
      </div>
    </div>
    <button
      class="bg-white overflow-hidden flex flex-row items-center justify-center py-[5px] gap-2.5 text-red-danger font-lato"
      @click="logout"
    >
      <img
        class="w-5 relative h-[18px]"
        alt="Logout"
        src="/images/logout.svg"
      />
      <div class="relative leading-[13px] text-danger">Logout</div>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('authToken');

  router.push('/login');
};
</script>

