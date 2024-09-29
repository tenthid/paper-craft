<template>
    <div class="flex flex-col gap-[20px]">
        <div class="flex w-[100%] justify-between items-center gap-[20px]">
            <BaseSelect v-model="paymentMethod" label="Choose supported payment" :options="[
                {label: 'Dana'},
                {label: 'Gopay'},
                {label: 'Qris'},
            ]" />
            <img v-if="paymentMethod" width="50px" height="" :src="`/images/${srcImg[paymentMethod]}`" alt="paymentMethod">
            <!-- {{ paymentMethod }} -->
        </div>
        <p class="font-inter text-[14px] font-[400] text-gray">Total</p>
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <!-- <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Subtotal</p>
                <p class="text-[14px] font-inter text-gray">{{ props.formatPrice(props.subTotal) }}</p>
            </div> -->
            <!-- <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Packaging Cost Total</p>
                <p class="text-[14px] font-inter text-gray"> {{ props.formatPrice(packagingTotal) }} </p>
            </div> -->
            <div class="flex justify-between">
                <p class="text-[14px] font-bold font-inter">Order Total</p>
                <p class="text-[14px] font-bold font-inter">{{ props.formatPrice(props.subTotal) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import BaseSelect from '../ui/BaseSelect.vue';
    import { defineProps, onMounted, ref } from 'vue';

    const paymentMethod = ref('')
    const srcImg = {
        'Dana' : 'dana-logo.webp',
        'Gopay' : 'gopay-logo.webp',
        'Qris' : 'qris-logo.png'
    }
    const packagingTotal = ref(0)

    const props = defineProps({
        subTotal: {type: Number},
        items: {type: Array},
        formatPrice: {type: Function},
    })

    onMounted(() => {
        packagingTotal.value = 0
        for(let item of props.items) {
            packagingTotal.value += item.packaging
        }
    })
</script>

<style lang="scss" scoped>

</style>