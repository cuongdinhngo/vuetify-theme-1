<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="300"
      class="wrapper d-sx-none"
    >
      <h4 class="d-sx-none py-3 px-3">All Notes</h4>
      <v-text-field
        v-model="search"
        placeholder="Search Notes"
        prepend-inner-icon="mdi-magnify"
        width="90%"
        class="mx-auto mb-4"
        density="compact"
        hide-details
        variant="outlined"
      />
      <div class="note-list">
        <div
          v-for="(note, index) in notes"
          :key="index"
          :class="['note-item', 'mx-3', 'my-4', 'rounded-lg', 'pa-3', `bg-${note.bgColor}`]"
        >
          <p :class="['text-truncate', 'px-3', 'mb-3', `text-${note.color}`]">{{ note.content }}</p>
          <div class="note-actions align-center d-flex justify-space-between px-3">
            <span class="text-caption">{{ useDateFormat(note.created_at, 'MMM, DD YYYY') }}</span>
            <v-tooltip text="Delete Note" location="top">
              <template #activator="{ props }">
                <v-icon size="small" v-bind="props">mdi-delete-outline</v-icon>
              </template>
            </v-tooltip>
            
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main min-height="600">
      <v-card tile elevation="0" height="100%">
        <!-- Menu bar for drawer -->
        <div class="text-center d-sx-block d-sm-none my-2">
          <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
        </div>
        <v-divider></v-divider>

        <!-- Note Header -->
        <v-card-title class="d-flex align-center justify-space-between">
          <h5 class="d-sx-none py-3">Edit Notes</h5>
          <v-btn
            variant="tonal"
            color="primary"
            class="text-none"
            prepend-icon="mdi-plus"
          >Add new note</v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <!-- Note Content -->
        <v-card-text>
          <h3 class="mb-4">Update Note</h3>
          <v-textarea
            model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            variant="outlined"
            auto-grow
          ></v-textarea>
        </v-card-text>

        <!-- Actions for changing color -->
        <v-card-actions class="d-flex flex-wrap">
          <h4 class="ml-3">Change color</h4>
          <div class="d-flex flex-wrap ml-3" style="gap: 8px;">
            <v-list-item
              v-for="(color, index) in noteColors"
              :key="index"
              class="mx-0 my-1"
              :class="['rounded-circle', `bg-${color.value}`]"
              @click="() => {}"
            >
              <v-icon color="white" size="x-small">mdi-check</v-icon>
            </v-list-item>
          </div>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-layout>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  title: 'Notes'
});

import { noteColors } from '@/composables/useNotes';

const drawer = ref(false);
const search = ref('');

const { getNotes } = useNotes();

const { data:notes, error, status } = await useAsyncData(
  'notes', () => getNotes(),
  {
    transform: (data) => {
      return data.map(note => {
        const color = noteColors.filter(item => item.value === note.color);
        return {
          ...note,
          ...color[0]
        }
      });
    },
  }
);
</script>