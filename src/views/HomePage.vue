<template>
  <div class="btn bg-primary">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <p>aku adalah {{ akuAdalah }}</p>
    <input type="text" v-model="ubahBaru.input">
    <button @click="ubah">
        ubah
    </button>
  </div>
  <BaseInput :isPassword="true" :label="'Email'" :placeholder="'Enter your email'" :identity="'email'" :withSpan="false"></BaseInput>
</template>

<script setup>
    import { computed, reactive } from 'vue';
    import { useStore } from 'vuex';
    import BaseInput from '@/components/ui/BaseInput.vue';

    const store = useStore()

    const akuAdalah = computed(() => {
        return store.state.ui.akuAdalah
    })
    const ubahBaru = reactive({
      input: ''
    })

    const ubah = () => {
        store.dispatch('ui/ubah', ubahBaru.input)
    }
</script>

<style lang="scss" scoped>

</style>

 <!-- <template>
  <h1 class="text-3xl font-bold underline p-[10px]">
    hello world
  </h1>
 </template>
 
 <script setup>
 
 </script>
 
 <style lang="scss" scoped>
 
 </style> -->