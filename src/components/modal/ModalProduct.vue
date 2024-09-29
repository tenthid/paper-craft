<template>
    <div @click.stop="" class="form-card border-light-gray border-[1px] h-fit relative w-[400px]">
      <img @click="store.dispatch('ui/showModal');" class="absolute right-0 pt-[10px] pr-[10px] top-0 cursor-pointer" src="/images/X-page.svg" alt="x-icon">
      <div class="form-card-body">
          <img :src="product.image_url? `https://tenth.run.place:90/storage/${product.image_url}` : '/images/tas.jpg'" alt="tes">
          <div class="grid grid-cols-2 gap-[20px]">
              <p class="font-maitree text-[18px] font-[500]">
                  {{ product.product_name }}
              </p>
              <p class="font-inter text-[18px] font-[500] text-primary text-end">
                  {{ store.getters['product/formatToIdr'](product.price) }}
                </p>
                <div class="flex items-center">
                    <p class="font-inter text-[18px] font-[500]">
                        Amount
                    </p>
                </div>
                <div class="flex justify-end gap-[10px]">
                    <div class="justify-self-end input-group font-inter !px-[8px] !gap-[5px] !w-[fit-content] border-[1px] rounded-[5px] !py-0">
                        <button @click="decrement()" class="select-none cursor-pointer group-span border-r-[1px] pr-[8px]">
                            -
                        </button>
                        <input v-model="qty" type="number" class="text-[14px] group-controll input-no-focus text-center w-[20px]" readonly >
                        <button :disabled="qty >= product.stock" @click="increment()" class="select-none cursor-pointer group-span border-l-[1px] pl-[8px] align-top">
                            +
                        </button>
                    </div>
                    <button v-if="product.in_cart && props.modal.type !== 'checkout'" :disabled="!qty" @click="handleRemove()" class="btn bg-danger text-white font-inter text-[18px] rounded-[10px] !px-[10px]">
                        <img width="13px" src="/images/remove-white.svg" alt="">
                    </button>
                </div>
          </div>
      </div>
      <div class="form-card-footer">
        <button :disabled="!qty" :class="{'!bg-gray' : !qty}" @click="handleInsert()" class="btn bg-primary text-white w-full font-inter text-[18px] rounded-[10px]">
            {{ props.modal.type === 'checkout'? "Checkout" : `${product.in_cart? 'save' : 'Add to cart'}` }}
        </button>
      </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { computed, watch } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    
    const props = defineProps({
        modal: {type: Object}
    })
    
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const qty = computed(() => store.state.ui.modalQty)
    const product = computed(()  => store.state.ui.modalProduct)

    const increment = () => {
        let amount = qty.value + 1
        store.commit('ui/changeModalQty', amount)
    }
    
    const decrement = () => {
        if(qty.value !== 0) {
            let amount = qty.value - 1
            store.commit('ui/changeModalQty', amount)
        }
    }

    const handleRemove = async () => {
        await store.dispatch('cart/removeItemCart', product.value.id)
        store.dispatch('ui/showModal')
        await store.dispatch('product/getProducts',route.path === `/product/${route.params.id}`? 'perPage=5' : route.fullPath.split('?')[1])
        await store.dispatch('product/getProductDetail', product.value.id)
        if (route.path === '/') {
            await store.dispatch('product/getNewest')
            await store.dispatch('product/getPopular')
        }
        store.dispatch('ui/showNotif', {message: 'item removed from cart'})
    }

    const handleInsert = async () => {
        if(store.state.user.isLogin) {
            if(props.modal.type === 'checkout' && qty.value) {
                let item = {product: {
                    ...product.value
                }, id: product.value.id,  quantity: qty.value, total_price: qty.value * product.value.price}
                store.commit('cart/insertCheckoutItems', [item])
                qty.value = 0
                store.dispatch('ui/showModal')
                router.push('/checkout?buy=true')
            } else if (qty.value) {
                const isSuccess = await store.dispatch('cart/addItemToCart', { id: product.value.id, qty: qty.value, stock: product.value.stock})
                if(isSuccess) {
                    store.dispatch('ui/showModal')
                    store.dispatch('ui/showNotif', { message: 'Added to cart'})
                } else {
                    store.dispatch('ui/showNotif', { message: 'Failed add item to cart', isError: true, topPos: 0})
                }
            }
            await store.dispatch('product/getProducts',route.path === `/product/${route.params.id}`? 'perPage=5' : route.fullPath.split('?')[1])
            if (route.path === '/') {
                await store.dispatch('product/getNewest')
                await store.dispatch('product/getPopular')
            }
            await store.dispatch('product/getProductDetail', product.value.id)
        } else {
            router.push('/login')
            store.dispatch('ui/showModal')
        }
    }

    watch(props.modal, (oldValue, newValue) => {
        if(props.modal.type !== 'checkout' && product.value.cart_quantity) {
            store.commit('ui/changeModalQty', product.value.cart_quantity)
        } else {
            store.commit('ui/changeModalQty', 0)
        }
    })
</script>

<style lang="scss" scoped>

</style>