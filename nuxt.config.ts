// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vue3-carousel/dist/carousel.css', '~/assets/scss/main.scss'],

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],

  app: {
    head: {
      title: 'Outstock - Clean, Minimal eCommerce Vue Nuxt 3 Template',
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js',
        },
      ],
    },
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:7777',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  compatibilityDate: '2024-11-10',
});
