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
                localStorage.setItem("access_token", this.access_token)
            }
            return { data, error }
        },
    },

})