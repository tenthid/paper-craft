<template>
    <div class="w-[100%] bg-white fixed h-[120px] border-b-[0.5px] border-primary flex gap-[60px] justify-center items-center text-[18px] font-medium text-primary pt-[65px] px-[60px] pb-0 z-[9999] ">
        
        <div class="flex gap-[5px] text-[20px] font-[500] font-inter group cursor-pointer h-[100%] items-center">
            Category
            <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">

            <!-- Dropdown -->
             <div class="hidden group-hover:flex px-[60px] py-[20px] gap-[20px] flex-col font-inter absolute w-[100%] items-center left-0 top-[120px] bg-white border-b-[0.5px] border-b-primary">
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
            <div class="hidden group-hover:flex px-[60px] py-[20px] gap-[20px] flex-col font-inter absolute w-[100%] items-center left-0 top-[120px] bg-white border-b-[0.5px] border-b-primary">
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
                    <div class="flex justify-between w-[100%]">
                        <p class="font-inter text-[18px] font-[400]">
                            Sortby
                        </p>
                        <!-- dropdown -->
                    </div>
                    <div class="flex justify-between w-[100%]">
                        <p class="font-inter text-[18px] font-[400]">
                            Orderby
                        </p>
                        <!-- dropdown -->
    
                    </div>
                    <div class="flex justify-between w-[100%]">
                        <p class="font-inter text-[18px] font-[400]">
                            Category
                        </p>
                        <!-- dropdown -->
    
                    </div>
                    <div class="flex justify-between w-[100%]">
                        <p class="font-inter text-[18px] font-[400]">
                            Brand
                        </p>
                        <!-- dropdown -->
    
                    </div>
                    <button class="btn bg-primary text-white rounded-[5px] w-[100%] hover:opacity-[80%]">
                        Filter
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const filterShow = ref(false)
    const filterModalContainer = ref(null)
    const filterModal = ref(null)

    const handleClickOutside = (event) => {
        console.log(filterModal.value)
        if(filterShow.value && !filterModalContainer.value.contains(event.target)) {
            console.log('tutup')
            filterShow.value = false
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })
    
    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClickOutside)
    })
</script>

<style lang="scss" scoped>

</style>