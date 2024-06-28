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
          href: 'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/assets/scss/main.scss"
  ],
  modules: [
    "@nuxt/image",
    '@hypernym/nuxt-gsap',
    '@nuxt/devtools',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },
  
  devtools: { enabled: true }
})