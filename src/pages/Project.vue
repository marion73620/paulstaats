<script setup lang="ts">
import Flipbook from '@/components/Flipbook.vue'
import CoverImage from '@/components/CoverImage.vue'
import { projects, type Subject } from '@/composables/projects'
import { isMobile } from '@/composables/isMobile'
import { getImageUrl } from '@/composables/getSrcURL'
import { computed, onUpdated, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import Sharing from '@/components/Sharing.vue'

const props = defineProps({
  project: { type: String, required: true }
})

const marginFooter = isMobile ? 'mx-2' : 'mt-4'

const projectIndex = computed(() => projects.findIndex((work) => work.title === props.project))
const projectDetails = computed(() => projects[projectIndex.value])

const coverImageUrl = computed(() =>
  getImageUrl(projectDetails.value?.coverImage, `work/${projectDetails.value.title}`)
)

const tab = ref(projectDetails?.value.subjects[0].title)

const showFlipbook = (item: Subject | undefined) => {
  if (item?.images) {
    return item.images.length > 1
  }

  return false
}

const imageRef = ref(null)
const { height } = useElementSize(imageRef)
const flipbookWidth = computed(() => isMobile ? document.documentElement.clientWidth / 1.2 : document.documentElement.clientWidth / 2.5)

const flipBookImages = (item: Subject) => {
  return item.images?.map((image: string) => {
    return getImageUrl(image, `work/${projectDetails.value.title}`)
  })
}

onUpdated(() => {
  // Needed when switching to a new project or reload page. Otherwise, no tab is selected
  tab.value = projectDetails.value.subjects[0].title
})
</script>

<template>
  <div class="project-page">
    <CoverImage
      :images="[coverImageUrl]"
      :title="projectDetails?.title"
      :subTitle="projectDetails?.subtitle"
      :class="isMobile ? 'mb-2' : 'mb-8'"
    />
    <div v-if="isMobile">
      <v-expansion-panels>
        <v-expansion-panel v-for="item in projectDetails?.subjects" :key="item.title" :title="item.title"
          ><v-expansion-panel-text>
            <div class="d-flex justify-center align-center">
              <div v-if="showFlipbook(item)" ref="imageRef">
                <Flipbook
                  :pages="flipBookImages(item)"
                  :imageHeight="height"
                  :imageWidth="flipbookWidth"
                />
              </div>
              <v-img
                v-else
                width="80vw"
                :src="getImageUrl(item.images[0], `work/${project.title}`)"
              />
            </div> </v-expansion-panel-text
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div v-if="isMobile" class="mx-3">
      <v-row :class="marginFooter"><Sharing /></v-row>
      <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row>
    </div>
    <v-container v-if="!isMobile">
      <div class="d-flex flex-row justify-space-between">
        <v-tabs
          v-model="tab"
          color="primary"
          direction="vertical"
          :hide-slider="true"
          :mandatory="true"
        >
          <v-tab v-for="item in projectDetails?.subjects" :key="item.title" :text="item.title" :value="item.title"></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="item in projectDetails?.subjects"
            :key="item.title"
            :value="item.title"
          >
            <div class="ml-10" style="height: 400px">
              <div v-if="showFlipbook(item)" ref="imageRef">
                <Flipbook
                  :pages="flipBookImages(item)"
                  :imageHeight="height"
                  :imageWidth="flipbookWidth"
                />
              </div>
              <v-img
                v-else
                width="50vw"
                max-height="400"
                :src="getImageUrl(item.images[0], `work/${project.title}`)"
              />
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
      <v-row :class="marginFooter"><Sharing /></v-row>
      <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row>
    </v-container>
  </div>
</template>
