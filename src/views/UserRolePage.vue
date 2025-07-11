<template>
    <div
      class="bg-primary-background phone-s:pt-[100px] laptop:pt-[100px] w-full phone-s:px-3 pb-[20px] laptop:pl-[250px] laptop:pr-[80px] min-h-screen max-h-fit"
    >
      <div
        class="w-full flex flex-col items-center gap-5 text-left text-sm font-body-base-bold mb-[30px]"
      >
        <div
          class="items-center font-maitree laptop:text-[35px] text-primary phone-s:text-[25px]"
        >
          Manage User Role
        </div>
      </div>

      <div class="mb-[30px]">
          <FIlterQueries />
      </div>
  
      <div
        class="w-full relative mb-[30px] bg-primary-background flex laptop:flex-row laptop:items-start justify-start py-2.5 px-5 box-border gap-5 text-left phone-s:flex-col phone-s:items-center text-sm font-regular"
      >
        <div
          class="w-full bg-white flex flex-col p-6 rounded-md text-black font-inter"
        >
          <div class="flex flex-col gap-6">
            <h2 class="font-medium text-lg phone-s:text-base">User List</h2>
  
            <table
              class="w-full text-left border-collapse border-primary-background outline-none"
            >
              <thead>
                <tr class="text-gray text-xs font-medium border-b border-gray">
                  <th class="p-2 tablet:text-[15px]">Id</th>
                  <th class="p-2 tablet:text-[15px]">User Name</th>
                  <th class="p-2 tablet:text-[15px] text-right">User Role</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="users.length === 0" class="text-gray text-sm">
                  <td colspan="3" class="p-2 text-center">Empty</td>
                </tr>
  
                <tr
                  v-else
                  v-for="user in users"
                  :key="user.id"
                  class="border-b border-none"
                >
                  <td class="p-2">
                    {{ user.id }}
                  </td>
                  <td class="p-2">{{ user.name }}</td>
                  <td class="p-2 text-right">
                    <div class="flex gap-2 justify-end">
                        <select @input="userInput.userId = user.id; userInput.roleId = Number($event.target.value);" class="border border-gray rounded py-[5px] px-[10px] w-[90px] font-normal h-[fit-content]">
                            <option class="text-gray" value="" disabled selected>Role</option>
                            <option :value="role.id" v-for="role in roles" :selected="user.roles[0].name === role.name" class="text-primary">
                                {{ role.name }}
                            </option>
                        </select>
                        <button
                            class="btn bg-primary rounded px-3 py-1 text-white"
                            :class="{'!bg-gray' : !(userInput.userId === user.id && !(user.roles[0].id === userInput.roleId))}"
                            @click="handleUpdateRole()"
                            :disabled="!(userInput.userId === user.id && !(user.roles[0].id === userInput.roleId))"
                        >
                            Save
                        </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
    <Pagination v-if="dataLoaded" :pagination-data="pagination" />
    </div>
</template>
  
<script setup>
    import Pagination from "@/components/product/Pagination.vue";
    import FIlterQueries from "@/components/product/FIlterQueries.vue";
    import { reactive, onMounted, computed, ref, watch } from "vue";
    import { useStore } from "vuex";
    import { useRoute } from "vue-router";

    const store = useStore()
    const route = useRoute()

    const userInput = reactive({
        roleId: '',
        userId: ''
    })
    const users = computed(() => store.state.user.users);
    const message = computed(() => store.state.user.message)
    const pagination = computed(() => store.state.user.pagination)
    const roles = computed(() => store.state.user.roles)
    const dataLoaded = ref(false)

    const handleUpdateRole = async () => {
        const isSuccess = await store.dispatch('user/updateUserRole', userInput)

        if(isSuccess) {
            await store.dispatch("user/getUsers", route.fullPath.split('?')[1])
            await store.dispatch('ui/showNotif', { message: message.value})
        } else {
            await store.dispatch('ui/showNotif', { message: message.value, isError: true})
        }
    }

    watch(route, async (oldValue, newValue) => {
        dataLoaded.value = false
        await store.dispatch("user/getUsers", route.fullPath.split('?')[1]);
        dataLoaded.value = true
    })

    
    onMounted(async () => {
        await store.dispatch("user/getUsers", route.fullPath.split('?')[1]);
        await store.dispatch("user/getRoles");
        dataLoaded.value = true
    });
</script>
  