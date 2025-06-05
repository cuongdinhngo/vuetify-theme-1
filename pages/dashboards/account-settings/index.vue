<template>
  <v-card
    variant="flat"
  >
    <v-tabs
      v-model="tab"
      :items="tabs"
      color="primary"
      height="64"
    >
      <template v-slot:tab="{ item }">
        <v-tab
          :prepend-icon="item.icon"
          :text="item.text"
          :value="item.value"
          class="text-none px-10"
        ></v-tab>
      </template>

      <template v-slot:item="{ item }">
        <v-tabs-window-item :value="item.value" class="pa-4">
          <component :is="currentComponent" />
        </v-tabs-window-item>
      </template>
    </v-tabs>
  </v-card>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Account Settings',
  meta: [
    { name: 'description', content: 'Manage your account settings' },
    { name: 'keywords', content: 'account, settings, profile, preferences' }
  ]
});

import { useRouteQuery } from '@vueuse/router'

const tab = useRouteQuery('tab', 'account')
const tabs = [
  {
    icon: 'mdi-account-circle',
    text: 'Account',
    value: 'account',
  },
  {
    icon: 'mdi-bell',
    text: 'Notifications',
    value: 'notifications',
  },
  {
    icon: 'mdi-cash-multiple',
    text: 'Bills',
    value: 'bills',
  },
  {
    icon: 'mdi-shield-lock-outline',
    text: 'Security',
    value: 'security',
  },
]
const currentComponent = computed(() => {
  const componentMap = {
    account: resolveComponent('DashboardsSettingsAccount'),
    notifications: resolveComponent('DashboardsSettingsNotifications'),
    bills: resolveComponent('DashboardsSettingsBills'),
    security: resolveComponent('DashboardsSettingsSecurity'),
  };
  
  return componentMap[tab.value] || componentMap.account;
});

</script>