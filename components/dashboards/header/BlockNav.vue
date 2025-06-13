<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        icon
        v-bind="props"
        :size="mobile ? 'small' : 'default'"
      >
        <v-icon>mdi-camera-control</v-icon>
      </v-btn>
    </template>

    <v-card
      class="mx-auto"
      max-width="500"
    >
      <!-- Header -->
      <v-container v-if="!mobile">
        <v-row>
          <!-- Main Navigation -->
          <v-col cols="12" md="8">
            <v-list density="compact" nav class="main-block-nav" lines="two">
              <v-list-item
                v-for="(item, index) in headerNav"
                :key="index"
              >
                <template v-slot:prepend>
                  <v-avatar :color="item.bgColor">
                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <div class="d-flex justify-space-between align-center mt-2">
              <div class="d-flex align-center">
                <v-icon>mdi-frequently-asked-questions</v-icon>
                <span class="faq">Frequently Asked Questions</span>
              </div>
              <v-btn color="primary" :elevation="0">
                Load More
              </v-btn>
            </div>
          </v-col>

          <v-divider vertical></v-divider>

          <!-- Quick Links -->
          <v-col cols="12" md="4">
            <v-list
              density="compact"
              nav
              class="quick-links-list"
            >
              <v-list-subheader>Quick Links</v-list-subheader>
              <v-list-item
                v-for="(item, index) in quickLinks"
                :key="index"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <!-- Fallback for mobile view -->
      <v-list
        v-else
        density="compact"
        nav
      >
        <v-virtual-scroll
          :items="fullList"
          height="400"
          item-height="60"
        >
          <template v-slot="{ item }">
            <v-list-item
              min-width="335"
            >
              <template
                v-if="item.icon"
                v-slot:prepend
              >
                <v-avatar :color="item.bgColor">
                  <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
import { headerNav, quickLinks } from '@/config/menus';
const { mobile } = useDisplay();

const fullList = [
  ...headerNav,
  ...quickLinks
];
</script>
<style scoped>
/* display the data in 2 columns */
.main-block-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.quick-links-list .v-list-subheader {
  font-weight: bold;
  font-size: 1.0rem;
}

.v-list-item:hover {
  color: #0D47A1;
}

.faq {
  font-weight: bold;
  font-size: 0.9rem;
  margin-left: 8px;
  &:hover {
    color: #0D47A1;
  }
}
</style>