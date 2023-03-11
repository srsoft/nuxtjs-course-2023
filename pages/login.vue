<template>
  <div class="mt-10">
    <h1>login</h1>
    <div v-if="_error">
      <p class="bg-red-600 text-red300 text-sm p-3 text-white">{{ _error }}</p>
    </div>
    <AuthSocialLogin />
    <form @submit.prevent="onSubmit">
      <div class="mb-6">
        <input type="text" v-model="form.email" class="form-control border border-solid">
      </div>
      <div class="mb-6">
        <input type="password" v-model="form.password" class="form-control border border-solid">
      </div>
      <button type="submit" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
        <span v-if="isLoading">Loadding...</span>
        <span v-else>Sign in</span>
      </button>
    </form>
    <NuxtLink to="/signup">Sign up</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const isLoading = ref(false)
const _error = ref(null)

const form = reactive({
  email: "test01@gmail.com",
  password: "Abcd!234"
})

async function onSubmit() {
  if (isLoading.value) return
  isLoading.value = true

  await authStore.loginUser(form.email, form.password).then((status) => {
    isLoading.value = false
    if (status == 200) {
      navigateTo("/")
    } else {
      console.log(status + ' auth error')
    }
    return
  })

}

</script>