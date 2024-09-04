<template>
    <div class="flex flex-col gap-[20px]">
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <p class="text-[14px] font-bold font-inter">Product price</p>
            <div v-for="item in items" :class="{'hidden' : !item.selected}" class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">{{ item.product.product_name }}</p>
                <p class="text-[14px] font-inter text-gray">{{ formatPrice(item.totalPrice) }}</p>
            </div>
        </div>
        <p class="font-inter text-[14px] font-[400] text-gray">Total</p>
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <div class="flex justify-between">
                <p class="text-[14px] font-bold font-inter">Sub Total</p>
                <p class="text-[14px] font-bold font-inter">{{ formatPrice(subTotal) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        items: {type: Array},
        formatPrice: {type: Function},
        subTotal: {type: Number},
    })
</script>

<style lang="scss" scoped>

</style>