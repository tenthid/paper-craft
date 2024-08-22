<template>
  <div class="bg-primary-background mt-[50px] w-full container-page">
    <div
      class="mt-[50px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div class="align-center font-maitree text-[35px] text-primary">
        Create Product
      </div>
      <div
        class="w-[1000px] h-auto px-[50px] py-[25x] gap-[22px] font-poppins flex flex-col"
      >
        <div class="bg-white w-full h-auto rounded-[11px] pb-[11px]">
          <div class="w-full h-[60px] flex flex-row items-center">
            <h4
              class="font-poppins font-semibold text-[16px] text-blue px-[21px]"
            >
              Product Img
            </h4>
          </div>
          <div
            class="w-full relative border-primary-background border-t-[1px] border-solid box-border h-px"
          ></div>
          <div
            class="mb-[20px] mx-auto w-[770px] relative h-[204px] flex flex-col items-center justify-center gap-2 text-center text-[16px] font-montserrat border border-dashed border-dark-blue p-4"
          >
            <div class="w-full flex flex-col items-center">
              <img
                v-if="imageUrl"
                :src="imageUrl"
                alt="Uploaded Image"
                class="w-[70px] h-[60px] object-cover"
              />
              <img
                v-else
                class="w-[70px] h-[60px]"
                alt="Upload Icon"
                src="/images/upload-icon.svg"
              />
              <div class="flex flex-row items-start justify-start p-[5px]">
                <label
                  class="relative leading-[24px] font-semibold cursor-pointer"
                  @dragover.prevent
                  @drop.prevent
                  @click="triggerFileInput"
                >
                  <span class="">Drag & drop image or </span>
                  <span class=""> </span>
                  <span class="[text-decoration:underline]">Browse</span>
                  <input
                    type="file"
                    ref="fileInput"
                    accept="image/jpeg, image/png"
                    @change="onFileChange"
                    class="hidden"
                  />
                </label>
              </div>
              <div
                class="flex flex-row items-start justify-start p-[5px] text-[12px] text-gray"
              >
                <div class="relative leading-[18px]">
                  Supported formats: JPEG, PNG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[1000px] h-auto px-[50px] py-[25x] gap-[22px] flex flex-col"
      >
        <div class="bg-white w-full h-auto rounded-[11px] pb-[11px]">
          <h4
            class="font-poppins font-semibold text-[16px] text-blue px-[21px] my-3"
          >
            Product Information
          </h4>
          <div
            class="w-full relative border-primary-background border-t-[1px] border-solid box-border h-px"
          ></div>
          <div
            class="flex flex-col items-start justify-start mx-[15px] font-medium text-prime-gray"
          >
            <BaseInput
              class="w-full my-[20px]"
              v-model="userInput.product"
              label="Product Name"
              placeholder="Enter product name"
              identity="product"
            ></BaseInput>
            <div class="flex flex-row items-start justify-start w-full">
              <BaseInput
                class="w-full mr-[15px]"
                v-model="userInput.price"
                label="Product Price"
                placeholder="Enter price"
                identity="price"
              ></BaseInput>
              <BaseInput
                class="w-full ml-[15px]"
                v-model="userInput.stock"
                label="Product Stock"
                placeholder="Enter stock"
                identity="stock"
              ></BaseInput>
            </div>
            <div class="flex flex-row items-start justify-start w-full my-5">
              <div class="w-full mr-[15px]">
                <label class="block text-sm font-bold mb-2">
                  Product Brand
                </label>
                <select
                  v-model="userInput.brand"
                  class="rounded-[8px] block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option disabled value="">Choose Brand</option>
                  <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
              <div class="w-full ml-[15px]">
                <label class="block text-sm font-bold mb-2">
                  Product Category
                </label>
                <select
                  v-model="userInput.category"
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-[8px] shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option disabled value="">Choose Category</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="w-full h-[1px] bg-primary opacity-40"></div>
          </div>
          <div class="flex flex-row justify-end items-end space-x-4 mt-4 px-4">
            <button class="btn bg-red text-white px-4 py-2 rounded-[4px] ml-auto w-[200px]">
              Cancel
            </button>
            <button class="btn bg-primary text-white px-4 py-2 rounded-[4px] w-[200px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import BaseInput from "@/components/ui/BaseInput.vue";

const userInput = reactive({
  product: "",
  price: "",
  stock: "",
  brand: "",
  category: "",
});

const brands = ref([]);
const categories = ref([]);

const imageUrl = ref(null);

const triggerFileInput = () => {
  const fileInput = document.querySelector('input[type="file"]');
  fileInput.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const fetchBrandsAndCategories = async () => {
  try {
    const brandResponse = await fetch("/api/brands");
    brands.value = await brandResponse.json();

    const categoryResponse = await fetch("/api/categories");
    categories.value = await categoryResponse.json();
  } catch (error) {
    console.error("Error fetching brands and categories:", error);
  }
};

onMounted(() => {
  fetchBrandsAndCategories();
});
</script>

<style lang="scss" scoped></style>
