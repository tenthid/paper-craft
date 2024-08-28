<template>
    <div class="profile-card-footer border-t-[0px]">
        <div v-if="orderEmpty" class="flex flex-col gap-[20px]">
            <div v-for="index in 10" class="border-[#EDEDED] border-[1px] rounded-[10px]">
               <div class="p-[15px]">
                <div class="flex gap-[24px] justify-between">
                    <div class="flex gap-[16px]">
                        <img width="100px" height="120px" src="/images/tas.jpg" alt="productPage">
                        <div class="flex gap-[8px] flex-col">
                            <p class="font-inter text-[16px] font-[500]">
                                This product suckksss
                            </p>
                            <p class="font-inter text-[14px] font-[400]">
                                Category name / Brand name
                            </p>
                            <p class="font-inter text-[16px] font-[500]">
                                Rp902101
                            </p>
                            <p class="font-inter text-[14px] font-[400]">
                                1 product x Rp298781
                            </p>
                        </div>
                    </div>
                    <div class="pl-[24px] py-[5px] border-l-[1px] border-l-[#EDEDED] h-[fit-content]">
                        <p class="font-inter text-[14px] font-[400]">
                            Total price
                        </p>
                        <p class="font-inter text-[16px] font-[500]">
                            Rp.10000000
                        </p>
                    </div>
                </div>
                <p class="font-inter text-[14px] font-[400] pt-[12px]">
                    + 1  products
                </p>
               </div>
               <hr class="border-[#EDEDED] mx-[16px]">
               <div class="p-[15px] flex justify-end">
                    <router-link class="border-primary btn rounded-[5px] text-[15px] text-primary font-inter font-[600] border-[1px] !w-[fit-content] !py-[5px] hover:bg-primary hover:text-white transition-all" to="/">
                        Buy Again
                    </router-link>
               </div> 
            </div>
        </div>
        <div v-else class="flex flex-col justify-center items-center gap-[16px]">
            <img src="/images/order-empty.png" alt="orderEmpty">
            <p class="text-[28px] font-[500] font-inter">No orders yet</p>
            <p class="text-[16px] text-gray font-[400] font-inter">When you buy an item, your order about it will appear here.</p>
            <router-link class="btn bg-primary text-white rounded-[8px] !px-[80px]">
                Shop now
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const orderEmpty = ref(true)
</script>

<style lang="scss" scoped>

</style>