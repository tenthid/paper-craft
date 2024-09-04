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
                @click="saveBrand"
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
import BaseInput from "@/components/ui/BaseInput.vue";
import { reactive, ref, computed } from "vue";

const userInput = reactive({
  brand: "",
});

const imageUrl = ref(null);
const imageWidth = ref(100);
const imageHeight = computed(() => imageWidth.value);

function onFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

const BrandList = reactive([]);

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
