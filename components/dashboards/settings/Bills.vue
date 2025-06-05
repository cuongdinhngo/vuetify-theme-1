<template>
  <v-container>
    <!-- Billing Information Section -->
    <v-row>
      <v-col cols="12" md="10" class="mx-auto">
        <v-card variant="elevated" elevation="3" rounded="md" class="pa-2">
          <v-card-title class="text-h5 my-4">Billing Information</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Business Name*</div>
                <v-text-field
                  density="compact"
                  placeholder="Your name"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Business Sector*</div>
                <v-text-field
                  density="compact"
                  placeholder="Email address"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Business Address*</div>
                <v-text-field
                  density="compact"
                  placeholder="Email address"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Country*</div>
                <v-text-field
                  density="compact"
                  placeholder="Phone number"
                  prepend-inner-icon="mdi-phone-outline"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">First Name*</div>
                <v-text-field
                  density="compact"
                  placeholder="Email address"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Last Name*</div>
                <v-text-field
                  density="compact"
                  placeholder="Phone number"
                  prepend-inner-icon="mdi-phone-outline"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Payment Method Section -->
     <v-row class="mt-7">
      <v-col cols="12" md="10" class="mx-auto">
        <v-card variant="elevated" elevation="3" rounded="md" class="pa-2 mt-4">
          <v-card-title class="text-h5 my-4">Payment Method</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Card Number*</div>
                <v-text-field
                  density="compact"
                  placeholder="Card number"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Expiry Date*</div>
                <v-text-field
                  density="compact"
                  placeholder="MM/YY"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">CVV*</div>
                <v-text-field
                  density="compact"
                  placeholder="CVV"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Billing Address*</div>
                <v-text-field
                  density="compact"
                  placeholder="Billing address"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  
    <!-- Save Changes Button -->
    <v-row class="mt-7">
      <v-col cols="12" md="12" class="mx-auto">
        <v-card-actions class="d-flex justify-end">
          <v-btn variant="tonal" rounded="xl" color="primary">Save Changes</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-col-xxl-auto, .v-col-xxl-12, .v-col-xxl-6, .v-col-xl,
.v-col-xl-auto, .v-col-xl-12, .v-col-xl-6, .v-col-lg,
.v-col-lg-auto, .v-col-lg-12, .v-col-lg-6, .v-col-md,
.v-col-md-auto, .v-col-md-12, .v-col-md-6, .v-col-sm,
.v-col-sm-auto, .v-col-sm-12, .v-col-sm-6, .v-col,
.v-col-auto, .v-col-12, .v-col-6 {
  padding: 0 12px !important;
}
</style>