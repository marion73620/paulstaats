<script setup lang="ts">
import { getImageUrl } from '@/composables/getSrcURL'

defineEmits(['click'])

defineProps({
  modelValue: { type: Boolean, default: false },
  image: { type: String }, //, required: true },
  imageFolder: { type: String}, //, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props" class="project-card" @click="$emit('click')">
        <v-card-item>
          <v-img :src="image ?? getImageUrl(image, imageFolder)"></v-img>
        </v-card-item>
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-overlay
          :v-model="isHovering"
          contained
          scrim="transparent"
          class="align-center justify-center"
        >
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>
