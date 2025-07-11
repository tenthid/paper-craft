<template>
    <div class="profile-card-body">
        <BaseInput type="password" label="Old Password" placeholder="Enter your old password" identity="oldPassword" :with-span="false" v-model="userInput.password">
            <p v-if="errors.password" v-for="error in errors.password" class="text-danger font-inter text-[12px]">
                {{ error }}
            </p>
        </BaseInput>
        <BaseInput type="password" label="New Password" placeholder="Enter your new password" identity="newPassword" :with-span="false" v-model="userInput.new_password">
            <p v-if="errors.new_password" v-for="error in errors.new_password" class="text-danger font-inter text-[12px]">
                {{ error }}
            </p>
        </BaseInput>
        <BaseInput type="password" label="New Password Confirmation" placeholder="Enter your new password confirmation" identity="newPasswordConfirmation" :with-span="false" v-model="userInput.new_password_confirmation">
        
        </BaseInput>
    </div>
    <div class="profile-card-footer">
        <button @click="handleChangePass()" class="btn bg-primary text-white text-[20px] rounded-[10px] !px-[20px]">
            Update Profile
        </button>
    </div>
</template>

<script setup>
    import { computed, reactive, ref } from 'vue';
    import BaseInput from '../ui/BaseInput.vue';
    import { useStore } from 'vuex';

    const store = useStore()

    const message = computed(() => store.state.user.message)
    const errors = computed(() => store.state.user.errors)
    const userInput = reactive({
        password: '',
        new_password: '',
        new_password_confirmation: '',
    })

    const handleChangePass = async () => {
        const isSuccess = await store.dispatch('user/changePassword', userInput)

        console.log(isSuccess)

        if(isSuccess) {
            store.dispatch('ui/showNotif', { message: message.value })
            userInput.password = ''
            userInput.new_password = ''
            userInput.new_password_confirmation = ''
        } else if(Object.keys(errors.value).length === 0) {
            store.dispatch('ui/showNotif', { message: message.value, isError: true })
        }
    }
</script>

<style lang="scss" scoped>

</style>