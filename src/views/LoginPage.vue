<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] h-[100vh] justify-center items-center">
        <img class="phone-s:hidden laptop-l:block" width="692px" height="auto" src="/images/login-img.png" alt="img">
        <div class="form-card w-[450px]">
            <p class="text-primary text-[40px] font-maitree font-[600]">Welcome back</p>
            <p class="text-gray text-[14px] font-maitree font-[600]">Enter your email and password to access your account</p>
            <div class="form-card-body">
                <base-input v-model="userInput.email" label="Email" placeholder="Enter your email" :withSpan="false" identity="password"></base-input>
                <base-input v-model="userInput.password" type="password" label="Password" placeholder="Enter your password" :isPassword="true" :withSpan="false" identity="password"></base-input>
            </div>
            <div class="form-card-footer">
                <div class="flex justify-between w-[100%]">
                    <div class="flex gap-[6px] items-center">
                        <input type="checkbox" class="rounded-[3px] input-check">
                        <p class="font-inter text-[14px] font-[500]">Remember me</p>
                    </div>
                    <router-link class="font-inter text-[14px]">Forgot passsword</router-link>
                </div>
                <div class="btn bg-primary rounded-[12px] text-white w-[100%]">Login</div>
                <p class="font-inter">Don't have an account? <router-link to="/register" class="underline text-primary1 font-bold">Register</router-link></p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { reactive } from 'vue';

    const userInput = reactive({
        email: '',
        password: ''
    })
</script>

<style lang="scss" scoped>

</style>