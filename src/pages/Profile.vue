<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { profileNav } from '@/composables/navigation'
import contact from '@/assets/images/profile/contactPss.png'
import bouwers from '@/assets/images/profile/foto stedebouwers.png'
import weusthag from '@/assets/images/profile/Weusthagstr3-.jpg'
import boot from '@/assets/images/profile/pss_in_boot.jpg'
import CoverImage from '@/components/CoverImage.vue'
import { isMobile } from '@/composables/isMobile'

const props = defineProps({
  content: { type: String }
})

const tab = ref(0)

const getComponent = (component: Component | undefined) => {
  return props.content
    ? profileNav.find((nav) => nav.title === props.content)?.component
    : component
}
</script>

<template>
  <div class="profile-page">
    <CoverImage :images="[boot, contact, bouwers, weusthag]" />
    <v-container>
      <v-tabs v-if="!isMobile" slider-color="primary" v-model="tab" align-tabs="center" show-arrows>
        <v-tab v-for="({ title }, i) in profileNav" :key="i" :value="i">{{ title }}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="({ component }, i) in profileNav"
          :key="i"
          :value="i"
          :transition="false"
        >
          <Component :is="getComponent(component)" />
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>
