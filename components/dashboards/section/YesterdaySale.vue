<template>
  <v-sheet
    elevation="0"
    rounded="lg"
    :height="height"
    :width="width"
    class="px-2 py-1"
  >
    <div class="d-flex align-center">
      <v-icon
        icon="mdi-cart-outline"
        size="40"
        class="mr-3"
        color="primary"
      ></v-icon>
      <div>
        <div class="font-weight-medium">300</div>
        <div class="text-caption text-grey">Yesterday sales</div>
      </div>
    </div>
  </v-sheet>
</template>
<script setup lang="ts">
const props = defineProps({
  height: {
    type: [String, Number],
    default: '50'
  },
  width: {
    type: [String, Number],
    default: '170'
  }
});
</script>
<style scoped>
</style>