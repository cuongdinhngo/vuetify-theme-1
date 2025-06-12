<template>
  <v-container>
    <v-row>
      <!-- Monthly Sales Chart-->
      <v-col cols="12" md="8">
        <DashboardsChartsLine
          :height="mobile ? 400 : 450"
        />
      </v-col>

      <!-- Payment Distribution Chart-->
      <v-col cols="12" md="4">
        <DashboardsChartsPie
          :height="mobile ? 400 : 450"
        />
      </v-col>
    </v-row>

    <v-row>
      <!-- Categories Distribution Chart-->
      <v-col cols="12" md="4">
        <DashboardsChartsDonut
          :height="mobile ? 400 : 450"
        />
      </v-col>

      <!-- User Visits Chart-->
      <v-col cols="12" md="8">
        <DashboardsChartsBar
          :height="mobile ? 400 : 450"
        />
      </v-col>
    </v-row>

    <v-row>
      <!-- Monthly Sales vs User Visits Chart-->
      <v-col cols="12" md="12">
        <DashboardsChartsMix
          :height="650"
        />
      </v-col>
    </v-row>

    <v-row>
      <!-- Top Saler Table-->
      <v-col cols="12" md="9">
        <DashboardsChartsDataTable
          :height="450"
        />
      </v-col>

      <!-- User Visits Chart-->
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <DashboardsChartsDailyCard
              :height="210"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <DashboardsChartsWeeklyCard
              :height="210"
            />
          </v-col>
        </v-row>
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

const { mobile } = useDisplay();
</script>