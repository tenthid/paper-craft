<template>
    <div class="flex flex-col gap-5">
      <select class="w-[100%] border border-gray rounded py-[5px] px-[10px] text-gray font-normal">
        <option value="" disabled selected>{{ label }}</option>
        <option v-for="option in options">
          {{ option.label || option.brandName || option.categoryName }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';

    defineProps({
      options: {type: Object},
      label: {type: String},
    })
  
  // const options = ref([
  //   { label: 'Brand 1'},
  //   { label: 'Brand 2'},
  //   { label: 'Brand 3'}
  // ]);
  </script>
  

<style lang="scss" scoped>

</style>