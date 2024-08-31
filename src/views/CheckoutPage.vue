<template>
    <div v-if="parentRendered" class="container-page bg-primary-background !pt-[85px] !pb-[50px] flex gap-[20px]" :class="{'h-[100vh]': cartItems.length === 0}">
        <div class="p-[30px] rounded-[12px] bg-white w-[100%] h-[fit-content]">
            <p class="font-inter text-[14px] font-[400] text-gray pb-[20px]">{{ route.name === 'cart'? 'Cart List' : 'Product' }}</p>
            <div v-if="cartItems.length > 0" class="flex flex-col gap-[20px]">
                <div v-if="route.path === '/cart'" v-for="item in cartItems" class="flex-col flex gap-[10px]">
                    <ProductCardCart 
                        @increase="qtyControll('+',item.product.id, item.quantity, item.product.stock)" 
                        @decrease="qtyControll('-',item.product.id, item.quantity, item.product.stock)" 
                        @incart="store.commit('cart/changeSelected', item.product.id)"
                        @remove="async () => {await store.dispatch('cart/removeItemCart', item.product.id); calculateTotal()}" 
                        :qty="item.quantity"
                        :productName="item.product.product_name"
                        :categoryName="item.product.category.category_name"
                        :brandName="item.product.brand.brand_name"
                        :price="item.product.price"
                        :stock="item.product.stock"
                        :image="item.image"
                        :totalPrice="item.totalPrice"
                        :selected="item.selected"
                        :formatPrice="store.getters['product/formatToIdr']"
                    />
                </div>
                <div v-else>
                    <div class="p-[20px] border-[1px] border-[#EDEDED] rounded-[10px]">
                        <p class="pb-[8px] font-inter font-[500] text-[14px]">Home Address</p>
                        <p class="font-inter font-[400] text-[15px] text-gray">jalan kwkwkwkkwkw</p>
                    </div>
                    <div v-for="item in checkoutItems" class="flex-col flex gap-[10px]">
                        <ProductCardCheckout 
                            :qty="item.qty"
                            :productName="item.product.product_name"
                            :categoryName="item.product.category.category_name"
                            :brandName="item.product.brand.brand_name"
                            :price="item.product.price"
                            :stock="item.product.stock"
                            :image="item.product.image"
                            :totalPrice="item.totalPrice"
                            :selected="item.selected"
                            :formatPrice="store.getters['product/formatToIdr']"
                        />
                    </div>
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

            <SummaryCardCart v-if="route.path === '/cart'" :tax="tax" :subTotal="subTotal" :items="cartItems" :formatPrice="store.getters['product/formatToIdr']" />

            <SummaryCardCheckout v-else :subTotal="subTotal" :items="checkoutItems" :formatPrice="store.getters['product/formatToIdr']" />

            <button :disabled="cartItems.length === 0 || selcetedEmpty" @click="handleCheckout()" class="btn bg-primary rounded-[5px] text-white font-inter disabled:disabled">
                {{ route.name === 'cart'? 'Checkout' : 'Pay now' }}
            </button>
        </div>
    </div>
    <div v-else class="flex h-[100vh] justify-center items-center bg-primary-background">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
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
    
    const subTotal = ref(0)
    const parentRendered = ref(false)

    const qtyControll = async (type, id, itemQty, itemStock) => {
        if(type === '+') {
            if( itemStock !== itemQty) {
                await store.dispatch('cart/addItemToCart', {id: id, qty : itemQty + 1})
            }
        } else {
            await store.dispatch('cart/addItemToCart', {id: id, qty : itemQty - 1})
        }
        calculateTotal()
    }

    const calculateTotal = () => {
        subTotal.value = 0
        if(Object.keys(checkoutItems.value).length > 0) {
            for(let item of checkoutItems.value) {
                subTotal.value += item.totalPrice
            }
        } else {
            for(let item of cartItems.value) {
                subTotal.value += item.totalPrice
            }
        }
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
        } else {
            if(checkoutItems.value.length === 0) {
                router.push('/cart')
                store.dispatch('ui/showNotif', {isError: true, message: 'Please select item to checkout' })
            }
        }
        calculateTotal()
    }

    watch(() => route.path, (oldValue, newValue) => {
        checkPath()
    })
    
    onMounted(async () => {
        await checkPath()
        await store.dispatch('product/getProducts')
        parentRendered.value = true
    })
</script>

<style lang="scss" scoped>

</style>