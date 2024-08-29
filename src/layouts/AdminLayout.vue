<template>
  <div>
    <header>
      <NavAdmin></NavAdmin>
    </header>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import NavAdmin from "../components/navbar/NavAdmin.vue";
</script>

<style scoped>

</style>
