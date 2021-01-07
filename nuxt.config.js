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
  publicRuntimeConfig: [
    'NODE_ENV',
    'SIMPLE_ANALYTICS_URL',
    'NETLIFY_URL'
  ].reduce((obj, key) => ({ ...obj, [key]: process.env[key] }), {}),
  plugins: [
    { src: '~/plugins/simpleAnalytics' }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/ngrok'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs'
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
  },
  ngrok: {
    authtoken: process.env.NGROK_AUTHTOKEN,
    auth: process.env.NGROK_AUTH,
    region: 'eu'
  }
}
