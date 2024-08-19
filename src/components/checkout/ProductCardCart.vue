<template>
    <div v-for="index in 10" class="flex-col flex gap-[10px]">
        <div class="p-[18px] border-t-[1px] border-black">
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
        </div>
        <div class="flex gap-[10px] justify-end items-center">
            <button class="btn text-white bg-danger rounded-[10px]">
                Remove
            </button>
            <input type="checkbox" class="input-check h-[35px] w-[35px]">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>