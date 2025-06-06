<template>
  <v-card variant="flat" class="pa-2">
    <v-card-title class="d-flex align-center pe-2 text-h6">
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        flat
        hide-details
        single-line
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn
        prepend-icon="mdi-account-plus"
        variant="tonal"
        color="primary"
        class="text-none"
      >
        Add contact
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-skeleton-loader
        v-if="status === 'pending'"
        class="mx-auto"
        type="table"
        :loading="status === 'pending'"
      ></v-skeleton-loader>

      <!-- Datatable -->
      <v-data-table
        v-if="status === 'success'"
        v-model:search="search"
        :filter-keys="['fullName', 'email']"
        :items="accounts.data"
        :headers="headers"
        :items-per-page="itemsPerPage"
      >

      <template v-slot:item.id="{ item }">
        <span class="text-subtitle-1">#{{ item.id }}</span>
      </template>

      <template v-slot:item.fullName="{ item }">
        <div class="d-flex align-center my-3">
          <v-avatar size="32" class="me-4" :image="item.avatar"></v-avatar>
          <div>
            <div class="text-subtitle-1">{{ item.fullName }}</div>
            <div class="text-caption text-secondary">{{ item.email }}</div>
          </div>
        </div>
      </template>

      <template v-slot:item.role="{ item }">
        <v-chip :color="getRandomChipColor()">{{ item.role }}</v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn
          variant="text"
          color="primary"
          class="text-none"
          icon
        >
          <v-icon>mdi-pencil</v-icon>
          <v-tooltip
            activator="parent"
            location="top"
          >Edit</v-tooltip>
        </v-btn>
        <v-btn
          variant="text"
          color="error"
          class="text-none"
          icon
        >
          <v-icon>mdi-delete-outline</v-icon>
          <v-tooltip
            activator="parent"
            location="top"
          >Delete</v-tooltip>
        </v-btn>
      </template>

      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="accounts.count"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Contacts',
  meta: [
    { name: 'description', content: 'Contacts' },
    { name: 'keywords', content: 'dashboard, contacts, account' }
  ]
});

const search = ref('');
const headers = ref([
  {
    align: 'start',
    key: 'id',
    sortable: false,
    title: '#ID',
  },
  {
    align: 'start',
    key: 'fullName',
    sortable: false,
    title: 'Account Info',
  },
  { title: 'Phone', key: 'phone' },
  { title: 'Role', key: 'role' },
  { title: 'Joined data', key: 'joinedDate' },
  { title: 'Action', key: 'action' },
]);
const page = ref(1);
const itemsPerPage = ref(10);

const { getAccounts } = useAccounts();

const {data: accounts, status} = useAsyncData(
  `accounts/page/${page.value}`, () => getAccounts(),
  { watch: [page] }
);

const chipColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'purple', 'indigo', 'teal', 'orange'];

const getRandomChipColor = () => {
  return chipColors[Math.floor(Math.random() * chipColors.length)];
};
</script>