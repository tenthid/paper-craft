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
      to="/products"
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
        v-for="category in categoryList"
        :key="category.id"
        :to="'/category/' + category.category_name"
        class="flex-1 rounded-[10px] bg-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 relative leading-[120%] font-medium"
      >
        {{ category.category_name }}
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
      class="w-full relative rounded-[20px] bg-primary overflow-hidden flex flex-row items-center justify-center text-left text-[35px] text-white font-maitree my-[50px]"
    >
      <div
        class="self-stretch bg-primary overflow-hidden flex flex-row items-center justify-center py-[20px] px-[30px]"
      >
        <div class="relative font-medium font-maitree hover:underline cursor-pointer">
          <p class="m-0">Shop By</p>
          <p class="m-0">Brand</p>
        </div>
      </div>
      <div
        class="flex-1 bg-primary-1 flex items-start justify-start p-[50px] gap-[30px] text-[20px] text-black font-inter"
      >
        <div class="bg-white rounded-[10px] py-[10px] flex items-center px-[15px] w-full"  v-for="brand in brandList">
          <img src="" alt="brand-img" class="w-[50px] relative bg-gray h-[50px] rounded-[10px]" />
          <router-link class="text-center w-full" :to="`/brands?brandId=${brand.id}`">
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

const store = useStore()

const categories = computed(() => store.state.product.categories)
const brands = computed(() => store.state.product.brands)
const categoryList = ref()
const brandList = ref()

onMounted(async() => {
  await store.dispatch('product/getCategories')
  await store.dispatch('product/getBrands')

  categoryList.value = categories.value.slice(0, 4)
  brandList.value = brands.value.slice(0, 4)
})
</script>
<style scoped></style>
