// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  image: {
    provider: 'netlify',
    netlify: {
      baseURl: process.env.IMAGES_URL
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
        },
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/assets/scss/main.scss"
  ],

  modules: ["@nuxt/image", '@hypernym/nuxt-gsap', '@nuxt/devtools', "nuxt-gtag"],

  gtag: {
    id: 'G-DG43J8Y4FQ'
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },

  devtools: { enabled: true }
})