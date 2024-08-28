<template>
  <div
    class="w-full relative overflow-hidden flex flex-col items-start justify-start gap-5 text-center text-[35px] text-primary font-inter"
  >
    <div
      class="w-full relative overflow-hidden flex flex-row justify-between text-primary font-inter mt-[20px]"
    >
      <div
        class="w-full relative flex flex-row justify-between text-center text-[35px] text-primary font-inter"
      >
        <h2 class="relative text-primary font-inter">Popular Product</h2>
        <router-link
          to="/pop-product "
          class="relative text-[20px] font-light text-primary-1"
          >View all</router-link
        >
      </div>
    </div>
    <div
      class="mb-[20px] self-stretch overflow-hidden flex flex-row items-center justify-start gap-5 text-left text-sm text-black"
    >
      <product-list :products="popularProduct" :format-price="store.getters['product/formatToIdr']"> </product-list>
    </div>
  </div>
</template>

<script setup>
import ProductList from "./ProductList.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore()
const popularProduct = computed(() => store.state.product.popularProducts)

onMounted(async () => {
  await store.dispatch('product/getPopular')
})
</script>

<style scoped></style>
