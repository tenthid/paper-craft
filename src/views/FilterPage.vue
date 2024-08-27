<template>
    
    <div class="bg-primary-background h-auto flex flex-col items-center gap-[40px] !pt-[166px] container-page !pb-[50px] ">
        <div class="text-primary text-center font-maitree text-[35px] font-normal leading-[120%]">
          Filtered Products
        </div>
        <div v-if="productsLength === 0" class="w-[100%] h-[425px] flex flex-col items-center justify-center h-100">
        <img class="h-[150px] w-auto pb-[10px]" src="/images/Empty-filtered-page.png" alt="" />
        <div class="text-center font-inter">
          <p class="font-medium text-[35px]">Cant Find Product Based on Your Filter</p>
          <p class="text-[#404040] text-[20px] mt-4">
            The product you are looking for does not exist
          </p>
        </div>
      </div>

      <div class="w-full flex gap-[40px] flex-col" v-else>
        <!-- Product List -->
        <ProductList />
        <!-- Pagination -->
        <Pagination v-if="dataLoaded" :pagination-data="paginationData"/>
      </div>

    </div>
</template>

<script setup>
  import ProductList from "@/components/product/ProductList.vue";
  import Pagination from "@/components/product/Pagination.vue";
  import { ref, computed, onMounted, watch } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";

  const store = useStore()
  const route = useRoute()

  const productsLength = computed(() => store.getters['product/productsLength'])
  const paginationData = computed(() => store.state.product.pagination)
  const dataLoaded = ref(false)

  watch(route, async (oldValue, newValue) => {
    dataLoaded.value = false
    await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
    dataLoaded.value = true
    console.log
  })
  
  onMounted(async () => {
    await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
    dataLoaded.value = true
  })
</script>

<style lang="scss" scoped>

</style>