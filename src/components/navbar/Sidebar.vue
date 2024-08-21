<template>
  <div
    class="relative bg-white w-50 h-[740px] overflow-hidden flex flex-col justify-between items-start p-5 box-border text-left text-base font-maitree"
  >
    <div
      class="w-[171px] bg-white overflow-hidden flex flex-col items-start gap-5"
    >
      <div
        class="self-stretch bg-white overflow-hidden flex flex-row items-start font-inter "
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
        </div>
      </div>
    </div>
    <button
      class=" bg-white overflow-hidden flex flex-row items-center justify-center py-auto gap-2.5 text-red-danger "
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