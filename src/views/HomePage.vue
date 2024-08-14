<template>
  <div
    class="w-full relative h-[720px] overflow-hidden flex flex-col items-center justify-center gap-[30px] bg-cover bg-no-repeat text-center text-[50px] "
    style="background-image: url('/images/banner-home.png')"
  >
    <div>
      <p  >
        <b class="text-primary">Temukan Perlengkapan <span class="font-hand-write text-white2 text-[60px]">Terbaik</span></b><br>
        <b class="text-primary ">Untuk Kinerja <span class="font-hand-write text-white2 text-[60px]">Terbaik</span></b>
      </p>
    </div>
    <router-link to="/">
      <button
      class="hover:bg-white hover:text-primary w-[250px] h-[56px] rounded-[10px] bg-primary border-[3px] border-solid items-center justify-center py-2 px-[25px] text-[30px] text-white font-semibold leading-[20px]"
    >
      Let's Shop
    </button>
    </router-link>
  </div>
  
</template>

<script setup></script>

<style scoped></style>
