<template>
  <div>
    <h1>middleware</h1>
    <p>welcome username</p>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'sidebar',
  // 인라인 무명 미들웨어
  // middleware: () => {
  //   const auth = useAuth()
  //   return auth.value.isAuthenticated
  // }

  // 명명 미들웨어
  middleware: ['auth']
})
</script>