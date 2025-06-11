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
              <v-list-item-subtitle class="text-subtitle-1">{{ category.count }} tasks</v-list-item-subtitle>
            </v-list-item>
        </v-col>
      </v-row>
    </div>

    <!-- Table Header-->
    <v-card-title class="d-flex align-center">
      <v-text-field
        variant="filled"
        label="Search Task"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        width="50"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="text-none"
      >Create Task</v-btn>
    </v-card-title>

    <!-- Table Content -->
    <v-card-text>
      <v-data-table
        v-if="status === 'success'"
        :headers="tableHeaders"
        :items="tasks.data"
        class="elevation-1"
      >
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
              :length="tasks.count"
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