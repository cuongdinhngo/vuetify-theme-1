<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">Last 8 weekly revenue</v-card-title>
    <v-card-text>
      <canvas
        id="weeklyRevenueChart"
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

const { weeklyRevenue } = useStatistics();

const { data: weeklyRevenueData } = await useAsyncData(
  'weekly-revenue',
  () => weeklyRevenue()
);

onMounted(() => generateChart());
function generateChart() {
  const canvas = document.getElementById('weeklyRevenueChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found => weeklyRevenueChart');
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
      labels: weeklyRevenueData.value?.map(item => item.week),
      datasets: [{
        label: 'Revenue ($)',
        data: weeklyRevenueData.value?.map(item => item.revenue),
        backgroundColor: '#1976D2',
        borderColor: '#1976D2',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `${context.dataset.label}: $${context.raw.toLocaleString()}`
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