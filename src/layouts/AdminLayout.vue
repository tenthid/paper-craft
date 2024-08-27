<template>
  <div>
    <header>
      <NavAdmin></NavAdmin>
    </header>

    <main class="flex flex-row">
       <Sidebar></Sidebar>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import NavAdmin from "../components/navbar/NavAdmin.vue";
import Sidebar from "@/components/navbar/Sidebar.vue";
</script>

<style scoped>

</style>
