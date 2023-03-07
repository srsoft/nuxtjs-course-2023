// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt3 course",
    }
  },
  // css: ["assets/css/tailwind.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
})
