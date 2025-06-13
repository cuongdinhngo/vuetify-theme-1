<template>
  <v-expansion-panels variant="accordion" elevation="0" multiple v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title class="text-subtitle-1 font-weight-medium ma-0">
        Rating
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-rating
          v-model="ratingFilter"
          active-color="orange-lighten-1"
          color="grey"
          density="comfortable"
          half-increments
        ></v-rating>
      </v-expansion-panel-text>  
    </v-expansion-panel>
    <v-divider></v-divider>
  </v-expansion-panels>
</template>
<script setup lang="ts">
const panel = ref<number[]>([0]);

const ratingFilter = defineModel('ratingFilter', {
  type: Number,
  default: () => 0,
});

watch(ratingFilter, (newValue) => {
  console.log('Rating updated:', newValue);
});
</script>