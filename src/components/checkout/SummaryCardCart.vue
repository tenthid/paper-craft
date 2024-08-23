<template>
    <div class="flex flex-col gap-[20px]">
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <p class="text-[14px] font-bold font-inter">Product price</p>
            <div v-for="item in items" class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">{{ item.name }}</p>
                <p class="text-[14px] font-inter text-gray">{{ formatPrice(item.totalPrice) }}</p>
            </div>
        </div>
        <p class="font-inter text-[14px] font-[400] text-gray">Total</p>
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Subtotal</p>
                <p class="text-[14px] font-inter text-gray">{{ formatPrice(subtotal) }}</p>
            </div>
            <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Taxes</p>
                <p class="text-[14px] font-inter text-gray">{{ formatPrice(tax) }}</p>
            </div>
            <div class="flex justify-between">
                <p class="text-[14px] font-bold font-inter">Order Total</p>
                <p class="text-[14px] font-bold font-inter">{{ formatPrice(orderTotal) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        items: {type: Array},
        formatPrice: {type: Function},
        tax: {type: Number},
        subtotal: {type: Number},
        orderTotal: {type: Number},
    })
</script>

<style lang="scss" scoped>

</style>