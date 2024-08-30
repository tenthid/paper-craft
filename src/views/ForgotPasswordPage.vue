<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] h-[100vh] justify-center items-center">
        <router-link to="/" class="tablet:hidden absolute top-0 left-0 ml-[20px] mt-[20px]">
            <img width="30px" height="auto"  src="/images/arrow-left-circle.svg" alt="back-button">
        </router-link>
        <form @submit.prevent="handleReqToken()" class="form-card w-[450px]">
            <p class="text-primary phone-s:text-[35px] tablet:text-[40px] font-maitree font-[600] text-center">Forgot Password</p>
            <p class="text-gray text-[14px] font-maitree font-[600] text-center">Enter your email, we'll sent you reset password link</p>
            <div class="form-card-body">
                <base-input v-model="userInput.email" type="email" label="Email" placeholder="Enter your email" :withSpan="false" identity="email">
                <p v-if="errors.email" v-for="error in errors.email" class="text-danger font-inter text-[12px]">
                    {{ error }}
                </p>
                </base-input>
            </div>
            <div class="form-card-footer mt-[30px]">
                <button type="submit" class="btn bg-primary rounded-[12px] text-white w-[100%]">Send</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { reactive, computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore()
    const router = useRouter()

    const message = computed(() => store.state.user.message)
    const errors = computed(() => store.state.user.errors)

    const userInput = reactive({
        email: ''
    })

    const handleReqToken = async () => {
        const isSuccess = await store.dispatch('user/getPassResetToken', userInput)
        
        if(isSuccess) {
            store.dispatch('ui/showNotif', { message: message.value})
            router.push('/')
        } else if (Object.keys(errors.value).length === 0) {
            store.dispatch('ui/showNotif', { message: message.value, isError: true, topPos: 0})
        }
    }
</script>

<style lang="scss" scoped>

</style>