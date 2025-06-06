<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">Last 7 days sales</v-card-title>
    <v-card-text>
      <canvas
        id="dailySalesChart"
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

const { dailySales } = useStatistics();

const { data: dailySalesData } = await useAsyncData(
  'daily-sales',
  () => dailySales()
);

onMounted(() => generateChart());
function generateChart() {
  const canvas = document.getElementById('dailySalesChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found => dailySalesChart');
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
      labels: dailySalesData.value?.map(item => item.day),
      datasets: [{
        label: 'Sale Counts',
        data: dailySalesData.value?.map(item => item.count),
        backgroundColor: '#1976D2', // Vuetify primary
        borderColor: '#1976D2',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false},
        tooltip: {
          callbacks: {
            label: context => `${context.dataset.label}: ${context.raw.toLocaleString()}`
          }
        }
      },
      scales: {
        x: { display: false},
        y: { display: false}
      }
    }
  });
}
</script>