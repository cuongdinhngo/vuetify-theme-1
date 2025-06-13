<template>
  <v-container class="d-flex align-center pa-0">
    <v-toolbar-title class="text-h6 text-white">E-commerce Layout</v-toolbar-title>
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
      <v-btn variant="tonal" class="text-secondary" icon size="small">
        <v-icon color="primary">mdi-cart</v-icon>
      </v-btn>
      <v-btn variant="tonal" class="text-secondary" icon size="small">
        <v-icon color="primary">mdi-account</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>