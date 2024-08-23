<template>
    <div class="flex gap-[26px]">
        <div class="flex gap-[10px]">
            <div class="relative flex items-center">
                <router-link to="/cart">
                    <img width="28px" height="auto" src="/images/cart-icon.svg" alt="cart-icon">
                </router-link>
                <span v-if="true" class=" ml-[15px] px-[7px] py-[2px] bg-danger absolute top-0 text-[12px] rounded-full text-white">
                    {{ userCart }}
                </span>
            </div>
            <div class="relative flex items-center">
                <router-link to="/favorite">
                    <img width="28px" height="auto" src="/images/love-icon.svg" alt="cart-icon">
                </router-link>
                <span v-if="true" class=" ml-[15px] px-[7px] py-[2px] bg-danger absolute top-0 text-[12px] rounded-full text-white">
                    {{ userLike }}
                </span>
            </div>
        </div>
        <div ref="dropdown" class="flex gap-[12px] cursor-pointer" @click="dropdownToggler()">
            <img width="40px" height="40px" class="rounded-full" src="" alt="profile-img">
            <img width="16px" height="auto" src="/images/dropdown-icon.svg" alt="dropdown-icon">
            <div v-if="toggleDropdown" class="flex flex-col py-[4px] right-[50px] absolute top-[65px] w-[200px] bg-white rounded-[4px] shadow-lg">
                <router-link class="flex items-center gap-[8px] p-[8px] w-[100%]" to="/profile-details">
                    <img src="/images/person-icon.svg" alt="person-icon">
                    <p class="font-inter">Profile</p>
                </router-link>
                <router-link class="flex items-center gap-[8px] p-[8px] w-[100%]" to="/transaction-history">
                    <img src="/images/receipt-icon.svg" alt="person-icon">
                    <p class="font-inter">Order</p>
                </router-link>
                <button class="flex items-center gap-[8px] p-[8px] w-[100%]" to="/logout">
                    <img src="/images/exit-icon.svg" alt="person-icon">
                    <p class="font-inter text-danger">Logout</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const toggleDropdown = ref(false)
    const dropdown = ref(null)
    const userLike = ref(1)
    const userCart = ref(9)
    const link = '/profile'

    const dropdownTogglerOutside = (event) => {
        if(toggleDropdown.value && !dropdown.value.contains(event.target)) {
            toggleDropdown.value = false
        }
    }

    const dropdownToggler = () => {
        toggleDropdown.value = !toggleDropdown.value
    }

    onMounted(() => {
        document.addEventListener('click', dropdownTogglerOutside)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', dropdownTogglerOutside)
    })
</script>

<style lang="scss" scoped>

</style>