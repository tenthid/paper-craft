<script setup>
  import { useStore } from 'vuex';
  import { computed, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const store = useStore()

  const notif = computed(() => store.state.ui.notif)
</script>

<template>

  <div class="w-[100%] p-[4px]" :class="notif.isError? 'bg-danger' : 'bg-success'" style="position: fixed; z-index: 1; transition: top 0.4s ease-in-out;" :style="{'top' : notif.topPos + 'px'}">
      <p class="font-inter text-[15px] text-white text-center">{{ notif.notifMessage }}</p>
  </div>

  <component v-if="$route.meta.layout" :is="$route.meta.layout">
    <router-view></router-view>
  </component>
  <router-view v-else></router-view>
</template>

<style scoped>

</style>
