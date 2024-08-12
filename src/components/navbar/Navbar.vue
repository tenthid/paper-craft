<template>
    <nav class="h-[65px]">
        <div class="flex py-[10px] px-[50px] gap-[40px]">
            <router-link to="/">
                <img src="/images/logo-full.png" alt="logo">
            </router-link>
            <div class="border-[1px] border-solid rounded-full flex justify-center overflow-hidden border-[#E0E0E0] gap-[8px] py-[10px] px-[16px]">
                <img src="/images/magnify-glass.svg" alt="mag-glass">
                <input type="text" class="focus:outline-none" placeholder="Search for items">
            </div>
            <component :is="components[loginStatus? 'userAction' : 'authAction']"></component>
        </div>
    </nav>
</template>

<script setup>
    import AuthAction from './AuthAction.vue';
    import UserAction from './UserAction.vue';

    const loginStatus = false

    const components = {
        'authAction' : AuthAction,
        'userAction' : UserAction
    }
</script>

<style lang="scss" scoped>

</style>