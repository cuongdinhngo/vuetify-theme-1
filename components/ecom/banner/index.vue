<template>
  <div class="banner-section">
    <v-img
      src="https://picsum.photos/id/26/1100/300"
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
</template>
<style scoped>
.banner-section {
  position: relative;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}
</style>