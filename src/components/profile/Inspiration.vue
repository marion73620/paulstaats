<script setup lang="ts">
import { ref } from 'vue'
import { getImageUrl } from '@/composables/getSrcURL'

const dialog = ref(false)

const inspirations = ['wrekers.png', 'BROADWAY_BOOGIE_WOOGIE_Mondrian_1943.png']

const imageIndex = ref(0)
const cardClicked = (clickedIndex: number): void => {
  imageIndex.value = clickedIndex
  dialog.value = true
}
</script>

<template>
  <div class="inspiration">
    <v-container fluid>
      <v-row>
        <v-col v-for="(ins, i) in inspirations" :key="i" cols="12" md="4">
          <v-card @click="cardClicked(i)">
            <v-card-item>
              <v-img :src="getImageUrl(ins, 'inspiration')"> </v-img>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="80vw">
      <v-img :src="getImageUrl(inspirations[imageIndex], 'inspiration')" />
    </v-dialog>
  </div>
</template>
