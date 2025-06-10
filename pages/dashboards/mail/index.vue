<template>
  <v-layout>
    <!-- Left Drawer -->
    <v-navigation-drawer
      v-model="menuDrawer"
      app
      width="200"
      color="white"
      class="d-sm-block"
    >
      <div class="d-flex justify-center my-4">
        <v-btn
          color="primary"
        >Compose
        </v-btn>
      </div>

      <v-list density="compact" nav slim>
        <v-list-item
          v-for="(item, index) in ['Inbox', 'Sent', 'Drafts', 'Spam', 'Trash']"
          :key="index"
          link
          class="d-flex align-center"
        >
          <template #prepend>
            <v-icon>{{ index === 0 ? 'mdi-inbox' : index === 1 ? 'mdi-send' : index === 2 ? 'mdi-file-document' : index === 3 ? 'mdi-alert-octagon' : 'mdi-delete' }}</v-icon>
          </template>
          <v-list-title class="ml-2 text-subtitle-2">{{ item }}</v-list-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list density="compact" nav slim>
        <v-list-subheader class="text-subtitle-2 text-grey-darken-3">Sort by</v-list-subheader>
        <v-list-item
          v-for="(label, index) in ['Star', 'Important']"
          :key="index"
          link
          class="d-flex align-center"
        >
          <template #prepend>
            <v-icon>{{ index === 0 ? 'mdi-briefcase' : index === 1 ? 'mdi-account' : index === 2 ? 'mdi-star' : 'mdi-account-group' }}</v-icon>
          </template>
          <v-list-title class="ml-2 text-subtitle-2">{{ label }}</v-list-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list density="compact" nav slim>
        <v-list-subheader class="text-subtitle-2 text-grey-darken-3">Labels</v-list-subheader>
        <v-list-item
          v-for="(label, index) in ['Work', 'Personal', 'Promotions', 'Social']"
          :key="index"
          link
          class="d-flex align-center"
        >
          <template #prepend>
            <v-icon>{{ index === 0 ? 'mdi-briefcase' : index === 1 ? 'mdi-account' : index === 2 ? 'mdi-star' : 'mdi-account-group' }}</v-icon>
          </template>
          <v-list-title class="ml-2 text-subtitle-2">{{ label }}</v-list-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content/ Email list -->
    <v-main class="d-flex justify-center bg-white" min-height="600">
      <v-container>
        <div :class="['text-center', 'pb-4', $vuetify.display.smAndDown ? 'd-xm-block' : 'd-sm-none']">
          <v-btn color="primary" @click="menuDrawer = !menuDrawer" prepend-icon="mdi-menu" class="text-none">
            Email Category
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <v-text-field
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            clearable
            hide-details
            density="compact"
            placeholder="Search emails"
          ></v-text-field>
        </div>

        <!-- Email List -->
        <div class="email-list mt-4">
          <v-virtual-scroll
            v-if="status === 'success'"
            :items="emails"
            height="600"
          >
            <template #default="{ item: email }">
              <div class="email-item" @click="rightDrawer = !rightDrawer">
                <div class="item-header d-flex align-center">
                  <v-checkbox hide-details density="comfortable"></v-checkbox>
                  <span class="text-subtitle-2 font-weight-bold text-grey-darken-1">{{ email.fullName }}</span>
                  <v-chip color="primary" size="small" class="ml-auto">{{ email.label }}</v-chip>
                </div>
                <div class="item-content text-grey-darken-1 pl-9">
                  <p class="text-caption text-truncate">{{ email.content }}</p>
                </div> 
                <div class="item-footer d-flex align-center pl-8 pr-2">
                  <v-rating clearable :active-color="email.isStar ? 'amber-accent-3' : ''" size="small" length="1"></v-rating>
                  <span class="text-caption ml-auto text-grey-darken-1">{{ useDateFormat(email.created_at, 'MMM, DD YYYY') }}</span>
                </div>
              </div>
            </template>
          </v-virtual-scroll>
        </div>
      </v-container>
    </v-main>

    <!-- Right Drawer/ Email content -->
    <v-navigation-drawer
      v-model="rightDrawer"
      app
      location="right"
      :width="smAndUp ? '600' : '290'"
      color="white"
    >
      <div class="content-header-actions bg-white d-flex ga-1 align-center">
        <v-rating clearable :active-color="true ? 'amber-accent-3' : ''" length="1"></v-rating>
        <v-btn icon color="transparent" :elevation="0">
          <v-icon color="primary">{{ true ? 'mdi-lightbulb' : 'mdi-lightbulb-outline'}}</v-icon>
        </v-btn>
        <v-btn icon color="transparent" :elevation="0">
          <v-icon color="secondary">mdi-delete-outline</v-icon>
        </v-btn>
      </div>

      <v-divider></v-divider>

      <div class="content-body bg-white">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/lego/2.jpg"
          title="John Doe"
          subtitle="john.doe@local.test"
          class="py-4"
        >
          <template #append>
            <v-chip color="primary" size="small">Promotions</v-chip>
          </template>
        </v-list-item>
        <v-card tile class="my-2" color="white" elevation="0">
          <v-card-title class="text-h6">Email Subject</v-card-title>
          <v-card-text>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div class="mt-4">
              <v-divider></v-divider>
              <p class="text-subtitle-2 text-grey-darken-3 py-3">Attachments</p>
              <div class="d-flex pb-3">
                <v-list-item
                  v-for="(attachment, index) in ['file1.pdf', 'image2.png', 'document3.docx']"
                  :key="index"
                  slim
                >
                  <template #prepend>
                    <v-avatar size="32">
                      <v-icon color="primary">mdi-attachment</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="ml-2 text-subtitle-2">{{ attachment }}</v-list-item-title>
                  <v-list-item-subtitle class="ml-2 text-caption text-grey-darken-1">2 MB</v-list-item-subtitle>
                </v-list-item>
              </div>
              <v-divider></v-divider>
            </div>
          </v-card-text>

          <v-card-actions class="justify-end">
            <v-btn color="primary" class="mr-2" prepend-icon="mdi-reply">Reply</v-btn>
            <v-btn color="primary" prepend-icon="mdi-forward">Forward</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Mail',
});

import { useDisplay } from 'vuetify'

const menuDrawer = ref(false);
const rightDrawer = ref(false);
const { smAndUp } = useDisplay();

const { getMails } = useMails();

const { data:emails, error, status } = useAsyncData(
  'mails',
  () => getMails()
);

watch(
  smAndUp,
  (val) => {
    menuDrawer.value = val;
    rightDrawer.value = val;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.email-item:hover {
  background-color: #f0f3f7;
}
</style>