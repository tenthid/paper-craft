<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] h-[100vh] justify-center items-center">
        <router-link to="/" class="tablet:hidden absolute top-0 left-0 ml-[20px] mt-[20px]">
            <img width="30px" height="auto"  src="/images/arrow-left-circle.svg" alt="back-button">
        </router-link>
        <form @submit.prevent="handleResetPassword()" class="form-card w-[450px]">
            <p class="text-primary phone-s:text-[35px] tablet:text-[40px] font-maitree font-[600] text-center">Reset Password</p>
            <p class="text-gray text-[14px] font-maitree font-[600] text-center">Enter your new password to reset your old password</p>
            <div class="form-card-body">
                <base-input v-model="userInput.password" type="password" label="New Password" placeholder="Enter your new password" :isPassword="true" :withSpan="false" identity="newPassword">
                    <p v-if="errors.password" v-for="error in errors.password" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>
                </base-input>
                <base-input v-model="userInput.password_confirmation" type="password" label="New Password Confirmation" placeholder="Enter your new password confirmation" :isPassword="true" :withSpan="false" identity="newPasswordConfirmation"></base-input>
            </div>
            <button type="submit" class="form-card-footer mt-[30px]">
                <div class="btn bg-primary rounded-[12px] text-white w-[100%]">Reset</div>
            </button>
        </form>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { reactive, onMounted, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const userInput = reactive({
        email: '',
        password: '',
        password_confirmation: '',
        token: '',
    })
    const errors = computed(() => store.state.user.errors)
    const message = computed(() => store.state.user.message)

    const handleResetPassword = async () => {
        const isSuccess = await store.dispatch('user/resetPassword', userInput)
        if(isSuccess) {
            store.dispatch('ui/showNotif', { message: message.value, topPos: 0})
            router.push('/login')
        } else if (Object.keys(errors.value).length === 0) {
            store.dispatch('ui/showNotif', { message: message.value, isError: true, topPos: 0})
        }
    }

    onMounted(() => {
        store.commit('user/setErrorData', {})
        if(route.query.token && route.query.email) {
            userInput.token = route.query.token
            userInput.email = route.query.email
        } else {
            router.push('/')
        }
    })
</script>

<style lang="scss" scoped>

</style>