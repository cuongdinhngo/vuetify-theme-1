<template>
  <v-container>
    <v-row>
      <!-- Change Profile-->
      <v-col>
        <v-card class="mb-4" :elevation="1">
          <v-card-title><h5>Change Profile</h5></v-card-title>
          <v-card-subtitle>Change your profile picture from here</v-card-subtitle>

          <v-card-text class="text-center">
            <v-avatar
              size="150"
              class="my-6"
              :image="`/images/dashboard/baby-avatar.webp`"
              alt="Profile Picture"
            />
            
            <div class="d-flex justify-center">
              <v-btn prepend-icon="mdi-upload" variant="tonal" rounded="xl" class="me-2" color="primary">Upload</v-btn>
              <v-btn prepend-icon="mdi-refresh" variant="outlined" rounded="xl" color="error">Reset</v-btn>
            </div>

            <p class="mt-5">Allowed JPG, GIF or PNG. Max size of 800K</p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Change Password -->
       <v-col>
        <v-card class="mb-4">
          <v-card-title><h5>Change Password</h5></v-card-title>
          <v-card-subtitle>To change your password please confirm here</v-card-subtitle>
          <v-card-text>
            <v-text-field label="Current Password" variant="outlined"></v-text-field>
            <v-text-field label="New Password" variant="outlined"></v-text-field>
            <v-text-field label="Confirm New Password" variant="outlined"></v-text-field>
            
            <div class="text-right">
              <v-btn
                variant="tonal"
                rounded="xl"
                color="primary"
              >Update Password</v-btn>
            </div>
          </v-card-text>
        </v-card>
       </v-col>
    </v-row>

    <!-- Personal Details -->
    <v-row>
      <v-col>
        <v-card class="mb-4">
          <v-card-title><h5>Personal Details</h5></v-card-title>
          <v-card-subtitle>To change your personal detail , edit and save from here</v-card-subtitle>
          
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Your name</div>
                <v-text-field
                  density="compact"
                  placeholder="Your name"
                  prepend-inner-icon="mdi-account-outline"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Store Name</div>
                <v-text-field
                  density="compact"
                  placeholder="Email address"
                  prepend-inner-icon="mdi-shopping-outline"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Email</div>
                <v-text-field
                  density="compact"
                  placeholder="Email address"
                  prepend-inner-icon="mdi-email-outline"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-subtitle-2 text-medium-emphasis">Phone</div>
                <v-text-field
                  density="compact"
                  placeholder="Phone number"
                  prepend-inner-icon="mdi-phone-outline"
                  variant="outlined"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="text-subtitle-2 text-medium-emphasis">Address</div>
                <v-text-field
                  density="compact"
                  placeholder="Address"
                  prepend-inner-icon="mdi-home-outline"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="d-flex justify-end">
            <v-btn
              variant="tonal"
              rounded="xl"
              color="primary"
            >Update Information</v-btn>
          </v-card-actions>
        </v-card>
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