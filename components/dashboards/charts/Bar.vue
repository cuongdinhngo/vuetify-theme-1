<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h5">User Visits</v-card-title>
    <v-card-text>
      <v-skeleton-loader
        v-if="status === 'pending'"
        type="image, card"
      ></v-skeleton-loader>
      <canvas
        v-if="status === 'success'"
        id="userVisitsChart"
      ></canvas>
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

const { userVisits } = useStatistics();
const { data: userVisitsData, status } = await useAsyncData(
  'user-visits',
  () => userVisits()
);

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
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'User Visits by Device (Last 12 Months)' }
      },
      scales: {
        x: { stacked: true, title: { display: true, text: 'Month' } },
        y: { stacked: true, title: { display: true, text: 'Number of Visits' } }
        // x: { stacked: true, display: false }, => HIDDEN X-AXIS
        // y: { stacked: true, display: false } => HIDDEN Y-AXIS
      }
    }
  });
}
</script>