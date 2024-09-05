<template>
  <div
    class="bg-primary-background w-full tablet:container-page laptop:pl-[250px] min-h-screen"
  >
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-4 text-left text-sm font-body-base-bold mb-4"
    >
      <h1 class="font-maitree text-2xl text-primary tablet:text-[35px]">
        {{ route.path === '/create-product'? 'Create' : 'Edit'  }} Product
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
            @dragover.prevent="handleDragOver"
            @drop="handleDrop"
            for="fileInput"
          >
            <img
              v-if="imageTemp"
              :src="userInput.image_url? typeof imageTemp === 'string'? imageTemp : false || `https://tenth.run.place:90/storage/${userInput.image_url}` : '/images/tas.jpg'"
              alt="Uploaded Image"
              class="object-cover w-full h-full"
            />
            <img
              v-else
              alt="Upload Icon"
              :src="userInput.image_url? `https://tenth.run.place:90/storage/${userInput.image_url}` : '/images/upload-icon.svg'"
              class="w-16 h-12 z-10"
            />
            <span v-if="!imageTemp" class="font-semibold z-10">
              Drag & drop image or <span class="underline">Browse</span>
            </span>
            <p v-if="!imageTemp" class="text-xs text-gray leading-4 z-10">
              Supported formats: JPEG, PNG
            </p>
            <input
              type="file"
              id="fileInput"
              accept="image/jpeg, image/png"
              @input="renderImage"
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
              v-model="userInput.product_name"
              label="Product Name"
              placeholder="Enter product name"
              identity="product"
              :with-span="false">
              <p v-if="errors.product_name" v-for="error in errors.product_name" class="text-danger font-inter text-[12px]">
                {{ error }}
              </p>
            </BaseInput>
            <div class="flex phone-s:flex-col tablet:flex-row w-full gap-4">
              <BaseInput
                class="w-full"
                v-model="userInput.price"
                label="Product Price"
                placeholder="Enter price"
                identity="price"
                :with-span="false"
                type="number">
                <p v-if="errors.price" v-for="error in errors.price" class="text-danger font-inter text-[12px]">
                  {{ error }}
                </p>
              </BaseInput>
              <BaseInput
                class="w-full"
                v-model="userInput.stock"
                label="Product Stock"
                placeholder="Enter stock"
                identity="stock"
                :with-span="false"
                type="number">
                <p v-if="errors.stock" v-for="error in errors.stock" class="text-danger font-inter text-[12px]">
                  {{ error }}
                </p>
              </BaseInput>
            </div>
            <div
              class="flex phone-s:flex-col tablet:flex-row w-full gap-4 my-4"
            >
              <div class="w-full">
                <label class="block text-sm font-bold mb-1"
                  >Product Brand</label
                >
                <BaseSelect
                  v-model="userInput.brand_id"
                  label="Choose Brand"
                  :options="brandList"
                />
                <p v-if="errors.brand_id" v-for="error in errors.brand_id" class="text-danger font-inter text-[12px]">
                  {{ error }}
                </p>
              </div>
              <div class="w-full">
                <label class="block text-sm font-bold mb-1"
                  >Product Category</label
                >
                <BaseSelect
                  v-model="userInput.category_id"
                  label="Choose Category"
                  :options="categoryList"
                />
                <p v-if="errors.category_id" v-for="error in errors.category_id" class="text-danger font-inter text-[12px]">
                  {{ error }}
                </p>
              </div>
            </div>
            <label class="font-inter text-[16px] pb-[10px]" for="desc">
              Description
            </label>
            <textarea v-model="userInput.description" id="desc" class="bg-primary-background resize-none py-[8px] px-[12px] flex-col rounded-[12px] w-full input-no-focus text-[16px]" rows="10"></textarea>
            <p v-if="errors.description" v-for="error in errors.description" class="text-danger font-inter text-[12px]">
              {{ error }}
            </p>
            <div class="w-full h-px bg-primary opacity-40"></div>
          </div>

          <div class="flex justify-end space-x-3 mt-4 px-4">
            <router-link to="/products-admin"
              class="btn bg-red text-white px-4 py-2 rounded-[11px] w-[180px]"
            >
              Cancel
            </router-link>
            <button
              class="btn bg-primary text-white px-4 py-2 rounded-[11px] w-[180px]"
              @click="route.path === '/create-product'? handleCreate() : handleUpdate()"
            >
              {{ route.path === '/create-product'? 'Create' : 'Save' }}
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
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute()
const router = useRouter()

const brands = computed(() => store.state.brand.brands);
const categories = computed(() => store.state.category.categories);
const errors = computed(() => store.state.product.errors)
const message = computed(() => store.state.product.message)
const product = computed(() => store.state.product.product)
const brandList = ref()
const categoryList = ref()
const imageTemp = ref()
const fileInput = ref()
const userInput = reactive({
  id: route.params.id,
  product_name: '',
  category_id: '',
  brand_id: '',
  price: '',
  stock: '',
  image_url: '',
  description: ''
});


const renderImage = (e) => {
  fileInput.value = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(fileInput.value);

  reader.addEventListener ("load", () => {
    imageTemp.value = reader.result;
    userInput.image_url = true
  });
};

const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  fileInput.value = event.dataTransfer.files[0];
  if (fileInput.value) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageTemp.value = e.target.result;
    };
    reader.readAsDataURL(fileInput.value);
  }
};

const handleCreate = async () => {
  let isSuccess = {status: true}
  if(fileInput.value) {
      isSuccess = await store.dispatch('product/uploadProductImage', fileInput.value)
      userInput.image_url = isSuccess.path
  }
  if(isSuccess.status) {
      const createSuccess = await store.dispatch('product/createProduct', userInput)
      if(createSuccess) {
        store.dispatch('ui/showNotif', {message: message.value})
        router.push('/products-admin')
      } else if(Object.keys(errors.value).length === 0) {
        store.dispatch('ui/showNotif', {message: message.value, isError: true})
      }
  } else {
    store.dispatch('ui/showNotif', {message: message.value, isError: true})
  }
}

const handleUpdate = async () => {
  let isSuccess = {status: true}
  if(fileInput.value) {
    isSuccess = await store.dispatch('product/uploadProductImage', fileInput.value)
    userInput.image_url = isSuccess.path
  }
  if(isSuccess.status) {
    const updateSuccess = await store.dispatch('product/updateProduct', userInput)
    if(updateSuccess) {
      store.dispatch('ui/showNotif', {message: message.value})
      router.push('/products-admin')
    } else if(Object.keys(errors.value).length === 0) {
      store.dispatch('ui/showNotif', {message: message.value, isError: true})
    }
  } else {
    store.dispatch('ui/showNotif', {message: message.value, isError: true})
  }
}

onMounted(async () => {
  await store.dispatch("brand/getBrands");
  await store.dispatch("category/getCategories");

  brandList.value = brands.value
  categoryList.value = categories.value

  brandList.value.forEach(brand => {
    brand.value = brand.id
    brand.label = brand.brand_name
  })
  categoryList.value.forEach(category => {
    category.value = category.id
    category.label = category.category_name
  })

  if(route.path === `/edit-product/${route.params.id}`) {
    await store.dispatch('product/getProductDetail', route.params.id)

    if(!product.value) {
      router.push('/products-admin')
    } else {
      Object.assign(userInput, product.value)
      if(userInput.image_url) imageTemp.value = true
    }
  }
});
</script>

<style scoped>
img.object-cover {
  object-fit: cover;
}
</style>
