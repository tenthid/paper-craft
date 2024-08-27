<template>
    <div class="w-[100%] bg-white fixed h-[120px] border-b-[0.5px] border-primary flex gap-[60px] justify-center items-center text-[18px] font-medium text-primary pt-[65px] px-[60px] pb-0 z-[9999] ">
        
        <div class="flex gap-[5px] text-[20px] font-[500] font-inter group cursor-pointer h-[100%] items-center">
            Category
            <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">

            <!-- Dropdown -->
             <div class="hidden px-[60px] py-[20px] gap-[20px] flex-col font-inter absolute w-[100%] items-center left-0 top-[120px] bg-white border-b-[0.5px] border-b-primary" :class="{'group-hover:flex' : !filterShow}">
                <p class="font-[700] text-[25px]">
                    Categories
                </p>
                <div class="grid grid-cols-6 w-[100%] gap-y-[25px]">
                    <router-link to="/" v-for="index in 12" class="text-center hover:underline font-inter font-[300]">
                        Category name
                    </router-link>
                </div>
            </div>
        </div>
        
        <div class="flex gap-[5px] text-[20px] font-[500] font-inter group cursor-pointer h-[100%] items-center">
            Brand
            <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
            
            <!-- Dropdown -->
            <div class="hidden px-[60px] py-[20px] gap-[20px] flex-col font-inter absolute w-[100%] items-center left-0 top-[120px] bg-white border-b-[0.5px] border-b-primary" :class="{'group-hover:flex' : !filterShow}">
                <p class="font-[700] text-[25px]">
                    Brands
                </p>
                <div class="grid grid-cols-6 w-[100%] gap-y-[25px]">
                    <router-link to="/" v-for="index in 12" class="text-center hover:underline font-inter font-[300]">
                        Brand name
                    </router-link>
                </div>
            </div>
        </div>
        
        
        <div ref="filterModalContainer">
            
            <!-- modal controller untuk tutup/buka -->
            <div class="flex h-[100%]">
                <img class="cursor-pointer" @click="() => {filterShow = !filterShow}" width="24px" height="24px" src="/images/icon-filter.svg" alt="filter-icon">
            </div>
            
            <!-- ini modal bukan dropdown -->
            <div v-if="filterShow" @click="() => {filterShow = !filterShow}" class="left-0 absolute w-[100%] flex justify-center top-[124px]">
                <div @click.stop="() => {filterShow = true}" ref='filterModal' class="bg-white flex flex-col p-[20px] gap-[25px] rounded-[8px] shadow-md w-[400px] items-center">
                    <p class="font-inter text-[24px] font-bold">
                        Filter Product
                    </p>
                    <div class="grid grid-cols-2 gap-y-[25px] w-[100%]">
                        <p class="font-inter text-[18px] font-[400]">
                            Orderby
                        </p>
                        <!-- dropdown -->
                         <BaseSelect v-model="filter.orderBy" label="Choose Field" :options="[
                            {label: 'Name', value: 'product_name'},
                            {label: 'Price', value: 'price'},
                            {label: 'Stock', value: 'stock'},
                         ]"/>

                        <p class="font-inter text-[18px] font-[400]">
                            Sortby
                        </p>
                        <!-- dropdown -->
                         <BaseSelect v-model="filter.sortBy" label="Choose Order By" :options="[
                            {label: 'Ascending', value: 'asc'},
                            {label: 'Descending', value: 'desc'},
                         ]"/>

                        <p class="font-inter text-[18px] font-[400]">
                            Category
                        </p>
                        <!-- dropdown -->
                        <BaseSelect v-model="filter.category" label="Choose Category" :options="categoryList"/>

                        <p class="font-inter text-[18px] font-[400]">
                            Brand
                        </p>
                        <!-- dropdown -->
                         <BaseSelect v-model="filter.brand" label="Choose Brand" :options="brandList"/>
                    </div>
                    <button @click.stop="handleFilter()" class="btn bg-primary text-white rounded-[5px] w-[100%] hover:opacity-[80%]">
                        Filter
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount, computed, reactive } from 'vue';
    import BaseSelect from '../ui/BaseSelect.vue';
    import { useStore } from 'vuex';
    import { useRouter, useRoute } from 'vue-router';

    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const brands = computed(() => store.state.product.brands)
    const categories = computed(() => store.state.product.categories)

    const filterShow = ref(false)
    const filterModalContainer = ref(null)
    const filterModal = ref(null)
    const brandList = ref()
    const categoryList = ref()
    const filter = reactive({
        sortBy: '',
        orderBy: '',
        category: '',
        brand: '',
    })

    const handleClickOutside = (event) => {
        if(filterShow.value && !filterModalContainer.value.contains(event.target)) {
            filterShow.value = false
        }
    }

    const handleFilter = () => {
        let queries = {}

        if(filter.sortBy) {
            queries.sortBy = filter.sortBy
        }

        if(filter.orderBy) {
            queries.orderBy = filter.orderBy
        }

        if(filter.category) {
            queries.category = filter.category
        }

        if(filter.brand) {
            queries.brand = filter.brand
        }

        router.push({
            path: router.path,
            query: queries
        })

        filterShow.value = false
    }

    onMounted(async() => {
        await store.dispatch('product/getBrands')
        await store.dispatch('product/getCategories')

        brandList.value = brands.value
        categoryList.value = categories.value

        brandList.value.forEach(brand => {
            brand.value = brand.id
            brand.label = brand.brand_name
        })
        categoryList.value.forEach(category => {
            category.value = category.id
            category.label = category.category_name
        })

        document.addEventListener('click', handleClickOutside)
        let queries = {
            sortBy: '',
            orderBy: '',
            category: '',
            brand: '',
        }

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

        Object.assign(filter, queries)
    })
    
    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClickOutside)
    })
</script>

<style lang="scss" scoped>

</style>