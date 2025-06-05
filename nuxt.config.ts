// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/vuetify-theme-1'
  },
  modules: ['vuetify-nuxt-module', '@vueuse/nuxt'],
  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/styles/main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
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
              background: '#EEF5F9', // CUSTOM light background
              surface: '#FFFFFF',
              'on-background': '#000000',
              'on-surface': '#3e3d3d',
            }
          },
          dark: {
            colors: {
              // Primary color: A vibrant blue (#1976D2) used for key elements like v-app-bar, buttons, and links
              primary: '#2196F3',
              // Secondary color: A dark gray (#424242) for subtle accents, backgrounds, or text
              secondary: '#424242',
              // Accent color: A light blue (#82B1FF) for highlights, hover effects, or secondary buttons
              accent: '#FF4081',
              // Error color: A bright red (#FF5252) for error messages, alerts, or validation warnings
              error: '#FF5252',
              // Info color: A medium blue (#2196F3) for informational messages or icons
              info: '#2196F3',
              // Success color: A green (#4CAF50) for success messages, confirmations, or checkmarks
              success: '#4CAF50',
              // Warning color: A yellow (#FFC107) for warnings or cautionary elements
              warning: '#FFC107',
              // Background color: A very dark gray (#121212) for the overall background in dark mode
              background: '#142B46',
              // Surface color: A slightly lighter dark gray (#1E1E1E) for surfaces like cards and sheets
              surface: '#142B46',
              // On-background color: White (#FFFFFF) for text and icons on the background
              'on-background': '#FFFFFF',
              // On-surface color: White (#FFFFFF) for text and icons on surfaces
              'on-surface': '#FFFFFF',
            }
          }
        }
      },
      icons: {
        defaultSet: 'mdi', // Uses Material Design Icons (@mdi/font) for icons like mdi-cart, mdi-magnify
      },
    },
  },
})