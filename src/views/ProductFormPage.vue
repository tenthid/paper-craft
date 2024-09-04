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
        <div class="bg-white w-full rounded-lg pb-[30px]">
          <div class="flex items-center h-12 px-4">
            <h4 class="font-poppins font-semibold text-base text-blue">
              Product Img
            </h4>
          </div>
          <div class="border-t border-primary-background mb-[20px]"></div>

          <label
            class="relative mx-auto laptop:w-[600px] phone-s:w-[80%] phone-s:h-auto flex flex-col items-center justify-center text-center text-base font-montserrat border border-dashed border-dark-blue p-4 cursor-pointer overflow-hidden"
            @click="triggerFileInput"
            @dragover.prevent="handleDragOver"
            @drop="handleDrop"
            for="fileInput"
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
              id="fileInput"
              accept="image/jpeg, image/png"
              @change="onFileChange"
              class="w-full h-full hidden cursor-pointer"
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
              :with-span="false"
            />
            <div class="flex phone-s:flex-col tablet:flex-row w-full gap-4">
              <BaseInput
                class="w-full"
                v-model="userInput.price"
                label="Product Price"
                placeholder="Enter price"
                identity="price"
                :with-span="false"
              />
              <BaseInput
                class="w-full"
                v-model="userInput.stock"
                label="Product Stock"
                placeholder="Enter stock"
                identity="stock"
                :with-span="false"
              />
            </div>
            <div
              class="flex phone-s:flex-col tablet:flex-row w-full gap-4 my-4"
            >
              <div class="w-full">
                <label class="block text-sm font-bold mb-1"
                  >Product Brand</label
                >
                <BaseSelect
                  v-model="userInput.brand"
                  label="Choose Brand"
                  :options="brands"
                />
              </div>
              <div class="w-full">
                <label class="block text-sm font-bold mb-1"
                  >Product Category</label
                >
                <BaseSelect
                  v-model="userInput.category"
                  label="Choose Category"
                  :options={}
                />
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
              @click="saveProduct"
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
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";

const store = useStore();
const brands = computed(() => store.state.product.brands);
const categories = computed(() => store.state.product.categories);

const userInput = reactive({
  img: null,
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
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
      userInput.img = file;
    };
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
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
      userInput.img = file;
    };
    reader.readAsDataURL(file);
  }
};

onMounted(async () => {
  await store.dispatch("brand/getBrands");
  await store.dispatch("category/getCategories");
});

const saveProduct = async () => {
  try {
    const formData = new FormData();
    formData.append("name", userInput.product);
    formData.append("price", userInput.price);
    formData.append("stock", userInput.stock);
    formData.append("brand_id", userInput.brand);
    formData.append("category_id", userInput.category);
    if (userInput.img) {
      formData.append("image", userInput.img);
    }

    const newProduct = await store.dispatch("product/createProduct", formData);

    store.commit("product/addProduct", newProduct);
    alert("Product created successfully!");
  } catch (err) {
    alert("Failed to create product.");
    console.error(err);
  }
};
</script>

<style scoped>
img.object-cover {
  object-fit: cover;
}
</style>
