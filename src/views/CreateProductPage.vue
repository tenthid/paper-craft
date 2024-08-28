<template>
  <div class="bg-primary-background w-full phone-l:container-page">
    <div
      class="pt-20 w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-4"
    >
      <h1 class="font-maitree text-3xl text-primary">Create Product</h1>

      <div
        class="laptop:w-[850px] phone-s:w-full h-auto px-12 py-6 gap-5 font-poppins flex flex-col"
      >
        <div class="bg-white w-full h-auto rounded-lg pb-3">
          <div class="flex items-center h-14 px-5">
            <h4 class="font-poppins font-semibold text-lg text-blue">
              Product Img
            </h4>
          </div>
          <div class="border-t border-primary-background"></div>

          <label
            class="relative mx-auto laptop:w-[650px] phone-s:w-[75%] phone-s:h-auto flex flex-col items-center justify-center text-center text-base font-montserrat border border-dashed border-dark-blue p-6 laptop:p-4 phone-s:p-3 cursor-pointer overflow-hidden"
            @dragover.prevent
            @drop.prevent
          >
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="Uploaded Image"
              class="object-cover w-full h-full"
            />
            <img
              v-else
              alt="Upload Icon"
              src="/images/upload-icon.svg"
              class="w-18 h-15 z-10"
            />
            <span v-if="!imageUrl" class="font-semibold z-10">
              Drag & drop image or <span class="underline">Browse</span>
            </span>
            <p v-if="!imageUrl" class="text-xs text-gray leading-4 z-10">
              Supported formats: JPEG, PNG
            </p>
            <input
              type="file"
              ref="fileInput"
              accept="image/jpeg, image/png"
              @change="onFileChange"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
        </div>
      </div>

      <div
        class="laptop:w-[850px] phone-s:w-full h-auto px-12 py-6 gap-5 flex flex-col"
      >
        <div class="bg-white w-full h-auto rounded-lg pb-3">
          <h4 class="font-poppins font-semibold text-lg text-blue px-5 my-3">
            Product Information
          </h4>
          <div class="border-t border-primary-background w-full"></div>

          <div class="mx-4 flex flex-col font-medium text-prime-gray">
            <BaseInput
              class="w-full my-5"
              v-model="userInput.product"
              label="Product Name"
              placeholder="Enter product name"
              identity="product"
            />
            <div class="flex phone-s:flex-col tablet:flex-row w-full gap-4">
              <BaseInput
                class="w-full"
                v-model="userInput.price"
                label="Product Price"
                placeholder="Enter price"
                identity="price"
              />
              <BaseInput
                class="w-full"
                v-model="userInput.stock"
                label="Product Stock"
                placeholder="Enter stock"
                identity="stock"
              />
            </div>
            <div
              class="flex phone-s:flex-col tablet:flex-row w-full gap-4 my-5"
            >
              <div class="w-full">
                <label class="block text-sm font-bold mb-2">
                  Product Brand
                </label>
                <BaseSelect label="Choose brand" :options="brands" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-bold mb-2">
                  Product Category
                </label>
                <BaseSelect label="Choose category" :options="categories" />
              </div>
            </div>
            <div class="w-full h-px bg-primary opacity-40"></div>
          </div>

          <div class="flex justify-end space-x-4 mt-4 px-4">
            <button
              class="btn bg-red text-white px-4 py-2 rounded-[11px] w-[200px]"
            >
              Cancel
            </button>
            <button
              class="btn bg-primary text-white px-4 py-2 rounded-[11px] w-[200px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";

const store = useStore();
const brands = computed(() => store.state.product.brands);
const categories = computed(() => store.state.product.categories);

const userInput = reactive({
  product: "",
  price: "",
  stock: "",
  brand: "",
  category: "",
});

const imageUrl = ref(null);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => (imageUrl.value = e.target.result);
    reader.readAsDataURL(file);
  }
};

// const brands = ref([]);
// const categories = ref([]);


// const fetchBrandsAndCategories = async () => {
//   try {
//     const [brandResponse, categoryResponse] = await Promise.all([
//       fetch("/api/brands"),
//       fetch("/api/categories"),
//     ]);
//     brands.value = await brandResponse.json();
//     categories.value = await categoryResponse.json();
//   } catch (error) {
//     console.error("Error fetching brands and categories:", error);
//   }
// };

// onMounted(fetchBrandsAndCategories);
</script>

<style scoped>
img.object-cover {
  object-fit: cover;
}
</style>
