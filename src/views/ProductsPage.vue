<template>
  
  <div class="w-[100%] bg-[#ECF3F7] py-[166px] px-[60px] pb-[50px] flex flex-col gap-[40px]">
    <div class="text-primary flex flex-col gap-[20px] text-center font-maitree text-[35px] font-normal items-center">
      <p>
        All Products
      </p>
      <FIlterQueries />
    </div>

    <div v-if="productsLength === 0" class="w-[100%] h-[55vh] flex flex-col items-center justify-center h-100">
      <img class="h-[150px] w-auto pb-[10px]" src="/images/Empty-filtered-page.png" alt="" />
      <div class="text-center font-inter">
        <p class="font-medium text-[35px]">Cant Find Product Based on Your Filter</p>
        <p class="text-[#404040] text-[20px] mt-4">
          The product you are looking for does not exist
        </p>
      </div>
    </div>
    
    <div class="flex flex-col gap-[40px]" v-else>
  
      <!-- Product List -->
      <ProductList :products="products" :format-price="store.getters['product/formatToIdr']" />
  
      <!-- Pagination -->
      <Pagination v-if="dataLoaded" :pagination-data="pagination" />
    </div>
  </div>
</template>

<script setup>
import ProductList from "@/components/product/ProductList.vue";
import Pagination from "@/components/product/Pagination.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import FIlterQueries from "@/components/product/FIlterQueries.vue";

const store = useStore()
const route = useRoute()

const products = computed(() => store.state.product.products)
const pagination = computed(() => store.state.product.pagination)
const productsLength = computed(() => store.getters['product/productsLength'])
const dataLoaded = ref(false)

watch(route, async (oldValue, newValue) => {
  dataLoaded.value = false
  await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
  dataLoaded.value = true
})

onMounted(async () => {
  await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
  console.log(productsLength.value)
  dataLoaded.value = true
})
</script>

<style lang="scss" scoped>

</style>