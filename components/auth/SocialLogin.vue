<template>
  <div>
    <ul class="mt-10">
      <li v-for="(item, idx) in items" :key="idx" class="mb-10">
        <a :href="`${API_BASE_URL}/oauth2/authorize/${item.type}?redirect_uri=${OAUTH2_REDIRECT_URI}`" class="p-3 outline rounded-md">{{ item.description }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const API_BASE_URL = 'http://localhost:8086'
const OAUTH2_REDIRECT_URI = 'http://localhost:3006/oauth2/redirect'
const items = [
  { type: 'google', description: 'Log in with Google' },
  { type: 'facebook', description: 'Log in with Facebook' },
  { type: 'github', description: 'Log in with Github' },
]
</script>