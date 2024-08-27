<template>
  <div class="bg-primary-background pt-[50px] w-full container-page">
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div
        class="align-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
      >
        Manage Categories
      </div>
    </div>

    <div
      class="w-full relative bg-primary-background overflow-hidden flex laptop:flex-row items-start justify-start py-2.5 px-5 box-border gap-5 text-left phone-s:flex-col tablet:items-center text-sm font-regular"
    >
      <div
        class="laptop-l:w-[400px] bg-white flex flex-col p-6 box-border rounded-[5px] text-[20px] phone-s:w-full text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium phone-s:text-[15px] tablet:text-xl">
            Category List
          </div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div
              class="laptop-l:w-[345px] phone-s:w-full phone-s:flex flex-row justify-end items-end text-gray text-[12px]"
            >
              <div class="font-medium tablet:text-[15px]">Category Name</div>
              <div class="ml-auto font-medium tablet:text-[15px]">Edit</div>
            </div>
            <div
              class="w-[350px] relative border-gray border-t-[1px] border-solid box-border h-px phone-s:w-full"
            ></div>

            <div
              v-if="CategoryList.length === 0"
              class="w-full relative h-6 phone-s:flex flex-row justify-between items-center"
            >
              <div
                class="font-inter laptop:text-[15px] w-full h-[27px] phone-s:text-[12px]"
              >
                Empty
              </div>
              <div class="flex flex-row items-center gap-2.5">
                <router-link
                  to="/edit-category"
                  class="btn bg-[#9199A3] rounded-[5px] laptop:w-[50px] laptop:h-[27px] laptop:text-[15px] text-white cursor-not-allowed phone-s:w-[30px] phone-s:h-[15px] phone-s:text-[10px]"
                >
                  Edit
                </router-link>
                <button
                  class="btn bg-[#fca6a0] rounded-[5px] laptop:w-[27px] laptop:h-[27px] text-white cursor-not-allowed phone-s:w-[20px] phone-s:h-[20px]"
                >
                  <img src="/images/trash.svg" alt="" />
                </button>
              </div>
            </div>

            <div
              v-else
              v-for="category in CategoryList"
              :key="category.name"
              class="w-full relative h-6 phone-s:flex flex-row justify-between items-center"
            >
              <div
                class="font-inter laptop:text-[15px] w-full h-[27px] phone-s:text-[12px]"
              >
                {{ category.name }}
              </div>
              <div class="flex flex-row items-center gap-2.5">
                <router-link
                  to="edit-category"
                  class="btn bg-primary rounded-[5px] laptop:w-[50px] laptop:h-[27px] text-white phone-s:w-[50px] phone-s:h-[27px]"
                >
                  Edit
                </router-link>
                <button
                  class="btn bg-danger rounded-[5px] laptop:w-[27px] laptop:h-[27px] text-white phone-s:w-[20px] phone-s:h-[20px]"
                >
                  <img src="/images/trash.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full bg-white flex flex-col p-6 box-border rounded-[5px] text-[20px] phone-s:w-full text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium">Input Category</div>
          <div class="flex flex-col gap-[15px] text-sm">
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
            <div class="flex justify-end mt-[10px]">
              <button
                class="bg-primary rounded-[10px] w-[130px] h-[40px] px-[25px]"
                @click="saveCategory"
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
