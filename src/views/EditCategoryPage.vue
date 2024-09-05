<template>
  <div class="bg-primary-background w-full phone-l:container-page laptop:pl-[250px] h-[100vh]">
    <div
      class="pt-[100px] w-full flex flex-col items-center justify-center gap-5 text-left text-sm font-body-base-bold mb-[15px]"
    >
        <div
        class="align-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
      >
        Edit Categories
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
            Edit Category
          </div>
          <div class="flex flex-col gap-[15px] text-sm">
            <!-- <div class="w-full relative h-[18px] text-gray">
              <div class="font-medium phone-s:text-[12px] tablet:text-[15px]">
                Category Name
              </div>
            </div>
            <div
              class="w-full relative border-gray border-t-[1px] border-solid box-border h-px opacity-50"
            ></div> -->
            <div class="font-medium text-[#7A8089] font-poppins">
              <BaseInput
                v-model="userInput.category_name"
                label="Category Name"
                placeholder="Enter category name"
                identity="category"
                :with-span="false"
              >
                <p v-if="errors.category_name" v-for="error in errors.category_name" class="text-danger font-inter text-[12px]">
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
                <router-link
                  to="/category-admin"
                  class="font-poppins text-[12px] laptop:text-[16px] text-white"
                >
                  Cancel
                </router-link>
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
import BaseInput from "@/components/ui/BaseInput.vue";
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = useStore()
const route = useRoute()
const router = useRouter()

const category = computed(() => store.state.category.category)
const errors = computed(() => store.state.category.errors)
const message = computed(() => store.state.category.message)
const userInput = reactive({
  category_name: "",
});

const handleUpdate = async () => {
  const isSuccess = await store.dispatch('category/updateCategory', userInput)

  if(isSuccess) {
    await store.dispatch('ui/showNotif', { message: message.value})
    router.push('/category-admin')
  } else if (Object.keys(errors.value).length() === 0) {
    await store.dispatch('ui/showNotif', { message: message.value, isError: true})
  }
}

onMounted(async() => {
  await store.dispatch('category/getCategory', route.params.id)

  if(Object.keys(category.value).length === 0) {
    router.push('/category-admin')
  } else {
    Object.assign(userInput, category.value)
  }
})
</script>
