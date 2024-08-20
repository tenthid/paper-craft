<template>
  <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="w-full pb-[25px] relative overflow-hidden flex flex-row items-center justify-start gap-5 text-left text-sm text-black font-inter">
    <router-link v-for="(product, index) in row" :key="index" :to="`/detail-product/${product.id}`" class="self-stretch flex-1 rounded-md bg-white overflow-hidden flex flex-col items-center justify-start p-[15px] relative gap-2.5">
      <img
        class="self-stretch relative rounded-sm max-w-full overflow-hidden h-[250px] shrink-0 object-cover z-[0]"
        :alt="product.name"
        :src="product.image"
      />
      <div class="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start gap-[3px] z-[1]">
        <div class="w-[223px] relative tracking-[0.1px] leading-[24px] flex items-center h-[17px] shrink-0">
          {{ product.name }}
        </div>
        <div class="w-full relative text-3xs tracking-[0.1px] leading-[24px] text-dimgray flex items-center h-[15px] shrink-0">
          {{ product.brand }}
        </div>
        <div class="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between text-base text-primary">
          <div class="w-[87px] relative tracking-[0.1px] leading-[24px] font-medium flex items-center h-[21px] shrink-0">
            {{ product.price }}
          </div>
          <div class="relative text-xs tracking-[0.1px] leading-[24px] text-gray">
            <span>Stock </span>
            <b class="text-black">{{ product.stock }}</b>
          </div>
        </div>
      </div>
      <div class="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start gap-1.5 z-[2] text-primary">
        <div class="rounded-8xs bg-primary overflow-hidden flex flex-row items-center justify-center p-1.5">
          <router-link to="/cart" class="flex flex-row items-center justify-center">
            <img
              class="w-5 relative h-5 overflow-hidden shrink-0"
              alt="cart"
              src="/images/cart.svg"
            />
          </router-link>
        </div>
        <router-link to="/checkout" class="self-stretch flex-1 rounded-8xs border-primary border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-0.5 px-0">
          <div class="relative leading-[16px] font-medium">Buy now</div>
        </router-link>
      </div>
      <div class="w-[30px] !m-[0] absolute top-[12px] left-[13px] rounded-6xl bg-white h-[30px] flex flex-row items-center justify-center p-1 box-border z-[3]">
        <img
          class="w-[22px] relative h-[22px] overflow-hidden shrink-0"
          alt="heart"
          src="/images/heart.svg"
        />
      </div>
    </router-link>
  </div>
</template>

  
  <script setup lang="ts">
  import { computed } from "vue";
  
  const props = defineProps<{
    products: Array<{
      name: string;
      brand: string;
      price: string;
      stock: number;
      image: string;
    }>;
  }>();
  
  const rows = computed(() => {
    const productsPerPage = 15;
    const rows = [];
    for (let i = 0; i < props.products.length; i += 5) {
      rows.push(props.products.slice(i, i + 5));
    }
    return rows;
  });
  </script>
  
  <style lang="scss" scoped>
  </style>
  