<template>
  <div class="mt-10">
    <h1>login</h1>
    <div v-if="_error">
      <p class="bg-red-600 text-red300 text-sm p-3 text-white">{{ _error }}</p>
    </div>
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
  </div>
</template>

<script setup lang="ts">
// const url = "https://reqres.in/api/login"
const url = "http://localhost:8086/auth/login"
const isLoading = ref(false)
const _error = ref(null)

const form = reactive({
  // email: "eve.holt@reqres.in",
  // password: "cityslicka"
  email: "test01@gmail.com",
  password: "Abcd!234"
})

async function onSubmit() {
  if (isLoading.value) return
  isLoading.value = true

  const { data, error } = await useFetch(url, {
    method: "post",
    body: form
  })

  isLoading.value = false
  if (error.value) {
    _error.value = error.value.data.error
    console.log('_error:', _error.value)
    return
  }
  
  const accessToken = data.value.accessToken
  if(accessToken) {
    console.log('accessToken:', accessToken)
    const auth = useAuth()
    auth.value.isAuthenticated = true
    navigateTo("/")
  } else {
    alert('login error')
  }
}
</script>