<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">Categories Distribution</v-card-title>
    <v-card-text>
      <canvas
        id="categoriesDistributionChart"
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

const { categoriesDistribution } = useStatistics();
const { data: categoryData } = await useAsyncData(
  'categories-distribution',
  () => categoriesDistribution()
);

onMounted(() => generateChart());

function generateChart() {
  const canvas = document.getElementById('categoriesDistributionChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found => categoriesDistributionChart');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categoryData.value.map(item => item.category),
      datasets: [{
        data: categoryData.value.map(item => item.totalRevenue),
        backgroundColor: [
          '#1976D2',
          '#82B1FF',
          '#4CAF50',
          '#FFC107'
        ],
        borderColor: '#FFFFFF',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          enabled: true,
          callbacks: {
            label: context => {
              const value = context.raw;
              const total = context.dataset.data.reduce((sum, v) => sum + v, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${context.label}: $${value.toLocaleString()} (${percentage}%)`;
            }
          }
        }
      },
      cutout: '60%' // Donut hole size
    }
  });
}
</script>