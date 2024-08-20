<template>
    <div class="flex flex-col gap-[20px]">
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <p class="text-[14px] font-bold font-inter">Product price</p>
            <p v-for="index in 3" class="text-[14px] font-inter text-gray">Product {{ index }}</p>
        </div>
        <p class="font-inter text-[14px] font-[400] text-gray">Total</p>
        <div class="p-[15px] rounded-[10px] flex flex-col gap-[15px] border-[#EDEDED] border-[1px]">
            <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Subtotal</p>
                <p class="text-[14px] font-inter text-gray">Rp.01298971</p>
            </div>
            <div class="flex justify-between">
                <p class="text-[14px] font-inter text-gray">Total</p>
                <p class="text-[14px] font-inter text-gray">Rp.01298971</p>
            </div>
            <div class="flex justify-between">
                <p class="text-[14px] font-bold font-inter">Order Total</p>
                <p class="text-[14px] font-bold font-inter">Rp.01298971</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>