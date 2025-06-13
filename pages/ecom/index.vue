<template>
  <v-layout class="rounded-lg bg-white">
    <!-- Filter -->
    <v-navigation-drawer
      v-model="drawer"
      v-if="!smAndDown"
      permanent
      width="250"
      class="border rounded-s-lg"
    >
      <!-- Category filters-->
      <ecom-drawer-category-filter
        v-model:categoryFilter="categoryFilter"
      />

      <!-- Price Range Filter -->
      <ecom-drawer-price-range
        v-model:priceRange="priceRange"
      />

      <!-- Rating filter-->
      <ecom-drawer-rating-filter
        v-model:ratingFilter="ratingFilter"
      />

      <!-- Clear Filters Button -->
      <div  class="d-flex justify-center">
        <v-btn
          class="mt-4 text-none rounded-pill"
          color="primary"
          variant="flat"
          @click="filters = []; priceRange = [0, 500]"
        >
          Clear Filters
        </v-btn>
      </div>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main
      class="border rounded-e-lg"
    >
      <!-- Featured Products-->
      <v-container class="py-8">
        <!-- Featured Products Section -->
        <section class="mb-8">
          <h2 class="text-h4 mb-6">Featured Products</h2>
          
          <v-row>
            <v-col
              v-for="product in products"
              :key="product.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card elevation="2" class="h-100 d-flex flex-column">
                <div class="image-container">
                  <v-img
                    :src="product.image"
                    height="250"
                    cover
                    class="product-image"
                  />
                  <v-btn
                    color="primary"
                    icon
                    class="add-cart"
                    @click="addToCart(product)"
                    size="small"
                  >
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                </div>
                
                <v-card-title class="text-h6 product-title">
                  {{ product.name }}
                </v-card-title>
                
                <v-card-text class="flex-grow-1 d-flex flex-column">
                  <div class="text-h6 text-primary font-weight-bold product-price">
                    ${{ product.price }}
                  </div>
                  <p class="text-body-2 mt-2 description-text">
                    {{ product.description }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <!-- Categories Section -->
        <section class="py-8 bg-grey-lighten-5 rounded">
          <h2 class="text-h4 mb-6 text-center">Shop by Category</h2>
          
          <v-row>
            <v-col
              v-for="category in categories"
              :key="category.id"
              cols="12"
              sm="6"
              md="3"
            >
              <v-card class="text-center" elevation="1">
                <v-avatar size="80" class="ma-4">
                  <v-icon size="40" :icon="category.icon" />
                </v-avatar>
                <v-card-title class="text-h6">
                  {{ category.name }}
                </v-card-title>
                <v-card-actions class="justify-center pb-4">
                  <v-btn variant="outlined" color="primary">
                    Browse
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import type { Categories } from '@/composables/useProducts';

definePageMeta({
  layout: 'ecom',
  title: 'E-commerce Home',
});

const drawer = ref(true);
const categoryFilter = ref<Categories[]>([]);
const priceRange = ref([0, 500]);
const ratingFilter = ref(0);
const { smAndDown } = useDisplay();

// Sample data
const products = ref([
  {
    id: 1,
    name: 'MacBook Air Pro',
    price: 299.99,
    image: 'https://picsum.photos/300/250?random=1',
    description: 'Comfortable and stylish modern chair. Comfortable and stylish modern chair'
  },
  {
    id: 2,
    name: 'Desk Lamp',
    price: 89.99,
    image: 'https://picsum.photos/300/250?random=2',
    description: 'Adjustable LED desk lamp'
  },
  {
    id: 3,
    name: 'Coffee Table',
    price: 199.99,
    image: 'https://picsum.photos/300/250?random=3',
    description: 'Glass top coffee table'
  },
  {
    id: 4,
    name: 'Bookshelf',
    price: 159.99,
    image: 'https://picsum.photos/300/250?random=4',
    description: 'Wooden bookshelf with 5 shelves'
  },
  {
    id: 1,
    name: 'MacBook Air Pro',
    price: 299.99,
    image: 'https://picsum.photos/300/250?random=1',
    description: 'Comfortable and stylish modern chair. Comfortable and stylish modern chair'
  },
  {
    id: 2,
    name: 'Desk Lamp',
    price: 89.99,
    image: 'https://picsum.photos/300/250?random=2',
    description: 'Adjustable LED desk lamp'
  },
  {
    id: 3,
    name: 'Coffee Table',
    price: 199.99,
    image: 'https://picsum.photos/300/250?random=3',
    description: 'Glass top coffee table'
  },
  {
    id: 4,
    name: 'Bookshelf',
    price: 159.99,
    image: 'https://picsum.photos/300/250?random=4',
    description: 'Wooden bookshelf with 5 shelves'
  }
]);

const categories = ref([
  { id: 1, name: 'Furniture', icon: 'mdi-sofa' },
  { id: 2, name: 'Electronics', icon: 'mdi-laptop' },
  { id: 3, name: 'Clothing', icon: 'mdi-tshirt-crew' },
  { id: 4, name: 'Books', icon: 'mdi-book' }
]);

const addToCart = (product: any) => {
  // Add to cart logic
  console.log('Added to cart:', product.name);
};
</script>
<style scoped>
.image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
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
  position: absolute;
  top: 235px;
  right: 10px;
  cursor: pointer;
  z-index: 9999;
}
</style>