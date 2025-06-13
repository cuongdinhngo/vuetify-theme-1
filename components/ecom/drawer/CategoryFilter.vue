<template>
  <v-expansion-panels variant="accordion" elevation="0" multiple v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title class="text-subtitle-1 font-weight-medium ma-0">
        Categories
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list density="compact">
          <v-list-item
            v-for="item in categories"
            :key="item.value"
            link
            class="pa-0 ma-0"
          >
            <template #prepend>
              <v-checkbox
                v-model="categoryFilter"
                :value="item.value"
                hide-details
                density="comfortable"
                multiple
                color="primary"
              ></v-checkbox>
            </template>

            <v-list-item-title class="text-subtitle-1">
              {{ item.name }}
            </v-list-item-title>    
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>  
    </v-expansion-panel>
    <v-divider></v-divider>
  </v-expansion-panels>
</template>
<script setup lang="ts">
import type { categories, Categories } from '@/composables/useProducts';

const categoryFilter = defineModel('categoryFilter', {
  type: Array<Categories>,
  default: () => [],
});
const panel = ref<number[]>([0]);
</script>