<template>
  <div
    class="bg-primary-background w-full phone-l:container-page laptop:pl-[250px] h-[100vh]"
  >
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div
        class="align-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
      >
        Edit Brands
      </div>
    </div>
    <div
      class="w-full relative bg-primary-background overflow-hidden flex items-center justify-start py-2.5 px-5 box-border gap-5 text-left phone-s:flex-col tablet:items-center text-sm font-regular"
    >
      <div
        class="laptop:w-[750px] bg-white flex flex-col items-center justify-center p-6 box-border rounded-[5px] text-[20px] phone-s:w-full text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter w-full">
          <div class="font-medium phone-s:text-[15px] tablet:text-[20px]">
            Edit Brand
          </div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div class="w-full relative h-[18px] text-gray">
              <div class="font-medium phone-s:text-[12px] tablet:text-[15px]">
                Brand's Logo
              </div>
            </div>
            <div
              class="w-full relative border-gray border-t-[1px] border-solid box-border h-px opacity-50"
            ></div>

            <label
              class="relative mx-auto laptop:w-[650px] laptop:h-[204px] phone-s:w-full phone-s:h-auto flex flex-col items-center justify-center text-center text-base font-montserrat border border-dashed border-dark-blue p-4 cursor-pointer overflow-hidden"
              @dragover.prevent="handleDragOver"
              @drop="handleDrop"
            >
            <img
                v-if="imageTemp"
                :src="userInput.image_url? typeof imageTemp === 'string'? imageTemp : false || `https://tenth.run.place:90/storage/${userInput.image_url}` : '/images/logo-full.png'"
                alt="Uploaded Image"
                style="height: 100px; width: auto;"
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

            <div
              class="flex justify-end mt-[10px] phone-s:pl-0 tablet:pl-[350px]"
            >
              <button
                class="bg-danger rounded-[10px] phone-s:w-[100px] phone-s:h-[35px] laptop:w-[130px] laptop:h-[40px] mr-2"
              >
                <div
                  class="font-poppins text-[12px] laptop:text-[16px] text-white"
                >
                  Cancel
                </div>
              </button>
              <button
                class="bg-primary rounded-[10px] phone-s:w-[100px] phone-s:h-[35px] laptop:w-[130px] laptop:h-[40px]"
                @click="handleUpdate()"
              >
                <div
                  class="font-poppins text-[12px] laptop:text-[16px] text-white"
                >
                  Save Change
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
import { useRoute, useRouter } from "vue-router";
import BaseInput from "@/components/ui/BaseInput.vue";

const store = useStore();
const route = useRoute()
const router = useRouter()

const brand = computed(() => store.state.brand.brand);
const errors = computed(() => store.state.brand.errors)
const message = computed(() => store.state.brand.message)
const fileInput = ref()
const imageTemp = ref()
const userInput = reactive({
  brand_name: '',
  image_url: ''
});

const handleUpdate = async () => {
  let isSuccess = {status: true}
  if(fileInput.value) {
      isSuccess = await store.dispatch('brand/uploadBrandImage', fileInput.value)
      userInput.image_url = isSuccess.path
  }
  if(isSuccess.status) {
      const createSuccess = await store.dispatch('brand/updateBrand', userInput)
      if(createSuccess) {
          store.dispatch('ui/showNotif', {message: message.value})
          await store.dispatch('brand/getBrands')
          router.push('/brand-admin')
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
  await store.dispatch("brand/getBrand", route.params.id);

  if(Object.keys(brand.value).length !== 0) {
    Object.assign(userInput, brand.value)
    if(userInput.image_url) imageTemp.value = true
  } else {
    router.push('/brand-admin')
  }
});
</script>
