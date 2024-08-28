<template>
  <div
    class="bg-primary-background laptop:pt-[50px] w-full phone-s:px-3 laptop:container-page"
  >
    <div
      class="pt-[100px] w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
      <div
        class="items-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
      >
        Manage Categories
      </div>
    </div>

    <div
      class="w-full relative bg-primary-background overflow-hidden flex laptop:flex-row laptop:items-start justify-start py-2.5 px-5 box-border gap-5 text-left phone-s:flex-col phone-s:items-center text-sm font-regular"
    >
      <div
        class="w-full bg-white flex flex-col p-6 rounded-md text-black font-inter phone-s:w-full laptop:w-[400px]"
      >
        <div class="flex flex-col gap-6">
          <h2 class="font-medium text-lg phone-s:text-base">Category List</h2>

          <table
            class="w-full text-left border-collapse border-primary-background outline-none"
          >
            <thead>
              <tr
                class="text-gray text-xs font-medium border-b border-gray"
              >
                <th class="p-2 tablet:text-[15px]">Category Name</th>
                <th class="p-2 tablet:text-[15px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="CategoryList.length === 0" class="text-gray text-sm">
                <td colspan="2" class="p-2 text-center">Empty</td>
              </tr>

              <tr
                v-else
                v-for="category in CategoryList"
                :key="category.name"
                class="border-b border-none"
              >
                <td class="p-2">{{ category.name }}</td>
                <td class="p-2 text-right">
                  <div class="flex gap-2 justify-end">
                    <router-link
                      to="/edit-category"
                      class="btn bg-primary rounded px-3 py-1 text-white"
                    >
                      Edit
                    </router-link>
                    <button class="btn bg-danger rounded px-3 py-1 text-white">
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
        class="laptop:sticky laptop:w-[750px] bg-white flex flex-col p-6 box-border rounded-[5px] text-[20px] text-[#000] font-inter phone-s:w-full"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium phone-s:text-[15px] tablet:text-xl">
            Input Category
          </div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div
              class="w-full border-t-[1px] border-gray border-solid box-border h-px opacity-50"
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
                class="bg-primary rounded-[10px] laptop:w-[130px] laptop:h-[40px] phone-s:w-[130px] phone-s:h-[40px] px-[25px]"
                @click="saveCategory"
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
