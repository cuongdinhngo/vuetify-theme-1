<template>
  <v-app-bar 
    :elevation="4"
    color="transparent"
    class="app-bar-transparent"
    absolute
  >
    <v-container
      class="d-flex align-center pa-0"
    >
      <v-toolbar-title class="text-h6 text-white">
        <v-icon class="mr-1">mdi-shopping-outline</v-icon>
        Kem House
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex ga-4 align-center">
        <v-text-field
          variant="outlined"
          placeholder="Search ..."
          prepend-inner-icon="mdi-magnify"
          density="compact"
          color="primary"
          class="rounded-lg bg-grey-lighten-4"
          hide-details
          width="300"
        />
        <BtnAccount />
        <BtnCart />
      </div>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts">
import BtnAccount from './BtnAccount.vue';
import BtnCart from './BtnCart.vue';
</script>