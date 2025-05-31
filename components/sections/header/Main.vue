<template>
  <v-app-bar
    :elevation="1"
    color="primary"
    dark
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.display.smAndDown"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Dana Store</v-app-bar-title>

    <!-- <v-spacer></v-spacer> -->

    <v-btn icon="mdi-cart"></v-btn>
    <v-btn icon="mdi-magnify"></v-btn>
    <v-btn icon="mdi-cog"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item v-for="item in drawerNavItems" :key="item.title" :to="item.to">
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { drawerNavItems} from '@/config/menus';
const drawer = ref(false);

</script>