<template>
    <div class="container-page bg-primary-background !pt-[85px] !pb-[50px] flex gap-[20px]">
        <div class="p-[25px] rounded-[12px] bg-white w-[100%] flex flex-col gap-[20px]">
            <p class="font-inter text-[14px] font-[400] text-gray">{{ route.name === 'cart'? 'Cart List' : 'Product' }}</p>
            <div v-for="index in 10" class="flex-col flex gap-[10px]">
                <component @increase="increaseQty()" @decrease="decreaseQty()" v-model="itemQty" :is="components[route.name].productCard"></component>
            </div>
        </div>
        <div class="p-[25px] rounded-[12px] bg-white w-[600px] flex flex-col h-[fit-content] gap-[20px] sticky top-[85px]">
            <p class="font-inter text-[14px] font-[400] text-gray">Payment</p>
            <component :is="components[route.name].summaryCard"></component>
            <button class="btn bg-primary rounded-[5px] text-white font-inter">
                {{ route.name === 'cart'? 'Checkout' : 'Pay now' }}
            </button>
        </div>
    </div>
</template>

<script setup>
    import ProductCardCart from '@/components/checkout/ProductCardCart.vue';
    import SummaryCardCart from '@/components/checkout/SummaryCardCart.vue';
    import ProductCardCheckout from '@/components/checkout/ProductCardCheckout.vue';
    import SummaryCardCheckout from '@/components/checkout/SummaryCardCheckout.vue';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    const route = useRoute()
    const itemQty = ref(0)
    
    const components = {
        'checkout' : {
            'productCard' : ProductCardCheckout,
            'summaryCard' : SummaryCardCheckout
        },
        'cart' : {
            'productCard' : ProductCardCart,
            'summaryCard' : SummaryCardCart
        }
    }

    const checkQTyInput = () => {
        if(itemQty.value < 0) {
            itemQty.value = null
        } else if (itemQty.value === null) {
            console.log('gyat')
            itemQty.value = 0
        }
    }

    const increaseQty = () => {
        itemQty.value++
    }

    const decreaseQty = () => {
        if (itemQty.value > 0) {
            itemQty.value--
        }
    }
</script>

<style lang="scss" scoped>

</style>