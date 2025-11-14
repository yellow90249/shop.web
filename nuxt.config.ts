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
      title: '土豆',
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      API_BASE: 'http://api.revengepotato.com/api',
      // API_BASE: '/api',
    },
  },

  nitro: {
    // 開發用
    devProxy: {
      '/api': {
        target: 'http://localhost:8000/api',
        changeOrigin: true,
      },
    },
  },

  compatibilityDate: '2024-11-10',
});
