<template>
    <div class="flex bg-primary-background gap-[70px] px-[20px] tablet:py-[50px] phone-l:py-[0px]  justify-center items-center">
        <img class="phone-s:hidden laptop-l:block" width="692px" height="auto" src="/images/register-img.png" alt="img">
        <router-link to="/" class="absolute top-0 left-0 ml-[20px] mt-[20px] tablet:hidden">
            <img width="30px" height="auto"  src="/images/arrow-left-circle.svg" alt="back-button">
        </router-link>
        <form @submit.prevent="handleRegister()" class="form-card w-[450px] phone-s:my-[80px] tablet:my-0">
            <p class="text-primary text-[40px] font-maitree font-[600]">Get Started</p>
            <p class="text-gray text-[14px] font-maitree font-[600] text-center">Enter your personal information to make an account</p>
            <div class="form-card-body">
                <base-input v-model="userInput.name" label="Username" placeholder="Enter your username" :withSpan="false" identity="username">
                    <p v-if="errors.name" v-for="error in errors.name" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>
                </base-input>
                <base-input v-model="userInput.email" label="Email" placeholder="Enter your email" :withSpan="false" type="email" identity="email">
                    <p v-if="errors.email" v-for="error in errors.email" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>
                </base-input>
                <base-input v-model="userInput.password" type="password" label="Password" placeholder="Enter your password" :isPassword="true" :withSpan="false" identity="password">
                    <p v-if="errors.password" v-for="error in errors.password" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>
                </base-input>
                <base-input v-model="userInput.password_confirmation" type="password" label="Password Confirmation" placeholder="Enter your password canfirmation" :isPassword="true" :withSpan="false" identity="passwordConfirmation">
                    <p v-if="errors.password_confirmation" v-for="error in errors.password_confirmation" class="text-danger font-inter text-[12px]">
                        {{ error }}
                    </p>    
                </base-input>
            </div>
            <div class="form-card-footer">
                <div class="flex flex-col w-full gap-[10px]">
                    <div class="flex gap-[6px] items-center">
                        <input v-model="userInput.terms_agrree" @click="() => {userInput.terms_agrree = !userInput.terms_agrree}" type="checkbox" class="rounded-[3px] input-check">
                        <p class="font-inter text-[12px] font-[400] text-[#5B5B5B]">I aggree to the <a href="#" class="underline">Term & Conditions</a> and <a class="underline" href="#">Privacy Policy</a></p>
                    </div>
                    <p v-if="showErrorAggree" class="text-danger font-inter text-[12px]">
                        Must be checked
                    </p>    
                </div>
                <button type="submit" class="btn bg-primary rounded-[12px] text-white w-[100%]">Register</button>
                <p class="font-inter">Already have an account? <router-link to="/login" class="underline text-primary1 font-bold">Login</router-link></p>
            </div>
        </form>
    </div>
</template>

<script setup>
    import BaseInput from '@/components/ui/BaseInput.vue';
    import { computed, reactive, ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter()
    const store = useStore()

    const errors = computed(() => store.state.user.errors)
    const userInput = reactive({
        name: '',
        email : '',
        password : '',
        password_confirmation : '',
        terms_agrree: false,
    })
    const showErrorAggree = ref(false)

    const handleRegister =async () => {  
        if(userInput.terms_agrree === false) {
            showErrorAggree.value = true
        } else {
            const isSuccess = await store.dispatch('user/register', userInput)
            if(isSuccess) {
                store.dispatch('ui/showNotif',{message: 'Register berhasil', topPos: 0})
                router.push('/login')
            }
            showErrorAggree.value = false
        }
    }

    onMounted(() => {
        store.commit('user/setErrorData', {})
    })
</script>

<style lang="scss" scoped>

</style>