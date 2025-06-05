<template>
  <v-card variant="elevated" elevation="3" rounded="md" class="pa-2" height="450">
    <v-card-title class="text-h5">Monthy Sales</v-card-title>
    <v-card-text>
      <canvas id="salesTrendChart"></canvas>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import Chart from 'chart.js/auto';

const { data: salesData } = await useFetch('/api/stats/monthly-sales');

onMounted(() => {
  const ctx = document.getElementById('salesTrendChart').getContext('2d');
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
        title: { display: true, text: 'Monthly Sales Trend (Past 12 Months)' }
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
});
</script>