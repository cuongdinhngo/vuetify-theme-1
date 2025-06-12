<template>
  <v-container>
  <v-row class="d-flex align-center">
    <!-- Item per Page-->
    <v-col cols="12" sm="6" class="d-flex align-center justify-end">
      <span class="mr-2">Items per page:</span>
      <v-select
        v-model="pageSize"
        :items="[5, 10, 15, 20]"
        variant="outlined"
        hide-details
        class="my-4 pageSize-select"
      ></v-select>
    </v-col>

    <!-- Pagination -->
    <v-col cols="12" sm="6">
      <v-pagination
        v-model="page"
        :length="totalCount"
        :size="mdAndDown ? 'x-small' : 'small'"
        :total-visible="mdAndDown ? 3 : 7"
      ></v-pagination>
    </v-col>
  </v-row>
</v-container>
</template>
<script setup lang="ts">
const props = defineProps({
  totalCount: {
    type: Number,
    required: true
  }
});

const pageSize = defineModel('pageSize', {
  type: Number,
  default: 10
})

const page = defineModel('page', {
  type: Number,
  default: 1
})

const { mdAndDown } = useDisplay();
</script>
<style scoped>
.pageSize-select {
  max-width: 85px;
  min-width: 50px;
}
</style>