<template>
  <v-container>
    <v-row>
      <!-- Monthly Sales Chart-->
      <v-col cols="12" md="8">
        <DashboardsChartsLine
          :height="450"
        />
      </v-col>

      <!-- Payment Distribution Chart-->
      <v-col cols="12" md="4">
        <DashboardsChartsPie
          :height="450"
        />
      </v-col>
    </v-row>

    <v-row>
      <!-- Categories Distribution Chart-->
      <v-col cols="12" md="4">
        <DashboardsChartsDonut
          :height="450"
        />
      </v-col>

      <!-- User Visits Chart-->
      <v-col cols="12" md="8">
        <DashboardsChartsBar
          :height="450"
        />
      </v-col>
    </v-row>

    <v-row>
      <!-- Monthly Sales vs User Visits Chart-->
      <v-col cols="12" md="12">
        <DashboardsChartsMix
          :height="600"
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