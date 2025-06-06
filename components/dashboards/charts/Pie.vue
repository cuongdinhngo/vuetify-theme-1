<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" :height="height">
    <v-card-title>Payment Methods Distribution</v-card-title>
    <v-card-subtitle class="text-body-2 text-medium-emphasis">
      Last 12 months
    </v-card-subtitle>
    <v-card-text>
      <v-skeleton-loader
        v-if="status === 'pending'"
        type="image"
      ></v-skeleton-loader>
      <canvas
        v-if="status === 'success'"
        id="paymentMethodsChart"
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

const { paymentDistribution } = useStatistics();

const { data: paymentData, status } = await useAsyncData(
  'payment-methods',
  () => paymentDistribution()
);

onMounted(() => generateChart());

function generateChart() {
  const canvas = document.getElementById('paymentMethodsChart') as HTMLCanvasElement | null;
  if (!canvas) {
    console.error('Canvas element not found => paymentMethodsChart');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }

  if (ctx && paymentData.value) {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: paymentData.value.map(item => item.method),
        datasets: [{
          label: 'Total Payments ($)',
          data: paymentData.value.map(item => item.totalAmount),
          backgroundColor: [
            '#1976D2', // vibrant blue
            '#82B1FF', // light blue
            '#4CAF50', // green
            '#FFC107', // yellow
          ],
          borderColor: '#FFFFFF',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Payment Methods Distribution (Last 12 Months)' }
        }
      }
    });
  }
}
</script>