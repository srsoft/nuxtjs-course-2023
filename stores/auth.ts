import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: [],
        access_token: '',
        isAuthenticated: false
    }),
    actions:{
        async loginUser(email:string, password:string){
            let status = 0
            let accessToken = ''
            await useFetch('http://localhost:8086/auth/login', {
                method: "post",
                body: { email, password },
                onResponse({ response }) {
                  status = response.status
                  accessToken = response._data.accessToken
                }
            })

            if (status == 200) {
                this.access_token = accessToken
                this.isAuthenticated = true
                await this.loadUser()
              }

            return status
        },
        async loginOauth2(accessToken:string) {
            this.logoutUser()
            this.access_token = accessToken
            if (this.access_token) {                
                this.isAuthenticated = true
                await this.loadUser()
            }
            return 200           
        },
        async loadUser() {
            await useFetch('http://localhost:8086/user/me', {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.access_token
                },
            }).then((res) => {
                this.user = res.data.value
            })
        },
        logoutUser(){
            this.user = []
            this.access_token = ''
            this.isAuthenticated = false
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
          sameSite: 'strict',
        }),
    },
})