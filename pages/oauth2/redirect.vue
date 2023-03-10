<template>
  <div>
    {{ token }}
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  })

  const route = useRoute()
  const token = computed(() => {
    return route.query.token
  })
</script>