<template>
    <div class="container-page h-[100vh] !pt-[90px] bg-primary-background flex gap-[32px]">
        <ProfileNavigation></ProfileNavigation>
        <div class="profile-card">
            <div class="profile-card-title">
                <p class="font-bold">
                    {{ wichPage() }}
                </p>
            </div>
            <EditProfile></EditProfile>
        </div>
    </div>
</template>

<script setup>
    import ProfileNavigation from '@/components/profile/ProfileNavigation.vue';
    import { useRoute } from 'vue-router';
    import EditProfile from '@/components/profile/EditProfile.vue';
    const route = useRoute()

    const wichPage = () => {
        if (route.path === '/profile-details') {
            return 'Profile'
        } else if (route.path === '/change-password') {
            return 'Change Password'
        } else if (route.path === '/transaction-history') {
            return 'Transaction History'
        }
    }
</script>

<style lang="scss" scoped>

</style>