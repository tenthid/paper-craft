<template>
  <div class="bg-primary-background mt-[50px] w-full">
    <div
      class=" mt-[50px] relative w-full overflow-hidden flex flex-col items-center justify-start gap-5 text-left text-sm text-black-100 font-body-base-bold"
    >
      <!-- Header Section -->
      <div
        class="w-[1052px] h-12 overflow-hidden flex flex-row justify-between text-center text-[35px] text-primary font-maitree"
      >
        <div class="leading-[120%]">Manage Products</div>
        <button
          class="rounded-[10px] bg-primary-1 h-10 flex flex-row items-center justify-center py-2.5 text-white px-5 text-base font-medium font-inter"
        >
          Create Product
        </button>
      </div>

      <!-- Products Grid -->
      <div class="">
        <ListProduct />
      </div>

      <!-- Pagination -->
      <div
        class="self-stretch flex flex-row items-end justify-center p-2.5 text-base text-text-default-default"
      >
        <div class="flex flex-row items-center justify-start gap-4">
          <button class="bg-gray p-2 rounded-lg opacity-50">
            <img class="w-4 h-4" src="/images/arrow-left.svg" alt="Previous" />
          </button>
          <div class="flex flex-row items-center justify-start gap-2">
            <button class="bg-primary text-white p-2 rounded-lg">1</button>
            <button class="p-2 rounded-lg">2</button>
            <button class="p-2 rounded-lg">3</button>
            <div class="p-2">...</div>
            <button class="p-2 rounded-lg">68</button>
          </div>
          <button class="bg-primary text-white p-2 rounded-lg">
            <img class="w-4 h-4" src="/images/arrow-right.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListProduct from "@/components/product/ListProduct.vue";
</script>
