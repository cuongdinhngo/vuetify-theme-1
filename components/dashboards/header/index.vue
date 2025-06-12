<template>
  <FullHeader
    v-if="!mobile"
  />
  <MobileHeader
    v-else
  />
</template>

<script setup lang="ts">
import FullHeader from './FullHeader.vue';
import MobileHeader from './MobileHeader.vue';

const { mobile } = useDisplay();
</script>
