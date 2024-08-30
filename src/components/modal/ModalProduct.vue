<template>
    <div @click.stop="" class="form-card border-light-gray border-[1px] h-fit relative w-[400px]">
      <img @click="store.dispatch('ui/showModal');" class="absolute right-0 pt-[10px] pr-[10px] top-0 cursor-pointer" src="/images/X-page.svg" alt="x-icon">
      <div class="form-card-body">
          <img src="/images/tas.jpg" alt="tes">
          <div class="grid grid-cols-2 gap-[20px]">
              <p class="font-maitree text-[18px] font-[500]">
                  {{ product.product_name }}
              </p>
              <p class="font-inter text-[18px] font-[500] text-primary text-end">
                  {{ store.getters['product/formatToIdr'](product.price) }}
                </p>
                <p class="font-inter text-[18px] font-[500]">
                    Amount
                </p>
                <div class="justify-self-end input-group font-inter !px-[8px] !gap-[5px] !w-[fit-content] border-[1px] rounded-[5px] !py-0">
                    <button @click="decrement()" class="select-none cursor-pointer group-span border-r-[1px] pr-[8px]">
                        -
                    </button>
                    <input v-model="qty" type="number" class="text-[14px] group-controll input-no-focus text-center w-[20px]" readonly >
                    <button :disabled="qty === product.stock" @click="increment()" class="select-none cursor-pointer group-span border-l-[1px] pl-[8px] align-top">
                        +
                    </button>
                </div>
          </div>
      </div>
      <div class="form-card-footer">
        <button :disabled="!qty" :class="{'!bg-gray' : !qty}" @click="handleInsert()" class="btn bg-primary text-white w-full font-inter text-[18px] rounded-[10px]">
            {{ props.modal.type === 'checkout'? "Checkout" : 'Add to cart' }}
        </button>
      </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const props = defineProps({
        modal: {type: Object}
    })
    
    const router = useRouter()
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

    const handleInsert =async () => {
        if(props.modal.type === 'checkout' && qty.value) {
            let item = {...product.value, qty: qty.value, totalPrice: qty.value * product.value.price}
            store.commit('cart/insertCheckoutItems', [item])
            qty.value = 0
            store.dispatch('ui/showModal')
            router.push('/checkout')
        } else if (qty.value) {

        }
    }
</script>

<style lang="scss" scoped>

</style>