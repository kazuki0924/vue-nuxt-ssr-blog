// eslint-disable-next-line nuxt/no-cjs-in-config
const pkg = require('./package')

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My Cool Web Development Blog'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
