// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  // pinia: {
  //   autoImports: ["defineStore"],
  // },
  imports: {
    dirs: ["./stores"],
  },

  // Persistedstate
  // pinia: {
  //   storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  // },

  // piniaPersistedstate: {
  //   cookieOptions: {
  //     sameSite: "strict",
  //   },
  //   storage: "localStorage",
  // },

  runtimeConfig: {
    apiSecret: process.env.NUXT_APP_URL, // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiUrl2: process.env.NUXT_PUBLIC_API_URL2, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      // apiUrl2: process.env.NUXT_PUBLIC_API_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      appUrl: process.env.NUXT_APP_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      // appUrl: process.env.NUXT_API_BASE_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
