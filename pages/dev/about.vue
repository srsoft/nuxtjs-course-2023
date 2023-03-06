<template>
  <div>
    <h1>
      about
    </h1>
    <div class="mt-10 mb-10">
      <NuxtLink to="/" class="p-3 bg-indigo-900 text-white rounded-md mt-10 w-48">go home</NuxtLink>
    </div>
    <p>welcome username</p>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  })
</script>