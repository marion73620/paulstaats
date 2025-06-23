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
  <v-hover class="project-card">
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props" class="project-card" @click="$emit('click')">
        <v-card-item>
          <v-img :src="(image && imageFolder) ? getImageUrl(image, imageFolder) : undefined" class="align-end">
            <v-card-title class="text-black font-weight-bold text-h4 text-uppercase">
              {{ title }}
            </v-card-title>
          </v-img>
        </v-card-item>
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
