<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" class="mx-auto ma-0 pa-0">
        <v-card variant="elevated" elevation="3" rounded="md" class="pa-2">
          <v-card-title class="text-h5">Notification Preferences</v-card-title>
          <v-card-text class="pt-0">
            <p class="text-medium-emphasis text-body-2 mb-4">
              Select the notifications you would like to receive via email. 
              Please note that you cannot opt out of receiving service messages, 
              such as payment, security or legal notifications.
            </p>
            
            <div class="text-subtitle-2 text-medium-emphasis">Email address *</div>
            <v-text-field
              density="compact"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
            />

            <v-list :lines="false" slim density="compact">
              <v-list-item
                v-for="(setting, index) in notifiSettings"
                :key="index"
                :class="[mdAndDown ? 'ma-0 pa-0' : '']"
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
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { mdAndDown } = useDisplay();
const notifiSettings = [
  {
    title: 'New Features',
    name: 'newFeatures',
    description: 'Get notified about new features and updates.',
    icon: 'mdi-new-box',
    enabled: true
  },
  {
    title: 'Account Activity',
    name: 'accountActivity',
    description: 'Receive notifications for account activity such as logins and changes.',
    icon: 'mdi-account-check',
    enabled: false
  },
  {
    title: 'Promotions',
    name: 'promotions',
    description: 'Stay updated with the latest promotions and offers.',
    icon: 'mdi-tag',
    enabled: true
  },
  {
    title: 'Security Alerts',
    name: 'securityAlerts',
    description: 'Get alerts for any suspicious activity on your account.',
    icon: 'mdi-shield-alert',
    enabled: true
  }
];
</script>