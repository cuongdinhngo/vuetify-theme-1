<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" height="450">
    <v-card-title>Payment Methods Distribution</v-card-title>
    <v-card-subtitle class="text-body-2 text-medium-emphasis">
      Last 12 months
    </v-card-subtitle>
    <v-card-text>
      <canvas id="paymentMethodsChart"></canvas>
    </v-card-text>
  </v-card>
</template>

<script setup>
import Chart from 'chart.js/auto';

const { data: paymentData } = await useFetch('/api/stats/payments');

onMounted(() => {
  const ctxPayments = document.getElementById('paymentMethodsChart')?.getContext('2d');
  if (ctxPayments && paymentData.value) {
    new Chart(ctxPayments, {
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
});
</script>