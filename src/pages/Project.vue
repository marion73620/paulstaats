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
const project = computed(() =>  projects[projectIndex.value])

const coverImageUrl = computed(() =>
  getImageUrl(project.value?.coverImage, `work/${project.value.title}`)
)

const tab = ref(project?.value.subjects[0].title)

const activeSubject = computed(() => project.value.subjects.find((subj) => subj.title == tab.value))

const showFlipbook = (item: Subject | undefined) => {
  // console.log(item)
  if (item?.images) {
    return item.images.length > 1
  } else {
    return false
  }
}

const imageRef = ref(null)
const { width, height } = useElementSize(imageRef)

// Need the image to get a ref for the Flipbook
// const imgHeight = computed(() => (showFlipbook(activeSubject.value) ? '0' : ''))
const imgHeight = ''

const flipBookImages = computed(() =>
  activeSubject.value?.images?.map((image: string) => {
    return getImageUrl(image, `work/${project.value.title}`)
  })
)

onUpdated(() => {
  // Needed when switching to a new project or reload page. Otherwise no tab is selected
  tab.value = project.value.subjects[0].title
})

const tabSwitched = () => {
  // console.log('tabSwitched')
}
</script>

<template>
  <div class="project-page">
    <CoverImage
      :images="[coverImageUrl]"
      :title="project?.title"
      :subTitle="project?.subtitle"
      :class="isMobile ? 'mb-2' : 'mb-8'"
    />
    <div v-if="isMobile">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="item in project?.subjects"
          :key="item.title"
          :title="item.title"
        ><v-expansion-panel-text >
          <div class="d-flex justify-center align-center">
          <v-img
            width="80vw"
            :height="imgHeight"
            ref="imageRef"
            :src="getImageUrl(item.images[0], `work/${project.title}`)"
          />
<!--          <div v-if="showFlipbook(item)">-->
<!--            <Flipbook :pages="flipBookImages" :imageHeight="height" :imageWidth="width" />-->
<!--          </div>-->
          </div>
        </v-expansion-panel-text></v-expansion-panel>
      </v-expansion-panels>
    </div>
      <div v-if="isMobile" class="mx-3">
        <v-row :class="marginFooter"><Sharing /></v-row>
        <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row>
      </div>
    <v-container v-if="!isMobile">
      <div class="d-flex flex-row justify-space-between">
        <v-tabs v-model="tab" color="primary" direction="vertical" :hide-slider="true" :mandatory="true" @update:modelValue="tabSwitched">
          <v-tab v-for="item in project?.subjects" :text="item.title" :value="item.title"></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="item in project?.subjects"
            :key="item.title"
            :value="item.title"
          >
            <div class="ml-10" style="height: 400px">
              <v-img
                width="50vw"
                :height="imgHeight"
                max-height="400"
                ref="imageRef"
                :src="getImageUrl(item.images[0], `work/${project.title}`)"
              />
<!--              <div v-if="showFlipbook(item)">-->
<!--                <Flipbook :pages="flipBookImages" :imageHeight="300" :imageWidth="300" />-->
<!--              </div>-->
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
      <v-row :class="marginFooter"><Sharing /></v-row>
      <v-row :class="marginFooter"><ProjectNavigation :index="projectIndex" /></v-row>
    </v-container>
  </div>
</template>
