<template>
  <div
    class="bg-primary-background phone-s:pt-[100px] laptop:pt-[100px] w-full phone-s:px-3 h-[100vh] laptop:pl-[250px] laptop:pr-[80px]"
  >
    <div
      class="w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div
        class="items-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
      >
        Manage Brands
      </div>
    </div>

    <div
      class="w-full relative bg-primary-background flex laptop:flex-row laptop:items-start justify-start py-2.5 px-5 box-border gap-5 text-left phone-s:flex-col phone-s:items-center text-sm font-regular"
    >
      <div
        class="w-full bg-white flex flex-col p-6 rounded-md text-black font-inter phone-s:w-full laptop:w-[600px]"
      >
        <div class="flex flex-col gap-6">
          <h2 class="font-medium text-lg phone-s:text-base">Brand List</h2>

          <table
            class="w-full text-left border-collapse border-primary-background outline-none"
          >
            <thead>
              <tr class="text-gray text-xs font-medium border-b border-gray">
                <th class="p-2 tablet:text-[15px]">Logo</th>
                <th class="p-2 tablet:text-[15px]">Brand Name</th>
                <th class="p-2 tablet:text-[15px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="brandList.length === 0" class="text-gray text-sm">
                <td colspan="3" class="p-2 text-center">Empty</td>
              </tr>

              <tr
                v-else
                v-for="brand in brandList"
                :key="brand.id"
                class="border-b border-none"
              >
                <td class="p-2">
                  <img
                    :src="brand.image_url? `https://tenth.run.place:90/storage/${brand.image_url}` : '/images/logo.svg'"
                    alt="Brand Logo"
                    class="w-10 h-10 object-cover"
                  />
                </td>
                <td class="p-2">{{ brand.brand_name }}</td>
                <td class="p-2 text-right">
                  <div class="flex gap-2 justify-end">
                    <router-link
                      :to="`/edit-brand/${brand.id}`"
                      class="btn bg-primary rounded px-3 py-1 text-white"
                    >
                      Edit
                    </router-link>
                    <button
                      class="btn bg-danger rounded px-3 py-1 text-white"
                      @click="handleDelete(brand.id)"
                    >
                      <img src="/images/trash.svg" alt="Delete Icon" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="laptop:w-[750px] bg-white flex flex-col p-6 box-border rounded-[5px] text-[20px] text-[#000] font-inter phone-s:w-full"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium phone-s:text-[15px] tablet:text-xl">
            Input Brand
          </div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div
              class="w-full border-t-[1px] border-gray border-solid box-border h-px opacity-50"
            ></div>

            <label
              class="relative mx-auto w-full h-[204px] flex flex-col items-center justify-center text-center text-base font-montserrat border border-dashed border-dark-blue p-4 cursor-pointer overflow-hidden"
              @dragover.prevent="handleDragOver"
              @drop="handleDrop"
            >
              <img
                v-if="imageTemp"
                :src="imageTemp"
                alt="Uploaded Image"
                style="width: auto; height: 100px;"
                class="object-cover"
              />
              <img
                v-else
                alt="Upload Icon"
                src="/images/upload-icon.svg"
                class="w-18 h-15 z-10"
              />
              <span v-if="!imageTemp" class="font-semibold z-10">
                Drag & drop image or <span class="underline">Browse</span>
              </span>
              <p v-if="!imageTemp" class="text-xs text-gray leading-4 z-10">
                Supported formats: JPEG, PNG
              </p>
              <input
                type="file"
                accept="image/jpeg, image/png"
                @input="renderImage"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>

            <div class="font-medium text-[#7A8089] font-poppins">
              <BaseInput
                v-model="userInput.brand_name"
                label="Brand Name"
                placeholder="Enter brand name"
                identity="brand"
              >
              <p v-if="errors.brand_name" v-for="error in errors.brand_name" class="text-danger font-inter text-[12px]">
                {{ error }}
              </p>
              </BaseInput>
            </div>

            <div class="flex justify-end mt-[10px]">
              <button
                class="bg-primary rounded-[10px] laptop:w-[130px] laptop:h-[40px] phone-s:w-[130px] phone-s:h-[40px] px-[25px]"
                @click="handleCreate()"
              >
                <div
                  class="font-poppins laptop:text-[16px] text-white phone-s:text-[16px]"
                >
                  Create
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/ui/BaseInput.vue";

const store = useStore();

const brandList = computed(() => store.state.brand.brands);
const errors = computed(() => store.state.brand.errors)
const message = computed(() => store.state.brand.message)
const fileInput = ref()
const imageTemp = ref()
const userInput = reactive({
  brand_name: '',
  image_url: ''
});


const handleDelete = async (id) => {
  const confimation = confirm('Menghapus brand ini juga akan menghapus semua product dengan brand terkait')
  if(confimation) {
    const isSuccess = await store.dispatch('brand/deleteBrand', id)
    
    if(isSuccess) {
      await store.dispatch('ui/showNotif', { message: message.value})
      await store.dispatch('brand/getBrands')
    } else {
      await store.dispatch('ui/showNotif', { message: message.value, isError: true})
    }
  }
}

const handleCreate = async () => {
  let isSuccess = {status: true}
  if(fileInput.value) {
      isSuccess = await store.dispatch('brand/uploadBrandImage', fileInput.value)
      userInput.image_url = isSuccess.path
  }
  if(isSuccess.status) {
      const createSuccess = await store.dispatch('brand/createBrand', userInput)
      if(createSuccess) {
          store.dispatch('ui/showNotif', {message: message.value})
          await store.dispatch('brand/getBrands')
          userInput.brand_name = ''
          userInput.image_url = ''
          fileInput.value = null
          imageTemp.value = null
      } else if(Object.keys(errors.value).length === 0) {
          store.dispatch('ui/showNotif', {message: message.value, isError: true})
      }
  } else {
    store.dispatch('ui/showNotif', {message: message.value, isError: true})
  }
}

const renderImage = (e) => {
  fileInput.value = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(fileInput.value);

  reader.addEventListener ("load", () => {
    imageTemp.value = reader.result;
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

onMounted(async () => {
  await store.dispatch("brand/getBrands");
});
</script>
