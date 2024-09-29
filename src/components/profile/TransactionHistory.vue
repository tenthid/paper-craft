<template>
    <div class="profile-card-footer border-t-[0px]">
        <div v-if="orders.length !== 0" class="flex flex-col gap-[20px]">
            <div v-for="order in orders" class="border-[#EDEDED] border-[1px] rounded-[10px]">
               <div class="p-[15px]">
                <div class="flex gap-[24px] justify-between">
                    <div class="flex gap-[16px]">
                        <img width="100px" height="120px" src="/images/tas.jpg" alt="productPage">
                        <div class="flex gap-[8px] flex-col">
                            <p class="font-inter text-[16px] font-[500]">
                                {{ order.order_items[0].product.product_name }}
                            </p>
                            <p class="font-inter text-[14px] font-[400]">
                                {{ order.order_items[0].product.category.category_name }} / {{ order.order_items[0].product.brand.brand_name }}
                            </p>
                            <p class="font-inter text-[16px] font-[500]">
                                {{ store.getters['product/formatToIdr'](order.order_items[0].total_price) }}
                            </p>
                            <p class="font-inter text-[14px] font-[400]">
                                {{ order.order_items[0].quantity }} {{ order.order_items[0].quantity > 1? 'products' : 'product' }} x {{ store.getters['product/formatToIdr'](order.order_items[0].product.price) }}
                            </p>
                        </div>
                    </div>
                    <div class="pl-[24px] py-[5px] border-l-[1px] border-l-[#EDEDED] h-[fit-content]">
                        <p class="font-inter text-[14px] font-[400]">
                            Total price
                        </p>
                        <p class="font-inter text-[16px] font-[500]">
                            {{ store.getters['product/formatToIdr'](order.total_price) }}
                        </p>
                    </div>
                </div>
                <p v-if="order.order_items.length > 1" class="font-inter text-[14px] font-[400] pt-[12px]">
                    + {{ order.order_items.length - 1 }}  {{ order.order_items.length - 1 > 1? 'products' : 'product' }}
                </p>
               </div>
               <hr class="border-[#EDEDED] mx-[16px]">
               <div class="p-[15px] flex justify-end">
                    <button @click="handleOrderAgain(order.id)" class="border-primary btn rounded-[5px] text-[15px] text-primary font-inter font-[600] border-[1px] !w-[fit-content] !py-[5px] hover:bg-primary hover:text-white transition-all">
                        Buy Again
                    </button>
               </div> 
            </div>
        </div>
        <div v-else class="flex flex-col justify-center items-center gap-[16px]">
            <img src="/images/order-empty.png" alt="orderEmpty">
            <p class="text-[28px] font-[500] font-inter">No orders yet</p>
            <p class="text-[16px] text-gray font-[400] font-inter">When you buy an item, your order about it will appear here.</p>
            <router-link to="/products" class="btn bg-primary text-white rounded-[8px] !px-[80px]">
                Shop now
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    
    const store = useStore()
    const router = useRouter()

    const orders = computed(() => store.state.order.orders)
    const order = computed(() => store.state.order.order)

    const handleOrderAgain = async (id) => {
        await store.dispatch('order/getOrder', id)
        store.commit('cart/insertCheckoutItems', order.value)
        router.push('/checkout?reorder=true')
    }

    onMounted(async() => {
        await store.dispatch('order/getOrders')
    })
</script>

<style lang="scss" scoped>

</style>