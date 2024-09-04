<template>
  <div>
    <header>
      <NavAdmin></NavAdmin>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script setup>
import NavAdmin from "../components/navbar/NavAdmin.vue";
import footer from "../components/footer/Footer.vue"
</script>

<style scoped>

</style>
