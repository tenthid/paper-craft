<template>
    
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
        <div class="text-primary text-center font-[Maitree] text-[35px] font-normal leading-[120%]">
            All Products
        </div>

<!-- Product List -->
<div class="container-page">
      <ProductList :products="products" />
    </div>

    <!-- Pagination -->
    <div class="flex flex-row items-center justify-center p-2.5 text-base text-text-default-default">
      <!-- Previous Button -->
      <button
        @click="fetchProducts(currentPage - 1)"
        :disabled="currentPage === 1"
        class="flex items-center justify-center p-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <img class="w-4 h-4" src="/images/arrow-left.svg" alt="Previous" />
      </button>

      <!-- Page Numbers -->
      <div class="flex flex-row items-center gap-2 mx-4">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="fetchProducts(page)"
          :class="[
            'p-2 rounded-lg',
            {
              'bg-primary text-white': page === currentPage,
              'bg-gray-200 text-gray-700': page !== currentPage,
            },
          ]"
        >
          {{ page }}
        </button>
      </div>

      <!-- Next Button -->
      <button
        @click="fetchProducts(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="flex items-center justify-center p-2 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
      <img class="w-4 h-4" src="/images/arrow-right.svg" alt="Next" />
    </button>
    </div>
  </div>
        
    

</template>

<script setup>
import ProductList from "../components/product/ProductList.vue";
import { ref } from 'vue';
import axios from 'axios';

// Pagination state
const currentPage = ref(1);
const totalPages = ref(1);
const products = [
        {
          name: "This Product name bla bla ba ball",
          brand: "Brand name",
          price: "Rp200.000",
          stock: 11,
          image: "/images/tas.jpg",
        },
      ]

// Fetch products with pagination
const fetchProducts = async (page = 1) => {
  try {
    const response = await axios.get(`/api/products`, {
      params: {
        page,
        perPage: 15,
      },
    });
    products.value = response.data.data;
    currentPage.value = response.data.current_page;
    totalPages.value = response.data.last_page;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};


</script>

<style lang="scss" scoped>

</style>