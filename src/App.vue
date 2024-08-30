<script setup>
  import ModalProduct from './components/modal/ModalProduct.vue';
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  const store = useStore()

  const notif = computed(() => store.state.ui.notif)
  const modal = computed(() => store.state.ui.modal)
</script>

<template>

  <div class="w-[100%] p-[4px]  z-[99]" :class="notif.isError? 'bg-danger' : 'bg-success'" style="position: fixed; transition: top 0.4s ease-in-out;" :style="{'top' : notif.topPos + 'px'}">
      <p class="font-inter text-[15px] text-white text-center">{{ notif.notifMessage }}</p>
  </div>

  <component v-if="$route.meta.layout" :is="$route.meta.layout">
    <router-view></router-view>
  </component>
  <router-view v-else></router-view>
  
  <div @click="store.dispatch('ui/showModal')" class="flex bg-black/10 justify-center items-center w-full fixed z-[99999] transition-all h-[100vh]" :style="{'bottom': `${modal.bottomPos}vh`}">
    <ModalProduct :modal="modal" />
  </div>
</template>

<style scoped>

</style>
