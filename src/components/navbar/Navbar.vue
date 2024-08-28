<template>
    <nav class="w-[100%] bg-white fixed h-[65px] border-b-[0.5px] border-primary flex py-[10px] px-[50px] gap-[40px] z-[99999]">
        <img @click="router.push('/')" class=" w-[88px] cursor-pointer  " src="/images/logo-full.png" alt="logo">
        <div class="border-[1px] border-solid rounded-full border-[#E0E0E0] w-[100%] h-[40px] input-group">
            <div class="group-span">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
                <img class="cursor-pointer" @click="handleSearch()" width="100%" height="auto" src="/images/magnify-glass.svg" alt="logo">
            </div>
            <input @keyup.enter="handleSearch()" v-model="keyWord" type="text" class="group-controll input-no-focus" placeholder="Search for items">
            <div v-if="keyWord" class="group-span">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
                <img class="cursor-pointer" @click="() => {keyWord = ''}" width="100%" height="auto" src="/images/X-page.svg" alt="logo">
            </div>
        </div>
        <component :is="components[loginStatus? 'userAction' : 'authAction']"></component>
    </nav>
</template>

<script setup>
    import AuthAction from './AuthAction.vue';
    import UserAction from './UserAction.vue';
    import { useRouter, useRoute } from 'vue-router';
    import { ref, onMounted, watch, computed } from 'vue';
    import { useStore } from 'vuex';

    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const loginStatus = computed(() => store.state.user.isLogin)
    const keyWord = ref()
    const components = {
        'authAction' : AuthAction,
        'userAction' : UserAction
    }

    const pushWithPath = (path) => {
        router.push({
                path: path,
                query: {
                    ...route.query,
                    keyword : keyWord.value
                }
            })
    }

    const handleSearch = () => {
        if(keyWord.value) {
            if(route.path !== '/') {
                pushWithPath(route.path)
            } else {
                pushWithPath('/products')
            }
        }
    }

    watch(route, (oldValue, newValue) => {
        if(!route.query.keyword) {
           keyWord.value = ''   
        } else {
            keyWord.value = route.query.keyword
        }
    })

    onMounted(() => {
        if(route.query.keyword) {
            keyWord.value = route.query.keyword
        }
    })
</script>

<style lang="scss" scoped>

</style>