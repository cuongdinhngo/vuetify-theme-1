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
        id="add-contact-dialog"
      >
        Add contact
      </v-btn>
    </v-card-title>

    <!-- Dialog for adding a new contact -->
    <v-dialog activator="#add-contact-dialog" max-width="600">
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-card-title class="bg-primary text-white text-h6">
            <v-icon class="me-2">mdi-account-plus</v-icon>
            <span>Add a new contact</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Full Name"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Email"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Phone"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Address"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <v-select
                    label="Role"
                    variant="outlined"
                    :items="['Admin', 'User', 'Guest']"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <template v-slot:actions>
            <v-btn
              variant="tonal"
              class="ml-auto"
              text="Close"
              @click="isActive.value = false"
            ></v-btn>
            <v-btn
              variant="tonal"
              color="primary"
              text="Save"
              @click="isActive.value = false"
            ></v-btn>
          </template>
        </v-card>
      </template>
    </v-dialog>

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
        <!-- Pagination -->
        <div class="text-center pt-2">
          <v-pagination
            class="mx-auto"
            v-model="page"
            :length="accounts.count"
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