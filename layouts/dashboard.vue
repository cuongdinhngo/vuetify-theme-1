<template>
  <v-app>
    <DashboardsHeader />
    <v-main>
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
  padding: 20px;
  background-color: #e99292;
  min-height: calc(100vh - 64px); /* Adjust based on your app bar height */
}
</style>