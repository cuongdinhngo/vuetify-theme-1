<template>
    <v-layout>
      <!--Chat List Drawer-->
      <v-navigation-drawer
        v-model="chatListDrawer"
        app
        width="300"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-text-field
          prepend-inner-icon="mdi-magnify"
          placeholder="Search"
          width="90%"
          class="mx-auto"
        ></v-text-field>

        <v-list density="compact" nav>
          <v-list-item
            v-if="status === 'success'"
            v-for="chat in chatData.list"
            :key="chat.id"
          >
            <template v-slot:prepend>
              <NuxtLink :to="{ name: 'dashboards-chat', query: { id: chat.id } }" class="mr-4">
                <v-badge color="success" dot v-if="chat.isOnline">
                  <v-avatar :image="chat.avatar"></v-avatar>
                </v-badge>
                <v-avatar v-else :image="chat.avatar"></v-avatar>
              </NuxtLink>
            </template>

            <NuxtLink :to="{ name: 'dashboards-chat', query: { id: chat.id } }">
              <v-list-item-title class="font-weight-bold">{{ chat.fullName }}</v-list-item-title>
              <v-list-item-subtitle>{{ chat.lastMessage }}</v-list-item-subtitle>
            </NuxtLink>

            <template v-slot:append>
              <span class="text-caption">{{ chat.lastMessageTime }}</span>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-card>
          <v-card-title>
            <!--App Bar Nav of Chat List drawer-->
            <div
              class="text-center"
              v-if="$vuetify.display.smAndDown"
            >
              <v-app-bar-nav-icon
                @click="chatListDrawer = !chatListDrawer"
              ></v-app-bar-nav-icon>
              <v-divider></v-divider>
            </div>

            <!-- Chat Header-->
            <div class="d-flex align-center py-2">
              <v-list-item>
                <template v-slot:prepend>
                  <v-badge color="success" dot>
                    <v-avatar :image="'https://randomuser.me/api/portraits/lego/2.jpg'"></v-avatar>
                  </v-badge>
                </template>
                <div v-if="$vuetify.display.smAndUp">
                  <v-list-item-title>Adam Johnso</v-list-item-title>
                  <v-list-item-subtitle>adam.johnson@gmailcom</v-list-item-subtitle>
                </div>
              </v-list-item>

              <v-spacer></v-spacer>

              <div class="chat-header-actions">
                <v-btn
                  icon="mdi-video"
                  elevation="0"
                  variant="flat"
                ></v-btn>
                <v-btn
                  icon="mdi-phone"
                  elevation="0"
                  variant="flat"
                ></v-btn>
              </div>
              <v-app-bar-nav-icon
                @click="mediaDrawer = !mediaDrawer"
                v-if="$vuetify.display.smAndUp"
                app
              ></v-app-bar-nav-icon>
              <v-btn
                v-else
                @click="mediaDrawer = !mediaDrawer"
                icon="mdi-dots-vertical"
                variant="text"
              ></v-btn>
            </div>
            <v-divider></v-divider>
          </v-card-title>

          <!-- Chat Media history-->
          <v-layout>
            <v-navigation-drawer
              location="right"
              v-model="mediaDrawer"
            >
              <v-expansion-panels variant="accordion">
                <!-- Media files-->
                <v-expansion-panel title="Media (5)" elevation="0">
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col
                        v-for="(media, index) in [1, 2, 3, 4, 5]"
                        :key="index"
                        cols="12"
                        md="6"
                        class="d-flex justify-center"
                      >
                        <v-img
                          :src="`https://picsum.photos/200?random=${media}`"
                          width="200"
                          height="100"
                          class="mx-2"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- Attached files-->
                <v-expansion-panel title="Attached files (5)" elevation="0">
                  <v-expansion-panel-text>
                    <v-list density="comfortable" nav slim>
                      <v-list-item
                        v-for="(file, index) in ['Document.pdf', 'Image.png', 'Video.mp4']"
                        :key="index"
                        :title="file"
                        prepend-icon="mdi-file-document"
                      >
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-navigation-drawer>

            <v-main>
              <!-- Chat Messages-->
              <v-card-text>
                <v-list
                  density="comfortable"
                  nav
                  class="chat-messages"
                >
                  <v-virtual-scroll
                    v-if="status === 'success'"
                    :items="chatData.messages"
                    height="500"
                    item-height="80"
                  >
                    <template v-slot:default="{ item: chat }">
                      <v-list-item
                        :class="chat.senderId === 9999 ? 'justify-end' : 'justify-start'"
                      >
                        <template v-slot:prepend v-if="chat.senderId !== 9999">
                          <v-avatar image="https://randomuser.me/api/portraits/lego/3.jpg"></v-avatar>
                        </template>
                        <v-list-item-title
                          class="text-none bg-grey-darken-1 text-white px-3 py-2 rounded-lg"
                        >{{ chat.content }}</v-list-item-title>
                      </v-list-item>
                    </template>
                  </v-virtual-scroll>
                </v-list>
              </v-card-text>

              <!-- Chat Input-->
              <v-card-actions class="">
                <v-text-field
                  placeholder="Type your message..."
                  variant="text"
                  hide-details
                ></v-text-field>

                <v-btn
                  icon="mdi-paperclip"
                  variant="text"
                ></v-btn>
                <v-btn
                  icon="mdi-emoticon"
                  variant="text"
                ></v-btn>
              </v-card-actions>
            </v-main>
          </v-layout>
        </v-card>
      </v-main>
    </v-layout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Chat Dashboard',
  meta: [
    { name: 'description', content: 'Manage your chat settings and view chat history.' },
    { name: 'keywords', content: 'chat, dashboard, settings, history' }
  ]
});

import { useRouteQuery } from '@vueuse/router'

const chatListDrawer = ref(true);
const mediaDrawer = ref(false);
const accountId = useRouteQuery('id', 9999, {transform: Number});

const { getChatWithLastMessage, getMessagesByAccountId } = useAccounts();

const { data:chatData, error, status } = useAsyncData(
  'chat-app', async() => {
    const [ list, messages ] = await Promise.all([
      getChatWithLastMessage(),
      getMessagesByAccountId(accountId.value)
    ]);

    return {
      list,
      messages
    }
  }
);

console.log('Chat Data:', chatData.value);
</script>
<style scoped>
.justify-end {
  justify-content: flex-end;
  display: flex;
}
.justify-start {
  justify-content: flex-start;
  display: flex;
}
</style>
