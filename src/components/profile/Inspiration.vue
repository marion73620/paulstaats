<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { ref } from 'vue'
import { getImageUrl } from '@/composables/getSrcURL'

const dialog = ref(false)
</script>

<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="i in 12" :key="i" cols="12" md="3">
          <ProjectCard
            title="Under construction"
            imageFolder="inspiration"
            image="0-BPVelpNoord.png"
            @click="() => (dialog = true)"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="80vw">
      <v-img :src="getImageUrl('0-BPVelpNoord.png', 'inspiration')" />
    </v-dialog>
  </div>
</template>
