<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const currentUrl = `https://paulstaats.com${route.fullPath}`
</script>

<template>
  <div class="d-flex py-3 mt-3 project-share">
    Delen:<a :href="`mailto:?subject=Website Paul Staats&body=${currentUrl}`">
      <v-icon icon="mdi-email" class="ml-3" /> </a
    ><a target="_blank" :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`"
      ><v-icon icon="mdi-linkedin" class="ml-3"
    /></a>
  </div>
</template>
