<template>
  <div v-if="!dataLoaded" class="flex justify-center items-center h-[100vh] bg-primary-background">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  <div>
    <div v-if="Object.keys(product).length === 0" class="w-[100%] h-[100vh] flex flex-col items-center justify-center h-100 bg-primary-background">
      <img class="h-[150px] w-auto pb-[10px]" src="/images/remove.png" alt="" />
      <div class="text-center font-inter">
        <p class="font-medium text-[35px]">Products has been Removed</p>
        <p class="text-gray-3 text-[20px] mt-4">
          The product you are looking for may have been removed
        </p>
      </div>
    </div>
    <div v-else class="w-[100%] bg-primary-background h-auto flex flex-col items-center gap-[40px] py-[100px] px-[60px] pb-[50px] self-stretch">
        
      <div class="pb-[50px]">
        <div class="container-Detail">
          <DetailProduct :like-disabled="isCooldown" :is-login="isLogin" @like="handleLike()" @addCart="store.dispatch('ui/showModal', {id: route.params.id, type: 'addCart'})" @checkout="store.dispatch('ui/showModal', {id: route.params.id, type: 'checkout'})" :productDetail="product" :formatPrice="store.getters['product/formatToIdr']" />
        </div>
        <div class="w-[100%] py-[40px] text-primary font-inter text-[30px] font-medium leading-[36px]">
          Other Product
        </div>
        <ProductList :products="products" :formatPrice="store.getters['product/formatToIdr']" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import DetailProduct from "@/components/product/DetailProduct.vue";
import ProductList from "@/components/product/ProductList.vue";
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const store = useStore()
const router = useRouter()

const isCooldown = ref(false)
const dataLoaded = ref(false)
const product = computed(() => store.state.product.product); 
const products = computed(() => store.state.product.products)
const isLogin = computed(() => store.state.user.isLogin)

const handleLike = async () => {
  isCooldown.value = true
  await store.dispatch('user/likeControll', route.params.id); 
  await store.dispatch('product/getProductDetail', route.params.id)
  await store.dispatch('user/getUserLike')
  isCooldown.value = false
}

watch(route, async (oldValue, newValue) => {
  await store.dispatch('product/getProductDetail', route.params.id)
})

onMounted(async() => {
  await store.dispatch('product/getProducts', 'perPage=5')
  await store.dispatch('product/getProductDetail', route.params.id)
  dataLoaded.value = true
})
</script>

<style lang="scss" scoped>

</style>