<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
import dekkerswald from '@/assets/images/home/dekkerswald.png'
import inrichtingsplan from '@/assets/images/home/inrichtingsplan.png'
import velp from '@/assets/images/home/velp.png'
import terwolde from '@/assets/images/home/terwolde.png'
import snelfietsroute from '@/assets/images/home/snelfietsroute.png'
import { isMobile } from '@/composables/isMobile'
</script>

<template>
  <div>
    <CoverImage
      :images="[dekkerswald, velp, snelfietsroute, terwolde, inrichtingsplan]"
      :class="isMobile ? 'mb-2' : ''"
    />
    <v-container
      ><h1>Persoonlijk stedebouwkundig bureau voor opgaves in stad en land,</h1>
      <h1>veelzijdig door kennis, ervaring en netwerk.</h1>
    </v-container>
  </div>
</template>
