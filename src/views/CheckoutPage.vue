<template>
    <div v-if="parentRendered" class="container-page bg-primary-background !pt-[85px] !pb-[50px] flex gap-[20px]" :class="{'h-[100vh]': cartItems.length === 0}">
        <div class="p-[30px] rounded-[12px] bg-white w-[100%] h-[fit-content]">
            <p class="font-inter text-[14px] font-[400] text-gray pb-[20px]">{{ route.name === 'cart'? 'Cart List' : 'Product' }}</p>
            <div v-if="cartItems.length > 0" class="flex flex-col gap-[20px]">
                <div v-if="route.path === '/cart'" v-for="item in cartItems" class="flex-col flex gap-[10px]">
                    <ProductCardCart 
                        @increase="qtyControll('+',item.id)" 
                        @decrease="qtyControll('-',item.id)" 
                        @incart="store.commit('cart/changeSelected', item.id)" 
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
                <div v-else v-for="item in checkoutItems" class="flex-col flex gap-[10px]">
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
            <div v-else class="flex items-center flex-col gap-[15px]">
                <img width="150px" height="auto" src="/images/cart-empty.png" alt="cart-empty">
                <p class="text-center font-inter font-[500] text-[28px]">Cart is Empty</p>
                <p class="text-center font-inter font-[400] text-[16px] text-gray">When you put items into your cart, your cart of items will appear here.</p>
                <router-link class="btn text-[14px] bg-primary rounded-[5px] w-[200px] text-white" to="/products">
                    Shop now
                </router-link>
            </div>
        </div>
        <div class="p-[25px] rounded-[12px] bg-white w-[600px] flex flex-col h-[fit-content] gap-[20px] sticky top-[85px]">
            <p class="font-inter text-[14px] font-[400] text-gray">Payment</p>

            <SummaryCardCart v-if="route.path === '/cart'" :tax="tax" :subtotal="subtotal" :orderTotal="orderTotal" :items="cartItems" :formatPrice="store.getters['product/formatToIdr']" />

            <SummaryCardCheckout v-else :tax="tax" :subtotal="subtotal" :orderTotal="orderTotal" :items="items" :formatPrice="store.getters['product/formatToIdr']" />

            <button @click="handleCheckout()" class="btn bg-primary rounded-[5px] text-white font-inter">
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
    import { useRoute, useRouter } from 'vue-router';
    import { ref, computed, onMounted, watch } from 'vue';
    import { useStore } from 'vuex';

    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    
    const cartItems = computed(() => store.state.cart.cart) 
    const checkoutItems = computed(() => store.state.cart.checkoutItems)
    
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

    const calculateTotal = () => {
        subtotal.value = 0
        orderTotal.value = 0
        for(let item of cartItems.value) {
            subtotal.value += item.totalPrice
        }

        orderTotal.value += subtotal.value + tax.value
    }

    const handleCheckout = () => {
        let items = []
        for(let item of cartItems.value) {
            if(item.selected) {
                items.push(item)
            }
        }
        store.commit('cart/insertCheckoutItems', items)
        router.push('/checkout')
    }

    const checkPath = async () => {
        if(route.path === '/cart') {
            await store.dispatch('cart/getCartItems')
            calculateTotal()
        } else {
            console.log(checkoutItems.value)
            if(checkoutItems.value.length === 0) {
                router.push('/cart')
            }
        }
    }

    watch(() => route.path, (oldValue, newValue) => {
        checkPath()
    })
    
    onMounted(async () => {
        await checkPath()
        parentRendered.value = true
    })
</script>

<style lang="scss" scoped>

</style>