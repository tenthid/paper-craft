<template>
    <div class="flex flex-col gap-[8px]">
        <label class="font-inter text-[16px]"> 
            {{ label }} <span v-if="withSpan" class="text-danger" >*</span>
        </label>

        <div class="flex w-full gap-[6px] flex-col" v-if="isPassword || type === 'password'">
            <div class="input-group rounded-[12px] bg-primary-background w-full" >
                <input
                class=" bg-[inherit] group-controll w-full input-no-focus text-[16px]" 
                :type="passIcon? 'text' : 'password'"
                :id="identity" 
                :placeholder="placeholder" 
                :readonly="readonly === '1'"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                @keyup="$emit('keyInput', $event.target.value)"
                @focus="$emit('totalTimeFocus', $event.target.value)"
                @change="$emit('fileInput', $event.target.value)"/>
                <span class="group-span"><i style="cursor: pointer;" @click="passIconControl()" :class="passIcon? ['fa-solid fa-eye-slash'] : ['fa-solid fa-eye']"></i></span>
            </div>
            <slot></slot>
        </div>

        <div v-else class="flex gap-[6px] w-full flex-col">
            <input class="bg-primary-background py-[8px] px-[12px] flex-col rounded-[12px] w-full input-no-focus text-[16px]"
            :type="type"
            :id="identity"
            :placeholder="placeholder" 
            :readonly="readonly === '1'"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @keyup="$emit('keyInput', $event.target.value)"/>
            <slot></slot>
        </div>

    </div>
</template>

<script setup>
    import { ref } from 'vue';

    defineProps({
        type: { type: String, require: true },
        label: { type: String, require: true },
        identity: { type: String, require: true,},
        placeholder: { type: String, require: false },
        readonly: { type: String, require: true, default: "0" },
        isPassword: { type: Boolean, require: true, default: false },
        withSpan: { type: Boolean, require: true, default: true },
        modelValue: {type: [String, Number]}
    })

    const passIcon = ref(false)

    const passIconControl = () => {
        passIcon.value = !passIcon.value 
    }
</script>

<style>
    
</style>