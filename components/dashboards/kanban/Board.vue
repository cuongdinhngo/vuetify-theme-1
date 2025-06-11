<template>
  <v-card elevation="0" :class="`bg-${bgColor}`">
    <!-- Header -->
    <v-card-title class="header d-flex align-center justify-space-between">
      <span class="text-subtitle-1 text-white">{{ label }}</span>
      <v-btn icon size="x-small" color="grey-lighten-5" slim width="20" height="20">
        <v-icon size="small">mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <draggable
        v-model="tasks"
        group="kanban"
        item-key="id"
      >
        <template #item="{ element: task }">
          <v-card
            elevation="0"
            class="my-4"
          >
            <!-- Task Name & Actions -->
            <v-card-title class="d-flex align-center justify-space-between pl-2 pr-0 py-2">
              <span class="text-subtitle-2 font-weight-bold text-truncate">#{{ task.id }} - {{ task.title }}</span>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-icon size="x-small" v-bind="props" class="text-subtitle-1">mdi-dots-vertical</v-icon>
                </template>

                <v-list density="compact" nav>
                  <v-list-item
                    v-for="(item, i) in ['Edit', 'Delete']"
                    :key="i"
                    :value="i"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="px-2 text-caption">{{ task.description }}</v-card-text>

            <v-divider></v-divider>
            <v-card-title class="px-0 text-black">
              <v-list-item
                :prepend-avatar="task.owner_avatar"
                :title="task.owner"
                slim
                density="compact"
                nav
              >
                <template v-slot:append>
                  <span class="text-caption text-truncate">Remain: {{ task.duration }}</span>
                </template>
              </v-list-item>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-actions class="d-flex align-center justify-space-between">
              <v-list-item
                class="text-subtitle-2 text-truncate ma-0 pa-0"
                prepend-icon="mdi-calendar"
                slim
                density="compact"
                nav
              >
                <v-list-item-title>{{ useTimeAgo(task.created_at) }}</v-list-item-title>
              </v-list-item>
              <v-chip
                class="text-caption"
                color="primary"
                text-color="black"
                size="x-small"
                variant="flat"
              >{{ task.status }}</v-chip>
            </v-card-actions>
          </v-card>
        </template>
      </draggable>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import draggable from 'vuedraggable'

defineProps({
  label: String,
  bgColor: {
    type: String,
    default: 'grey-lighten-5'
  },
})

const tasks = defineModel('tasks',{
  type: Array,
  default: () => []
})
</script>