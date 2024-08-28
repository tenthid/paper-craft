<template>
  <select @input="$emit('update:modelValue', $event.target.value)" class="w-[100%] border border-gray rounded py-[5px] px-[10px] font-normal h-[fit-content]">
    <option class="text-gray" value="" disabled selected>{{ label }}</option>
    <option class="text-primary" :value="option.value" v-for="option in options" :selected="option.value == modelValue">
      {{ option.label }}
    </option>
  </select>
</template>
  
<script setup>
  import { defineProps } from 'vue';

  defineProps({
    options: {type: Object},
    label: {type: String},
    modelValue: {type: [String, Number]}
  })
  
  // const options = ref([
  //   { label: 'Brand 1'},
  //   { label: 'Brand 2'},
  //   { label: 'Brand 3'}
  // ]);
</script>
  

<style lang="scss" scoped>

</style>