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

    <!-- Notifications -->
    <dashboards-header-notification />

    <!-- Messages -->
    <dashboards-header-message />

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Navigation Drawer -->
  <dashboards-header-navigation-drawer
    v-model:drawer="drawer"
  />

</template>
<script setup lang="ts">
const drawer = ref(true);
</script>
