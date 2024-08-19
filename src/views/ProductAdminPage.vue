<template>
  <div class="bg-primary-background mt-[50px] w-full">
    <div
      class="mt-[50px] w-full flex flex-col items-center gap-5 text-left text-sm text-black-100 font-body-base-bold"
    >
      <!-- Header Section -->
      <div
        class="w-[1052px] h-12 flex justify-between text-center text-[35px] text-primary font-maitree"
      >
        <div class="leading-[120%]">Manage Products</div>
        <router-link to="/create-product"
          class="rounded-[10px] bg-primary-1 h-10 flex items-center justify-center py-2.5 text-white px-5 text-base font-medium font-inter"
        >
          Create Product
        </router-link>
      </div>

      <!-- Conditional Rendering -->
      <div
        v-if="products.length === 0"
        class="flex flex-col items-center justify-center h-100"
      >
        <img class="h-[200px] w-auto" src="/images/emptysign.png" alt="" />
        <div class="text-center font-inter">
          <p class="font-medium text-[40px]">No Product yet</p>
          <p class="text-[#404040] text-[24px] mt-4">
            Please create the product first
          </p>
        </div>
      </div>

      <div v-else>
        <ListProduct :products="paginatedProducts" />

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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ListProduct from "@/components/product/ListProduct.vue";
import router from "@/router";

const products = ref([
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

const itemsPerPage = 8;
const maxPagesToShow = 5;

const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
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
