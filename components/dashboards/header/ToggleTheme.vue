<template>
  <v-btn icon @click="toggleTheme">
    <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();

const isDark = computed(() => theme.global.name.value === 'dark');

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>