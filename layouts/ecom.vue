<template>
  <v-layout class="">
    <v-app-bar 
      :elevation="0"
      color="transparent"
      class="app-bar-transparent"
      absolute
    >
      <!-- E-commerce Header -->
      <ecom-header />
    </v-app-bar>

    <v-main class="pa-0">
      <!-- Banner Section -->
      <div class="banner-section">
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
  </v-layout>
</template>

<style scoped>
.app-bar-transparent {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>