<template>
    <navbar class="w-[100%] bg-white fixed h-[116px] border-b-[0.5px] border-primary flex justify-center items-center text-[18px] font-medium text-primary pt-[65px] pr-[50px] pb-0 pl-[50px] gap-[80px] z-[9999] ">
        
        <div class="flex justify-center items-center gap-[10px] py-[var(--sds-size-space-400)] px-0">
            Category
            <div class="inline-block group ">
                <div class="py-[15px] flex gap-[15px]">
                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                        <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                    </button>
                </div>
                <div class="absolute left-0 hidden bg-white w-[100%] border-b-[0.5px] border-primary shadow-lg z-10 group-hover:block">
                    <div class="flex flex-col items-center py-[20px] text-[var(--primary, #005C78)] font-inter text-[28px] font-bold">
                        <p>Our Category</p>
                    </div>
                    <span class="flex justify-left items-start gap-[10px] self-stretch px-[50px] pb-[20px]">
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Category</a>
                    </span>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center gap-[10px] py-[var(--sds-size-space-400)] px-0">
            Brand
            <div class="inline-block group ">
                <div class="py-[15px] flex gap-[15px]">
                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                        <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                    </button>
                </div>
                <div class="absolute left-0 hidden bg-white w-[100%] border-b-[0.5px] border-primary shadow-lg z-10 group-hover:block">
                    <div class="flex flex-col items-center py-[20px] text-[var(--primary, #005C78)] font-inter text-[28px] font-bold">
                        <p>Brands</p>
                    </div>
                    <span class="flex justify-left items-start gap-[10px] self-stretch px-[50px] pb-[20px]">
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Brand A</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Brand B</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Brand C</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Brand D</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Brand E</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ECF3F7]">Brand F</a>
                    </span>
                </div>
            </div>
        </div>

        <div class="">
            <div class="relative py-[12px] nline-block group">
                <button @click="toggleDropdown" class="dropbtn" style="border: none; background: none; padding: 0; cursor: pointer;">
                    <img width="24px" height="24px" src="/images/icon-filter.svg" alt="dropdown-icon">
                </button>
            </div>
            <div v-if="isOpen" class="rounded absolute bg-white  items-center w-auto shadow-lg z-10">
                <div class="flex flex-col items-center gap-[25px] shrink-0 rounded-lg w-[520px] h-auto py-[30px] px-0 text-center font-inter text-[25px] font-medium">
                    <p>Filter Products</p>
                    <div class="flex w-[450px] h-[45px] justify-between items-center  text-[20px] flex-shrink-0">
                        <p>Category</p>
                        <div class="flex w-[335px] border-[0.5px] px-[10px] py-[0px] text-[15px] justify-between flex-shrink-0 rounded-[4px] border-[#ACACAC]">
                            <div class="py-[10px]">Choose Category</div>
                            <div class="inline-block group ">
                                <div class=" mt-[12px] flex">
                                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                                        <img width="18px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                                    </button>
                                    <span class="absolute left-[150px] rounded text-start hidden bg-[#f1f1f1] mt-[31.5px] w-[335px] shadow-lg z-10 group-hover:block">
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Category A</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Category B</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Category C</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Category D</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Category E</a>
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="flex w-[450px] h-[45px] justify-between items-center  text-[20px] flex-shrink-0">
                        <p>Brand</p>
                        <div class="flex w-[335px] border-[0.5px] px-[10px] py-[0px] text-[15px] justify-between flex-shrink-0 rounded-[4px] border-[#ACACAC]">
                            <div class="py-[10px]">Choose Brand</div>
                            <div class="inline-block group ">
                                <div class=" mt-[12px] flex">
                                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                                        <img width="18px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                                    </button>
                                    <span class="absolute left-[150px] rounded text-start hidden bg-[#f1f1f1] mt-[30px] w-[335px] shadow-lg z-10 group-hover:block">
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Brand A</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Brand B</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Brand C</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Brand D</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Brand E</a>
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="flex w-[450px] h-[45px] justify-between items-center  text-[20px] flex-shrink-0">
                        <p>Sortby</p>
                        <div class="flex w-[335px] border-[0.5px] px-[10px] py-[0px] text-[15px] justify-between flex-shrink-0 rounded-[4px] border-[#ACACAC]">
                            <div class="py-[10px]">Choose Field</div>
                            <div class="inline-block group ">
                                <div class=" mt-[12px] flex">
                                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                                        <img width="18px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                                    </button>
                                    <span class="absolute left-[150px] rounded text-start hidden bg-[#f1f1f1] mt-[31.5px] w-[335px] shadow-lg z-10 group-hover:block">
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Price: Low to High</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">Price: High to Low</a>
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="flex w-[450px] h-[45px] justify-between items-center  text-[20px] flex-shrink-0">
                        <p>Orderby</p>
                        <div class="flex w-[335px] border-[0.5px] px-[10px] py-[0px] text-[15px] justify-between flex-shrink-0 rounded-[4px] border-[#ACACAC]">
                            <div class="py-[10px]">ASC / DESC</div>
                            <div class="inline-block group ">
                                <div class=" mt-[12px] flex">
                                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                                        <img width="18px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                                    </button>
                                    <span class="absolute left-[150px] rounded text-start hidden bg-[#f1f1f1] mt-[31.5px] w-[335px] shadow-lg z-10 group-hover:block">
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">ASC</a>
                                        <a href="#" class="block px-3 py-3 text-black rounded hover:bg-[#ddd]">DESC</a>
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-[335px] h-[45px] text-white p-1.5 justify-center items-center gap-2 rounded-[5px] bg-primary hover:bg-primary-1">
                        <div class="font-normal text-xl">Filter</div>
                    </div>
                </div>
            </div>
        </div>
    
    </navbar>
    
    <div class="w-[100%] bg-[#ECF3F7] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
        <div class="text-primary text-center font-[Maitree] text-[35px] font-normal leading-[120%]">
            All Products
        </div>
        
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.group')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>

</style>