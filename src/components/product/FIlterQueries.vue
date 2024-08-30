<template>
    <div class="flex w-full gap-[20px] justify-center flex-wrap">
        <div v-if="queries.length !== 0" v-for="query in queries" class="w-[fit-content] py-[10px] px-[20px] text-black font-inter text-[15px] font-[500] bg-white rounded-[10px] flex justify-center gap-[10px]">
            <p>
                {{ query.query }} : {{ query.value }}
            </p>
            <img @click="deleteQuery(query.query)" class="cursor-pointer" src="/images/X-page.svg" alt="cancel-icon">
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const queries = ref([])
    
    const deleteQuery = (query) => {
        let queries = {...route.query}
        delete queries[query]
        router.push({
            path: route.path,
            query: queries
        })
    }

    const filteredQueries = () => {
        let queries = {}

        if(route.query.sortBy) {
            queries.sortBy = route.query.sortBy
        }

        if(route.query.orderBy) {
            queries.orderBy = route.query.orderBy
        }

        if(route.query.category) {
            queries.category = route.query.category
        }

        if(route.query.brand) {
            queries.brand = route.query.brand
        }

        if(route.query.keyword) {
            queries.keyword = route.query.keyword
        }

        return Object.entries(queries).map(([query, value]) => ({ query, value }))
    }

    watch(route, (oldValue, newValue) => {
        queries.value = filteredQueries()
    })
    
    onMounted(() => {
        queries.value = filteredQueries()
    })
</script>

<style lang="scss" scoped>

</style>