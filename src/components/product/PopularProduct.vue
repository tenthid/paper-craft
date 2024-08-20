<template>
  <div
    class="w-full relative overflow-hidden flex flex-col items-start justify-start gap-5 text-center text-[35px] text-primary font-inter"
  >
    <div
      class="w-full relative flex flex-row justify-between items-center text-primary font-inter mt-[20px]"
    >
      <h2 class="text-primary font-inter mr-4">Popular Product</h2>
      <router-link
        to="/pop-product"
        class="text-[20px] font-light text-primary-1 ml-auto"
        >View all</router-link
      >
    </div>
    <div
      class="mb-[20px] self-stretch overflow-hidden flex flex-row items-center justify-start gap-5 text-left text-sm text-black"
    >
      <product-list></product-list>
    </div>
  </div>
</template>


<script setup>
import ProductList from "./ProductList.vue";
</script>

<style scoped></style>
