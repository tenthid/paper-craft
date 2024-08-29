<template>
  <div class="flex phone-s:flex-col laptop:flex-row w-full gap-[20px]">
    <div class="p-[25px] flex items-center w-full bg-white rounded-[10px]">
      <img class="h-auto w-full border-[1px] border-light-gray rounded-[10px]" src="/images/tas.jpg" alt="detail-img">
    </div>
    <div class="flex flex-col px-[25px] py-[30px] laptop:h-full w-full bg-white rounded-[10px] justify-between gap-[20px]">
      <div class="flex flex-col gap-[20px]">
        <div class="flex flex-col gap-[12px]">
          <div class="flex justify-between">
            <p class="font-inter text-[22px] font-[500]">{{ productDetail.product_name }}</p>
            <img width="22px" height="22px" src="/images/heart.svg" alt="like">
          </div>
          <p class="font-inter text-[14px] font-[400]">{{ productDetail.brand.brand_name }} / {{ productDetail.category.category_name }}</p>
          <p class="font-inter text-[14px] font-[400] text-gray">Stock  <span class="font-bold text-black">{{ productDetail.stock }}</span></p>
          <p class="font-inter text-[22px] font-[500] text-primary">{{ formatPrice(productDetail.price) }}</p>
          <hr class="border-light-gray">
          <p class="font-inter text-[14px] font-bold">Description</p>
          <p class="font-inter text-[14px] font-[300]">Tas Sekolah kami dirancang untuk memberikan kenyamanan dan gaya bagi para pelajar. Dengan bahan berkualitas tinggi, desain ergonomis, dan banyak ruang penyimpanan, tas ini ideal untuk membawa buku, laptop, dan perlengkapan sekolah lainnya. Tersedia dalam berbagai warna dan motif menarik, Tas Sekolah kami adalah pilihan sempurna untuk mendukung aktivitas belajar Anda.</p>
        </div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <button @click="$emit('addCart', $event.target.value)" class="btn bg-primary text-white rounded-[5px] w-full">
          Add to cart
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

  defineProps({
    productDetail: {type: Object},
    formatPrice: {type: Function}
  })
</script>

<style lang="scss" scoped>

</style>