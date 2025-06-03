<template>
  <v-dialog
    transition="dialog-top-transition"
    width="auto"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        icon="mdi-magnify"
      ></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card
        min-width="600"
        max-height="400"
      >
        <v-card-title>
          <!-- Search field -->
          <v-text-field
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
          ></v-text-field>

          <span>Quick page links</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item"
            class="py-3"
            active-class="text-green"
          >
            <v-list-item-title>Employee Name</v-list-item-title>
            <v-list-item-subtitle class="mb-1 text-high-emphasis opacity-100">Badge #{{ item }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
const items = Array.from({ length: 20 }, (k, v) => v + 1)
</script>
<style scoped>
.v-list-item {
  border-radius: 5px;
  &:hover {
    background-color: #b9daee;
  }
}
</style>