<template>
  <v-app-bar
    color="primary"
    dark app
    :elevation="0"
    :expand-on-hover="true"
  >
    <v-app-bar-title>
      Vuetify Dashboard
    </v-app-bar-title>
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
    />

    <!-- Search -->
    <dashboards-header-search />

    <!-- Block Menu -->
    <dashboards-header-block-nav />

    <!-- Spacer in between-->
    <v-spacer></v-spacer>

    <!-- Locale -->
    <dashboards-header-locale />

    <!-- Notifications -->
    <dashboards-header-notification />

    <!-- Messages -->
    <dashboards-header-message />

    <!-- Dark/Light Mode Toggle -->
    <dashboards-header-toggle-theme />

    <!-- Account -->
    <dashboards-header-account />
  </v-app-bar>

  <!-- Navigation Drawer -->
  <dashboards-header-navigation-drawer
    v-model:drawer="drawer"
  />

</template>

<script setup lang="ts">
const drawer = ref(true);
</script>

<style scoped>
.v-app-bar {
  padding-right: 20px !important;
}
</style>
