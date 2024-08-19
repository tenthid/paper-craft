<template>
    <div class="profile-card-body">
        <BaseInput label="Old Password" placeholder="Enter your old password" identity="oldPassword" :with-span="false" v-model="userInput.oldPassword" />
        <BaseInput type="password" label="New Password" placeholder="Enter your new password" identity="newPassword" :with-span="false" v-model="userInput.newPassword" />
        <BaseInput type="password" label="New Password Confirmation" placeholder="Enter your new password confirmation" identity="newPasswordConfirmation" :with-span="false" v-model="userInput.newPasswordConfirmation" />
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
        oldPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    })

    const insertFile = () => {
        fileInput.value.click()
    } 
</script>

<style lang="scss" scoped>

</style>