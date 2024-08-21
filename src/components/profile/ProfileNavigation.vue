<template>
    <div class="bg-white p-[30px] flex flex-col gap-[24px] rounded-[11px] w-[480px]  h-[fit-content]">
        <div class="flex gap-[18px] items-center">
            <img class="rounded-full bg-gray border-[3px] border-white" width="100px" height="100px" src="" alt="profile-img">
            <div class="flex flex-col justify-between">
                <p class="font-inter font-bold text-[20px]">Username</p>
                <p class="font-inter text-gray text[18px]">user@email.cum</p>
            </div>
        </div>
        <hr class="border-gray">
            <div class="flex flex-col">
            <router-link :to="item.path" class="p-[16px] text-[18px] font-[500] text-gray" v-for="item in [
                {text:'Profile Details', path: '/profile-details'},
                {text:'Change Password', path: '/change-password'},
                    {text:'Transaction History', path: '/transaction-history'},
                ]" active-class="!text-black">
                {{ item.text }}
            </router-link>
        </div>
        <hr class="border-gray">
        <button class="btn bg-danger text-[18px] text-white rounded-[10px]">
            Logout
        </button>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute()
</script>

<style lang="scss" scoped>

</style>