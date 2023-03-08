<template>
  <nav class="bg-blue-700 shadow-lg p-3 text-white text-lg flex justify-between">
    
    <div class="flex">
      <NuxtLink class="mr-4" to="/">Home</NuxtLink>
      <NuxtLink class="mr-4" to="/dev">Dev</NuxtLink>
      <NuxtLink class="mr-4" to="/dev/iphone">Iphone</NuxtLink>
      <NuxtLink class="mr-4" to="/dev/pinia">Pinia</NuxtLink>
      <NuxtLink class="mr-4" to="/dev/cookie">Cookie</NuxtLink>
      <NuxtLink class="mr-4" to="/dev/middleware">middleware</NuxtLink>
      <p class="mr-4">Cart({{ cart.length }})</p>
      <p>Total Page Visited : {{ usePageVisitCount() }}</p>
    </div>
      <div v-if="authStore.isAuthenticated">
        <NuxtLink to="/profile">profile</NuxtLink>
        <button @click="logout" class="ml-4">Logout</button>
      </div>
      <NuxtLink v-else to="/auth">Login</NuxtLink>
    </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const cart = useCart()

function logout() {
  authStore.logoutUser()
}
</script>