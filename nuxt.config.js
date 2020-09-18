export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'new-pakken',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: { lang: 'ja' },
  },

  ssr: true,

  // Global CSS (https://go.nuxtjs.dev/config-css)
    '~/assets/css/sanitize.css',
    '@fortawesome/fontawesome-svg-core/styles.css',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/composition-api', '~/plugins/fontawesome.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
