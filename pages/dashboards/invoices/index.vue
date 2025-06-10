<template>
  <v-card class="py-10 px-5" flat>
    <div class="d-flex justify-space-between mb-4">
      <v-row>
        <v-col
          v-for="(category, index) in invoiceCategories"
          :key="index"
          cols="12"
          md="3"
          class="d-flex justify-center"
        >
            <v-list-item
              :class="['rounded-lg', `bg-${category.bgColor}`]"
              min-width="220"
            >
              <template v-slot:prepend>
                <v-avatar
                  rounded="0"
                  :color="category.bgColor"
                >
                  <v-icon :color="category.color" size="x-large">{{ category.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="text-h6">{{ category.title }}</v-list-item-title>
              <v-list-item-subtitle class="text-subtitle-1">{{ category.count }} invoices</v-list-item-subtitle>
            </v-list-item>
        </v-col>
      </v-row>
    </div>

    <!-- Table Header-->
    <v-card-title class="d-flex align-center">
      <v-text-field
        variant="filled"
        label="Search Invoices"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        width="50"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="text-none"
      >Create Invoice</v-btn>
    </v-card-title>

    <!-- Table Content -->
    <v-card-text>
      <v-data-table
        v-if="status === 'success'"
        :headers="tableHeaders"
        :items="invoices.data"
        class="elevation-1"
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="invoiceStatus.find(status => status.label === item.status)?.bgColor"
            class="text-white"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.action="{ item }">
          <NuxtLink :to="{ name: 'dashboards-invoices', query: { id: item.id } }">
            <v-icon
              icon="mdi-eye"
              color="primary"
              size="small"
              class="mr-4"
            ></v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >View Details</v-tooltip>
          </NuxtLink>
          <NuxtLink :to="{ name: 'dashboards-invoices', query: { id: item.id } }">
            <v-icon
              icon="mdi-pencil"
              color="warning"
              size="small"
              class="mr-4"
            ></v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >Edit Invoice</v-tooltip>
          </NuxtLink>
          <NuxtLink :to="{ name: 'dashboards-invoices', query: { id: item.id } }">
            <v-icon
              icon="mdi-delete"
              color="error"
              size="small"
            ></v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >Delete Invoice</v-tooltip>
          </NuxtLink>
        </template>

        <template v-slot:no-data>
          <v-alert type="info">No invoices found.</v-alert>
        </template> 

        <template v-slot:bottom>
          <div class="d-flex justify-end align-center pt-2">
            <span class="mr-2">Items per page:</span>
            <v-select
              v-model="pageSize"
              :items="[5, 10, 15, 20]"
              variant="outlined"
              hide-details
              density="compact"
              class="my-4 pageSize-select"
            ></v-select>
            <v-pagination
              v-model="page"
              :length="invoices.count"
              size="small"
              :total-visible="7"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

definePageMeta({
  layout: 'dashboard',
  title: 'Invoices',
  meta: [
    { name: 'description', content: 'Manage your invoices efficiently.' },
    { name: 'keywords', content: 'invoices, billing, payments' }
  ]
});

const { getInvoices } = useInvoices();

const invoiceCategories = [
  {
    title: 'Total',
    icon: 'mdi-cash-multiple',
    count: faker.number.int({ min: 1000, max: 5000 }),
    color: 'blue-darken-2',
    bgColor: 'blue-lighten-5'
  },
  {
    title: 'Paid',
    icon: 'mdi-check-circle',
    count: faker.number.int({ min: 100, max: 1000 }),
    color: 'green-darken-2',
    bgColor: 'green-lighten-5'
  },
  {
    title: 'Unpaid',
    icon: 'mdi-alert-circle',
    count: faker.number.int({ min: 100, max: 2000 }),
    color: 'purple-darken-2',
    bgColor: 'purple-lighten-5'
  },
  {
    title: 'Overdue',
    icon: 'mdi-clock-alert',
    count: faker.number.int({ min: 100, max: 1000 }),
    color: 'amber-darken-2',
    bgColor: 'amber-lighten-5'
  }
];

const invoiceStatus = [
  { label: 'Pending', bgColor: 'brown-darken-1' },
  { label: 'Paid', bgColor: 'green-darken-2' },
  { label: 'Shipped', bgColor: 'blue-darken-2' },
  { label: 'Delivered', bgColor: 'deep-purple-darken-2' },
  { label: 'Unpaid', bgColor: 'brown-darken-1' },
  { label: 'Overdue', bgColor: 'yellow-darken-3' }
];

const tableHeaders = [
  { title: 'Invoice Number', key: 'id' },
  { title: 'Bill From', key: 'billFrom' },
  { title: 'Bill To', key: 'billTo' },
  { title: 'Total cost', key: 'totalCost' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'action', sortable: false }
];

const page = ref(1);
const pageSize = ref(10);

const { data:invoices, error, status } = useAsyncData(
  'invoices',
  () => getInvoices(),
); 
</script>
<style scoped>
.pageSize-select {
  max-width: 100px;
  min-width: 50px;
}
</style>