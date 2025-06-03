// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/vuetify-theme'
  },
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    moduleOptions: {
      styles: 'sass', // Uses Vuetify’s SASS styles for optimized CSS
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light', // Sets the default theme to light mode
        themes: {
          light: {
            colors: {
              // Primary color: A vibrant blue (#1976D2) used for key elements like v-app-bar, buttons, and links
              primary: '#1976D2',
              // Secondary color: A dark gray (#424242) for subtle accents, backgrounds, or text
              secondary: '#424242',
              // Accent color: A light blue (#82B1FF) for highlights, hover effects, or secondary buttons
              accent: '#82B1FF',
              // Error color: A bright red (#FF5252) for error messages, alerts, or validation warnings
              error: '#FF5252',
              // Info color: A medium blue (#2196F3) for informational messages or icons
              info: '#2196F3',
              // Success color: A green (#4CAF50) for success messages, confirmations, or checkmarks
              success: '#4CAF50',
              // Warning color: A yellow (#FFC107) for warnings or cautionary elements
              warning: '#FFC107',
            },
          },
        },
      },
      icons: {
        defaultSet: 'mdi', // Uses Material Design Icons (@mdi/font) for icons like mdi-cart, mdi-magnify
      },
    },
  },
})