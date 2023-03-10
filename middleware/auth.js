import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  
  
  // const authStore = useAuthStore()
  // if (!authStore.isAuthenticated) {
  //   alert('login 이 필요한 페이지 입니다.')
  //   return false
  // }
  return true

  // const auth = JSON.parse(localStorage.getItem('auth'))
  // console.log('auth.access_token:', auth.isAuthenticated)

  // if(!auth.isAuthenticated){
  //   console.log('not')
  // }else{
  //   console.log('ok')
  // }
  // return auth.isAuthenticated
})