<template>
  <v-layout class="rounded-lg bg-white">
    <!-- Filter -->
    <v-navigation-drawer
      v-model="drawer"
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
          @click="categoryFilter = []; priceRange = [0, 500]; ratingFilter = 0"
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
      <v-container class="">
        <v-row cols="12" v-if="mdAndDown">
          <v-col class="d-flex align-center justify-center">
            <v-icon
              class="d-flex justify-end mr-1"
              @click="drawer = !drawer"
            >
              mdi-menu
            </v-icon>
            Menu
          </v-col>
          <v-divider></v-divider>
        </v-row>

        <!-- Featured Products Section -->
        <v-row class="mb-8">
          <v-col cols="12">
            <h6 class="text-h6">All Products</h6>
          </v-col>
          <v-col
            v-for="(product, idx) in products"
            :key="`${product.id}-${idx}`"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <ecom-item-product
              :product="product"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import type { Category } from '~/types/category';

definePageMeta({
  layout: 'ecom',
  title: 'E-commerce Home',
});

const drawer = ref(true);
const categoryFilter = ref<Category[]>([]);
const priceRange = ref([0, 500]);
const ratingFilter = ref(0);
const { smAndDown, mdAndDown } = useDisplay();

const { products } = useProducts();
</script>