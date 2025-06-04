<template>
  <v-menu
  >
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-img
          :src="currentFlag"
          width="35"
          height="35"
          contain
        ></v-img>
      </v-btn>
    </template>
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-list>
        <v-virtual-scroll
          :items="languages"
          height="400"
          item-height="60"
        >
          <template v-slot:default="{ item: lang }">
            <v-list-item
              :key="lang.code"
              @click="currentLanguage = lang.code"
            >
              <template v-slot:prepend>
                <v-img
                  :src="lang.flag"
                  width="35"
                  height="35"
                  contain
                ></v-img>
              </template>
              <v-list-item-title class="ml-2">{{ lang.name }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
const languages = [
  { code: 'gb', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png'  },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'zh', name: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'ja', name: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'hi', name: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'ko', name: '한국어', flag: 'https://flagcdn.com/w40/kr.png' },
  { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/w40/tr.png' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'https://flagcdn.com/w40/vn.png' },
  { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w40/pl.png' }
];

const currentLanguage = ref(languages[0].code);
const currentFlag = computed(() => {
  return languages.find(lang => lang.code === currentLanguage.value)?.flag || languages[0].flag;
});
</script>