<template>
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
      <div class="flex px-[10px] justify-center items-center gap-[10px] self-stretch">
        <button>
          <img class="h-[48px] w-auto" src="/images/arrow-left-circle.svg" alt="" />
        </button>
        <div class="flex w-[1258px] h-[46px] justify-center items-center gap-[10px] text-primary text-center font-maitree text-[35px] font-normal">
          Product Detail
        </div>
      </div>
  
      <div class="container-Detail">
        <DetailProduct />
      </div>
  
      <div class="w-[100%] px-[35px] text-[#005C78] font-inter text-[30px] font-medium leading-[36px]">
        Other Product
      </div>
      <div class="container-page">
        <ProductList />
      </div>
    </div>
</template>
  
<script setup>
import DetailProduct from "@/components/product/DetailProduct.vue";
import ProductList from "@/components/product/ProductList.vue";

</script>
  
<style lang="scss" scoped>
  
</style>
  