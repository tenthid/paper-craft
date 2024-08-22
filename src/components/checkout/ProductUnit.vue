<template>
    <div>
      <div v-for="(product, index) in products" :key="index" class="flex items-start gap-[26.646px] self-stretch justify-between">
        <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
          {{ product.name }}
        </div>
        <div class="text-gray-5 text-center font-poppins text-[14px] font-medium leading-[29.977px]">
          {{ formatPrice(product.price) }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed, defineExpose } from 'vue';
  
  const products = reactive([
    { name: 'Product 1', price: 200000 },
    { name: 'Product 2', price: 150000 },
    { name: 'Product 3', price: 300000 },
  ]);
  
  const formatPrice = (price) => {
    return price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };

  const totalPrice = computed(() => {
    return products.reduce((total, product) => total + product.price, 0);
  });

  defineExpose({ totalPrice });
</script>
  