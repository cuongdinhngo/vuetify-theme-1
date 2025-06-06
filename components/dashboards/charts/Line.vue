<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">Monthy Sales</v-card-title>
    <v-card-text>
      <v-skeleton-loader
        v-if="status === 'pending'"
        type="image, card"
      ></v-skeleton-loader>
      <canvas
        v-if="status === 'success'"
        id="salesTrendChart"
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

const { monthlySales } = useStatistics();
const { data: salesData, status } = await useAsyncData(
  'monthly-sales',
  () => monthlySales()
);

onMounted(() => generateChart());

function generateChart() {
  const canvas = document.getElementById('salesTrendChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found => salesTrendChart');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: salesData.value.map(item => item.month),
      datasets: [{
        label: 'Sales Amount ($)',
        data: salesData.value.map(item => item.amount),
        borderColor: '#1976D2',
        backgroundColor: '#82B1FF',
        fill: false,
        tension: 0.1,
        pointBackgroundColor: '#1976D2',
        pointRadius: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Monthly Sales Trend (Last 12 Months)' }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Sales Amount ($)' }
        },
        x: {
          title: { display: true, text: 'Month' }
        }
      }
    }
  });
}
</script>