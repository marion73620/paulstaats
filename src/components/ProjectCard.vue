<script setup lang="ts">
import { getImageUrl } from '@/composables/getSrcURL'

defineEmits(['click'])

defineProps({
  image: { type: String, required: true },
  imageFolder: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="project-card">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card v-bind="props" class="project-card" @click="$emit('click')">
          <v-card-item style="height: 66vh">
            <v-img
              :src="image && imageFolder ? getImageUrl(image, imageFolder) : undefined"
              class="align-end"
              cover
              height="100%"
            >
              <v-card-title
                v-if="title"
                class="text-black font-weight-bold text-h4 ml-2 text-uppercase"
              >
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
  </div>
</template>
