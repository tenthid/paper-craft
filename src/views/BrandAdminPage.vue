<template>
  <div class="bg-primary-background mt-[50px] w-full container-page">
    <div
      class="mt-[50px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div class="align-center font-maitree text-[35px] text-primary">
        Manage Brands
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
              <div class="absolute left-[0px] font-medium">Brand Name</div>
              <div class="absolute left-[250px] font-medium">Edit</div>
            </div>
            <div
              class="w-[350px] relative border-gray border-t-[1px] border-solid box-border h-px"
            ></div>

            <div v-if="BrandList.length === 0" class="w-[507px] relative h-6">
              <div
                class="absolute left-[0px] font-inter text-[15px] w-[250px] h-[27px]"
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
                  <img src="/images/trash.svg" alt="" />
                </button>
              </div>
            </div>

            <div
              v-else
              v-for="brand in BrandList"
              :key="brand.name"
              class="w-[507px] relative h-6"
            >
              <div
                class="absolute left-[0px] font-inter text-[15px] w-[250px] h-[27px]"
              >
                {{ brand.name }}
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
                  <img src="/images/trash.svg" alt="" />
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
            <div class="w-[345px] relative h-[18px] text-gray">
              <div class="absolute left-[0px] font-medium">Brand Name</div>
            </div>
            <div
              class="w-[700px] relative border-gray border-t-[1px] border-solid box-border h-px opacity-50"
            ></div>
            <div>
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
import { reactive } from "vue";

const userInput = reactive({
  brand: "",
});

const BrandList = reactive([]);

function saveBrand() {
  if (userInput.brand.trim() !== "") {
    BrandList.push({ name: userInput.brand.trim() });
    userInput.brand = "";
  } else {
    alert("Brand name cannot be empty!");
  }
}
</script>
