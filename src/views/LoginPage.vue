<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] h-[100vh] justify-center items-center">
        <img class="phone-s:hidden laptop-l:block" width="692px" height="auto" src="/images/login-img.png" alt="img">
        <router-link to="/" class="tablet:hidden absolute top-0 left-0 ml-[20px] mt-[20px]">
            <img width="30px" height="auto"  src="/images/arrow-left-circle.svg" alt="back-button">
        </router-link>
        <form @submit.prevent="handleLogin()" class="form-card w-[450px]">
            <p class="text-primary phone-s:text-[35px] tablet:text-[40px] font-maitree font-[600] text-center">Welcome back</p>
            <p class="text-gray text-[14px] font-maitree font-[600] text-center">Enter your email and password to access your account</p>
            <div class="form-card-body">
                <base-input v-model="userInput.email" type="email" label="Email" placeholder="Enter your email" :withSpan="false" identity="email">
                    <p v-if="errors.email" v-for="error in errors.email" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>
                </base-input>
                <base-input v-model="userInput.password" type="password" label="Password" placeholder="Enter your password" :isPassword="true" :withSpan="false" identity="password">
                    <p v-if="errors.password" v-for="error in errors.password" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>
                </base-input>
            </div>
            <div class="form-card-footer">
                <div class="flex justify-between w-[100%]">
                    <div class="flex gap-[6px] items-center">
                        <input v-model="userInput.remember_me" type="checkbox" class="rounded-[3px] input-check">
                        <p class="font-inter text-[14px] font-[500]">Remember me</p>
                    </div>
                    <router-link to="/forgot-password" class="font-inter text-[14px]">Forgot passsword</router-link>
                </div>
                <button type="submit" class="btn bg-primary rounded-[12px] text-white w-[100%]">Login</button>
                <p class="font-inter">Don't have an account? <router-link to="/register" class="underline text-primary1 font-bold">Register</router-link></p>
            </div>
        </form>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { reactive, computed, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const store = useStore()
    const router = useRouter()


    const errors = computed(() => store.state.user.errors)
    const userInput = reactive({
        email: '',
        password: '',
        remember_me: false
    })

    const handleLogin = async () => {
        const isSuccess = await store.dispatch('user/login', userInput)
        if(isSuccess) {
            router.push('/')
            store.dispatch('ui/showNotif',{message: 'Successfuly login'})
        } else if(errors.value.message) {
            store.dispatch('ui/showNotif',{message: errors.value.message, topPos: 0, isError: true})
        }
    }

    onMounted(() => {
        store.commit('user/setErrorData', {})
    })
</script>

<style lang="scss" scoped>

</style>