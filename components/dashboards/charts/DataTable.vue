<template>
  <v-card elevation="2">
    <v-card-title class="text-h6">Top Sellers</v-card-title>
    <v-card-text>
      <v-skeleton-loader
        v-if="status === 'pending'"
        type="table"
      ></v-skeleton-loader>
      <v-data-table
        v-if="status === 'success'"
        :headers="headers"
        :items="sellers"
        :items-per-page="pageSize"
        :sort-by="[{ key: 'revenue', order: 'desc' }]"
        density="compact"
        class="elevation-0"
        :hide-default-footer="sellers.length <= pageSize"
      >
        <template v-slot:item.seller="{ item }">
          <div class="d-flex align-center py-2">
            <v-avatar size="40" class="mr-3">
              <v-img :src="item.avatar" :alt="item.fullName"></v-img>
            </v-avatar>
            <div>
              <div class="font-weight-medium">{{ item.fullName }}</div>
              <div class="text-caption text-grey text-truncate">{{ item.position }}</div>
            </div>
          </div>
        </template>
        <template v-slot:item.saleCounts="{ item }">
          {{ item.saleCounts.toLocaleString() }}
        </template>
        <template v-slot:item.revenue="{ item }">
          ${{ item.revenue.toLocaleString() }}
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
const headers = [
  { title: 'Seller', key: 'seller', sortable: true },
  { title: 'Sale Counts', key: 'saleCounts', sortable: true },
  { title: 'Revenue', key: 'revenue', sortable: true }
];
const pageSize = ref(5);
const page = ref(1);

const { topSeller } = useStatistics();

const { data: sellers, error, status } = useAsyncData(
  'top-sellers',
  () => topSeller()
);

console.log('Top Sellers:', sellers.value);
console.log('Error fetching top sellers:', error.value);
</script>