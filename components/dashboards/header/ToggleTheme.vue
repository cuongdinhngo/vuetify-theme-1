<template>
  <v-btn icon @click="toggleTheme">
    <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useStorage } from '@vueuse/core'

const theme = useTheme();

const isDark = computed(() => {
  const currentTheme = useStorage('vuetify-theme', 'light');
  theme.global.name.value = currentTheme.value;
  console.log('Current theme:', currentTheme.value, theme.global.name.value);
  return currentTheme.value === 'dark'
});

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  localStorage.setItem('vuetify-theme', theme.global.name.value);
};
</script>