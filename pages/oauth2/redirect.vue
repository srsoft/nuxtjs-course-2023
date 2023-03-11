<template>
  <div>
    <!-- {{ token }} -->
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const isLoading = ref(false)
const _error = ref(null)

const router = useRouter()
const route = useRoute()
const token = computed(() => {
  return route.query.token
})

if (token.value) {
  onSubmit(<string>token.value)
}

async function onSubmit(token:string) {
  if (isLoading.value) return
  isLoading.value = true

  await authStore.loginOauth2(token).then((status) => {
    isLoading.value = false
    if (status == 200) {
      navigateTo("/")
    }
    return
  })
}

definePageMeta({
  layout: false
})
</script>