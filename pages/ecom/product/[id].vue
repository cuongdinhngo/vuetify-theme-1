<template>
  <!--Product Info-->
  <v-row class="bg-white my-4">
    <v-col
      v-if="status === 'success'"
      cols="12"
      md="6"
    >
      <v-sheet elevation="0">
        <v-expand-transition>
          <v-sheet v-if="model != null" class="image-container">
            <v-img
              :src="getRandomPhoto(model, { width: 600, height: 400 })"
              cover
              aspect-ratio="16/9"
              height="400"
            />
          </v-sheet>
        </v-expand-transition>
        <v-slide-group
          v-model="model"
          selected-class="bg-primary"
          show-arrows
          center-active
        >
          <v-slide-group-item
            v-for="n in 10"
            :key="n"
            v-slot="{ toggle, selectedClass }"
          >
            <v-card
              :class="['ma-4', selectedClass]"
              color="grey-lighten-1"
              height="100"
              width="100"
              @click="toggle(); model = n"
            >
              <div class="d-flex fill-height align-center justify-center">
                <v-img
                  :src="getRandomPhoto(n, { width: 100, height: 100 })"
                  cover
                  aspect-ratio="16/9"
                />
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <v-col v-else cols="12" md="6">
      <v-skeleton-loader
        class="image-container"
        type="image"
        height="400"
      ></v-skeleton-loader>
    </v-col>
    
    <v-col
      v-if="status === 'success'"
      cols="12"
      md="6"
    >
      <v-card class="" elevation="0">
        <v-card-title class="text-h5">{{ product.name }}</v-card-title>
        <v-card-title class="text-h6 mb-2 text-black">${{ product.price }}</v-card-title>
        <v-card-subtitle class="mb-2">
          <v-rating
            v-model="product.rating"
            color="amber"
            size="15"
            class="ga-2 mr-2"
            half-increments
          ></v-rating>
          <span>{{ product.rating }} (200 reviews)</span>
        </v-card-subtitle>
        <v-card-text>{{ product.summary }}</v-card-text>
        <v-row class="ml-1 pb-1">
          <v-col cols="12" sm="4">
            <v-number-input
              control-variant="split"
              variant="outlined"
              hide-details
              density="compact"
            ></v-number-input>
          </v-col>
        </v-row>
        <v-card-actions class="ml-2 ga-6">
          <v-btn color="primary" variant="flat">Buy Now</v-btn>
          <v-btn color="error" variant="flat">Add to Wishlist</v-btn>
        </v-card-actions>  
      </v-card>
    </v-col>
    <v-col v-else cols="12" md="6">
      <v-skeleton-loader
        class="pa-4"
        type="card"
        height="400"
      ></v-skeleton-loader>
    </v-col>  
  </v-row>

  <!--Tabs for Description and Rating-->
  <v-row class="bg-white">
    <v-col cols="12">
      <v-tabs
        v-model="selectedTab"
      >
        <v-tab value="description" color="primary" class="text-none">Description</v-tab>
        <v-tab value="review" color="primary" class="text-none">Reviews</v-tab>
      </v-tabs>

      <v-tabs-window v-model="selectedTab">
        <v-tabs-window-item value="description">
          <div
            v-if="status === 'success'"
            class="my-4 mx-2"
          >
            {{ product.description }}
          </div>
          <v-skeleton-loader
            v-else
            class="ma-4"
            type="text"
            height="200"
          />  
        </v-tabs-window-item>

        <v-tabs-window-item value="review">
          <v-row
            v-if="status === 'success'"
            class="my-4 mx-2"
          >
            <!-- Average Rating -->
            <v-col cols="12" sm="6" md="4">
              <v-card
                border="sm"
                variant="outlined"
                class="d-flex flex-column align-center text-center py-5"
                min-height="240"
              >
                <v-card-text class="text-h6">
                  <p>Average Rating</p>
                  <p class="mt-2">{{ product.rating }} / 5</p>
                  <v-rating
                    v-model="product.rating"
                    color="amber"
                    size="20"
                    class="ga-3"
                    half-increments
                  />
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Reviews summary -->
            <v-col cols="12" sm="6" md="4">
              <v-card
                border="sm"
                variant="outlined"
                min-height="240"
              >
                <v-card-text>
                  <v-list-item
                    v-for="(item, index) in [{ star: 1, value: 20 }, { star: 2, value: 30 }, { star: 3, value: 25 }, { star: 4, value: 15 }, { star: 5, value: 10 }]"
                  >
                    <template v-slot:prepend>
                      <span>{{ item.star }} Stars</span>
                    </template>
                    <v-progress-linear
                      :model-value="item.value"
                      color="primary"
                      height="10"
                      class="ml-2"
                    />
                    <template v-slot:append>
                      <span class="ml-1">({{ item.value }})</span>
                    </template>  
                  </v-list-item>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Review Action -->
            <v-col cols="12" sm="12" md="4">
              <v-card
                border="sm"
                variant="flat"
                class="d-flex justify-center align-center py-5"
                min-height="100"
              >
                <v-card-actions>
                  <v-btn color="primary" variant="flat" class="text-none" prepend-icon="mdi-pen">Write a Review</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <p class="text-h5 mb-4">Related Products</p>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <v-slide-group
        v-model="model"
        class="pa-2"
        show-arrows
        mobile-breakpoint="md"
        center-active
      >
        <v-slide-group-item
          v-if="relatedStatus === 'success'"
          v-for="product in relatedProducts"
          :key="product.id"
        >
          <v-sheet
            class="ma-2"
            width="300"
            elevation="2"
          >
            <ecom-item-product :product="product" />
          </v-sheet>
        </v-slide-group-item>
        
        <!-- Loading skeleton -->
        <v-slide-group-item
          v-else
          v-for="n in 6"
          :key="n"
        >
          <v-sheet
            class="ma-2"
            width="300"
            elevation="2"
          >
            <v-skeleton-loader
              type="image, article"
              height="350"
            />
          </v-sheet>
        </v-slide-group-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'ecom',
  title: 'Product Details',
});

import { useRouteParams, useRouteQuery } from '@vueuse/router';

const selectedTab = ref('review');
const { get, getRelatedProducts } = useProducts();
const productId = useRouteParams('id', null, {transform: Number});
const category = useRouteQuery('category', null);
const model = ref(productId.value);
console.log('Model => ', model.value);

const { data:product, error, status } = await useAsyncData(
  `product/${productId.value}`,
  () => get(productId.value),
);

const { data:relatedProducts, error:relatedErr, status:relatedStatus } = await useAsyncData(
  `related-products/${category.value}`,
  () => getRelatedProducts(category.value),
);

</script>
<style scoped>
.image-container {
  height: 400px;
}
</style>