export default {
  target: 'static',
  loading: false,
  loadingIndicator: {
    name: 'pulse',
    color: '#1d4ed8',
    background: '#f9fafb'
  },
  head: {
    title: 'A Brief History Of Yesterday',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  build: {
  },
  generate: {
    fallback: true
  },
  pwa: {
    meta: {
      name: 'A Brief History Of Yesterday',
      theme_color: '#1d4ed8',
      mobileAppIOS: true,
      appleStatusBarStyle: 'black'
    },
    manifest: {
      name: 'A Brief History Of Yesterday',
      short_name: 'Yesterday',
      background_color: '#f9fafb',
      display: 'standalone',
      theme_color: '#1d4ed8'
    }
  }
}
