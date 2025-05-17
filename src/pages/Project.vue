<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectText from '@/components/ProjectText.vue'
import Flipbook from '@/components/Flipbook.vue'
import Page from '@/components/Page.vue'
import CoverImage from '@/components/CoverImage.vue'
import { projects } from '@/composables/projects'
import { isMobile } from '@/composables/isMobile'
import { getImageUrl, getVideoUrl } from '@/composables/getSrcURL'
import { computed, onUpdated, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps({
  projectName: { type: String, required: true }
})

const marginBottom = 'mb-6'
const marginFooter = isMobile ? 'mx-2' : ''

const projectIndex = computed(() =>
  projects.findIndex((project) => project.urlTitle === props.projectName)
)
const project = computed(() => projects[projectIndex.value])

const imageRef = ref(null)
const { width, height } = useElementSize(imageRef)

const flipBookImagesUrl = computed(() =>
  project.value?.flipbookImages?.map((image: string) =>
    getImageUrl(image, `work/${project.value.urlTitle}`)
  )
)
const coverImageUrl = getImageUrl(project.value?.coverImage, `work/${project.value.urlTitle}`)

const videoWidth = isMobile ? window.innerWidth - 40 : 800
const videoHeight = isMobile ? videoWidth * 0.56 : 450

onUpdated(() => window.scrollTo(0, 0))
</script>

<template>
  <div>
    <CoverImage
      :images="[coverImageUrl]"
      :title="project?.title"
      :class="isMobile ? 'mb-2' : 'mb-8'"
    />
    <Page>
      <template #text>
        <ProjectText
          :subtitle="project?.subTitle"
          :text="project?.text"
          :link="project?.link"
          :linkText="project?.linkText"
          :audio="project?.music"
        />
      </template>
      <template #image>
        <div>
          <v-row :class="marginBottom"
            ><v-img ref="imageRef" :src="getImageUrl(project?.image, `work/${project.urlTitle}`)"
          /></v-row>
          <v-row v-if="project?.video" :class="marginBottom"
            ><video :width="videoWidth" :height="videoHeight" controls>
              <source :src="getVideoUrl(project.video)" type="video/mp4" />
              Uw browser ondersteunt het video element niet.
            </video></v-row
          >
          <v-row v-if="project?.flipbookImages" :class="marginBottom"
            ><Flipbook :pages="flipBookImagesUrl" :imageHeight="height" :imageWidth="width"
          /></v-row>
        </div>
      </template>
      <template #footer
        ><v-row :class="marginFooter"><Sharing /></v-row>
        <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row
      ></template>
    </Page>
  </div>
</template>
