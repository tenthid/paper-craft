<template>
    <div class="container-page !pt-[90px] !pb-[50px] bg-primary-background flex gap-[32px]">
        <ProfileNavigation></ProfileNavigation>
        <div class="profile-card">
            <div class="profile-card-title">
                <p class="font-bold">
                    {{ wichPage() }}
                </p>
            </div>
            <component :is="wichComponent[wichPage()]"></component>
        </div>
    </div>
</template>

<script setup>
    import ProfileNavigation from '@/components/profile/ProfileNavigation.vue';
    import ChangePassword from '@/components/profile/ChangePassword.vue';
    import TransactionHistory from '@/components/profile/TransactionHistory.vue';
    import { useRoute } from 'vue-router';
    import EditProfile from '@/components/profile/EditProfile.vue';
    const route = useRoute()

    const wichComponent = {
        'Profile' : EditProfile,
        'Change Password' : ChangePassword,
        'Transaction History' : TransactionHistory,
    }

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