<template>
    <div v-if="parentRendered" class="container-page bg-primary-background !pt-[85px] !pb-[50px] flex gap-[20px]">
        <div class="p-[25px] rounded-[12px] bg-white w-[100%] flex flex-col gap-[20px]">
            <p class="font-inter text-[14px] font-[400] text-gray">{{ route.name === 'cart'? 'Cart List' : 'Product' }}</p>
            <div v-if="route.path === '/cart'" v-for="item in cartItems" class="flex-col flex gap-[10px]">
                <ProductCardCart 
                    @increase="qtyControll('+',item.id)" 
                    @decrease="qtyControll('-',item.id)" 
                    :qty="item.qty"
                    :productName="item.name"
                    :categoryName="item.category"
                    :brandName="item.brand"
                    :price="item.price"
                    :stock="item.stock"
                    :image="item.image"
                    :totalPrice="item.totalPrice"
                    :selected="item.selected"
                    :formatPrice="store.getters['product/formatToIdr']"
                />
            </div>
            <div v-else v-for="item in items" class="flex-col flex gap-[10px]">
                <ProductCardCheckout 
                    @increase="qtyControll('+',item.id)" 
                    @decrease="qtyControll('-',item.id)" 
                    :qty="item.qty"
                    :productName="item.name"
                    :categoryName="item.category"
                    :brandName="item.brand"
                    :price="item.price"
                    :stock="item.stock"
                    :image="item.image"
                    :totalPrice="item.totalPrice"
                    :selected="item.selected"
                    :formatPrice="store.getters['product/formatToIdr']"
                />
            </div>
        </div>
        <div class="p-[25px] rounded-[12px] bg-white w-[600px] flex flex-col h-[fit-content] gap-[20px] sticky top-[85px]">
            <p class="font-inter text-[14px] font-[400] text-gray">Payment</p>

            <SummaryCardCart v-if="route.path === '/cart'" :tax="tax" :subtotal="subtotal" :orderTotal="orderTotal" :items="cartItems" :formatPrice="store.getters['product/formatToIdr']" />

            <SummaryCardCheckout v-else :tax="tax" :subtotal="subtotal" :orderTotal="orderTotal" :items="items" :formatPrice="store.getters['product/formatToIdr']" />

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
    import { ref, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';

    const route = useRoute()
    const store = useStore()
    
    const cartItems = computed(() => {
        return store.state.cart.cart
    }) 
    
    const subtotal = ref(0)
    const orderTotal = ref(0)
    const tax = ref(100000)
    const parentRendered = ref(false)

    const qtyControll = async (type, id) => {
        if(type === '+') {
          cartItems.value[id - 1].qty++
        } else {
          cartItems.value[id - 1].qty--
        }
        await store.dispatch('cart/qtyControll', {id: id, value : cartItems.value[id - 1].qty})
        calculateTotal()
    }
    
    // watch(() => store.state.cart.cart, (newValue, oldValue) => {
    //     console.log('halooo')
    //     items.value = cartItems.value
    // })

    const calculateTotal = () => {
        subtotal.value = 0
        orderTotal.value = 0
        for(let item of cartItems.value) {
            subtotal.value += item.totalPrice
        }

        orderTotal.value += subtotal.value + tax.value
    }
    
    onMounted(async () => {
        if(route.path === '/cart') {
            await store.dispatch('cart/getCartItems')
            calculateTotal()
        } else {

        }
        parentRendered.value = true
    })
</script>

<style lang="scss" scoped>

</style>