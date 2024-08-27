<template>
    <div class="w-[100%] bg-primary-background h-auto flex flex-col items-center gap-[40px] py-[100px] px-[60px] pb-[50px] self-stretch">
      <div v-if="!hasProduct" class="w-[100%] h-[500px] flex flex-col items-center justify-center h-100">
        <img class="h-[150px] w-auto pb-[10px]" src="/images/remove.png" alt="" />
        <div class="text-center font-inter">
          <p class="font-medium text-[35px]">Products has been Removed</p>
          <p class="text-gray-3 text-[20px] mt-4">
            The product you are looking for may have been removed
          </p>
        </div>
      </div>
      
      <div v-else class="pb-[50px]">
          <div class="container-Detail">
            <DetailProduct />
          </div>
      
          <div class="w-[100%] py-[40px] text-primary font-inter text-[30px] font-medium leading-[36px]">
            Other Product
          </div>
          <ProductList />
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import DetailProduct from "@/components/product/DetailProduct.vue";
import ProductList from "@/components/product/ProductList.vue";

const products = ref([1]); 

const hasProduct = computed(() => products.value.length > 0);
</script>

<style lang="scss" scoped>

</style>