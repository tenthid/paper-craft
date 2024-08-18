<template>
  <div class="bg-primary-background mt-[50px] w-full container-page">
    <div
      class="mt-[50px] relative bg-very-ligh-blue w-full overflow-hidden flex flex-col items-center justify-start gap-5 text-left text-sm text-black-100 font-body-base-bold"
    >
      <!-- Header Section -->
      <div
        class="w-[1052px] h-12 overflow-hidden flex flex-row items-center justify-between text-center text-[35px] text-primary font-maitree"
      >
        <div class="leading-[120%]">Manage Products</div>
        <button
          class="rounded-3xs bg-primary-1 h-10 flex flex-row items-center justify-center py-2.5 px-5 text-base text-global-neutral-10 font-body-base-bold"
        >
          Create Product
        </button>
      </div>

      <!-- Products Grid -->
      <ProductList></ProductList>
      <!-- <div class="w-[1052px] grid grid-cols-4 gap-5">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center"
        >
          <img
            :src="product.image"
            alt="Product Image"
            class="w-[200px] h-[200px] object-cover mb-4"
          />
          <div class="text-center">
            <h2 class="text-base font-semibold">{{ product.name }}</h2>
            <p class="text-sm text-gray-500">{{ product.brand }}</p>
            <p class="text-primary font-bold">{{ product.price }}</p>
            <p class="text-sm text-gray-500">Stock {{ product.stock }}</p>
          </div>
          <div class="flex justify-between w-full mt-4">
            <button class="bg-red-500 text-white p-2 rounded-lg">
              <img src="/images/trash.svg" alt="Delete" />
            </button>
            <button class="bg-primary text-white p-2 rounded-lg">
              Edit Product
            </button>
          </div>
        </div>
      </div> -->

      <!-- Pagination -->
      <div
        class="self-stretch flex flex-row items-end justify-center p-2.5 text-base text-text-default-default"
      >
        <div class="flex flex-row items-center justify-start gap-4">
          <button class="bg-gray-200 p-2 rounded-lg opacity-50">
            <img
              class="w-4 h-4"
              src="/images/arrow-left.svg"
              alt="Previous"
            />
          </button>
          <div class="flex flex-row items-center justify-start gap-2">
            <button class="bg-primary text-white p-2 rounded-lg">1</button>
            <button class="p-2 rounded-lg">2</button>
            <button class="p-2 rounded-lg">3</button>
            <div class="p-2">...</div>
            <button class="p-2 rounded-lg">68</button>
          </div>
          <button class="bg-primary text-white p-2 rounded-lg">
            <img
              class="w-4 h-4"
              src="/images/arrow-right.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductList from '@/components/product/ProductList.vue';

</script>
