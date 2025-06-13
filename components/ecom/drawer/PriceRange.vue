<template>
  <v-expansion-panels variant="accordion" elevation="0" multiple v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title class="text-subtitle-1 font-weight-medium ma-0">
        Price Range
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-range-slider
          v-model="priceRange"
          thumb-label="always"
          step="1"
          min="0"
          max="500"
          color="primary"
        ></v-range-slider>
      </v-expansion-panel-text>  
    </v-expansion-panel>
    <v-divider></v-divider>
  </v-expansion-panels>
</template>
<script setup lang="ts">
const panel = ref<number[]>([0]);

const priceRange = defineModel('priceRange', {
  type: Array<number>,
  default: () => [0, 500],
});

watch(priceRange, (newValue) => {
  console.log('Price range updated:', newValue);
});
</script>