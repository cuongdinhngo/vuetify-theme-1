<template>
  <v-app-bar
    color="primary"
    dark app
    :elevation="0"
  >
    <template v-slot:prepend>
      <v-img
        :src="dashboardImgPath('logolight.svg')"
        width="150"
        height="100"
        contain
        class="ml-2 mr-2"
      />
    </template>
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
    v-model:rail="rail"
  />

</template>

<script setup lang="ts">
const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped>
.v-app-bar {
  padding-right: 20px !important;
}

</style>
