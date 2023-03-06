<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <NuxtLink v-for="iphone in iphones" :key="iphone" to="/dev/iphone/iphone-14" class="shadow-lg border rounded-lg text-center">
      <h1>{{ iphone }}</h1>
      <div class="flex justify-center">
        <img :src="`/images/${iphone}.jpeg`" width="200" alt="">
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "iphone"
  })

  // const iphones = ['iphone-12', 'iphone-12-pro', 'iphone-13', 'iphone-13-pro', 'iphone-14', 'iphone-14-pro']

  const { data } = useFetch('/api/iphones')
  const iphones = data.value
</script>