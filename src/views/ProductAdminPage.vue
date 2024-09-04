<template>
  <div
    class="bg-primary-background laptop:mx-auto w-full flex items-center justify-center laptop:container-page"
  >
    <div
      class="laptop:px[200px] pt-8 h-full mt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold laptop:ml-[150px] tablet:px-10"
    >
      <!-- Header Section -->
      <div
        class="w-full h-12 flex justify-between text-center laptop:text-[35px] text-primary font-maitree"
      >
        <div class="leading-[120%] phone-s:text-[20px] laptop:text-[35px]">
          Manage Products
        </div>

        <router-link
          to="/create-product"
          class="rounded-[10px] bg-primary h-10 flex items-center justify-center tablet:py-2.5 text-white px-5 text-base font-medium font-inter phone-s:text-[15px]"
        >
          Create Product
        </router-link>
      </div>

      <!-- Conditional Rendering -->
      <div
        v-if="products.length === 0"
        class="w-[100%] h-[55vh] flex flex-col items-center justify-center h-100"
      >
        <img
          class="h-[150px] w-auto pb-[10px]"
          src="/images/emptysign.png"
          alt="No products found"
        />

        <div class="text-center font-inter">
          <p class="font-medium phone-s:text-[15px] tablet:text-[35px]">
            Can't Find Product Based on Your Filter
          </p>

          <p class="text-gray-3 phone-s:text-[15px] tablet:text-[20px] mt-4">
            The product you are looking for does not exist
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-[40px]" v-else>
        <!-- Product List -->
        <ProductList :is-admin="true" :disable-like="false" :products="products" :format-price="store.getters['product/formatToIdr']" />

        <Pagination v-if="dataLoaded" :pagination-data="pagination" />
        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ProductList from "@/components/product/ProductList.vue";
import Pagination from "@/components/product/Pagination.vue";


const store = useStore();
const route = useRoute()

const dataLoaded = ref(false)
const products = computed(() => store.state.product.products);
const pagination = computed(() => store.state.product.pagination)

const handlePageChange = async (page) => {
  currentPage.value = page;
  loading.value = true;
  try {
    await store.dispatch("productAdmin/getProducts", { page });
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    loading.value = false;
  }
};

watch(route, async (oldValue, newValue) => {
  dataLoaded.value = false
  await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
  dataLoaded.value = true
})

onMounted(async () => {
  await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
  dataLoaded.value = true
})
</script>

<style scoped></style>
