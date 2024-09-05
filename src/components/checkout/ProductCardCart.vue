<template>
    <div class="p-[18px] border-t-[1px] border-black">
        <div class="flex gap-[24px] justify-between">
            <div class="flex gap-[16px]">
                <img width="140px" height="auto" :src="image" alt="productPage">
                <div class="flex gap-[8px] flex-col">
                    <p class="font-inter text-[16px] font-[500]">
                        {{ productName }}
                    </p>
                    <p class="font-inter text-[14px] font-[400]">
                        {{ categoryName }} / {{ brandName }}
                    </p>
                    <p class="font-inter text-[14px] font-[400] text-gray">
                        Stock <b class="text-black">{{ stock }}</b>
                    </p>
                    <p class="font-inter text-[16px] font-[500] text-primary">
                        {{ formatPrice( price ) }}
                    </p>
                    <div class="input-group font-inter !px-[8px] !gap-[5px] !w-[fit-content] border-[1px] rounded-[5px] !py-0">
                        <div @click="$emit('decrease', $event.target.value)" class="select-none cursor-pointer group-span border-r-[1px] pr-[8px]">
                            -
                        </div>
                        <input :value="qty" type="number" class="text-[14px] group-controll input-no-focus text-center w-[20px]" readonly >
                        <div @click="$emit('increase', $event.target.value)" class="select-none cursor-pointer group-span border-l-[1px] pl-[8px] align-top">
                            + 
                        </div>
                    </div>
                </div>
            </div>
            <div class="pl-[24px] py-[5px] border-l-[1px] border-l-[#EDEDED] h-[fit-content]">
                <p class="font-inter text-[14px] font-[400]">
                    Total price
                </p>
                <p class="font-inter text-[16px] font-[500]">
                    {{ formatPrice(totalPrice) }}
                </p>
            </div>
        </div>
    </div>
    <div class="flex gap-[10px] justify-end items-center">
        <button @click="$emit('remove', $event.target.value)" class="btn text-white bg-danger rounded-[10px]">
            Remove
        </button>
        <input :checked="selected" @input="$emit('incart', $event.target.value)" type="checkbox" class="input-check input-no-focus h-[35px] w-[35px]">
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        modelValue: {type: [String, Number]},
        productName: {type: String},
        categoryName: {type: String},
        brandName: {type: String},
        price: {type: Number},
        stock: {type: Number},
        totalPrice: {type: Number},
        image: {type: String},
        qty: {type: Number},
        totalPrice: {type: Number},
        selected: {type: Boolean},
        formatPrice: {type: Function},
    })
</script>

<style lang="scss" scoped>

</style>