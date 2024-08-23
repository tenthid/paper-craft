<template>
  <div class="bg-primary-background pt-[50px] w-full container-page">
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div class="align-center font-maitree text-[35px] text-primary">
        Edit Categories
      </div>
    </div>
    <div
      class="w-full relative bg-primary-background overflow-hidden flex flex-col items-center justify-center py-[20px] px-5 box-border gap-5 text-left text-sm font-regular"
    >
      <div
        class="w-[750px] bg-white flex flex-col items-center justify-center p-6 box-border rounded-[5px] text-[20px] text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium">Edit Category</div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div class="w-[345px] relative h-[18px] text-gray">
              <div class="absolute left-[0px] font-medium">Category Name</div>
            </div>
            <div
              class="w-[700px] relative border-gray border-t-[1px] border-solid box-border h-px opacity-50"
            ></div>
            <div class="font-medium text-[#7A8089] font-poppins">
              <BaseInput
                v-model="userInput.category"
                label="Category Name"
                placeholder="Enter category name"
                identity="category"
              ></BaseInput>
            </div>
            <div class="flex justify-end mt-[10px] pl-[350px]">
              <button
                class="bg-danger rounded-[10px] w-full h-[40px] mr-2"
              >
                <div class="font-poppins text-[16px] text-white">Cancel</div>
              </button>
              <button
                class="bg-primary rounded-[10px] w-full h-[40px]"
                @click="saveCategory"
              >
                <div class="font-poppins text-[16px] text-white">Save Change</div>
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
