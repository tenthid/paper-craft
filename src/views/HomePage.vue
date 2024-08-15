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
      class="self-stretch rounded-[15px] bg-primary-background overflow-hidden flex flex-row flex-wrap items-center justify-center p-[25px] gap-5 text-left text-xl text-primary font-inter"
    >
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="'/category/' + category.slug"
        class="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 relative leading-[120%] font-medium"
      >
        {{ category.name }}
      </router-link>

      <router-link
        to="/categories"
        class="self-stretch rounded-[10px] bg-primary overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-white btn relative leading-[120%] font-medium"
      >
        View all
      </router-link>
    </div>
  </div>

  <div class="container-page bg-primary-background">
    <PopularProduct />

    <div
      class="w-full relative rounded-[20px] bg-primary overflow-hidden flex flex-row items-center justify-center text-left text-[40px] text-white font-maitree my-[50px]"
    >
      <div
        class="self-stretch bg-primary overflow-hidden flex flex-row items-center justify-center py-0 px-[30px]"
      >
        <div class="relative leading-[60px] font-medium font-maitree">
          <p class="m-0">Shop By</p>
          <p class="m-0">Brand</p>
        </div>
      </div>
      <div
        class="flex-1 bg-primary-1 overflow-hidden flex flex-row items-start justify-start p-[50px] gap-[30px] text-[30px] text-black font-inter"
      >
        <router-link
          to="/brand-name"
          class="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-center justify-center py-[15px] px-[30px] gap-2.5"
        >
          <div class="w-[70px] relative bg-gray h-[70px]" />
          <div class="relative leading-[120%] font-medium text-[#000]">
            Brand name
          </div>
        </router-link>
        <div
          class="flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start gap-5 text-xl"
        >
          <div
            class="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-5"
          >
            <router-link
              to="/brand-name"
              class="w-[300px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-2.5"
            >
              <div class="w-[50px] relative bg-gray h-[50px]" />
              <div class="relative leading-[120%] font-medium text-[#000]">
                Brand name
              </div>
            </router-link>
            <router-link
              to="/brand-name"
              class="flex-1 rounded-3xs bg-white overflow-hidden flex flex-row items-center justify-center py-[15px] px-[30px] gap-2.5"
            >
              <div class="w-[50px] relative bg-gray h-[50px]" />
              <div class="relative leading-[120%] font-medium text-[#000]">
                Brand name
              </div>
            </router-link>
          </div>
          <div
            class="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-5"
          >
            <router-link
              to="/brand-name"
              class="flex-1 rounded-3xs bg-white overflow-hidden flex flex-row items-center justify-center py-[15px] px-[30px] gap-2.5"
            >
              <div class="w-[50px] relative bg-gray h-[50px]" />
              <div class="relative leading-[120%] font-medium text-[#000]">
                Brand name
              </div>
            </router-link>
            <router-link
              to="/brand-name"
              class="w-[300px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-2.5"
            >
              <div class="w-[50px] relative bg-gray h-[50px]" />
              <div class="relative leading-[120%] font-medium text-[#000]">
                Brand name
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <NewestProduct />
  </div>
</template>

<script setup>
import PopularProduct from "../components/product/PopularProduct.vue";
import NewestProduct from "../components/product/NewProduct.vue";

const categories = [
  { id: 1, name: "Category name", slug: "category-1" },
  { id: 2, name: "Category name", slug: "category-2" },
  { id: 3, name: "Category name", slug: "category-3" },
  { id: 4, name: "Category name", slug: "category-4" },
];
</script>
<style scoped></style>
