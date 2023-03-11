import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  if (!authStore.$state.isAuthenticated) {
    alert('login 이 필요한 페이지 입니다.')
    return false
  }
  return authStore.$state.isAuthenticated
})