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
    <v-spacer></v-spacer>
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