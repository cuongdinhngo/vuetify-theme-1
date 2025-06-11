<template>
  <v-container class="bg-white">
    <v-row>
      <!-- TODO -->
      <v-col cols="12" md="3">
        <DashboardsKanbanBoard
          v-if="status === 'success'"
          label="Todo"
          v-model:tasks="todoTasks"
          bg-color="blue"
        ></DashboardsKanbanBoard>
      </v-col>

      <!-- IN PROCESS -->
      <v-col cols="12" md="3">
        <DashboardsKanbanBoard
          v-if="status === 'success'"
          label="In Progress"
          v-model:tasks="inProgressTasks"
          bg-color="orange"
        ></DashboardsKanbanBoard>
      </v-col>

      <!-- IN QA -->
      <v-col cols="12" md="3">
        <DashboardsKanbanBoard
          v-if="status === 'success'"
          label="In QA"
          v-model:tasks="inQaTasks"
          bg-color="purple"
        ></DashboardsKanbanBoard>
      </v-col>

      <!-- DONE -->
      <v-col cols="12" md="3">
        <DashboardsKanbanBoard
          v-if="status === 'success'"
          label="Done"
          v-model:tasks="doneTasks"
          bg-color="green"
        ></DashboardsKanbanBoard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Kanban Dashboard',
  meta: [
    { name: 'description', content: 'Manage your projects with a Kanban board.' },
    { name: 'keywords', content: 'kanban, dashboard, project management' }
  ]
});

import { ref, watch } from 'vue'

const { getTasks } = useTasks();

const { data:tasks, error, status } = useAsyncData(
  'tasks',
  () => getTasks(),
  {
    transform: (data) => {
      const todo = data.filter(task => task.status === 'Todo');
      const inProgress = data.filter(task => task.status === 'InProgress');
      const inQa = data.filter(task => task.status === 'InQA');
      const done = data.filter(task => task.status === 'Done');

      return {
        todo,
        inProgress,
        inQa,
        done,
      }
    },
  }
);

// Make each column a ref for v-model
const todoTasks = ref([])
const inProgressTasks = ref([])
const inQaTasks = ref([])
const doneTasks = ref([])

watch(
  () => tasks.value,
  (val) => {
    if (val) {
      todoTasks.value = val.todo
      inProgressTasks.value = val.inProgress
      inQaTasks.value = val.inQa
      doneTasks.value = val.done
    }
  },
  { immediate: true }
)

watch(todoTasks, tasks => {
  console.log('todoTasks => ', tasks)
  tasks.forEach(task => task.status = 'Todo')
})
watch(inProgressTasks, tasks => {
  console.log('inProgressTasks => ', tasks)
  tasks.forEach(task => task.status = 'InProgress')
})
watch(inQaTasks, tasks => {
  console.log('inQaTasks => ', tasks)
  tasks.forEach(task => task.status = 'InQA')
})
watch(doneTasks, tasks => {
  console.log('doneTasks => ', tasks)
  tasks.forEach(task => task.status = 'Done')
})
</script>