<template>
    <div class="bg-white p-[30px] flex flex-col gap-[24px] rounded-[11px] w-[480px]  h-[fit-content]">
        <div class="flex gap-[18px] items-center">
            <img class="rounded-full border-[3px] border-white" width="100px" height="100px" :src="userData.image_path? `https://tenth.run.place:90/storage/${userData.image_path}` : 'images/user.png'" alt="profile-img">
            <div class="flex flex-col justify-between">
                <p class="font-inter font-bold text-[20px]">{{ userData.name }}</p>
                <p class="font-inter text-gray text[18px]">{{ userData.email }}</p>
            </div>
        </div>
        <hr class="border-gray">
        <div class="flex flex-col">
            <router-link :to="item.path" class="p-[16px] text-[18px] font-[500] text-gray" v-for="item in [
                {text:'Profile Details', path: '/profile-details'},
                {text:'Change Password', path: '/change-password'},
                {text:'Transaction History', path: '/transaction-history'},
                ]" active-class="!text-black">
                {{ item.text }}
            </router-link>
        </div>
        <hr class="border-gray">
        <button @click="handleLogout()" class="btn bg-danger text-[18px] text-white rounded-[10px]">
            Logout
        </button>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter()
    const store = useStore()

    const userData = computed(() => store.state.user.userData)

    const handleLogout = () => {
        store.commit('user/setLogout')
        router.push('/')
    }
</script>

<style lang="scss" scoped>

</style>