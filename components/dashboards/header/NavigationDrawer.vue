<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :rail="rail"
    @click="rail = false"
  >
    <!-- Profile Card -->
    <v-card
      class="profile"
      :image="`${dashboardImgPath('wallpaper.jpg')}`"
      rounded="0"
      elevation="0"
    >
      <div class="profile-image px-3 py-10">
        <v-avatar
          :image="`${dashboardImgPath('baby-avatar.webp')}`"
          @click.stop="rail = !rail"
        ></v-avatar>
      </div>
      <div
        class="profile-info px-4 d-flex justify-space-between align-center"
      >
        <h3
          class="name"
          v-if="!rail"
        >John Doe</h3>

        <!-- Profile Nav -->
        <v-menu
          v-if="!rail"
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="white"
              icon="mdi-account-cog"
              variant="text"
              v-bind="props"
            ></v-btn>
          </template>
          <div class="profile-nav-container">
            <v-list class="profile-nav">
              <v-list-item
                v-for="(item, i) in profileNav"
                :key="i"
                :value="i"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon" :color="item.color"></v-icon>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-menu>
      </div>
    </v-card>

    <!-- Navigation Links -->
    <v-list
      v-for="nav in dashboardDrawerNav"
      :key="nav.category"
      class="main-nav"
      density="compact"
      nav
    >
      <v-list-subheader v-if="!rail">{{ nav.category }}</v-list-subheader>
      <v-list-subheader v-else class="subheader-rail"><v-icon icon="mdi-dots-horizontal"/></v-list-subheader>
      
      <template v-for="(item, index) in nav.items" :key="index">
        <!-- WITHOUT sub-items -->
        <v-list-item
          v-if="!item.subItems"
          @click="drawer = false"
        >
          <template v-slot:prepend>
            <NuxtLink :to="item.to" class="mr-4">
              <v-icon>{{ item.icon }}</v-icon>
            </NuxtLink>
          </template>

          <template
            v-if="item.counts && !rail"
            v-slot:append
          >
            <v-chip variant="tonal" color="green">{{ item.counts }}</v-chip>
          </template>
          <NuxtLink :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </NuxtLink>
        </v-list-item>

        <!-- HAVING sub-items -->
        <v-list-group
          v-else
          :value="item.title"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
            >
              <template v-slot:prepend>
                <NuxtLink class="mr-4">
                  <v-icon>{{ item.icon }}</v-icon>
                </NuxtLink>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
            v-for="(subItem, subIndex) in item.subItems"
            :key="subIndex"
            :value="subItem.title"
            @click="drawer = false"
          >
            <NuxtLink :to="subItem.to">
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </NuxtLink>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { profileNav, dashboardDrawerNav } from '@/config/menus';

const rail = defineModel('rail', {
  type: Boolean,
  default: false,
  required: true
});

const drawer = defineModel('drawer', {
  type: Boolean,
  default: true,
  required: true
});

</script>
<style scoped>
.main-nav {
  .v-list-subheader {
    font-weight: bold;
    color: rgb(var(--v-theme-on-surface));
    text-transform: uppercase;
  }
  .subheader-rail {
    margin-left: 4px;
  }
  .v-list-item {

    &:hover {
      /* color: #87dce2 !important; */
      .v-icon {
        color: #87dce2 !important;
      }
      .v-list-item-title {
        color: #87dce2 !important;
      }
    }
  }
}

/**
The :deep() selector allows you to target deeply nested elements that are generated 
by Vuetify's internal structure, bypassing Vue's scoped CSS limitations.
*/
.main-nav :deep(.v-list-item__prepend > .v-icon ~ .v-list-item__spacer) {
  width: 10px !important;
}

.profile {
  min-height: 168px;
}

.profile-info {
  background-color: #424242;
  color: white;
  opacity: 0.8;
}

.profile-nav-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
  z-index: 1000;
}

.profile-nav {
  position: relative;
  background-color: #d2f3f3 !important;
  border-radius: 0 0 10px 10px;
}

.profile-nav .v-list-item:hover {
  background-color: #e3f2fd !important;
  color: #1978bd !important;
}
</style>