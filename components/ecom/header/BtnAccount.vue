<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      variant="tonal"
      color="primary"
      icon
      size="small"
      :class="{ 'bg-primary': isHovering }"
      v-bind="props"
    >
      <v-icon :color="isHovering ? 'white' : 'primary'">mdi-account</v-icon>
    </v-btn>
  </v-hover>
</template>