<template>
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
      <!-- Header -->
      <div class="flex px-[10px] justify-start items-center gap-[10px] self-stretch">
        <router-link to="/" class="absolute pl-[25px]" @click="goBack">
          <img class="h-[48px] w-auto" src="/images/arrow-left-circle.svg" alt="" />
        </router-link>
        <div class="flex w-full h-[46px] justify-center items-center gap-[10px] text-primary text-center font-maitree text-[35px] font-normal">
          Product Detail
        </div>
      </div>
      
      <!-- Conditional Rendering -->
      <div v-if="!hasProduct" class="w-[100%] h-[440px] flex flex-col items-center justify-center h-100">
        <img class="h-[150px] w-auto pb-[10px]" src="/images/remove.png" alt="" />
        <div class="text-center font-inter">
          <p class="font-medium text-[35px]">Products has been Removed</p>
          <p class="text-[#404040] text-[20px] mt-4">
            The product you are looking for may have been removed
          </p>
        </div>
      </div>
      
      <div v-else class="pb-[50px]">
          <div class="container-Detail">
            <DetailProduct />
          </div>
      
          <div class="w-[100%] px-[60px] py-[40px] text-[#005C78] font-inter text-[30px] font-medium leading-[36px]">
            Other Product
          </div>
          <div class="container-page">
            <ProductList />
          </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import DetailProduct from "@/components/product/DetailProduct.vue";
import ProductList from "@/components/product/ProductList.vue";

// Simulated data for demonstration
const products = ref([true]); // Replace with actual product data

const hasProduct = computed(() => products.value.length > 0);

function goBack() {
  // Logic to navigate back
}
</script>
