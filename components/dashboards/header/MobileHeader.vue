<template>
  <v-app-bar
    color="primary"
  >

    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-spacer></v-spacer>

    <!-- Search -->
    <dashboards-header-search />

    <v-btn active>
      <v-img
        :src="dashboardImgPath('mobile_logo.png')"
        width="30"
        height="30"
        contain
      ></v-img>
    </v-btn>

    <!-- Dark/Light Mode Toggle -->
    <dashboards-header-toggle-theme />

    <v-spacer></v-spacer>

    <v-btn
      icon
      id="menu-activator"
    >
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-menu
      activator="#menu-activator"
      offset="10"
    >
      <v-card
        min-width="350"
        color="primary"
        class="px-2 py-3 d-flex justify-space-between"
        elevation="10"
      >
        <!-- Block Menu -->
        <dashboards-header-block-nav />

        <!-- Locale -->
        <dashboards-header-locale />

        <!-- Notifications -->
        <dashboards-header-notification />

        <!-- Messages -->
        <dashboards-header-message />

        <!-- Account -->
        <dashboards-header-account />

      </v-card>
    </v-menu>
  </v-app-bar>

  <!-- Navigation Drawer -->
  <dashboards-header-navigation-drawer
    v-model:drawer="drawer"
    v-model:rail="rail"
  />
</template>
<script setup lang="ts">
const drawer = ref(false);
const rail = ref(false);
</script>