// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@assets": "/<rootDir>/assets",
  },
  modules: [
    "@ant-design-vue/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ]
})
