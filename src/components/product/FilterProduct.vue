<template>
    <div class="flex justify-center items-center gap-[20px] self-stretch">
        <div v-for="(filter, index) in filters" :key="index" class="flex justify-center items-center gap-2.5 p-[10px_var(--line-height-line-height-400,20px)] rounded-[10px] bg-white font-inter text-[15px] font-medium">
            {{ filter.label }}: {{ filter.value }}
            <img class="h-4 w-auto" src="/images/X-page.svg" alt="close" />
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const filters = reactive([
  { label: 'Sortby', value: 'Price' },
  { label: 'Orderby', value: 'Ascending' },
  { label: 'Category', value: 'Category name' },
  { label: 'Brand', value: 'Brand name' },
]);

</script>

<style lang="scss" scoped>

</style>