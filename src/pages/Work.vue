<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/composables/projects.ts'
import { isMobile } from '@/composables/isMobile.ts'
import { Routes } from '@/router/routes.ts'
import router from '@/router'

const height = `${(window.innerHeight * 2) / 3}px
`
</script>

<template>
  <div v-if="isMobile">
    <v-container>
      <v-row>
        <v-col v-for="(work, i) in projects" :key="i" cols="12" md="3">
          <ProjectCard
            :title="work.title"
            :imageFolder="`work/${work.title}`"
            :image="work.mainImage"
            @click="
              () =>
                router.push({
                  name: Routes.Project,
                  params: { project: work.title }
                })
            "
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else :style="height">
    <v-row no-gutters>
      <v-col v-for="(work, i) in projects" :key="i" cols="3">
        <div>
          <ProjectCard
            :title="work.title"
            :imageFolder="`work/${work.title}`"
            :image="work.mainImage"
            @click="
              () =>
                router.push({
                  name: Routes.Project,
                  params: { project: work.title }
                })
            "
          />
        </div>
      </v-col>
    </v-row>
  </div>
  <v-container class="home-text mt-6">
    <h1>Persoonlijk stedebouwkundig bureau voor opgaves in stad en land,</h1>
    <h1>veelzijdig door kennis, ervaring en netwerk.</h1>
  </v-container>
</template>
