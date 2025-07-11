<template>
    <div class="p-[18px] border-b-[0.5px] border-b-[#EDEDED]">
        <div class="flex gap-[24px] justify-between">
            <div class="flex gap-[16px]">
                <img width="130px" height="auto" :src="image" alt="productPage">
                <div class="flex gap-[8px] flex-col">
                    <p class="font-inter text-[16px] font-[500]">
                        {{ productName }}
                    </p>
                    <p class="font-inter text-[14px] font-[400]">
                        {{ categoryName }} / {{ brandName }}
                    </p>
                    <p class="font-inter text-[14px] font-[400] text-gray">
                       <b class="text-black">Quantity :</b> {{ qty }} {{ qty > 1? 'Products' : 'Product' }}
                    </p>
                    <p class="font-inter text-[14px] font-[400] text-gray">
                        {{ qty }} {{ qty > 1? 'Products' : 'Product' }} x {{ formatPrice(price) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <p class="self-end font-inter">Total Price : <span class="text-primary">{{ formatPrice(totalPrice) }}</span></p>
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
        selected: {type: Boolean},
        formatPrice: {type: Function},
    })
</script>

<style lang="scss" scoped>

</style>