<template>
  <v-card elevation="2" class="d-flex flex-column product-card">
    <div class="image-container">
      <NuxtLink :to="{name: 'ecom-product-id', params: { id: product.id }, query: { category: product.category }}">
        <v-img
          :src="product.photo"
          height="250"
          cover
          class="product-image"
        >
        </v-img>
      </NuxtLink>
      <v-btn
        color="primary"
        icon
        class="add-cart"
        @click="addToCart(product)"
        size="small"
        elevation="4"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </div>
    <NuxtLink :to="{name: 'ecom-product-id', params: { id: product.id }, query: { category: product.category }}">
      <v-card-title class="text-h6 product-title">
        {{ product.name }}
      </v-card-title>
    </NuxtLink>
    <NuxtLink :to="{name: 'ecom-product-id', params: { id: product.id }, query: { category: product.category }}">
      <v-card-text class="flex-grow-1 d-flex flex-column">
        <div class="text-h6 text-primary font-weight-bold product-price">
          ${{ product.price }}
        </div>
        <p class="text-body-2 mt-2 description-text">
          {{ product.description }}
        </p>
      </v-card-text>
    </NuxtLink>
  </v-card>
</template>
<script setup lang="ts">
import type { Product } from '~/types/product';
const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  },
  height: {
    type: Number,
    default: 100
  }
});

const addToCart = (product: any) => {
  console.log('Added to cart:', product.name);
};
</script>
<style scoped>
.product-card {
  position: relative;
}

.image-container {
  position: relative;
  height: 250px;
  overflow: visible;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-title {
  min-height: 64px;
  display: flex;
  align-items: center;
}

.product-price {
  min-height: 32px;
  display: flex;
  align-items: center;
}

.description-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  min-height: calc(1.4em * 2);
  max-height: calc(1.4em * 2);
}

.add-cart {
  position: absolute !important;
  top: 230px !important;
  right: 10px !important;
  z-index: 1000 !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease !important;
}

.add-cart:hover {
  transform: scale(1.1) !important;
  z-index: 1001 !important;
}
</style>