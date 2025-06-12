<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title class="text-h6">Monthly Sales vs User Visits</v-card-title>
    <v-card-subtitle class="text-body-2 text-medium-emphasis">
      Last 12 months
    </v-card-subtitle>
    <v-card-text>
      <div
        class="chart-container"
        :style="{ height: chartHeight }"
      >
        <canvas
          id="mixChart"
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

const { monthlySales, userVisits } = useStatistics();

const { data: mixData, error } = await useAsyncData(
  'monthly-sales-vs-user-visits',
  async() => {
    const [salesData, visitData] = await Promise.all([
      monthlySales(),
      userVisits()
    ]);

    return {
      salesData,
      visitData,
    }
  }
);

const { mobile } = useDisplay();

const chartHeight = computed(() => {
  return mobile.value ? '500px' : '500px';
});

onMounted(() => generateChart());

function generateChart() {
  const canvas = document.getElementById('mixChart') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found => mixChart');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }

  new Chart(ctx, {
    data: {
      labels: mixData.value?.salesData.map(item => item.month),
      datasets: [
        {
          type: 'line',
          label: 'Sales Amount ($)',
          data: mixData.value?.salesData.map(item => item.amount),
          borderColor: '#1976D2', // Vuetify primary
          backgroundColor: '#1976D2',
          fill: false,
          tension: 0.1,
          pointRadius: 5
        },
        {
          type: 'bar',
          label: 'User Visits',
          data: mixData.value?.visitData.map(item => item.total),
          backgroundColor: '#4CAF50', // Vuetify success
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: context => {
              const label = context.dataset.label;
              const value = context.raw;
              return label === 'Sales Amount ($)' 
                ? `${label}: $${value.toLocaleString()}`
                : `${label}: ${value.toLocaleString()}`;
            }
          }
        }
      },
    }
  });
}
</script>