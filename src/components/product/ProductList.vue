<template>
  <div
    class="w-full relative overflow-hidden grid laptop-l:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 phone-s:grid-cols-1 gap-5 text-left text-sm text-black font-inter"
  >
    <router-link
      :to="isAdmin? route.path :  `/product/${product.id}`"
      v-for="product in products"
      class="self-stretch flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-between p-[15px] relative gap-2.5"
    >
      <img
        class="self-stretch relative rounded-sm max-w-full overflow-hidden h-[250px] shrink-0 object-cover "
        :alt="product.product_name"
        :src="product.image_url? `${globalImgPath}storage/${product.image_url}` : '/images/tas.jpg'"
      />
      <div
        class="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start gap-[3px]"
      >
        <div
          class="text-[#000000] text-[14px] w-full relative tracking-[0.1px] leading-[24px] flex items-center h-[17px] shrink-0"
        >
          {{ product.product_name }}
        </div>
        <div
          class="text-[#5B5B5B]  w-full relative text-3xs tracking-[0.1px] text-[10px] text-dimgray flex items-center h-[15px] shrink-0"
        >
          {{ product.brand.brand_name }}
        </div>
        <div
          class="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between text-base text-primary"
        >
          <div
            class="w-[87px] relative tracking-[0.1px] leading-[24px] font-medium flex items-center h-[21px] shrink-0"
          >
            {{ formatPrice(product.price) }}
          </div>
          <div
            class="ml-auto relative text-xs tracking-[0.1px] leading-[24px] text-[12px] text-[#5B5B5B]"
          >
            <span>Stock </span>
            <b class="text-[#000] text-[12px]">{{ product.stock }}</b>
          </div>
        </div>
      </div>
      <div
        class="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start gap-1.5 text-primary"
        v-if="!isAdmin"
      >
        <div
          class="rounded-md bg-primary overflow-hidden flex flex-row items-center justify-center p-1.5"
        >
          <button
            class="flex flex-row items-center justify-center"
            @click.prevent="async() => { await store.dispatch('ui/showModal', {id: product.id, type: 'addCart'}) }"
          >
            <img
              v-if="!product.in_cart"
              class="w-5 relative h-5 overflow-hidden shrink-0"
              alt="cart"
              src="/images/cart.svg"
            />

            <p v-else class="text-white w-5 h-5 font-bold">
              {{ product.cart_quantity }}
            </p>
          </button>
        </div>
        <button @click.prevent="async() => { await store.dispatch('ui/showModal', {id: product.id, type: 'checkout'}) }"
          class="self-stretch flex-1 rounded-md border-primary border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-0.5 px-0"
          >
          <div class="relative leading-[16px] font-medium">Buy now</div>
        </button>
      </div>
      <div
      class="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start gap-1.5 text-primary"
      v-else
      >
      <div
        class="rounded-md bg-danger overflow-hidden flex flex-row items-center justify-center p-1.5"
      >
        <button
          class="flex flex-row items-center justify-center"
          @click.prevent="handleDelete(product.id)"
        >
          <img
            class="w-5 relative h-5 overflow-hidden shrink-0"
            alt="cart"
            src="/images/trash.svg"
          />
        </button>
      </div>
      <router-link :to="`/edit-product/${product.id}`"
        class="self-stretch flex-1 rounded-md bg-primary text-white overflow-hidden flex flex-row items-center justify-center py-0.5 px-0"
      >
        <div class="relative leading-[16px] font-medium">Edit Product</div>
      </router-link>

      </div>  
      <button v-if="!disableLike && !isAdmin && isLogin"
        :disabled="isCooldown"
        @click.prevent="handleLike(product.id)"
        class="w-[30px] !m-[0] absolute top-[12px] left-[13px] rounded-md bg-white h-[30px] flex flex-row items-center justify-center p-1 box-border z-[1]"
      >
        <img v-if="product.liked"
          class="w-[22px] relative h-[22px] overflow-hidden shrink-0"
        alt="heart"
          src="/images/heart-red.svg"
        />

        <img v-else
          class="w-[22px] relative h-[22px] overflow-hidden shrink-0"
          alt="heart"
          src="/images/heart.svg"
        />
    </button>
    <div @click.prevent="" v-if="product.stock === 0 && !isAdmin" class="text-white text-[30px] font-bold absolute top-0 w-full h-full flex justify-center items-center bg-modal-rgba">
      Out of Stock
    </div>
    </router-link>
  </div>
</template>

<script setup>
  import { computed, defineProps, ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute  } from 'vue-router';

  const store = useStore()
  const route = useRoute()
  const isLogin = computed(() => store.state.user.isLogin)
  const message = computed(() => store.state.product.message)
  const globalImgPath = import.meta.env.VITE_IMAGE_URL

  defineProps({
    products: {type: Array},
    formatPrice: {type: Function},
    disableLike: {type: Boolean, default: true},
    isAdmin: {type: Boolean}
  })

  const isCooldown = ref(false)

  const handleDelete = async (id) => {
    const isSuccess = await store.dispatch('product/deleteProduct', id)

    if(isSuccess) {
      await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
    }
    store.dispatch('ui/showNotif', {message: message.value, isError: !isSuccess})
  }

  const handleLike = async (id) => {
    isCooldown.value = true
    await store.dispatch('user/likeControll', id); 
    await store.dispatch('user/getUserLike')
    await store.dispatch('product/getProducts', route.fullPath.split('?')[1])
    isCooldown.value = false
  }

</script>
<style scoped></style>