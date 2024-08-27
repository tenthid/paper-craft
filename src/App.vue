<script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
