<template>
    <div class="w-[100%] bg-primary-background flex flex-col items-center gap-[40px] py-[100px] px-[60px] pb-[50px] self-stretch">
      <!-- Header -->
      <div class="flex px-[10px] justify-start items-center gap-[10px] self-stretch">
        <router-link to="/" class="absolute pl-[22px]" @click="goBack">
          <img class="h-[48px] w-auto" src="/images/arrow-left-circle.svg" alt="" />
        </router-link>
        <div class="flex w-full h-[46px] justify-center items-center gap-[10px] text-primary text-center font-maitree text-[35px] font-normal">
          Invoice
        </div>
      </div>
  
      <div class="flex h-auto px-[10px] justify-center items-start gap-[var(--line-height-line-height-400,20px)] flex-shrink-0 self-stretch">
        <div class="flex h-auto px-[24px] pt-[var(--line-height-line-height-400,20px)] pb-[40px] flex-col items-center gap-[var(--line-height-line-height-400,20px)] rounded-[12px] border border-[#EDEDED] bg-[#FFF]">
          <div class="flex h-auto flex-col justify-center items-center gap-0 flex-shrink-0 self-stretch">
            <img class="h-[250px] w-auto pt-[20px]" src="/images/success.gif" alt="" />
            <div class="text-bilu text-center font-inter text-[34px] font-medium leading-[36px]">
              Payment Success
            </div>
            <div class="py-[10px] pb-[30px] text-center text-[17px] font-normal leading-[24px] text-gray-3 font-inter">
              thanks for shopping
            </div>
          </div>
  
          <div class="flex w-[554px] h-[128px] p-[15px] flex-col gap-[4px] rounded-[10px] border border-[#EDEDED] bg-white ">
            <!-- Konten informasi sini -->
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
                Payment Time
              </div>
              <div class="text-black text-center font-poppins text-[14px] font-medium leading-[29.977px]">
                {{ paymentTime }}
              </div>
            </div>
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
                Payment Method
              </div>
              <div class="text-black text-center font-poppins text-[14px] font-medium leading-[29.977px]">
                {{ paymentMethod }}
              </div>
            </div>
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
                Sender Name
              </div>
              <div class="text-black text-center font-poppins text-[14px] font-medium leading-[29.977px]">
                {{ senderName }}
              </div>
            </div>
          </div>
  
          <div class="text-gray-6 font-inter text-[14px] font-normal leading-[20px] pr-[450px]">
            Product Price
          </div>
  
          <div class="flex w-[554px] h-auto p-[15px] flex-col gap-[4px] rounded-[10px] border border-[#EDEDED] bg-white ">
            <ProductUnit />
          </div>
  
          <div class="text-gray-6 font-inter text-[14px] font-normal leading-[20px] pr-[500px]">
            Total
          </div>
  
          <div class="flex w-[554px] h-auto p-[15px] flex-col gap-[4px] rounded-[10px] border border-[#EDEDED] bg-white ">
            <!-- Konten informasi sini -->
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
                Subtotal
              </div>
              <div class="text-gray-5 text-center font-poppins text-[14px] font-medium leading-[29.977px]">
                {{ formatPrice(subtotal) }}
              </div>
            </div>
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
                Taxes
              </div>
              <div class="text-gray-5 text-center font-poppins text-[14px] font-medium leading-[29.977px]">
                {{ formatPrice(taxes) }}
              </div>
            </div>
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-gray-5 font-poppins text-[14px] font-normal leading-[29.977px]">
                Shipping
              </div>
              <div class="text-gray-5 text-center font-poppins text-[14px] font-medium leading-[29.977px]">
                {{ formatPrice(shipping) }}
              </div>
            </div>
            <div class="flex items-start gap-[26.646px] self-stretch justify-between">
              <div class="text-black font-poppins text-[16px] font-semibold leading-[29.977px]">
                Order Total
              </div>
              <div class="text-black text-center font-poppins text-[16px] font-semibold leading-[29.977px]">
                {{ formatPrice(orderTotal) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import ProductUnit from '@/components/checkout/ProductUnit.vue';
  
  // Data Pembayaran
  const paymentTime = '25-02-2023, 13:22:16';
  const paymentMethod = 'Bank';
  const senderName = 'Antonio Ginting';
  
  const subtotal = ref(0);
  const taxes = ref(20000);
  const shipping = ref(50000);
  
  // Total Pesanan
  const orderTotal = computed(() => subtotal.value + taxes.value + shipping.value);
  
  // Format Harga
  const formatPrice = (price) => {
    return price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };  
</script>
  