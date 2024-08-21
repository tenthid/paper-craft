<template>
    <div class="flex justify-center items-start gap-[22px] self-stretch">
        <div class="flex flex-col justify-center items-center w-[546px] h-[546px] p-[var(--line-height-line-height-400,20px)] gap-[var(--line-height-line-height-400,20px)] rounded-[10px] bg-white">
          <div class="flex flex-col items-center w-[477px] h-[477px] gap-[10px] flex-shrink-0 rounded-[10px] border-[2px] border-[#dedede] bg-[#FFF]">
            <img :src="productImage" alt="Product Image" class="h-full w-auto rounded-[10px]" />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center w-[765px] h-[546px] p-[25px] gap-[18px] rounded-[10px] bg-white">
          <div class="flex flex-col items-start gap-[8px] self-stretch">
            <div class="flex justify-between items-start self-stretch">
              <div class="w-[650px] text-[#000] font-inter text-[25px] font-medium">
                {{ productName }} <!-- nama product -->
              </div>
              <img class="w-[30px] h-auto pt-[5px]" src="/images/heart.svg" alt="" />
            </div>
  
            <div class="text-[#404040] font-inter text-[18px] font-normal leading-[20px]">
              {{ productCategory }} / {{ productBrand }} <!-- Category / Brand -->
            </div>
  
            <div class="flex text-[#808080] font-inter text-[17px] font-normal leading-[24px] tracking-[0.1px]">
              <div class="pr-[5px]">
                Stock: 
              </div>
              <div class="text-[#000] font-inter text-[17px] font-bold leading-[24px] tracking-[0.1px]">
                {{ productStock }} <!-- stock -->
              </div>
            </div>
  
            <div class="text-[#005C78] font-inter text-[22px] font-medium leading-normal tracking-[0.1px]">
              Rp {{ productPrice }} <!-- price -->
            </div>
  
            <div class="text-[#000] font-inter text-[15px] font-medium leading-[24px]">
              Description
            </div>
            <div class="text-[#5B5B5B] font-inter text-[15px] font-normal leading-normal tracking-[0.1px]">
              {{ productDescription }} <!-- deskripsi -->
            </div>
          </div>
  
          <div class="flex w-full h-[34px] justify-between items-center flex-shrink-0 text-primary font-inter text-[18px] font-medium normal-case leading-normal">
            Amount
            <div class="quantity-input flex items-center pr-[5px]">
                <button 
                  class="decrement-btn px-2 py-1 border-[2px] border-primary rounded-l  hover:bg-primary hover:text-white"
                  @click="decrement"
                  :disabled="quantity <= minQuantity"
                >-</button>
                
                <input 
                  type="text" 
                  :value="quantity" 
                  class="quantity-field w-[40px] h-[37px] text-center border-t-[2px] border-b-[2px] border-primary focus:outline-none"
                  readonly
                />
                
                <button 
                  class="increment-btn px-2 py-1 border-[2px] border-primary rounded-r hover:bg-primary hover:text-white"
                  @click="increment"
                  :disabled="quantity >= maxQuantity"
                >+</button>
            </div>
          </div>
  
          <div class="flex h-[45px] justify-center items-center gap-[10px] self-stretch rounded-[5px] bg-primary text-white font-inter text-[20px] font-normal hover:opacity-[70%]">
            Add to Cart
          </div>
          <div class="flex h-[45px] justify-center items-center gap-1 self-stretch rounded-[5px] border-[2px] border-primary text-primary font-inter text-[20px] font-normal hover:bg-primary hover:text-white">
            Buy Now
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
  const maxQuantity = ref(999);
  
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
</script>

<style lang="scss" scoped>

</style>