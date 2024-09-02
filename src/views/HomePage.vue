<template>
  <div
    class="w-full relative phone-s:h-[200px] tablet:h-[720px] overflow-hidden flex flex-col items-center justify-center tablet:gap-[30px] bg-cover bg-no-repeat text-center phone-s:text-[20px] tablet:text-[50px]"
    style="background-image: url('/images/banner-home.png')"
  >
    <div class="phone-s:pt-14">
      <p>
        <b class="text-primary"
          >Temukan Perlengkapan
          <span
            class="font-hand-write text-white2 phone-s:text-[25px] tablet:text-[60px]"
            >Terbaik</span
          ></b
        ><br />
        <b class="text-primary"
          >Untuk Kinerja
          <span
            class="font-hand-write text-white2 phone-s:text-[25px] tablet:text-[60px]"
            >Terbaik</span
          ></b
        >
      </p>
    </div>
    <router-link
      to="/products"
      class="phone-s:w-[150px] tablet:w-[250px] phone-s:h-[30px] tablet:h-[56px] rounded-[10px] bg-primary phone-s:text-[20px] tablet:text-[30px] text-white font-semibold tablet:leading-[20px] btn px-[25px]"
    >
      Lets Shop
    </router-link>
  </div>

  <div
    class="w-full bg-primary flex flex-col items-center justify-center phone-s:pt-4 phone-s:px-6 phone-s:pb-[30px] tablet:pt-[30px] tablet:px-[50px] tablet:pb-[60px] box-border gap-[25px] text-center phone-s:text-[25px] laptop:text-[40px] text-primary-background font-maitree"
  >
    <div class="self-stretch relative font-semibold">Categories</div>
    <div
      class="self-stretch rounded-[15px] bg-primary-background tablet:overflow-hidden flex flex-row flex-wrap items-center justify-center p-[25px] gap-5 text-left tablet:text-xl phone-s:text-sm text-primary font-inter"
    >
      <router-link
        v-for="category in categoryList"
        :key="category.id"
        :to="'/category/' + category.category_name"
        class="flex-1 rounded-[10px] bg-white tablet:overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 relative leading-[120%] font-medium"
      >
        {{ category.category_name }}
      </router-link>

      <router-link
        to="/categories"
        class="self-stretch rounded-[10px] bg-primary tablet:overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 text-white btn relative leading-[120%] font-medium"
      >
        View all
      </router-link>
    </div>
  </div>

  <div class="container-page bg-primary-background">
    <PopularProduct />

    <div
      class="w-full relative rounded-[20px] bg-primary tablet:overflow-hidden flex flex-col tablet:flex-row items-center justify-center text-left text-[35px] text-white font-maitree my-[50px]"
    >
      <div
        class="w-full tablet:w-auto bg-primary overflow-hidden rounded-lg flex items-center justify-center py-[20px] px-[30px]"
      >
        <div
          class="relative font-medium font-maitree hover:underline cursor-pointer"
        >
          <p class="m-0">Shop By</p>
          <p class="m-0">Brand</p>
        </div>
      </div>

      <div
        class="flex-1 laptop:bg-primary-1 grid grid-cols-2 h-full tablet:grid-cols-4 gap-[15px] phone-s:p-[20px] laptop:p-[50px] phone-s:text-[13px] tablet:text-[14px] laptop:text-[15px] laptop-l:text-[20px] text-black font-inter"
      >
        <div
          class="bg-white rounded-[10px] py-[10px] flex tablet:items-center px-[15px] w-full h-full"
          v-for="brand in brandList"
          :key="brand.id"
        >
          <img
            src=""
            alt="brand-img"
            class="laptop:w-[50px] laptop:h-[50px] phone-s:w-5 phone-s:h-5 relative phone-s:rounded-sm bg-gray laptop:rounded-[10px]"
          />
          <router-link
            class="text-center w-full"
            :to="'/brands?brandId=${brand.id}'"
          >
            {{ brand.brand_name }}
          </router-link>
        </div>
      </div>
    </div>

    <NewestProduct />
  </div>
</template>

<script setup>
import PopularProduct from "../components/product/PopularProduct.vue";
import NewestProduct from "../components/product/NewProduct.vue";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const categories = computed(() => store.state.product.categories);
const brands = computed(() => store.state.product.brands);
const categoryList = ref();
const brandList = ref();

onMounted(async () => {
  await store.dispatch("product/getCategories");
  await store.dispatch("product/getBrands");

  categoryList.value = categories.value.slice(0, 4);
  brandList.value = brands.value.slice(0, 4);
});
</script>
<style scoped></style>
