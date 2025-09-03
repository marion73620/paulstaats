<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/themeStore'
import { isMobile } from '@/composables/isMobile'
import Navigation from '@/components/navigation/Navigation.vue'
import MobileNavigation from '@/components/navigation/MobileNavigation.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  const themeStore = useThemeStore()
  const theme = useTheme()
  themeStore.dark ? theme.change('dark') : theme.change('light')
})
</script>

<template>
  <v-app>
    <v-main class="bg-background">
      <MobileNavigation v-if="isMobile" />
      <Navigation v-else />
      <router-view v-slot="{ Component }">
        <transition name="slider">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <Footer v-if="isMobile" />
  </v-app>
</template>
