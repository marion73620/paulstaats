<script setup lang="ts">
import location from '@/assets/images/contact/LocatiekaartAtelierGiesbeek.jpg'
import CoverImage from '@/components/CoverImage.vue'
import { computed } from 'vue'
import { isMobile } from '@/composables/isMobile'
import dnrPdf from '@/assets/documents/DNR-2025.pdf'
import '@/assets/css/contact.scss'

const classes = computed(() => (isMobile ? 'flex-column align-start ml-4' : 'justify-space-around'))
const bottomMargins = computed(() => (isMobile ? 'mb-4' : ''))
</script>

<template>
  <div>
    <CoverImage :images="[location]" class="mb-4" />
    <div class="d-flex contact-grid" :class="classes">
      <div :class="bottomMargins">
        <h2 class="mb-2">Bureau</h2>
        <div>Veerpolderstraat 52</div>
        <div>6833 BR Arnhem</div>
      </div>
      <div :class="bottomMargins">
        <h2 class="mb-2">Bezoekadres</h2>
        <div>Uitmeentsestraat 9</div>
        <div>6887 CX Giesbeek</div>
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
      <div :class="[bottomMargins, 'dnr-block']">
        We voeren onze diensten en werkzaamheden uit volgens De Nieuwe Regeling 2025 (DNR 2025). De DNR zijn algemene branchevoorwaarden voor ontwerpen, adviseren en organiseren voor de gebouwde omgeving voor opdrachtgever en -nemer. De DNR is een gezamenlijk initiatief van de Bond van Nederlandse Architecten en NLingenieurs.
        <br />
        Klik op <a :href="dnrPdf" target="_blank" rel="noopener noreferrer"><strong>deze link</strong></a> om De Nieuwe Regeling 2025 in PDF-formaat te openen in uw browser.
      </div>
    </div>
  </div>
</template>
