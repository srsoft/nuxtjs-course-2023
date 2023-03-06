<template>
  <nav class="bg-blue-700 shadow-lg p-3 text-white text-lg flex justify-between">
    
    <div class="flex">
      <NuxtLink class="mr-4" to="/">Home</NuxtLink>
      <NuxtLink class="mr-4" to="/dev">Dev</NuxtLink>
      <NuxtLink class="mr-4" to="/dev/iphone">Iphone</NuxtLink>
      <p class="mr-4">Cart({{ cart.length }})</p>
      <p>Total Page Visited : {{ usePageVisitCount() }}</p>
    </div>
      <div v-if="auth.isAuthenticated">
        <NuxtLink to="/dev/profile">Profile</NuxtLink>
        <button @click="logout" class="ml-4">Logout</button>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
    </nav>
</template>

<script setup lang="ts">
const cart = useCart()
const auth = useAuth()

function logout() {
  auth.value.isAuthenticated = false
}
</script>