<template>
  <v-list-item
    :class="[`bg-${bgColor}`, 'rounded-lg', 'py-2']"
    min-width="220"
    slim
  >
    <template v-slot:prepend>
      <v-icon :color="color" size="x-large">{{ icon }}</v-icon>
    </template>
    <v-list-item-title class="text-h6">{{ title }}</v-list-item-title>
    <v-list-item-subtitle class="text-subtitle-2">{{ subTitle }} {{ unitLabel }}</v-list-item-subtitle>
  </v-list-item>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'primary'
  },
  color: {
    type: String,
    default: 'white'
  },
  unitLabel: {
    type: String,
    default: ''
  },
});
</script>