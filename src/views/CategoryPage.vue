<template>
    
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] !pt-[166px] container-page pb-[50px] self-stretch">
      <div class="text-primary text-center font-[Maitree] text-[35px] font-normal leading-[120%]">
        {{ title }}
      </div>

    <!-- Product List -->
    <ProductList />

    <!-- Pagination -->
    <Pagination />

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductList from "@/components/product/ProductList.vue";
import Pagination from "@/components/product/Pagination.vue";

</script>

<style lang="scss" scoped>

</style>