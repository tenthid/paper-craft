<template>
  <div
    class="bg-primary-background laptop:mx-auto w-full h-screen overflow-hidden flex items-center justify-center laptop:container-page"
  >
    <div
      class="laptop:px[200px] pt-8 h-full mt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold laptop:ml-[150px] tablet:px-10"
    >
      <!-- Header Section -->
      <div
        class="laptop-l:w-[1052px] laptop:px-5 phone-s:w-full phone-s:px-3 h-12 flex justify-between text-center laptop:text-[35px] text-primary font-maitree"
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
          v-if="productsLength === 0"
          class="w-[100%] h-[55vh] flex flex-col items-center justify-center h-100"
        >
          <img
            class="h-[150px] w-auto pb-[10px]"
            src="/images/Empty-filtered-page.png"
            alt=""
          />
          <div class="text-center font-inter">
            <p class="font-medium text-[35px]">
              Can't Find Product Based on Your Filter
            </p>
            <p class="text-[#404040] text-[20px] mt-4">
              The product you are looking for does not exist
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-[40px]" v-else>
          <!-- Product List -->
          <ListProduct
            :products="products"
            :format-price="store.getters['product/formatToIdr']"
          />

          <!-- Pagination -->
          <!-- <Pagination v-if="dataLoaded" :pagination-data="pagination" /> -->
        </div>
      </div>
    </div>
</template>

<script setup>
import ListProduct from "@/components/product/ListProduct.vue";
import Pagination from "@/components/product/Pagination.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

// const products = computed(() => store.state.product.products); 
// const pagination = computed(() => store.state.product.pagination);

</script>

<style scoped></style>
