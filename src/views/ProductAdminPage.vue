<template>
  <div
    class="bg-primary-background laptop:mx-auto mt-[30px] w-full h-screen overflow-hidden flex items-center justify-center laptop:container-page"
  >
    <div
      class="laptop:px[200px] pt-8 h-full mt-[50px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold laptop:ml-[150px] tablet:px-10"
    >
      <!-- Header Section -->
      <div
        class="laptop-l:w-[1052px] laptop:px-5 phone-s:w-full h-12 flex justify-between text-center laptop:text-[35px] text-primary font-maitree"
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
        class="flex flex-col items-center justify-center h-full my-7 phone-s:px-5 tablet:py-[50px] laptop-l:pb-20"
      >
        <img
          class="h-auto w-auto phone-s:w-[100px] tablet:w-max"
          src="/images/emptysign.png"
          alt=""
        />
        <div class="text-center font-inter">
          <p
            class="font-medium laptop:text-[40px] tablet:text-[25px] phone-s:text-[20px]"
          >
            No Product yet
          </p>
          <p class="text-gray-3 tablet:text-[24px] phone-s:text-[12px] mt-4">
            Please create the product first
          </p>
        </div>
      </div>

      <div v-else>
        <ListProduct :products="paginatedProducts" />

        <!-- Pagination -->
        <div
          class="flex items-center justify-center p-2.5 text-base text-text-default-default"
        >
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            :class="[
              'p-2 rounded-lg mr-1',
              currentPage === 1
                ? 'bg-gray opacity-50 cursor-not-allowed'
                : 'bg-primary',
            ]"
          >
            <img class="w-4 h-4" src="/images/arrow-left.svg" alt="Previous" />
          </button>
          <div class="flex flex-row items-center justify-start gap-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="changePage(page)"
              :class="[
                'p-2 rounded-lg',
                {
                  'bg-primary text-white': page === currentPage,
                  'bg-gray-200': page !== currentPage,
                },
              ]"
            >
              {{ page }}
            </button>
          </div>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            :class="[
              'p-2 rounded-lg ml-1',
              currentPage === totalPages
                ? 'bg-gray opacity-50 cursor-not-allowed'
                : 'bg-primary',
            ]"
          >
            <img class="w-4 h-4" src="/images/arrow-right.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ListProduct from "@/components/product/ListProduct.vue";
import { useStore } from "vuex";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});

const store = useStore();
const products = computed(() => {
  return store.state.product.products;
});
const itemsPerPage = 8;
const maxPagesToShow = 5;

const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

// const paginatedProducts = computed(() => {
//   const start = (currentPage.value - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   return products.value.slice(start, end);
// });

// function previousPage() {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//   }
// }

// function nextPage() {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++;
//   }
// }

// function changePage(page) {
//   currentPage.value = page;
// }
</script>
