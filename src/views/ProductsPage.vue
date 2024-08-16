<template>
    <navbar class="w-[100%] bg-white fixed h-[120px] border-b-[0.5px] border-primary flex justify-center items-center text-[18px] font-medium text-primary pt-[65px] pr-[50px] pb-0 pl-[50px] gap-[80px] z-[9999] ">
        <div class="flex justify-center items-center gap-[10px] py-[var(--sds-size-space-400)] px-0">
            <div class="inline-block group ">
                <div class="py-[15px] flex gap-[15px]">
                    <p>Category</p>
                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                        <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                    </button>
                </div>
                <div class="absolute left-0 hidden bg-[#f1f1f1] w-[100%] border-b-[0.5px] border-primary shadow-lg z-10 group-hover:block">
                    <div class="flex flex-col items-center py-[20px] text-[var(--primary, #005C78)] font-inter text-[28px] font-bold">
                        <p>Our Category</p>
                    </div>
                    <div class="flex justify-left items-start gap-[10px] self-stretch px-[50px] pb-[20px]">
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Category</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Category</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center gap-[10px] py-[var(--sds-size-space-400)] px-0">
            <div class="inline-block group ">
                <div class="py-[15px] flex gap-[15px]">
                    <p>Brands</p>
                    <button style="border: none; background: none; padding: 0; cursor: pointer; " onclick="handleClick()">
                        <img width="20px" height="auto" bg-primary src="/images/dropdown-icon.svg" alt="dropdown-icon">
                    </button>
                </div>
                <div class="absolute left-0 hidden bg-[#f1f1f1] w-[100%] border-b-[0.5px] border-primary shadow-lg z-10 group-hover:block">
                    <div class="flex flex-col items-center py-[20px] text-[var(--primary, #005C78)] font-inter text-[28px] font-bold">
                        <p>Brands</p>
                    </div>
                    <div class="flex justify-left items-start gap-[10px] self-stretch px-[50px] pb-[20px]">
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Brand A</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Brand B</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Brand C</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Brand D</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Brand E</a>
                        <a href="#" class="block px-[76px] py-3 text-black rounded hover:bg-[#ddd]">Brand F</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative inline-block group ">
            <div class="py-[16px] flex">
                <button onclick="myFunction()" class="dropbtn" style="border: none; background: none; padding: 0; cursor: pointer;">
                    <img width="24px" height="24px" src="/images/icon-filter.svg" alt="dropdown-icon">
                </button>
            </div>
            <dropdown-content id="myDropdown" class="rounded absolute hidden bg-[#f1f1f1] min-w-[500px] shadow-lg z-10">
                <div class="flex flex-col items-center gap-[20px] shrink-0 rounded-lg w-[560px] h-[474px] py-[30px] px-0 text-[var(--primary, #005C78)] text-center font-inter text-[25px] font-medium">
                    <p>Filter Products</p>
                </div>

                <div class="flex justify-center items-center w-[498px] h-[46px]">
                    <h1>Test</h1>
            
                </div>
            </dropdown-content>


        </div>

        
        
    </navbar>
    

    <div class="w-[100%] h-auto flex flex-col items-center gap-[40px] py-[166px] px-[60px] pb-[50px] self-stretch">
        <div class="text-primary text-center font-[Maitree] text-[35px] font-normal leading-[120%]">
            All Products
        </div>
    </div>




</template>

<script setup>
import { ref } from 'vue';

const dropdown = ref(null)

function myFunction() {
  dropdown.value.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

</script>

<style lang="scss" scoped>

</style>