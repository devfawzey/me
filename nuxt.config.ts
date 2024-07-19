// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


  compatibilityDate: '2024-04-03',


  devtools: { enabled: true },


  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "notivue/nuxt",
    "@nuxt/image"
  ],

  image: {
    provider: "vercel"
  },

  css: ["notivue/notification.css", "notivue/animations.css"],


  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },


  googleFonts: {
    families: {
      "DM Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Inter": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Josefin Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  }


})