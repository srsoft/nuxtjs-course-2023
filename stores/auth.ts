import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: [],
        access_token: '',
        isAuthenticated: false
    }),
    actions:{
        async loginUser(email:string, password:string){
            const { data, error } = await useFetch('http://localhost:8086/auth/login', {
                method: "post",
                body: { email, password }
            })
            this.access_token = data.value.accessToken
            if (this.access_token) {                
                this.isAuthenticated = true

                await useFetch('http://localhost:8086/user/me', {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.access_token
                    }
                }).then((res) => {
                    this.user = res.data.value
                })

            }
            return { error }
        },
        logoutUser(){
            this.user = null
            this.access_token = ''
            this.isAuthenticated = false
            // localStorage.removeItem('auth')
        }
    },
    persist: {
        enabled: true
    }

})