<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <NuxtLink to="/dev/iphone/iphone-14" class="shadow-lg border rounded-lg text-center">
      <h1>Iphone 14</h1>
      <div class="flex justify-center">
        <img src="/images/iphone-14-pro.jpeg" width="200" alt="">
      </div>
    </NuxtLink>
    <NuxtLink to="/dev/iphone/iphone-12" class="shadow-lg border rounded-lg text-center">
      <h1>Iphone 12</h1>
      <div class="flex justify-center">
        <img src="/images/iphone-12-pro.jpeg" width="200" alt="">
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "iphone"
  })
</script>