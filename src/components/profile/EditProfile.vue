<template>
    <div class="profile-card-body">
        <div class="rounded-full self-center overflow-hidden flex items-center justify-center flex-col bg-primary relative border-primary-background border-[4px]">
            <img @click="insertFile()" class="" width="160px" height="160px" src="" alt="profileImage">
            <input ref="fileInput" type="file" class="hidden">
            <i class="fa-solid fa-camera absolute bottom-[-3px] text-primary-background"></i>
        </div>
        <BaseInput label="Username" placeholder="Enter your name" identity="username" :with-span="false" v-model="userInput.username" />
        <BaseInput label="Email" placeholder="Enter your email" identity="email" :with-span="false" v-model="userInput.email" />
        <BaseInput type="number" label="Telp" placeholder="Enter your number" identity="phoneNumber" :with-span="false" v-model="userInput.telp" />
        <BaseInput label="Address" placeholder="Enter your address" identity="address" :with-span="false" v-model="userInput.address" />
    </div>
    <div class="profile-card-footer">
        <button class="btn bg-primary text-white text-[20px] rounded-[10px] !px-[20px]">
            Update Profile
        </button>
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import BaseInput from '../ui/BaseInput.vue';

    const fileInput = ref(null)
    const userInput = reactive({
        username: '',
        email: '',
        telp: '',
        address: '',
    })

    const insertFile = () => {
        fileInput.value.click()
    } 
</script>

<style lang="scss" scoped>

</style>