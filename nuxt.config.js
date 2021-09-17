export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sinahu-aksara',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sinahubasa-transliterator',
    '~/plugins/sinahubasa-utility',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    'nuxt-use-sound'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faEdit', 'faBars', 'faCheck', 'faTimes', 'faFire', 'faSadTear', 'faVolumeUp', 'faVolumeMute', 'faPlay']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sound: {
    correct: {
      src: "/sounds/correct.mp3",
      options: {
        volume: 1
      }
    },
    wrong: {
      src: "/sounds/wrong.mp3",
      options: {
        volume: 1
      }
    }
  }
}