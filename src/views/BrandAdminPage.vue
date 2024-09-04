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
              <tr v-if="BrandList.length === 0" class="text-gray text-sm">
                <td colspan="3" class="p-2 text-center">Empty</td>
              </tr>

              <tr
                v-else
                v-for="brand in BrandList"
                :key="brand.id"
                class="border-b border-none"
              >
                <td class="p-2">
                  <img
                    :src="brand.logo"
                    alt="Brand Logo"
                    class="w-10 h-10 object-cover"
                  />
                </td>
                <td class="p-2">{{ brand.brand_name }}</td>
                <td class="p-2 text-right">
                  <div class="flex gap-2 justify-end">
                    <router-link
                      :to="'/edit-brand/${brand.id}'  "
                      class="btn bg-primary rounded px-3 py-1 text-white"
                    >
                      Edit
                    </router-link>
                    <button
                      class="btn bg-danger rounded px-3 py-1 text-white"
                      @click="deleteBrand(brand.id)"
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
                class="bg-primary rounded-[10px] laptop:w-[130px] laptop:h-[40px] phone-s:w-[130px] phone-s:h-[40px] px-[25px]"
                @click="saveBrand"
              >
                <div
                  class="font-poppins laptop:text-[16px] text-white phone-s:text-[16px]"
                >
                  Save
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
import { ref, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import BaseInput from "@/components/ui/BaseInput.vue";

const store = useStore();

const userInput = reactive({
  brand: "",
});

const BrandList = computed(() => store.state.brand.brands);

onMounted(async () => {
  await store.dispatch("product/getBrands");
});

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

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

async function saveBrand() {
  if (userInput.brand.trim() !== "" && imageUrl.value) {
    try {
      await store.dispatch("product/createBrand", {
        name: userInput.brand.trim(),
        logo: imageUrl.value,
      });
      userInput.brand = "";
      imageUrl.value = null;
      alert("Brand saved successfully!");
    } catch (error) {
      alert("Failed to save brand.");
      console.error(error);
    }
  } else {
    alert("Brand name and logo cannot be empty!");
  }
}

async function deleteBrand(id) {
  try {
    await store.dispatch("product/deleteBrand", id);
    alert("Brand deleted successfully!");
  } catch (error) {
    alert("Failed to delete brand.");
    console.error(error);
  }
}
</script>
