<template>
    <div>
        <header>
            <Navbar></Navbar>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            
        </footer>
    </div>
</template>

<script setup>
    import Navbar from '../components/navbar/Navbar.vue'
</script>

<style lang="scss" scoped>

</style>