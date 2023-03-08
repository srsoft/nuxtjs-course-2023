<template>
    <div>
        <h1 class="mb-10">profile</h1>
        <div>
            <dl>
                <dt>email</dt>
                <dd>{{ authStore.user.email }}</dd>
            </dl>
            <dl>
                <dt>emailVerified</dt>
                <dd>{{ authStore.user.emailVerified }}</dd>
            </dl>
            <dl>
                <dt>id</dt>
                <dd>{{ authStore.user.id }}</dd>
            </dl>
            <dl>
                <dt>imageUrl</dt>
                <dd>{{ authStore.user.imageUrl }}</dd>
            </dl>
            <dl>
                <dt>name</dt>
                <dd>{{ authStore.user.name }}</dd>
            </dl>
            <dl>
                <dt>provider</dt>
                <dd>{{ authStore.user.provider }}</dd>
            </dl>
            <dl>
                <dt>providerId</dt>
                <dd>{{ authStore.user.providerId }}</dd>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

</script>

<style lang="scss" scoped>
dl { display: flex; }
dl dt { width: 200px; }
</style>