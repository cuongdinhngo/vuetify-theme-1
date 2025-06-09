<template>
  <div class="breadcrumb-container d-flex justify-space-between align-center">
    <div class="breadcrumb-left">
      <h4>Breadcrumbs</h4>
      <v-breadcrumbs :items="breadcrumbs">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>

    <div class="breadcrumb-right d-none d-sm-flex justify-space-between ga-4">
      <DashboardsSectionYesterdayRevenue
        height="50"
        width="180"
      />
      <DashboardsSectionYesterdaySale
        height="50"
        width="170"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const { breadcrumbs, updateBreadcrumbs, currentRoute } = useBreadcrumbs();

onMounted(() => {
  updateBreadcrumbs();

  console.log('Breadcrumbs updated:', breadcrumbs.value);
});

watch(currentRoute, (newRoute) => {
  updateBreadcrumbs();
  console.log('Current route changed:', newRoute);
});

</script>
<style>
.breadcrumb-container {
  max-width: 1170px !important;
  margin: 0 auto;
  padding: 20px 32px 0 32px;
  background-color: transparent;
}
.v-breadcrumbs {
  padding: 0 !important;
  color: rgb(var(--v-theme-on-surface)) !important;
  font-size: 0.8rem !important;
  font-weight: 600 !important;

  .v-breadcrumbs-item {
    padding: 0 !important;

    .v-breadcrumbs-item--link {
      text-decoration: none !important;
    }
  }
}

</style>