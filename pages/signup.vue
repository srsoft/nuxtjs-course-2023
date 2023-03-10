<template>
  <div class="mt-10">
    <h1>회원가입</h1>
    <div v-if="_error">
      <p class="bg-red-600 text-red300 text-sm p-3 text-white">{{ _error }}</p>
    </div>
    <AuthSocialLogin />
    <form @submit.prevent="onSubmit">
      <div class="mb-6">
        <input type="text" v-model="form.name" class="form-control border border-solid">
      </div>
      <div class="mb-6">
        <input type="text" v-model="form.email" class="form-control border border-solid">
      </div>
      <div class="mb-6">
        <input type="password" v-model="form.password" class="form-control border border-solid">
      </div>
      <button type="submit" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
        <span v-if="isLoading">Loadding...</span>
        <span v-else>회원가입</span>
      </button>
    </form>
    <NuxtLink to="/login">로그인</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const isLoading = ref(false)
const _error = ref(null)

const form = reactive({
  name: "tester",
  email: "test01@gmail.com",
  password: "Abcd!234"
})

async function onSubmit() {
  if (isLoading.value) return
  isLoading.value = true

  const { error } = await authStore.loginUser(form.email, form.password)

  isLoading.value = false
  if (error.value) {
    _error.value = error.value.data.error
    console.log('_error:', _error.value)
    return
  }
  
  navigateTo("/")
}

</script>