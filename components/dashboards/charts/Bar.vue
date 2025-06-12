<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">User Visits</v-card-title>
    <v-card-subtitle class="text-body-2 text-medium-emphasis">
      Last 12 months
    </v-card-subtitle>
    <v-card-text>
      <v-skeleton-loader
        v-if="status === 'pending'"
        type="image, card"
      ></v-skeleton-loader>
      <div 
        v-if="status === 'success'"
        class="chart-container"
        :style="{ height: chartHeight }"
      >
        <canvas
          id="userVisitsChart"
        ></canvas>
      </div>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import Chart from 'chart.js/auto';

const props = defineProps({
  height: {
    type: [String, Number],
    default: '450'
  }
});

const { mobile } = useDisplay();
const { userVisits } = useStatistics();

const { data: userVisitsData, status } = await useAsyncData(
  'user-visits',
  () => userVisits()
);

// Computed property for chart height based on screen size
const chartHeight = computed(() => {
  return mobile.value ? '300px' : '340px';
});

onMounted(() => generateChart());

function generateChart() {
  const canvas = document.getElementById('userVisitsChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found => userVisitsChart');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: userVisitsData.value.map(item => item.month),
      datasets: [
        {
          label: 'Desktop',
          data: userVisitsData.value.map(item => item.desktop),
          backgroundColor: '#1976D2', // Vuetify primary
        },
        {
          label: 'Mobile',
          data: userVisitsData.value.map(item => item.mobile),
          backgroundColor: '#82B1FF', // Vuetify accent
        },
        {
          label: 'Tablet',
          data: userVisitsData.value.map(item => item.tablet),
          backgroundColor: '#4CAF50', // Vuetify success
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
      },
      scales: {
        // x: { stacked: true, title: { display: true, text: 'Month' } },
        // y: { stacked: true, title: { display: true, text: 'Number of Visits' } }
        // x: { stacked: true, display: false }, => HIDDEN X-AXIS
        // y: { stacked: true, display: false } => HIDDEN Y-AXIS
      }
    }
  });
}
</script>