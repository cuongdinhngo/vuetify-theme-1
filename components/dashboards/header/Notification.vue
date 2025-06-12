<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon v-bind="props" :size="mobile ? 'small' : 'default'">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <div class="notification-header">
        <h4>Notifications</h4>
        <p>You have {{ mockNotifications.length }} new notifications</p>
      </div>
      <v-divider></v-divider>

      <!-- List of notifications -->
      <v-list density="compact" nav >
        <v-virtual-scroll
          :items="mockNotifications"
          height="400"
          item-height="60"
        >
          <template v-slot:default="{ item: notification }">
            <v-list-item>
              <template v-slot:prepend>
                <NuxtLink :to="{ name: 'index' }" class="mr-4">
                  <v-avatar :color="notification.bgColor">
                    <v-icon :color="notification.color">{{ notification.icon }}</v-icon>
                  </v-avatar>
                </NuxtLink>
              </template>
              <template v-slot:append>
                <span class="text-caption">{{ notification.timestamp }}</span>
              </template>

              <NuxtLink :to="{ name: 'index' }">
                <v-list-item-title class="font-weight-bold">{{ notification.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ notification.message }}</v-list-item-subtitle>
              </NuxtLink>
            </v-list-item>
          </template>
        </v-virtual-scroll> 
      </v-list>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="text-none"
          color="blue-darken-2"
          size="large"
          variant="flat"
          rounded="xl"
          block
        >View all notifications</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
import { notifications, NOTIFICATION_CONFIG, NOTIFICATION_CATEGORIES } from '~/config/notifications';

const { mobile } = useDisplay();

const mockNotifications = computed(() => {
  return notifications.map(notification => {
    const config = NOTIFICATION_CONFIG.filter(item => item.category === notification.type)[0];
    notification.timestamp =  formatTimeAgo(notification.timestamp);
    return {
      ...notification,
      ...config,
    };
  });
});
</script>

<style scoped>
.v-list-item {
  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}

.notification-header {
  padding: 10px 20px;
  color: white;
  background-color: rgb(var(--v-theme-primary));
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
