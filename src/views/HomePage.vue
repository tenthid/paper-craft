<template>
  <div
    class="w-full relative h-[720px] overflow-hidden flex flex-col items-center justify-center gap-[30px] bg-cover bg-no-repeat text-center text-[50px]"
    style="background-image: url('/images/banner-home.png')"
  >
    <div>
      <p>
        <b class="text-primary"
          >Temukan Perlengkapan
          <span class="font-hand-write text-white2 text-[60px]"
            >Terbaik</span
          ></b
        ><br />
        <b class="text-primary"
          >Untuk Kinerja
          <span class="font-hand-write text-white2 text-[60px]"
            >Terbaik</span
          ></b
        >
      </p>
    </div>
    <router-link
      to="/"
      class="w-[250px] h-[56px] rounded-[10px] bg-primary text-[30px] text-white font-semibold leading-[20px] btn px-[25px]"
    >
      Lets Shop
    </router-link>
  </div>

  <div
    class="w-full bg-primary flex flex-col items-center justify-center pt-[30px] px-[50px] pb-[60px] box-border gap-[25px] text-center text-[40px] text-primary-background font-maitree"
  >
    <div class="self-stretch relative font-semibold">Categories</div>
    <div
      class="self-stretch rounded-[15px] bg-primary-background overflow-hidden flex flex-row items-center justify-center p-[25px] gap-5 text-left text-xl text-primary font-inter"
    >
      <div
        class="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-5"
      >
        <div class="relative leading-[120%] font-medium">Category name</div>
      </div>
      <div
        class="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-5"
      >
        <div class="relative leading-[120%] font-medium">Category name</div>
      </div>
      <div
        class="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-5"
      >
        <div class="relative leading-[120%] font-medium">Category name</div>
      </div>
      <div
        class="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-5"
      >
        <div class="relative leading-[120%] font-medium">Category name</div>
      </div>
      <router-link to="/category"
        class="self-stretch rounded-[10px] bg-primary overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-white btn"
      >
        <div class="relative leading-[120%] font-medium">View all</div>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
