<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      variant="tonal"
      icon
      size="small"
      :class="{'bg-primary': !isHovering}"
      v-bind="props"
    >
      <v-icon :color="isHovering ? 'primary' : 'white'">mdi-account</v-icon>
    </v-btn>
  </v-hover>
</template>