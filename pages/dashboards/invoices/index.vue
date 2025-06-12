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
          <OverviewBadge
            :title="category.title"
            :subTitle="category.count"
            :icon="category.icon"
            :bgColor="category.bgColor"
            :color="category.color"
            unitLabel="invoices"
          ></OverviewBadge>
        </v-col>
      </v-row>
    </div>

    <!-- Table Content -->
    <v-card-text>
      <v-data-table
        v-if="status === 'success'"
        :headers="tableHeaders"
        :items="invoices.data"
        class="elevation-1"
      >
        <!-- Table Header-->
        <template v-slot:top>
          <DataTableTop>
            <template v-slot:left>
              <v-text-field
                v-model="search"
                variant="outlined"
                placeholder="Search Invoices"
                prepend-inner-icon="mdi-magnify"
                density="compact"
                hide-details
              ></v-text-field>
            </template>

            <template v-slot:right>
              <v-btn
                color="primary"
                class="text-none"
                id="create-invoice-dialog"
              >Create Invoice</v-btn>
            </template>
          </DataTableTop>
        </template>

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
          <dashboard-section-data-table-bottom
            :totalCount="invoices.count"
            v-model:pageSize="pageSize"
            v-model:page="page"
          ></dashboard-section-data-table-bottom>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';
import DataTableTop from '~/components/dashboards/section/DataTableTop.vue';
import OverviewBadge from '~/components/dashboards/section/OverviewBadge.vue';

definePageMeta({
  layout: 'dashboard',
  title: 'Invoices',
  meta: [
    { name: 'description', content: 'Manage your invoices efficiently.' },
    { name: 'keywords', content: 'invoices, billing, payments' }
  ]
});

const { mdAndDown } = useDisplay();
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