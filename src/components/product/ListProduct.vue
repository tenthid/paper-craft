<template>
  <div class="w-full flex flex-col gap-5">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="flex flex-row justify-center gap-5"
    >
      <router-link
        v-for="(product, productIndex) in row"
        :key="productIndex"
        to="/detail-product"
        class="product-card flex flex-col items-center p-[15px] gap-2.5 font-inter"
      >
        <img
          class="product-image rounded-sm object-cover"
          :alt="product.name"
          :src="product.image"
        />
        <div class="flex flex-col items-start gap-[3px]">
          <div class="text-[#000000] text-[14px]">{{ product.name }}</div>
          <div class="text-[#5B5B5B] text-3xs">{{ product.brand }}</div>
          <div
            class="flex flex-row items-center justify-between text-base text-primary"
          >
            <div class="font-medium mr-[80px]">{{ product.price }}</div>
            <div class="text-xs text-[#5B5B5B]">
              <span>Stock </span>
              <b>{{ product.stock }}</b>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-1.5 text-primary">
          <div class="rounded-md bg-danger p-1.5">
            <router-link to="/" class="flex items-center justify-center">
              <img class="w-5 h-5" alt="cart" src="/images/trash.svg" />
            </router-link>
          </div>
          <router-link
            to="/Edit-Product"
            class="btn rounded-[5px] bg-primary text-white py-0.5 px-0 w-[174px] h-[33px] text-center font-inter text-[14px]"
          >
            Edit Product
          </router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ products: any[] }>();

const rows = computed(() => {
  const productsPerPage = 8;
  const rows = [];
  for (let i = 0; i < props.products.length; i += 4) {
    rows.push(props.products.slice(i, i + 4));
  }
  return rows;
});
</script>

<style>
.product-card {
  width: 250px;
  height: 385px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
}

.product-image {
  width: 218px;
  height: 240px;
}

.flex-row {
  display: flex;
  justify-content: start;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
