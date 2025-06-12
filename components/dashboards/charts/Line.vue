<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">Monthly Sales</v-card-title>
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
          id="salesTrendChart"
        ></canvas>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import Chart from 'chart.js/auto';
import { useDisplay } from 'vuetify';

const props = defineProps({
  height: {
    type: [String, Number],
    default: '450'
  }
});

const { mobile } = useDisplay();

// Computed property for chart height based on screen size
const chartHeight = computed(() => {
  return mobile.value ? '300px' : '340px';
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
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
    }
  });
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
}

.chart-container canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>