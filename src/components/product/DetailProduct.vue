<template>
  <div class="flex phone-s:flex-col laptop:flex-row w-full gap-[20px]">
    <div class="p-[25px] flex items-center w-full bg-white rounded-[10px]">
      <img class="h-auto w-full border-[1px] border-light-gray rounded-[10px]" src="/images/tas.jpg" alt="detail-img">
    </div>
    <div class="sticky top-[85px] flex flex-col px-[25px] py-[30px] laptop:h-full w-full bg-white rounded-[10px] justify-between gap-[20px]">
      <div class="flex flex-col gap-[20px]">
        <div class="flex flex-col gap-[12px]">
          <div class="flex justify-between">
            <p class="font-inter text-[22px] font-[500]">Product balajfiefiuaefainfai</p>
            <img width="22px" height="22px" src="/images/heart.svg" alt="like">
          </div>
          <p class="font-inter text-[14px] font-[400]">brnad / ccate</p>
          <p class="font-inter text-[14px] font-[400] text-gray">Stock  <span class="font-bold text-black">11</span></p>
          <p class="font-inter text-[22px] font-[500] text-primary">Rp200.000</p>
          <hr class="border-light-gray">
          <p class="font-inter text-[14px] font-bold">Description</p>
          <p class="font-inter text-[14px] font-[300]">Tas Sekolah kami dirancang untuk memberikan kenyamanan dan gaya bagi para pelajar. Dengan bahan berkualitas tinggi, desain ergonomis, dan banyak ruang penyimpanan, tas ini ideal untuk membawa buku, laptop, dan perlengkapan sekolah lainnya. Tersedia dalam berbagai warna dan motif menarik, Tas Sekolah kami adalah pilihan sempurna untuk mendukung aktivitas belajar Anda.</p>
        </div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <button class="btn bg-primary text-white rounded-[5px] w-full">
          Add to cart
        </button>
        <button class="btn border-primary border-[1px] text-primary rounded-[5px] w-full">
          Buy now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const productName = ref('Too Busy To Care Crop Tee And Jogger Set - Heather Grey');
const productCategory = ref('Bag');
const productBrand = ref('Fashion Brand');
const productStock = ref(11);
const productPrice = ref(200000); 
const productDescription = ref(`Tas Sekolah kami dirancang untuk memberikan kenyamanan dan gaya bagi para pelajar. Dengan bahan berkualitas tinggi, desain ergonomis, dan banyak ruang penyimpanan, tas ini ideal untuk membawa buku, laptop, dan perlengkapan sekolah lainnya. Tersedia dalam berbagai warna dan motif menarik, Tas Sekolah kami adalah pilihan sempurna untuk mendukung aktivitas belajar Anda.`);
const productImage = ref('/images/tas.jpg');

const quantity = ref(0);
const minQuantity = ref(0);
const maxQuantity = ref(productStock.value);

const increment = () => {
  if (quantity.value < maxQuantity.value) {
    quantity.value++;
  }
};

const decrement = () => {
  if (quantity.value > minQuantity.value) {
    quantity.value--;
  }
};

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
</script>

<style lang="scss" scoped>

</style>