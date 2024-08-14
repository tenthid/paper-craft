<template>

    <nav class="absolute pt-[50px] pl-[60px]">
        <router-link to="/">
            <img src="/images/arrow-left-circle.svg" alt="">
        </router-link>
    </nav>

    <main>
        <slot></slot>
    </main>

    <footer>
    </footer>

</template>

<script setup>
    import Footer from '@/components/footer/Footer.vue'
</script>

<style lang="scss" scoped>

</style>