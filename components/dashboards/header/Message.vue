<template>
  <v-menu open-on-hover>
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon>mdi-message-text</v-icon>
      </v-btn>
    </template>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <div class="notification-header">
        <h4>Messages</h4>
        <p>You have {{ messages.length }} new messages</p>
      </div>
      <v-divider></v-divider>

      <!-- List of messages -->
      <v-list density="compact" nav >
        <v-virtual-scroll
          :items="messages"
          height="400"
          item-height="60"
        >
          <template v-slot:default="{ item: message }">
            <v-list-item>
              <template v-slot:prepend>
                <NuxtLink :to="{ name: 'index' }" class="mr-4">
                  <v-badge color="success" dot v-if="message.isOnline">
                    <v-avatar :image="message.avatar"></v-avatar>
                  </v-badge>
                  <v-avatar v-else :image="message.avatar"></v-avatar>
                </NuxtLink>
              </template>
              <template v-slot:append>
                <span class="text-caption">{{ message.timestamp }}</span>
              </template>

              <NuxtLink :to="{ name: 'index' }">
                <v-list-item-title class="font-weight-bold">{{ message.userName }}</v-list-item-title>
                <v-list-item-subtitle>{{ message.message }}</v-list-item-subtitle>
              </NuxtLink>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>

      <!-- Action button to check all messages -->
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="text-none"
          color="blue-darken-2"
          size="large"
          variant="flat"
          rounded="xl"
          block
        >Check all messages</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { mockMessages } from '~/config/mock';

const messages = computed(() => {
  return mockMessages.map(message => {
    message.timestamp = formatTimeAgo(message.timestamp);
    return message;
  }); 
});
</script>

<style scoped>
.v-list-item {
  padding: 10px;
  &:hover {
    background-color: #E0F7FA;
  }
}

.v-card-text {
  padding: 0 !important;
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
