<template>
    
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
        <div class="text-primary text-center font-[Maitree] text-[35px] font-normal leading-[120%]">
            All Products
        </div>

    <!-- Product List -->
    <div class="container-page">
      <ProductList :products="paginatedProducts" />

      <!-- Pagination -->
      <div
          class="flex flex-row items-center justify-center p-2.5 text-base text-text-default-default"
        >
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="bg-gray p-2 rounded-lg opacity-50"
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
            class="bg-primary text-white p-2 rounded-lg"
          >
            <img class="w-4 h-4" src="/images/arrow-right.svg" alt="Next" />
          </button>
        </div>
    </div>

   
  </div>
        
    

</template>

<script setup>
import { ref, computed } from "vue";
import ProductList from "@/components/product/ProductList.vue";

const products = ref([
  {
    name: "This Pr88oduct name bla bla ba ball",
    brand: "Brand name",
    price: "Rp200.000",
    stock: 11,
    image: "/images/tas.jpg",
  },
  {
    name: "This Product name bla bla ba ball",
    brand: "Brand name",
    price: "Rp200.000",
    stock: 11,
    image: "/images/tas.jpg",
  },
  {
    name: "This Product name bla bla ba ball",
    brand: "Brand name",
    price: "Rp200.000",
    stock: 11,
    image: "/images/tas.jpg",
  },
  {
    name: "This Product name bla bla ba ball",
    brand: "Brand name",
    price: "Rp200.000",
    stock: 11,
    image: "/images/tas.jpg",
  },
  {
    name: "This Product name bla bla ba ball",
    brand: "Brand name",
    price: "Rp200.000",
    stock: 11,
    image: "/images/tas.jpg",
  },
]);

const itemsPerPage = 3;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

// Menghitung halaman yang ditampilkan
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