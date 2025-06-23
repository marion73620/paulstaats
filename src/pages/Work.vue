<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { workNav } from '@/composables/navigation'
import router from '@/router'
import { Routes } from '@/router/routes'

</script>

<template>
        <v-container>
          <v-row>
            <v-col
              v-for="(work, i) in workNav"
              :key="i"
              cols="12"
              md="6"
            >
              <ProjectCard
                :title="work.title"
                imageFolder="work"
                :image="work.image"
                @click="
                  () =>
                    router.push({
                      name: Routes.Project,
                      params: { workName: work.title }
                    })
                "
              />
            </v-col>
          </v-row>
        </v-container>
</template>
