<template>
  <div
    class="bg-primary-background w-full tablet:container-page laptop:pl-[250px] min-h-screen"
  >
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-4 text-left text-sm font-body-base-bold mb-4"
    >
      <h1 class="font-maitree text-2xl text-primary tablet:text-[35px]">
        Create Product
      </h1>

      <div
        class="laptop:w-[850px] phone-s:w-full h-auto px-8 gap-4 font-poppins flex flex-col"
      >
        <div class="bg-white w-full rounded-lg pb-2">
          <div class="flex items-center h-12 px-4">
            <h4 class="font-poppins font-semibold text-base text-blue">
              Product Img
            </h4>
          </div>
          <div class="border-t border-primary-background"></div>

          <label
            class="relative mx-auto laptop:w-[600px] phone-s:w-[80%] phone-s:h-auto flex flex-col items-center justify-center text-center text-base font-montserrat border border-dashed border-dark-blue p-4 cursor-pointer overflow-hidden"
            @click="triggerFileInput"
            @dragover.prevent="handleDragOver"
            @drop="handleDrop"
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
              class="w-16 h-12 z-10"
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
              @click.stop
            />
          </label>
        </div>
      </div>

      <div
        class="laptop:w-[850px] phone-s:w-full h-auto mb-4 px-8 gap-4 flex flex-col"
      >
        <div class="bg-white w-full h-auto rounded-lg pb-2">
          <h4 class="font-poppins font-semibold text-base text-blue px-4 my-2">
            Product Information
          </h4>
          <div class="border-t border-primary-background w-full"></div>

          <div class="mx-4 flex flex-col font-medium text-prime-gray">
            <BaseInput
              class="w-full my-4"
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
              class="flex phone-s:flex-col tablet:flex-row w-full gap-4 my-4"
            >
              <div class="w-full">
                <label class="block text-sm font-bold mb-1"
                  >Product Brand</label
                >
                <BaseSelect label="Choose brand" :options="brands" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-bold mb-1"
                  >Product Category</label
                >
                <BaseSelect label="Choose category" :options="categories" />
              </div>
            </div>
            <div class="w-full h-px bg-primary opacity-40"></div>
          </div>

          <div class="flex justify-end space-x-3 mt-4 px-4">
            <button
              class="btn bg-red text-white px-4 py-2 rounded-[11px] w-[180px]"
            >
              Cancel
            </button>
            <button
              class="btn bg-primary text-white px-4 py-2 rounded-[11px] w-[180px]"
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

const triggerFileInput = () => {
  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.click();
  }
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => (imageUrl.value = e.target.result);
    reader.readAsDataURL(file);
  }
};

const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const file = event.dataTransfer.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => (imageUrl.value = e.target.result);
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
img.object-cover {
  object-fit: cover;
}
</style>
