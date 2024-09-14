<script setup lang="ts">
import location from '@/assets/images/contact/locatieWeusthagschool.jpg'
import CoverImage from '@/components/CoverImage.vue'
import { computed } from 'vue'
import { isMobile } from '@/composables/isMobile'

const classes = computed(() => (isMobile ? 'flex-column align-start ml-4' : 'justify-space-around'))
const bottomMargins = computed(() => (isMobile ? 'mb-4' : ''))
</script>

<template>
  <div>
    <CoverImage :images="[location]" class="mb-4" />
    <div class="d-flex" :class="classes">
      <div :class="bottomMargins">
        <h2 class="mb-2">Bureau</h2>
        <div>Marten van Rossemstraat 15</div>
        <div>6821 BA Arnhem</div>
      </div>
      <div :class="bottomMargins">
        <h2 class="mb-2">Bezoekadres</h2>
        <div>Weusthagstraat 3</div>
        <div>7556 ZA Hengelo (O)</div>
      </div>
      <div :class="bottomMargins">
        <div class="mb-2">
          <v-icon class="mr-2" icon="mdi-at"></v-icon>
          <a href="mailto:info@paulstaats.com">info@paulstaats.com</a>
        </div>
        <div class="mb-2">
          <v-icon class="mr-2" icon="mdi-phone"></v-icon>
          <a href="tel:0031621816847">06 218 168 47</a>
        </div>
        <div>
          <v-icon class="mr-2" icon="mdi-web"></v-icon>
          <a>www.paulstaats.com</a>
        </div>
      </div>
      <div :class="bottomMargins">
        <div class="mb-1">Architectenregister: 2.960301.002</div>
        <div class="mb-1">KvK Arnhem: 61719951</div>
        <div class="mb-1">ING: NL 27 INGB 0666 2788 57</div>
        <div>BTW id: NL 001477655 B72</div>
      </div>
      <div>Op een opdracht is de DNR 2011 van toepassing</div>
    </div>
  </div>
</template>
