<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] phone-s:py-[50px] phone-l:py-[0px] phone-l:h-[100vh] justify-center items-center">
        <img class="phone-s:hidden laptop-l:block" width="692px" height="auto" src="/images/register-img.png" alt="img">
        <div class="form-card w-[450px]">
            <p class="text-primary text-[40px] font-maitree font-[600]">Get Started</p>
            <p class="text-gray text-[14px] font-maitree font-[600]">Enter your personal information to make an account</p>
            <div class="form-card-body">
                <base-input v-model="userInput.username" label="Username" placeholder="Enter your username" :withSpan="false" identity="username"></base-input>
                <base-input v-model="userInput.email" label="Email" placeholder="Enter your email" :withSpan="false" identity="password"></base-input>
                <base-input v-model="userInput.password" type="password" label="Password" placeholder="Enter your password" :isPassword="true" :withSpan="false" identity="password"></base-input>
                <base-input v-model="userInput.passwordConfirmation" type="password" label="Password Confirmation" placeholder="Enter your password canfirmation" :isPassword="true" :withSpan="false" identity="passwordConfirmation"></base-input>
            </div>
            <div class="form-card-footer">
                <div class="flex justify-between w-[100%]">
                    <div class="flex gap-[6px] items-center">
                        <input type="checkbox" class="rounded-[3px] input-check">
                        <p class="font-inter text-[12px] font-[400] text-[#5B5B5B]">I aggree to the <a href="#" class="underline">Term & Conditions</a> and <a class="underline" href="#">Privacy Policy</a></p>
                    </div>
                </div>
                <div class="btn bg-primary rounded-[12px] text-white w-[100%]">Login</div>
                <p class="font-inter">Already have an account? <router-link to="/login" class="underline text-primary1 font-bold">Login</router-link></p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { reactive } from 'vue';

    const userInput = reactive({
        username: '',
        email : '',
        password : '',
        passwordConfirmation : '',
    })
</script>

<style lang="scss" scoped>

</style>