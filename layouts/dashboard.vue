<template>
  <v-app>
    <DashboardsHeader />
    <v-main>
      <DashboardsSectionBreadcrumb />
      <v-container
        class="content-container"
        fluid
      >
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
</script>
<style scoped>
.content-container {
  max-width: 1170px !important;
  margin: 0 auto;
  background-color: transparent;
  min-height: calc(100vh - 64px);
}
</style> 