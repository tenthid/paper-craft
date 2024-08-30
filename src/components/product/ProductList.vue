<template>
  <div
    class="w-full relative overflow-hidden grid laptop-l:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 phone-s:grid-cols-1 gap-5 text-left text-sm text-black font-inter"
  >
    <router-link
      :to="`/product/${product.id}`"
      v-for="product in products"
      class="self-stretch flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-start p-[15px] relative gap-2.5"
    >
      <img
        class="self-stretch relative rounded-sm max-w-full overflow-hidden h-[250px] shrink-0 object-cover z-[0]"
        :alt="product.product_name"
        src="/images/tas.jpg"
      />
      <div
        class="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start gap-[3px] z-[1]"
      >
        <div
          class="text-[#000000] text-[14px] w-full relative tracking-[0.1px] leading-[24px] flex items-center h-[17px] shrink-0"
        >
          {{ product.product_name }}
        </div>
        <div
          class="text-[#5B5B5B]  w-full relative text-3xs tracking-[0.1px] text-[10px] text-dimgray flex items-center h-[15px] shrink-0"
        >
          {{ product.brand.brand_name }}
        </div>
        <div
          class="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between text-base text-primary"
        >
          <div
            class="w-[87px] relative tracking-[0.1px] leading-[24px] font-medium flex items-center h-[21px] shrink-0"
          >
            {{ formatPrice(product.price) }}
          </div>
          <div
            class="ml-auto relative text-xs tracking-[0.1px] leading-[24px] text-[12px] text-[#5B5B5B]"
          >
            <span>Stock </span>
            <b class="text-[#000] text-[12px]">{{ product.stock }}</b>
          </div>
        </div>
      </div>
      <div
        class="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start gap-1.5 z-[2] text-primary"
      >
        <div
          class="rounded-md bg-primary overflow-hidden flex flex-row items-center justify-center p-1.5"
        >
          <router-link
            to="/cart"
            class="flex flex-row items-center justify-center"
          >
            <img
              class="w-5 relative h-5 overflow-hidden shrink-0"
              alt="cart"
              src="/images/cart.svg"
            />
          </router-link>
        </div>
        <router-link
          to="/checkout"
          class="self-stretch flex-1 rounded-md border-primary border-[1px] border-solid overflow-hidden py-0.5 px-0"
        >
          <div class="btn relative leading-[16px] font-medium">Buy now</div>
        </router-link>
      </div>
      <div
        class="w-[30px] !m-[0] absolute top-[12px] left-[13px] rounded-md bg-white h-[30px] flex flex-row items-center justify-center p-1 box-border z-[3]"
      >
        <img
          class="w-[22px] relative h-[22px] overflow-hidden shrink-0"
          alt="heart"
          src="/images/heart.svg"
        />
      </div>
    </router-link>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps({
    products: {type: Array},
    formatPrice: {type: Function}
  })
</script>
