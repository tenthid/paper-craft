<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] h-[100vh] justify-center items-center">
        <router-link to="/" class="tablet:hidden absolute top-0 left-0 ml-[20px] mt-[20px]">
            <img width="30px" height="auto"  src="/images/arrow-left-circle.svg" alt="back-button">
        </router-link>
        <div class="form-card w-[450px]">
            <p class="text-primary phone-s:text-[35px] tablet:text-[40px] font-maitree font-[600] text-center">Forgot Password</p>
            <p class="text-gray text-[14px] font-maitree font-[600] text-center">Enter your email, we'll sent you reset password link</p>
            <div class="form-card-body">
                <base-input v-model="userInput.email" label="Email" placeholder="Enter your email" :withSpan="false" identity="password"></base-input>
            </div>
            <div class="form-card-footer mt-[30px]">
                <div class="btn bg-primary rounded-[12px] text-white w-[100%]">:text</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { reactive } from 'vue';

    const text = 'haloooo'

    const userInput = reactive({
        email: ''
    })
</script>

<style lang="scss" scoped>

</style>