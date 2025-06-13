<template>
  <Full v-if="!smAndDown" />
  <Mobile v-else />
</template>
<script lang="ts" setup>
import Full from './Full.vue';
import Mobile from './Mobile.vue';
const { smAndDown } = useDisplay();
</script>