<template>
  <v-app>
    <!-- E-commerce Header -->
    <ecom-header />

    <v-main 
      :class="[!smAndDown ? 'pa-0' : '', 'bg-background']"
    >
      <!-- Banner Section -->
      <ecom-banner
        v-if="!smAndDown"
      />

      <!-- Main Content -->
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const { smAndDown } = useDisplay();
</script>
<style scoped>
.app-bar-transparent {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>