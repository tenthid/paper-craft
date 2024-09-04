<template>
    
  <div class="w-[100%] bg-[#ECF3F7] py-[105px] px-[60px] pb-[50px] flex flex-col gap-[40px]">
    <div class="text-primary flex justify-between gap-[20px] text-center font-maitree text-[35px] font-normal items-center">
      Favorite Products
      <div class="flex p-[6px] px-5 justify-center items-center gap-2.5 rounded-lg bg-white text-[16px]">
        <div class="font-inter  font-semibold">
          {{ productsLength }}
        </div>
        <div class="text-black font-inter  font-medium">
          Products
        </div>
      </div>
      <!-- <FIlterQueries /> -->
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
      <ProductList :disable-like="false" :products="products" :format-price="store.getters['product/formatToIdr']" />
  
      <!-- Pagination -->
      <Pagination v-if="dataLoaded" :pagination-data="pagination" />
    </div>
  </div>
</template>

<script setup>
import ProductList from '@/components/product/ProductList.vue';
import Pagination from '@/components/product/Pagination.vue';
import { useStore } from 'vuex';
import { onMounted, computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const store = useStore()
const route = useRoute()

const products = computed(() => store.state.user.likedProducts)
const pagination = computed(() => store.state.user.pagination)
const productsLength = computed(() => store.getters['user/getLikeLength'])
const dataLoaded = ref(false)

watch(route, async (oldValue, newValue) => {
  dataLoaded.value = false
  await store.dispatch('product/getUserLike', route.fullPath.split('?')[1])
  dataLoaded.value = true
})

onMounted(async () => {
  await store.dispatch('user/getUserLike', route.fullPath.split('?')[1])
  dataLoaded.value = true
})


</script>

<style lang="scss" scoped>

</style>