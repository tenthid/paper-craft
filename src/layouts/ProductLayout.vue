<template>
    <div>
        <header>
            <Navbar></Navbar>
            <ProductNavigation />
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
    import Navbar from '../components/navbar/Navbar.vue'
    import Footer from '@/components/footer/Footer.vue';
    import ProductNavigation from '@/components/product/ProductNavigation.vue';
</script>

<style lang="scss" scoped>

</style>