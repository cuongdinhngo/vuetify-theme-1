<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <DashboardsChartsLine
          :height="450"
        />
      </v-col>
      <v-col cols="12" md="4">
        <DashboardsChartsPie
          :height="450"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Dashboards',
  meta: [
    { name: 'description', content: 'Dashboard overview page' },
    { name: 'keywords', content: 'dashboard, overview, analytics' }
  ]
});
</script>