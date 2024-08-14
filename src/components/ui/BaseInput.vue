<template>
    <div>
        <label class="font-inter text-[14px]"> 
            {{ label }} <span v-if="withSpan" class="text-danger" >*</span>
        </label>

        <div class="flex gap-[6px] w-[100%]" v-if="isPassword">
            <input
            class="bg-primary-background py-[8px] px-[12px]  rounded-[12px] w-[100%] text-primary input-no-focus text-[16px]" 
            :type="passIcon? 'text' : 'password'"
            :id="identity" 
            :placeholder="placeholder" 
            :readonly="readonly === '1'"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @keyup="$emit('keyInput', $event.target.value)"
            @focus="$emit('totalTimeFocus', $event.target.value)"
            @change="$emit('fileInput', $event.target.value)"/>
            <span class="input-group-text bg-white "><i style="cursor: pointer;" @click="passIconControl()" :class="passIcon? ['fa-solid fa-eye-slash'] : ['fa-solid fa-eye']"></i></span>
        </div>

        <div v-else class="flex gap-[6px] w-[100%]">
            <input class="bg-primary-background py-[8px] px-[12px]  rounded-[12px] w-[100%] text-primary input-no-focus text-[16px]"
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