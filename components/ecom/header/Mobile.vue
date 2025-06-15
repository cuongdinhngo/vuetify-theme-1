<template>
  <v-app-bar
    color="primary"
    :elevation="4"
  >
    <div class="d-flex align-center ml-2">
      <v-icon class="mr-1">mdi-shopping-outline</v-icon>
      <v-img
        :src="dashboardImgPath('mobile_logo.png')"
        width="30"
        height="30"
      ></v-img>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex ga-2 align-center mr-2">
      <v-btn variant="tonal" icon size="small">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <BtnCart />
      <BtnAccount />
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
import BtnAccount from './BtnAccount.vue';
import BtnCart from './BtnCart.vue';
</script>