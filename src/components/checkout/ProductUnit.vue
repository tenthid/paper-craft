<template>
    <div v-for="(product, index) in products" :key="index" class="flex items-start gap-[26.646px] self-stretch justify-between">
      <div class="flex text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
        {{ product.name }} <p class="pl-[15px]">x {{ product.quantity }}</p>
      </div>
      <div class="text-gray-5 text-center font-poppins text-[14px] font-medium leading-[29.977px]">
        {{ formatPrice(product.price * product.quantity) }}
      </div>
    </div>
</template>
  
<script setup>
import { reactive, computed, defineExpose } from 'vue';
  
const products = reactive([
  { name: 'Product A', price: 200000, quantity: 1 },
  { name: 'Product B', price: 200000, quantity: 2 },
  { name: 'Product C', price: 200000, quantity: 2 },
  { name: 'Product D', price: 200000, quantity: 1 },
]);
  
const formatPrice = (price) => {
  return price.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
};

const totalPrice = computed(() => {
return products.reduce((total, product) => total + (product.price * product.quantity), 0);
});

defineExpose({ totalPrice });
</script>

<style lang="scss" scoped>

</style>