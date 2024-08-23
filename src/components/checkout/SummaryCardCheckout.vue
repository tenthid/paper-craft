<template>
    <div class="flex flex-col gap-[20px]">
        <BaseSelect label="Choose your payment" :options="[
            {label: 'Dana'},
            {label: 'Gopay'},
            {label: 'Qris'},
        ]" />
        <p class="font-inter text-[14px] font-[400] text-gray">Total</p>
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Subtotal</p>
                <p class="text-[14px] font-inter text-gray">Rp.01298971</p>
            </div>
            <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Total</p>
                <p class="text-[14px] font-inter text-gray">Rp.01298971</p>
            </div>
            <div class="flex justify-between">
                <p class="text-[14px] font-bold font-inter">Order Total</p>
                <p class="text-[14px] font-bold font-inter">Rp.01298971</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import BaseSelect from '../ui/BaseSelect.vue';
    import { defineProps } from 'vue';

    defineProps({
        
    })
</script>

<style lang="scss" scoped>

</style>