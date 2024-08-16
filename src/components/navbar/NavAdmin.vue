<template>
    <nav class="w-[100%] bg-white fixed h-[65px] border-b-[0.5px] border-primary flex py-[10px] px-[20px] gap-[40px] z-[99999]">
        <img @click="router.push('/')" class=" w-[88px]" src="/images/logo-full.png" alt="logo">
        <div class="border-[1px] border-solid rounded-full border-[#E0E0E0] w-[75%] h-[40px] input-group">
            <div class="group-span">
                <img width="100%" height="auto" src="/images/magnify-glass.svg" alt="logo">
            </div>
            <input type="text" class="group-controll input-no-focus" placeholder="Search for items">
        </div>
        <div class="flex flex-row mx-[10px]">
            <div class="text-primary font-medium font-inter text-[16px] pr-[20px] my-[10px]">Admin Name</div>
            <img src="" alt="pp" class="bg-primary-background w-[40px] h-[40px] rounded-[50px] ">
        </div>
    </nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const loginStatus = false
    const router = useRouter()

    
</script>

<style lang="scss" scoped>

</style>