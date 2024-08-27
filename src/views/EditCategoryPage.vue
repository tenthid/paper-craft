<template>
  <div class="bg-primary-background pt-[50px] w-full container-page">
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div
        class="align-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
      >
        Edit Categories
      </div>
    </div>
    <div
      class="w-full relative bg-primary-background overflow-hidden flex laptop:flex-row items-start justify-start py-2.5 px-5 box-border gap-5 text-left phone-s:flex-col tablet:items-center text-sm font-regular"
    >
      <div
        class="laptop:w-[750px] bg-white flex flex-col items-center justify-center p-6 box-border rounded-[5px] text-[20px] phone-s:w-full text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter w-full">
          <div class="font-medium phone-s:text-[15px] tablet:text-[20px]">
            Edit Category
          </div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div class="w-full relative h-[18px] text-gray">
              <div class="font-medium phone-s:text-[12px] tablet:text-[15px]">
                Category Name
              </div>
            </div>
            <div
              class="w-full relative border-gray border-t-[1px] border-solid box-border h-px opacity-50"
            ></div>
            <div class="font-medium text-[#7A8089] font-poppins">
              <BaseInput
                v-model="userInput.category"
                label="Category Name"
                placeholder="Enter category name"
                identity="category"
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
                @click="saveCategory"
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
import { reactive } from "vue";

const userInput = reactive({
  category: "",
});

const CategoryList = reactive([]);

function saveCategory() {
  if (userInput.category.trim() !== "") {
    CategoryList.push({ name: userInput.category.trim() });
    userInput.category = "";
  } else {
    alert("Category name cannot be empty!");
  }
}
</script>
