<template>
  <v-card variant="flat">
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

    <v-divider></v-divider>
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
</script>