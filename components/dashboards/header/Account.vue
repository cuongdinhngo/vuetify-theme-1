<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-avatar
        :image="dashboardImgPath('baby-avatar.webp')"
        size="small"
        v-bind="props"
      ></v-avatar>
    </template>
    <v-card
      min-width="300"
    >
      <v-list-item class="pa-4">
        <template v-slot:prepend>
          <v-avatar
            :image="dashboardImgPath('baby-avatar.webp')"
            size="large"
          ></v-avatar>
        </template>
        <v-list-item-title class="font-weight-bold">John Doe</v-list-item-title>
        <v-list-item-subtitle>john.doe@local.test</v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>

      <!-- Account settings -->
      <v-list class="accountSettings">
        <v-list-item v-for="(item, index) in accountSettings" :key="index">
          <NuxtLink :to="item.to">
            <v-list-item-title class="font-weight-medium">{{ item.name }}</v-list-item-title>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
const accountSettings = [
  { name: 'Profile', to: { name: 'index' } },
  { name: 'Settings', to: { name: 'index' } },
  { name: 'Logout', to: { name: 'index' } }
];
</script>
<style scoped>
.accountSettings {
  .v-list-item-title {
    &:hover {
      color: rgb(var(--v-theme-primary));
    }
  }
}
</style>