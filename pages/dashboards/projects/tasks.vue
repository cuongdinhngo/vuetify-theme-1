<template>
  <v-card class="py-10 px-5" flat>
    <div class="d-flex justify-space-between mb-4">
      <v-row>
        <v-col
          v-for="(category, index) in taskCategories"
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
            unitLabel="tasks"
          ></OverviewBadge>
        </v-col>
      </v-row>
    </div>

    <!-- Table Content -->
    <v-card-text>
      <v-data-table
        v-if="status === 'success'"
        :headers="tableHeaders"
        :items="tasks.data"
        class="elevation-1"
      >
        <!-- Table Header-->
        <template v-slot:top>
          <dashboards-section-data-table-top>
            <template v-slot:left>
              <v-text-field
                v-model="search"
                variant="filled"
                placeholder="Search Tasks"
                prepend-inner-icon="mdi-magnify"
                density="compact"
                hide-details
              ></v-text-field>
            </template>

            <template v-slot:right>
              <v-btn
                color="primary"
                class="text-none"
                id="create-task-dialog"
                prepend-icon="mdi-plus"
              >Create Task</v-btn>
            </template>
          </dashboards-section-data-table-top>
        </template>

        <template v-slot:item.title="{ item }">
          <v-list-item max-width="300" class="ma-0 pa-0">
            <v-list-item-title class="text-truncate">{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption text-truncate">{{ item.description }}</v-list-item-subtitle>
          </v-list-item>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            :color="taskStatus.find(status => status.label === item.status)?.bgColor"
            class="text-white"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.created_at="{ item }">
          {{ useDateFormat(item.created_at, 'DD MMM YYYY') }}
        </template>

        <template v-slot:item.action="{ item }">
          <NuxtLink :to="{ name: 'dashboards-projects-tasks', query: { id: item.id } }">
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
          <NuxtLink :to="{ name: 'dashboards-projects-tasks', query: { id: item.id } }">
            <v-icon
              icon="mdi-pencil"
              color="warning"
              size="small"
              class="mr-4"
            ></v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >Edit Task</v-tooltip>
          </NuxtLink>
          <NuxtLink :to="{ name: 'dashboards-projects-tasks', query: { id: item.id } }">
            <v-icon
              icon="mdi-delete"
              color="error"
              size="small"
            ></v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >Delete Task</v-tooltip>
          </NuxtLink>
        </template>

        <template v-slot:no-data>
          <v-alert type="info">No tasks found.</v-alert>
        </template> 

        <template v-slot:bottom>
          <dashboards-section-data-table-bottom
            :totalCount="tasks.count"
            v-model:pageSize="pageSize"
            v-model:page="page"
          ></dashboards-section-data-table-bottom>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { faker } from '@faker-js/faker';

import OverviewBadge from '~/components/dashboards/section/OverviewBadge.vue';

definePageMeta({
  layout: 'dashboard',
  title: 'Project Tasks',
});

const { getTaskList } = useTasks();

const taskCategories = [
  {
    title: 'Todo',
    icon: 'mdi-clipboard-list',
    count: faker.number.int({ min: 1000, max: 5000 }),
    color: 'blue-darken-2',
    bgColor: 'blue-lighten-5'
  },
  {
    title: 'In Progress',
    icon: 'mdi-laptop',
    count: faker.number.int({ min: 100, max: 1000 }),
    color: 'amber-darken-2',
    bgColor: 'amber-lighten-5'
  },
  {
    title: 'In QA',
    icon: 'mdi-alert-circle',
    count: faker.number.int({ min: 100, max: 2000 }),
    color: 'purple-darken-2',
    bgColor: 'purple-lighten-5'
  },
  {
    title: 'Done',
    icon: 'mdi-check-circle',
    count: faker.number.int({ min: 100, max: 1000 }),
    color: 'green-darken-2',
    bgColor: 'green-lighten-5'
  },
];

const taskStatus = [
  { label: 'Done', bgColor: 'green-darken-2' },
  { label: 'Todo', bgColor: 'blue-darken-2' },
  { label: 'InQA', bgColor: 'deep-purple-darken-2' },
  { label: 'InProgress', bgColor: 'yellow-darken-3' }
];

const tableHeaders = [
  { title: 'Task No.', key: 'id' },
  { title: 'Task Info', key: 'title', align: 'start' },
  { title: 'Assigned To', key: 'owner' },
  { title: 'Status', key: 'status' },
  { title: 'Date', key: 'created_at', align: 'center' },
  { title: 'Actions', key: 'action', sortable: false, align: 'center' }
];

const page = ref(1);
const pageSize = ref(10);

const { data:tasks, error, status } = useAsyncData(
  'task-list',
  () => getTaskList(),
); 
</script>
<style scoped>
.pageSize-select {
  max-width: 100px;
  min-width: 50px;
}
</style>