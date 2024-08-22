<template>
  <select @input="$emit('update:modelValue', $event.target.value)" class="w-[100%] border border-gray rounded py-[5px] px-[10px] text-gray font-normal h-[fit-content]">
    <option value="" disabled selected>{{ label }}</option>
    <option :value="option.label || option.brandName || option.categoryName" v-for="option in options">
      {{ option.label || option.brandName || option.categoryName }}
    </option>
  </select>
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