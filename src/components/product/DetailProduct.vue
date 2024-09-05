<template>
  <div class="flex phone-s:flex-col laptop:flex-row w-full gap-[20px]">
    <div class="p-[25px] flex items-center w-full bg-white rounded-[10px]">
      <img class="h-auto w-full border-[1px] border-light-gray rounded-[10px]" :src="productDetail.image_url? `https://tenth.run.place:90/storage/${productDetail.image_url}` : '/images/tas.jpg'" alt="detail-img">
    </div>
    <div class="flex flex-col px-[25px] py-[30px] laptop:h-full w-full bg-white rounded-[10px] justify-between gap-[20px]">
      <div class="flex flex-col gap-[20px]">
        <div class="flex flex-col gap-[12px]">
          <div class="flex justify-between">
            <p class="font-inter text-[22px] font-[500]">{{ productDetail.product_name }}</p>
            <button v-if="isLogin" :disabled="likeDisabled" @click="$emit('like', $event.target.value)">
              <img v-if="productDetail.liked" width="22px" height="22px" src="/images/heart-red.svg" alt="like">
              <img v-else width="22px" height="22px" src="/images/heart.svg" alt="like">
            </button>
          </div>
          <p class="font-inter text-[14px] font-[400]">{{ productDetail.brand.brand_name }} / {{ productDetail.category.category_name }}</p>
          <p class="font-inter text-[14px] font-[400] text-gray">Stock  <span class="font-bold text-black">{{ productDetail.stock }}</span></p>
          <p class="font-inter text-[14px] font-[400]"><span class="font-bold text-primary">{{ productDetail.liked_by_users_count }}</span> {{ productDetail.liked_by_users_count > 1? 'peoples' : 'people' }} like this product</p>
          <p class="font-inter text-[22px] font-[500] text-primary">{{ formatPrice(productDetail.price) }}</p>
          <hr class="border-light-gray">
          <p class="font-inter text-[14px] font-bold">Description</p>
          <p class="font-inter text-[14px] font-[300]">{{ productDetail.description? productDetail.description : dummyDesc }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <button @click="$emit('addCart', $event.target.value)" class="btn bg-primary text-white rounded-[5px] w-full">
          {{ productDetail.in_cart? `${productDetail.cart_quantity} ${productDetail.cart_quantity > 1? 'items' : 'item'} in cart` : 'Add to cart' }}
        </button>
        <button @click="$emit('checkout', $event.target.value)" class="btn border-primary border-[1px] text-primary rounded-[5px] w-full">
          Buy now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue';
  
  const dummyDesc = 'Tas Sekolah kami dirancang untuk memberikan kenyamanan dan gaya bagi para pelajar. Dengan bahan berkualitas tinggi, desain ergonomis, dan banyak ruang penyimpanan, tas ini ideal untuk membawa buku, laptop, dan perlengkapan sekolah lainnya. Tersedia dalam berbagai warna dan motif menarik, Tas Sekolah kami adalah pilihan sempurna untuk mendukung aktivitas belajar Anda.'

  defineProps({
    productDetail: {type: Object},
    formatPrice: {type: Function},
    likeDisabled: {type: Boolean},
    isLogin: {type: Boolean}
  })
</script>

<style lang="scss" scoped>

</style>