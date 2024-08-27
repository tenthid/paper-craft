<template>
    <div class="flex gap-[8px] items-center justify-center">

        <button @click="changePage(props.paginationData.current_page - 1)" :disabled="props.paginationData.current_page === 1" class="py-[8px] px-[12px] disabled rounded-[8px] cursor-pointer"  :class="{'!bg-primary' : props.paginationData.current_page !== 1}">
            <img src="/images/arrow-left.svg" alt="prev">
        </button>

        <button @click="changePage(Number(link.label))" v-for="link in links" :class="{'bg-primary' : props.paginationData.current_page == link.label, 'text-white' : props.paginationData.current_page == link.label}" class="py-[4px] px-[12px] rounded-[8px] cursor-pointer">
            {{ link.label }}
        </button>

        <div v-if="props.paginationData.last_page > 3 && Number(links[links.length - 1].label) !== props.paginationData.last_page" class="py-[8px] px-[12px] rounded-[8px]">
            ...
        </div>

        <button @click="changePage(props.paginationData.last_page)" v-if="props.paginationData.last_page > 3 && Number(links[links.length - 1].label) !== props.paginationData.last_page" class="py-[4px] px-[12px] rounded-[8px] cursor-pointer">
            {{ props.paginationData.last_page }}
        </button>

        
        <button @click="changePage(props.paginationData.current_page + 1)" :disabled="props.paginationData.current_page === props.paginationData.last_page" class="py-[8px] px-[12px] disabled rounded-[8px] cursor-pointer"  :class="{'!bg-primary' : props.paginationData.current_page !== props.paginationData.last_page}">
            <img src="/images/arrow-right.svg" alt="next">
        </button>
    </div>
</template>

<script setup>
    import { defineProps, onMounted, ref, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()
    
    const props = defineProps({
        paginationData: {type: Object},
    })
    
    const links = ref(props.paginationData.links)

    const changePage = (num) => {
        router.push({
            path: route.path,
            query: {
                ...route.query,
                page: num
            }
        })
    }
    
    onMounted(() => {
        links.value = props.paginationData.links.slice(1, props.paginationData.links.length - 1)
        if(links.value.length > 3) {
            links.value = links.value.slice(props.paginationData.current_page - 1, props.paginationData.current_page - 1 + 3)
        }
    }) 
</script>

<style lang="scss" scoped>

</style>