<template>
    <nav class="h-[65px]">
        <div class="flex py-[10px] px-[50px] gap-[40px]">
            <!-- <router-link to="/">
            </router-link> -->
            <img @click="router.push('/')" class=" w-[88px]" src="/images/logo-full.png" alt="logo">
            <div class="border-[1px] border-solid rounded-full flex justify-center overflow-hidden border-[#E0E0E0] gap-[16px] py-[10px] px-[16px] w-[100%] h-[40px]">
                <img src="/images/magnify-glass.svg" alt="mag-glass">
                <input type="text" class="w-[100%] focus:outline-none" placeholder="Search for items">
            </div>
            <component :is="components[loginStatus? 'userAction' : 'authAction']"></component>
        </div>
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