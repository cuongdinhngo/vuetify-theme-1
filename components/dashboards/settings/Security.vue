<template>
  <v-container class="pa-4">
    <v-row>
      <!--Security Settings-->
      <v-col cols="12" md="8">
        <v-card variant="elevated" elevation="3" rounded="md" class="pa-2">
          <v-card-text class="pt-0">
            <v-list>
              <v-list-item
                v-for="(setting, index) in securitySettings"
                :key="index"
              >
                <template #prepend>
                  <v-icon :icon="setting.icon" class="text-primary"></v-icon>
                </template>
                <template #append>
                  <v-switch
                    :label="setting.enabled ? 'Enabled' : 'Disabled'"
                    color="primary"
                    v-model="setting.enabled"
                  ></v-switch>
                </template>
                <v-list-item-title class="text-subtitle-1 font-weight-bold">{{ setting.title }}</v-list-item-title>
                <v-list-item-subtitle class="text-body-2 text-medium-emphasis">{{ setting.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn variant="tonal" rounded="xl" color="primary">Save Changes</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!--Security Settings Image-->
      <v-col cols="12" md="4">
        <v-card variant="elevated" elevation="3" rounded="md" class="pa-2">
          <template #prepend>
            <v-icon class="text-primary" icon="mdi-devices" size="40"></v-icon>
          </template>
          <v-card-title class="text-h5">Devices</v-card-title>
          <v-card-subtitle class="text-body-2 text-medium-emphasis">
            Manage your devices and sessions
          </v-card-subtitle>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(device, index) in ['Device 1', 'Device 2', 'Device 3']"
                :key="index"
              >
                <template #prepend>
                  <v-icon icon="mdi-laptop" class="text-primary"></v-icon>
                </template>
                <template #append>
                  <v-btn variant="text" color="primary" size="small" icon>
                    <v-icon icon="mdi-delete-forever-outline" size="20"></v-icon>
                  </v-btn>
                </template>
                <v-list-item-title class="text-subtitle-1">{{ device }}</v-list-item-title>
                <v-list-item-subtitle class="text-body-2 text-medium-emphasis">Last used: {{ new Date().toLocaleDateString() }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const securitySettings = [
  {
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account by enabling two-factor authentication.',
    icon: 'mdi-shield-lock-outline',
    enabled: false
  },
  {
    title: 'Login Alerts',
    description: 'Receive alerts when your account is accessed from a new device or location.',
    icon: 'mdi-alert-circle-outline',
    enabled: true
  },
  {
    title: 'Password Strength Notifications',
    description: 'Get notified if your password is weak or compromised.',
    icon: 'mdi-lock-alert',
    enabled: true
  }
];
</script>
<style scoped>
</style>