<template>
    <div class="flex flex-col gap-5">
      <select class="w-[250px] border border-gray rounded p-[5px] text-gray font-normal">
        <option value="" disabled selected>Choose Field</option>
        <option v-for="option in options">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const options = ref([
    { label: 'Price: Low to High'},
    { label: 'Price: High to Low'}
  ]);
  </script>

<style lang="scss" scoped>

</style>