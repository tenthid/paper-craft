<template>
    
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
        <div class="text-primary text-center font-[Maitree] text-[35px] font-normal leading-[120%]">
          Filtered Products
        </div>

        <div>
          <FilterProduct />
        </div>

        <div
        v-if="products.length === 0"
        class="w-[100%] h-[350px] flex flex-col items-center justify-center h-100"
      >
        <img class="h-[150px] w-auto pb-[10px]" src="/images/Empty-filtered-page.png" alt="" />
        <div class="text-center font-inter">
          <p class="font-medium text-[35px]">Cant Find Product Based on Your Filter</p>
          <p class="text-[#404040] text-[20px] mt-4">
            The product you are lookng for does not exist
          </p>
        </div>
      </div>

      <div v-else>
        <!-- Product List -->
        <div class="container-page">
          <AllListProduct :products="paginatedProducts" />
    
          <!-- Pagination -->
          <div
              class="flex flex-row items-center justify-center p-2.5 text-base text-text-default-default gap-2"
            >
              <button
                @click="previousPage"
                :disabled="currentPage === 1"
                class="bg-gray p-2 rounded-lg opacity-50 hover:bg-primary hover:opacity-100"
              >
                <img class="w-6 h-6" src="/images/arrow-left.svg" alt="Previous" />
              </button>
              <div class="flex flex-row items-center justify-start gap-2">
                <button
                  v-for="page in displayedPages"
                  :key="page"
                  @click="changePage(page)"
                  :class="[
                    'px-[15px] py-2 rounded-lg',
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
                class="bg-gray p-2 rounded-lg opacity-50 hover:bg-primary hover:opacity-100"
              >
                <img class="w-6 h-6" src="/images/arrow-right.svg" alt="Next" />
              </button>
            </div>
        </div>
      </div>


   
  </div>
        
    

</template>

<script setup>
import { ref, computed, reactive } from "vue";
import FilterProduct from "@/components/product/FilterProduct.vue";

const itemsPerPage = 15; 
const maxPagesToShow = 5; 
const currentPage = ref(1); 

const products = reactive([
  
]);

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const displayedPages = computed(() => {
  let startPage = Math.max(currentPage.value - Math.floor(maxPagesToShow / 2), 1);
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPages.value) {
    endPage = totalPages.value;
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
});

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function changePage(page) {
  currentPage.value = page;
}
</script>

<style lang="scss" scoped>

</style>