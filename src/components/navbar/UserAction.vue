<template>
    <div class="flex gap-[26px]">
        <div class="flex gap-[10px]">
            <div class="relative flex items-center">
                <router-link to="">
                    <img width="28px" height="auto" src="/images/cart-icon.svg" alt="cart-icon">
                </router-link>
                <span v-if="true" class=" ml-[15px] px-[7px] py-[2px] bg-danger absolute top-0 text-[12px] rounded-full text-white">
                    1
                </span>
            </div>
            <div class="relative flex items-center">
                <router-link to="">
                    <img width="28px" height="auto" src="/images/love-icon.svg" alt="cart-icon">
                </router-link>
                <span v-if="true" class=" ml-[15px] px-[7px] py-[2px] bg-danger absolute top-0 text-[12px] rounded-full text-white">
                    1
                </span>
            </div>
        </div>
        <div class="flex gap-[12px]">
            <img width="40px" height="40px" class="rounded-full" src="" alt="profile-img">
            <img width="16px" height="auto" src="/images/dropdown-icon.svg" alt="dropdown-icon">
        </div>
        <div class="flex flex-col py-[4px] right-[50px] absolute top-[65px] w-[200px] bg-white rounded-[4px] shadow-lg">
            <router-link class="flex gap-[8px] p-[8px] w-[100%]" to="">
                <img src="/images/person-icon.svg" alt="person-icon">
                <p class="font-inter">Profile</p>
            </router-link>
            <router-link class="flex gap-[8px] p-[8px] w-[100%]" to="">
                <img src="/images/receipt-icon.svg" alt="person-icon">
                <p class="font-inter">Order</p>
            </router-link>
            <router-link class="flex gap-[8px] p-[8px] w-[100%]" to="">
                <img src="/images/exit-icon.svg" alt="person-icon">
                <p class="font-inter text-danger">Logout</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>