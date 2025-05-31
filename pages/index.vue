<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4" lg="3">
        <v-card elevation="1">
          <v-img 
            :src="getRandomImage()" 
            height="200"
            cover
          ></v-img>
          <v-card-title>Product {{ n }}</v-card-title>
          <v-card-text>Placeholder for product details</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const imageFiles = [
  'car1.webp',
  'car2.webp',
  'car3.webp',
  'car4.webp',
]

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imageFiles.length)
  return `/imgs/${imageFiles[randomIndex]}`
}
</script>