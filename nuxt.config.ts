// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          // src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          // type: "text/javascript",
        },
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: '//fonts.googleapis.com/css2?family=Familjen+Grotesk:,wght@0,300..500;1,400..700&display=swap' 
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/assets/scss/main.scss"
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    "@nuxt/image"
  ],
  devtools: { enabled: true }
})