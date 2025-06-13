<template>
  <v-app>
    <!-- E-commerce Header -->
    <ecom-header />

    <v-main 
      :class="[!smAndDown ? 'pa-0' : '', 'bg-background']"
    >
      <!-- Banner Section -->
      <div
        v-if="!smAndDown"
        class="banner-section"
      >
        <v-img
          src="https://picsum.photos/1100/300"
          height="400"
          cover
          class="banner-image"
        >
          <div class="banner-overlay">
            <v-container class="d-flex align-center justify-center h-100">
              <div class="text-center text-white">
                <h1 class="text-h3 mb-4">Welcome to Our Store</h1>
                <p class="text-h6">Discover amazing products</p>
              </div>
            </v-container>
          </div>
        </v-img>
      </div>

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