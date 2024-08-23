<template>
  <div class="bg-primary-background pt-[50px] w-full container-page">
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div class="align-center font-maitree text-[35px] text-primary">
        Create Brand
      </div>
    </div>
    <div
      class="w-full relative bg-primary-background overflow-hidden flex flex-row items-start justify-start py-2.5 px-5 box-border gap-5 text-left text-sm font-regular"
    >
      <div
        class="w-[400px] bg-white flex flex-col p-6 box-border rounded-[5px] text-[20px] text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium">Brand List</div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div class="w-[345px] relative h-[18px] text-gray">
              <div class="absolute left-[0px]">Logo</div>
              <div class="absolute left-[100px] font-medium">Brand Name</div>
              <div class="absolute left-[250px] font-medium">Edit</div>
            </div>
            <div
              class="w-[350px] relative border-gray border-t-[1px] border-solid box-border h-px"
            ></div>

            <div v-if="BrandList.length === 0" class="w-[507px] relative h-6 mb-3">
              <img src="" alt="logo" class="bg-primary-background w-[50px] h-[50px] absolute left-[0px]"></img>
              <div
                class="absolute left-[100px] font-inter text-[15px] w-[250px] h-[27px]"
              >
                Empty
              </div>
              <div class="absolute left-[250px] flex flex-row">
                <router-link
                  to="/edit-brand"
                  class="btn bg-[#9199A3] rounded-[5px] w-[50px] h-[27px] text-white cursor-not-allowed"
                >
                  Edit
                </router-link>
                <button
                  class="btn bg-[#fca6a0] rounded-[5px] w-[20px] h-[27px] ml-[6px] cursor-not-allowed"
                >
                  <img src="/images/trash.svg" alt="Trash Icon" />
                </button>
              </div>
            </div>

            <div
              v-else
              v-for="brand in BrandList"
              :key="brand.name"
              class="w-[507px] relative h-[27px]"
            >
              <div class="absolute left-[0px] flex items-center">
                <img
                  :src="brand.logo"
                  alt="Brand Logo"
                  class="w-[40px] h-[40px] mr-[10px] object-cover" 
                />
                <span class="font-inter text-[15px]">{{ brand.name }}</span>
              </div>
              <div class="absolute left-[250px] flex flex-row">
                <router-link
                  to="/edit-brand"
                  class="btn bg-primary rounded-[5px] w-[50px] h-[27px] text-white"
                >
                  Edit
                </router-link>
                <div
                  class="btn bg-danger rounded-[5px] w-[20px] h-[27px] ml-[6px]"
                >
                  <img src="/images/trash.svg" alt="Delete Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-[750px] bg-white flex flex-col p-6 box-border rounded-[5px] text-[20px] text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium">Input Brand</div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div
              class="w-[700px] relative border-gray border-t-[1px] border-solid box-border h-px opacity-50"
            ></div>

            <label
              class="relative mx-auto w-[650px] h-[204px] flex flex-col items-center justify-center text-center text-base font-montserrat border border-dashed border-dark-blue p-4 cursor-pointer overflow-hidden"
              @dragover.prevent
              @drop.prevent
            >
              <img
                v-if="imageUrl"
                :src="imageUrl"
                alt="Uploaded Image"
                :style="{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                }"
                class="object-cover"
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

            <div class="font-medium text-[#7A8089] font-poppins">
              <BaseInput
                v-model="userInput.brand"
                label="Brand Name"
                placeholder="Enter brand name"
                identity="brand"
              ></BaseInput>
            </div>

            <div class="flex justify-end mt-[10px]">
              <button
                class="bg-primary rounded-[10px] w-[130px] h-[40px] px-[25px]"
                @click="saveBrand"
              >
                <div class="font-poppins text-[16px] text-white">Save</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "@/components/ui/BaseInput.vue";
import { reactive, ref, computed } from "vue";

const userInput = reactive({
  brand: "",
});

const BrandList = reactive([]);

const imageUrl = ref(null);
const imageWidth = ref(100);
const imageHeight = computed(() => imageWidth.value);

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

function saveBrand() {
  if (userInput.brand.trim() !== "" && imageUrl.value) {
    BrandList.push({
      name: userInput.brand.trim(),
      logo: imageUrl.value,
    });
    userInput.brand = "";
    imageUrl.value = null;
  } else {
    alert("Brand name and logo cannot be empty!");
  }
}
</script>
