<template>
    <nav class="h-[65px] border-b-[0.5px] border-primary flex py-[10px] px-[50px] gap-[40px]">
        <img @click="router.push('/')" class=" w-[88px]" src="/images/logo-full.png" alt="logo">
        <div class="border-[1px] border-solid rounded-full flex justify-center border-[#E0E0E0] w-[100%] h-[40px] overflow-hidden">
            <div class="flex items-center py-[8px] px-[14px]">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
                <img width="100%" height="auto" src="/images/magnify-glass.svg" alt="logo">
            </div>
            <input type="text" class="flex w-[100%] py-[8px] pr-[16px] focus:outline-none" placeholder="Search for items">
        </div>
        <component :is="components[loginStatus? 'userAction' : 'authAction']"></component>
    </nav>
</template>

<script setup>
    import AuthAction from './AuthAction.vue';
    import UserAction from './UserAction.vue';
    import { useRouter } from 'vue-router';

    const loginStatus = true
    const router = useRouter()

    const components = {
        'authAction' : AuthAction,
        'userAction' : UserAction
    }
</script>

<style lang="scss" scoped>

</style>